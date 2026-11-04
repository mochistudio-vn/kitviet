#!/usr/bin/env node
// Kit Việt CLI: cài bộ skill + trợ lý theo nghề vào Claude Code, Codex, Cursor, Copilot, Gemini CLI và các AI theo chuẩn Agent Skills.
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
// Danh sách nền tảng sinh từ tools/lib/ai-platforms.mjs khi build.
const PLATFORMS = Object.fromEntries(META.nen_tang.map(p => [p.id, p]));
const AIS = Object.keys(PLATFORMS);
// Thư mục dùng chung cho nhiều công cụ (.github, .agents, skills) không đủ để đoán AI nào đang dùng.
const SHARED_ROOTS = new Set(['.github', '.agents', 'skills']);

const HELP = `${META.brand} ${META.version} - bộ AI Agent tiếng Việt cho ${META.nghe.length} nghề (${META.website})

Cách dùng:
  kitviet init [nghề...] [--ai <nền tảng>[,...]|all] [--global] [--dry-run]
  kitviet list                      Danh sách nghề
  kitviet platforms                 Danh sách nền tảng và thư mục cài
  kitviet update [--dry-run]        Cài lại các bộ đã cài bằng phiên bản CLI hiện tại
  kitviet uninstall [--ai ...] [--global]
  kitviet versions                  Phiên bản đang dùng

Nền tảng (--ai): ${AIS.join(', ')}, all
  Cài vào thư mục dự án đang mở; thêm --global để cài vào thư mục người dùng (~).
  Claude Code luôn cài cho cả máy (~/.claude/skills/kv). Xem đủ thư mục: kitviet platforms
Không ghi --ai: tự nhận biết AI có trên máy và trong dự án, không có thì làm gói Claude Desktop.

Ví dụ:
  kitviet init ke-toan --ai claude
  kitviet init ke-toan --ai cursor
  kitviet init ke-toan nhan-su --ai codex,gemini --global
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
  for (const a of o.ai) if (!AIS.includes(a)) die(`--ai "${a}" không hợp lệ. Chọn: ${AIS.join(', ')}, all (xem: kitviet platforms)`);
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

function detectAi(cwd) {
  const found = [];
  if (fs.existsSync(path.join(HOME, '.claude'))) found.push('claude');
  if (fs.existsSync(path.join(HOME, '.codex')) || fs.existsSync(path.join(cwd, '.codex'))) found.push('codex');
  for (const p of Object.values(PLATFORMS)) {
    if (p.kind !== 'skills' && p.kind !== 'rules') continue;
    const root = p.dir.split('/')[0];
    if (!SHARED_ROOTS.has(root) && fs.existsSync(path.join(cwd, root))) found.push(p.id);
  }
  return found.length ? found : ['desktop'];
}

/** Thư mục skill của một nền tảng: trong dự án, hoặc trong thư mục người dùng khi --global. */
function targetDir(p, global, cwd) {
  return global ? path.join(HOME, p.globalDir || p.dir) : path.join(cwd, p.dir);
}

/** Danh sách thao tác chép cho một nghề trên một nền tảng. */
function plan(slug, ai, global, cwd) {
  const src = path.join(ROOT, slug);
  const skills = path.join(src, 'codex', '.agents', 'skills');
  const p = PLATFORMS[ai];
  if (p.kind === 'claude') {
    return [{ from: path.join(src, 'claude-code', 'kv'), to: path.join(HOME, '.claude', 'skills', 'kv') }];
  }
  if (p.kind === 'codex') {
    const base = global ? HOME : cwd;
    return [
      { from: skills, to: path.join(base, '.agents', 'skills') },
      { from: path.join(src, 'codex', '.codex', 'agents'), to: path.join(base, '.codex', 'agents') },
    ];
  }
  if (p.kind === 'skills') return [{ from: skills, to: targetDir(p, global, cwd) }];
  if (p.kind === 'rules') return [{ from: skills, to: targetDir(p, global, cwd), rules: true }];
  const out = path.join(global ? path.join(HOME, 'Downloads') : cwd, 'KitViet', slug);
  return [
    { from: path.join(src, 'claude-web'), to: out },
    { from: path.join(src, 'HUONG-DAN.html'), to: path.join(out, 'HUONG-DAN.html'), file: true },
  ];
}

/**
 * Amazon Q đọc từng file .md trong .amazonq/rules: mỗi skill thành kv-<tên>.md,
 * file kèm theo (references/, scripts/...) để trong kv-<tên>/ và sửa đường dẫn trỏ tới.
 */
function writeRules(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const name of fs.readdirSync(from)) {
    const dir = path.join(from, name);
    const extra = fs.readdirSync(dir).filter(f => f !== 'SKILL.md');
    let md = fs.readFileSync(path.join(dir, 'SKILL.md'), 'utf8');
    for (const sub of extra) md = md.replace(new RegExp(`(^|[\\s(\`'"])${sub}/`, 'g'), `$1${name}/${sub}/`);
    fs.writeFileSync(path.join(to, `${name}.md`), md);
    for (const sub of extra) fs.cpSync(path.join(dir, sub), path.join(to, name, sub), { recursive: true, force: true });
  }
}

