#!/usr/bin/env node
// Kit Việt CLI: cài bộ skill + trợ lý theo nghề vào Claude Code, ChatGPT Codex hoặc chuẩn bị gói cho Claude Desktop.
// Không phụ thuộc gói ngoài. Dữ liệu bộ kit nằm ngay trong package (các thư mục nghề cạnh thư mục cli/).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import readline from 'node:readline/promises';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const META = JSON.parse(fs.readFileSync(path.join(ROOT, 'cli', 'nghe.json'), 'utf8'));
const HOME = path.resolve(process.env.KITVIET_HOME || os.homedir());
const STATE_FILE = path.join(HOME, '.kitviet.json');
const AIS = ['claude', 'codex', 'desktop'];

const HELP = `${META.brand} ${META.version} - bộ AI Agent tiếng Việt cho ${META.nghe.length} nghề (${META.website})

Cách dùng:
  kitviet init [nghề...] [--ai claude|codex|desktop|all] [--global] [--dry-run]
  kitviet list                      Danh sách nghề
  kitviet update [--dry-run]        Cài lại các bộ đã cài bằng phiên bản CLI hiện tại
  kitviet uninstall [--ai ...] [--global]
  kitviet versions                  Phiên bản đang dùng

Nền tảng (--ai):
  claude    Claude Code: ~/.claude/skills/kv (plugin kv, gọi /kv:<tên>). Luôn cài cho cả máy.
  codex     ChatGPT Codex: ./.agents/skills + ./.codex/agents (thêm --global để cài vào thư mục người dùng)
  desktop   Claude Desktop / claude.ai: chép file zip skill ra ./KitViet/<nghề> (--global: ~/Downloads/KitViet)
  all       Cả ba
Không ghi --ai: tự nhận biết Claude Code / Codex trên máy, không có thì làm desktop.

Ví dụ:
  kitviet init ke-toan --ai claude
  kitviet init ke-toan nhan-su --ai codex --global
  kitviet init --all --ai desktop --dry-run`;

function parse(argv) {
  const o = { cmd: argv[0] || 'help', nghe: [], ai: [], global: false, dry: false, all: false };
  for (let i = 1; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--ai') o.ai.push(...String(argv[++i] || '').split(','));
    else if (a.startsWith('--ai=')) o.ai.push(...a.slice(5).split(','));
    else if (a === '--global' || a === '-g') o.global = true;
    else if (a === '--dry-run') o.dry = true;
    else if (a === '--all') o.all = true;
    else if (a === '-h' || a === '--help') o.cmd = 'help';
    else if (a.startsWith('-')) die(`Không hiểu tùy chọn ${a}. Xem: kitviet --help`);
    else o.nghe.push(a);
  }
  if (o.cmd === '--help' || o.cmd === '-h') o.cmd = 'help';
  if (o.cmd === '--version' || o.cmd === '-v') o.cmd = 'versions';
  o.ai = o.ai.map(s => s.trim().toLowerCase()).filter(Boolean);
  if (o.ai.includes('all')) o.ai = [...AIS];
  for (const a of o.ai) if (!AIS.includes(a)) die(`--ai "${a}" không hợp lệ. Chọn: ${AIS.join(', ')}, all`);
  return o;
}

function die(msg) { console.error(`Lỗi: ${msg}`); process.exit(1); }
const tenOf = slug => META.nghe.find(n => n.slug === slug)?.ten;
const rel = p => p.startsWith(HOME) ? '~' + p.slice(HOME.length) : p;

async function pickNghe() {
  if (!process.stdin.isTTY) die('Chưa chọn nghề. Ví dụ: kitviet init ke-toan   (xem: kitviet list)');
  console.log('Chọn nghề (gõ số, cách nhau bằng dấu cách, hoặc "all"):');
  META.nghe.forEach((n, i) => console.log(`  ${String(i + 1).padStart(2)}. ${n.ten}`));
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  const ans = (await rl.question('> ')).trim();
  rl.close();
  if (ans === 'all') return META.nghe.map(n => n.slug);
  return ans.split(/[\s,]+/).map(x => META.nghe[Number(x) - 1]?.slug).filter(Boolean);
}

function detectAi() {
  const found = [];
  if (fs.existsSync(path.join(HOME, '.claude'))) found.push('claude');
  if (fs.existsSync(path.join(HOME, '.codex'))) found.push('codex');
  return found.length ? found : ['desktop'];
}

/** Danh sách thao tác chép cho một nghề trên một nền tảng. */
function plan(slug, ai, global, cwd) {
  const src = path.join(ROOT, slug);
  if (ai === 'claude') {
    return [{ from: path.join(src, 'claude-code', 'kv'), to: path.join(HOME, '.claude', 'skills', 'kv') }];
  }
  if (ai === 'codex') {
    const base = global ? HOME : cwd;
    return [
      { from: path.join(src, 'codex', '.agents', 'skills'), to: path.join(base, '.agents', 'skills') },
      { from: path.join(src, 'codex', '.codex', 'agents'), to: path.join(base, '.codex', 'agents') },
    ];
  }
  const out = path.join(global ? path.join(HOME, 'Downloads') : cwd, 'KitViet', slug);
  return [
    { from: path.join(src, 'claude-web'), to: out },
    { from: path.join(src, 'HUONG-DAN.html'), to: path.join(out, 'HUONG-DAN.html'), file: true },
  ];
}