function apply(steps, dry) {
  for (const s of steps) {
    if (dry) { console.log(`   [thử] chép ${path.relative(ROOT, s.from)} -> ${rel(s.to)}`); continue; }
    if (s.rules) writeRules(s.from, s.to);
    else if (s.file) { fs.mkdirSync(path.dirname(s.to), { recursive: true }); fs.copyFileSync(s.from, s.to); }
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
  const cwd = o.cwd || process.cwd();
  const ais = o.ai.length ? o.ai : detectAi(cwd);
  const st = readState();

  for (const slug of nghe) {
    console.log(`== ${tenOf(slug)}`);
    const done = new Set(); // nhiều AI dùng chung .agents/skills: chỉ chép một lần
    for (const ai of ais) {
      const steps = plan(slug, ai, o.global, cwd);
      apply(steps.filter(s => !done.has(s.to)), o.dry);
      steps.forEach(s => done.add(s.to));
      if (!quiet) console.log(`   ${PLATFORMS[ai].ten.padEnd(26)} -> ${rel(steps[0].to)}`);
      const rec = { nghe: slug, ai, global: ai === 'claude' || o.global, cwd: ai === 'claude' || o.global ? null : cwd };
      st.installs = st.installs.filter(r => !(r.nghe === rec.nghe && r.ai === rec.ai && r.global === rec.global && r.cwd === rec.cwd));
      st.installs.push(rec);
    }
  }
  if (o.dry) { console.log('\n(Chạy thử, chưa ghi file nào.)'); return; }
  st.version = META.version;
  saveState(st);

  console.log('\nXong. Mở lại AI vừa cài để nạp skill, rồi giao việc bằng tiếng Việt.');
  if (ais.includes('claude')) console.log('  Claude Code: gõ /kv: để xem skill.');
  if (ais.includes('codex')) console.log('  Codex: gõ /skills, gọi skill bằng $kv-<tên>.');
  if (ais.some(a => PLATFORMS[a].kind === 'skills' || PLATFORMS[a].kind === 'rules')) console.log('  AI khác: skill tên kv-<tên>. AI tự chọn theo việc bạn giao, hoặc nói "dùng skill kv-<tên> để ...".');
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
  const st = readState();
  // Không ghi --ai: gỡ khỏi Claude Code, Codex và mọi nền tảng đã cài bằng kitviet.
  const ais = o.ai.length ? o.ai : [...new Set(['claude', 'codex', ...st.installs.map(r => r.ai)])];
  const cwd = process.cwd();
  const base = o.global ? HOME : cwd;
  const seen = new Set();
  const removeFrom = (ten, dir, test) => {
    if (seen.has(dir)) return;
    seen.add(dir);
    const n = o.dry ? 0 : removeKv(dir, test);
    console.log(`${ten}: đã gỡ ${n} mục kv-* trong ${rel(dir)}`);
  };
  for (const ai of ais) {
    const p = PLATFORMS[ai];
    if (p.kind === 'claude') {
      const d = path.join(HOME, '.claude', 'skills', 'kv');
      if (!o.dry) fs.rmSync(d, { recursive: true, force: true });
      console.log(`${p.ten}: đã gỡ ${rel(d)}`);
    } else if (p.kind === 'codex') {
      removeFrom(p.ten, path.join(base, '.agents', 'skills'), f => f.startsWith('kv-'));
      removeFrom(p.ten, path.join(base, '.codex', 'agents'), f => f.startsWith('kv-') && f.endsWith('.toml'));
    } else if (p.kind === 'desktop') {
      console.log(`${p.ten}: xóa thư mục KitViet và tắt các skill kv-* trong Customize -> Skills.`);
    } else {
      removeFrom(p.ten, targetDir(p, o.global, cwd), f => f.startsWith('kv-'));
    }
  }
  if (!o.dry) {
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
  case 'platforms':
    for (const p of Object.values(PLATFORMS)) console.log(`  ${p.id.padEnd(12)} ${p.ten.padEnd(28)} ${p.dir}${p.globalDir ? `  (--global: ~/${p.globalDir})` : ''}`);
    break;
  case 'update': await update(o); break;
  case 'uninstall': uninstall(o); break;
  case 'versions': console.log(`${META.brand} ${META.version}\nBản khác: npx github:${META.repo}#v<phiên bản> init ...`); break;
  case 'help': console.log(HELP); break;
  default: die(`Không có lệnh "${o.cmd}". Xem: kitviet --help`);
}