function apply(steps, dry) {
  for (const s of steps) {
    if (dry) { console.log(`   [thử] chép ${path.relative(ROOT, s.from)} -> ${rel(s.to)}`); continue; }
    if (s.file) { fs.mkdirSync(path.dirname(s.to), { recursive: true }); fs.copyFileSync(s.from, s.to); }
    else { fs.mkdirSync(s.to, { recursive: true }); fs.cpSync(s.from, s.to, { recursive: true, force: true }); }
  }
}

function readState() { try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return { installs: [] }; } }
function saveState(st) { fs.writeFileSync(STATE_FILE, JSON.stringify(st, null, 2) + '\n'); }

async function init(o, { quiet = false } = {}) {
  let nghe = o.all ? META.nghe.map(n => n.slug) : o.nghe;
  if (!nghe.length) nghe = await pickNghe();
  if (!nghe.length) die('Chưa chọn nghề nào.');
  for (const s of nghe) if (!tenOf(s)) die(`Không có nghề "${s}". Xem: kitviet list`);
  const ais = o.ai.length ? o.ai : detectAi();
  const cwd = o.cwd || process.cwd();
  const st = readState();

  for (const slug of nghe) {
    console.log(`== ${tenOf(slug)}`);
    for (const ai of ais) {
      const steps = plan(slug, ai, o.global, cwd);
      apply(steps, o.dry);
      if (!quiet) console.log(`   ${ai.padEnd(7)} -> ${rel(steps[0].to)}`);
      const rec = { nghe: slug, ai, global: ai === 'claude' || o.global, cwd: ai === 'claude' || o.global ? null : cwd };
      st.installs = st.installs.filter(r => !(r.nghe === rec.nghe && r.ai === rec.ai && r.global === rec.global && r.cwd === rec.cwd));
      st.installs.push(rec);
    }
  }
  if (o.dry) { console.log('\n(Chạy thử, chưa ghi file nào.)'); return; }
  st.version = META.version;
  saveState(st);

  console.log('\nXong. Mở lại Claude Code / Codex để nạp skill.');
  if (ais.includes('claude')) console.log('  Claude Code: gõ /kv: để xem skill.');
  if (ais.includes('codex')) console.log('  Codex: gõ /skills, gọi skill bằng $kv-<tên>.');
  if (ais.includes('desktop')) console.log('  Claude Desktop: Customize -> Skills -> Upload skill, chọn các file zip vừa chép.');
  console.log('  Xuất Word/Excel/PDF/PowerPoint bằng script: pip install python-docx openpyxl python-pptx reportlab');
  console.log(`  Hướng dẫn và hỗ trợ: ${META.website}`);
}

function removeKv(dir, test) {
  if (!fs.existsSync(dir)) return 0;
  let n = 0;
  for (const f of fs.readdirSync(dir)) if (test(f)) { fs.rmSync(path.join(dir, f), { recursive: true, force: true }); n++; }
  return n;
}

function uninstall(o) {
  const ais = o.ai.length ? o.ai : ['claude', 'codex'];
  const base = o.global ? HOME : process.cwd();
  if (ais.includes('claude')) {
    const d = path.join(HOME, '.claude', 'skills', 'kv');
    if (!o.dry) fs.rmSync(d, { recursive: true, force: true });
    console.log(`Claude Code: đã gỡ ${rel(d)}`);
  }
  if (ais.includes('codex')) {
    const n = o.dry ? 0 : removeKv(path.join(base, '.agents', 'skills'), f => f.startsWith('kv-'))
      + removeKv(path.join(base, '.codex', 'agents'), f => f.startsWith('kv-') && f.endsWith('.toml'));
    console.log(`Codex: đã gỡ ${n} mục kv-* trong ${rel(base)}`);
  }
  if (ais.includes('desktop')) console.log('Desktop: xóa thư mục KitViet và tắt các skill kv-* trong Customize -> Skills.');
  if (!o.dry) {
    const st = readState();
    st.installs = st.installs.filter(r => !ais.includes(r.ai));
    saveState(st);
  }
}

async function update(o) {
  const st = readState();
  if (!st.installs.length) die('Chưa có bộ nào được cài bằng kitviet. Dùng: kitviet init <nghề>');
  console.log(`Cài lại ${st.installs.length} mục bằng ${META.brand} ${META.version} (đã cài: ${st.version || '?'}).`);
  for (const r of st.installs) {
    await init({ nghe: [r.nghe], ai: [r.ai], global: r.global, cwd: r.cwd || process.cwd(), dry: o.dry, all: false }, { quiet: true });
  }
}

const o = parse(process.argv.slice(2));
switch (o.cmd) {
  case 'init': await init(o); break;
  case 'list': META.nghe.forEach(n => console.log(`  ${n.slug.padEnd(22)} ${n.ten}`)); break;
  case 'update': await update(o); break;
  case 'uninstall': uninstall(o); break;
  case 'versions': console.log(`${META.brand} ${META.version}\nBản khác: npx github:${META.repo}#v<phiên bản> init ...`); break;
  case 'help': console.log(HELP); break;
  default: die(`Không có lệnh "${o.cmd}". Xem: kitviet --help`);
}
