<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

<h1 align="center">Kit Việt - Bộ AI Agent tiếng Việt cho 20 nghề</h1>

<p align="center"><b>Giao việc bằng tiếng Việt, nhận lại file Word, Excel, PDF, PowerPoint đúng thể thức.</b><br>Chạy trên Claude Desktop, Claude Code, Codex, Cursor, GitHub Copilot, Gemini CLI và 20 AI khác.</p>

<p align="center"><img src="https://img.shields.io/badge/gi%E1%BA%A5y%20ph%C3%A9p-MIT-16a34a?style=flat-square" alt="giấy phép: MIT"> <img src="https://img.shields.io/badge/ngh%E1%BB%81-20-D7261E?style=flat-square" alt="nghề: 20"> <img src="https://img.shields.io/badge/skill%20m%E1%BB%97i%20b%E1%BB%99-30%E2%80%9343-F59E0B?style=flat-square" alt="skill mỗi bộ: 30–43"> <img src="https://img.shields.io/badge/n%E1%BB%81n%20t%E1%BA%A3ng-26%20AI-1B1310?style=flat-square" alt="nền tảng: 26 AI"> <img src="https://img.shields.io/badge/ng%C3%B4n%20ng%E1%BB%AF-Ti%E1%BA%BFng%20Vi%E1%BB%87t-DA251D?style=flat-square" alt="ngôn ngữ: Tiếng Việt"></p>

<p align="center"><a href="https://mochistudio.io.vn">mochistudio.io.vn</a> · <a href="#cài-đặt-nhanh">Cài đặt</a> · <a href="#20-bộ-theo-nghề">20 bộ theo nghề</a> · <a href="#bản-pro">Bản Pro</a></p>

## Kit Việt là gì?

Kit Việt không phải kho prompt. Đây là các **quy trình nghề đóng gói sẵn** cho người đi làm ở Việt Nam. Mỗi bộ gồm:

- **Skill (cách làm):** mỗi skill là một việc cụ thể như đối chiếu công nợ, lập dự toán, soạn hợp đồng hay viết JD. Bạn nói việc bình thường, AI tự chọn đúng skill. Tên skill có tiền tố `kv:`, ví dụ `kv:viet-bao-cao`.
- **Trợ lý (agent) có khóa quyền:** mỗi trợ lý giữ một vai.
  - *Thu thập* chỉ đọc và tra cứu.
  - *Thực thi* soạn bản nháp và ghi file.
  - *Gác cổng* chỉ được báo lỗi, không được sửa thay.
  - *Điều phối* lập kế hoạch và kiểm định bàn giao.
- **Luồng việc nối tiếp:** mỗi skill kết thúc bằng gợi ý bước kế tiếp, nên các việc nối thành chuỗi cố định.
- **Xuất file:** Word, Excel, PDF và PowerPoint trình bày sẵn, như công văn, tờ trình, bảng lương, báo cáo, slide họp.
- **Chống bịa và bảo mật:** có skill kiểm tra chống bịa số liệu, skill che thông tin nhạy cảm, và trợ lý soát bảo mật trước khi bạn dán dữ liệu vào AI.

## 20 bộ theo nghề

Mỗi bộ có 30–43 skill (gồm 18 kỹ năng nền dùng chung) và 12–15 trợ lý. Mở `HUONG-DAN.html` của từng nghề để xem hướng dẫn có hình và ví dụ thật.

| Nghề | Skill | Trợ lý | Luồng | Tên để cài | Hướng dẫn |
|---|:-:|:-:|:-:|---|---|
| **Kế toán - Thuế**<br><sub>Đối chiếu nhanh, số liệu có nguồn, không bịa một đồng - để kế toán ký với cái đầu nhẹ.</sub> | 40 | 14 | 6 | `kv-ke-toan@kitviet`<br>`kitviet init ke-toan` | [Hướng dẫn](ke-toan/HUONG-DAN.html) · [README](ke-toan/README.md) |
| **Nhân sự - Tuyển dụng**<br><sub>Tuyển đúng người, đối xử công bằng, giữ kín dữ liệu - từ JD tới ngày làm việc cuối.</sub> | 35 | 13 | 5 | `kv-nhan-su@kitviet`<br>`kitviet init nhan-su` | [Hướng dẫn](nhan-su/HUONG-DAN.html) · [README](nhan-su/README.md) |
| **Marketing - Content**<br><sub>Ra nội dung đủ kênh mỗi tuần, đúng giọng thương hiệu, không dính claim cấm.</sub> | 43 | 15 | 6 | `kv-marketing@kitviet`<br>`kitviet init marketing` | [Hướng dẫn](marketing/HUONG-DAN.html) · [README](marketing/README.md) |
| **Bán hàng online - Thương mại điện tử**<br><sub>Lên sản phẩm chuẩn sàn, tính giá không lỗ, chăm khách không hứa quá - bằng tiếng Việt, theo đúng cách shop Việt đang bán.</sub> | 36 | 14 | 5 | `kv-ban-hang-online@kitviet`<br>`kitviet init ban-hang-online` | [Hướng dẫn](ban-hang-online/HUONG-DAN.html) · [README](ban-hang-online/README.md) |
| **Kinh doanh B2B - Chăm sóc khách hàng**<br><sub>Chốt deal nhanh hơn mà không hứa thứ chưa được duyệt.</sub> | 33 | 14 | 5 | `kv-kinh-doanh@kitviet`<br>`kitviet init kinh-doanh` | [Hướng dẫn](kinh-doanh/HUONG-DAN.html) · [README](kinh-doanh/README.md) |
| **Giáo viên - Đào tạo**<br><sub>Bớt giấy tờ, thêm thời gian cho học trò - giáo án, đề, nhận xét đúng chuẩn mà không lộ dữ liệu của trẻ.</sub> | 39 | 15 | 4 | `kv-giao-duc@kitviet`<br>`kitviet init giao-duc` | [Hướng dẫn](giao-duc/HUONG-DAN.html) · [README](giao-duc/README.md) |
| **Xây dựng - Kỹ sư công trường**<br><sub>Hồ sơ công trường đúng sự thật, khối lượng có công thức, an toàn không bị bỏ sót.</sub> | 43 | 13 | 7 | `kv-xay-dung@kitviet`<br>`kitviet init xay-dung` | [Hướng dẫn](xay-dung/HUONG-DAN.html) · [README](xay-dung/README.md) |
| **Y tế - Phòng khám, Điều dưỡng, Quản lý y tế**<br><sub>Bớt giấy tờ, thêm thời gian cho người bệnh - AI lo phần hành chính, chuyên môn vẫn do người có chứng chỉ quyết.</sub> | 34 | 14 | 5 | `kv-y-te@kitviet`<br>`kitviet init y-te` | [Hướng dẫn](y-te/HUONG-DAN.html) · [README](y-te/README.md) |
| **Môi giới bất động sản**<br><sub>Tin đăng đúng sổ, phương án vay đủ cả giai đoạn thả nổi, pháp lý hỏi đúng chỗ - bán nhanh mà không mất uy tín.</sub> | 36 | 14 | 5 | `kv-bat-dong-san@kitviet`<br>`kitviet init bat-dong-san` | [Hướng dẫn](bat-dong-san/HUONG-DAN.html) · [README](bat-dong-san/README.md) |
| **Pháp chế - Văn phòng luật**<br><sub>Rà hợp đồng kỹ hơn, soạn văn bản nhanh hơn - và không bao giờ bịa một số điều luật.</sub> | 38 | 15 | 5 | `kv-phap-ly@kitviet`<br>`kitviet init phap-ly` | [Hướng dẫn](phap-ly/HUONG-DAN.html) · [README](phap-ly/README.md) |
| **Hành chính - Văn phòng**<br><sub>Văn bản đúng thể thức, lịch sếp không trùng, chi phí có báo giá - để phòng hành chính chạy êm mà không ai phải nhắc.</sub> | 38 | 14 | 5 | `kv-hanh-chinh-van-phong@kitviet`<br>`kitviet init hanh-chinh-van-phong` | [Hướng dẫn](hanh-chinh-van-phong/HUONG-DAN.html) · [README](hanh-chinh-van-phong/README.md) |
| **Xuất nhập khẩu - Logistics**<br><sub>Chứng từ khớp từng con số, mã HS có căn cứ, cước so trên cùng mặt bằng - để lô hàng thông quan không phải chờ.</sub> | 32 | 12 | 5 | `kv-xuat-nhap-khau@kitviet`<br>`kitviet init xuat-nhap-khau` | [Hướng dẫn](xuat-nhap-khau/HUONG-DAN.html) · [README](xuat-nhap-khau/README.md) |
| **Nhà hàng - F&B**<br><sub>Giá vốn tính từ hóa đơn thật, dị ứng ghi đúng từng món - để quán đông khách mà vẫn có lời.</sub> | 31 | 12 | 5 | `kv-nha-hang-fnb@kitviet`<br>`kitviet init nha-hang-fnb` | [Hướng dẫn](nha-hang-fnb/HUONG-DAN.html) · [README](nha-hang-fnb/README.md) |
| **Du lịch - Khách sạn**<br><sub>Lịch trình chạy được, báo giá cộng đúng, trả lời khách đúng mực - giá vé và giờ mở cửa luôn được xác nhận trước khi gửi.</sub> | 33 | 13 | 5 | `kv-du-lich-khach-san@kitviet`<br>`kitviet init du-lich-khach-san` | [Hướng dẫn](du-lich-khach-san/HUONG-DAN.html) · [README](du-lich-khach-san/README.md) |
| **Tài chính - Ngân hàng**<br><sub>Số có nguồn, công thức minh bạch, lời tư vấn không hứa suông - để người làm ngân hàng trình hồ sơ và gặp khách với cái đầu vững.</sub> | 34 | 13 | 5 | `kv-tai-chinh-ngan-hang@kitviet`<br>`kitviet init tai-chinh-ngan-hang` | [Hướng dẫn](tai-chinh-ngan-hang/HUONG-DAN.html) · [README](tai-chinh-ngan-hang/README.md) |
| **Tư vấn bảo hiểm**<br><sub>Tư vấn đúng nhu cầu, số quyền lợi có trang tài liệu, không một lời hứa sai - để khách tin bạn lâu dài.</sub> | 30 | 12 | 5 | `kv-bao-hiem@kitviet`<br>`kitviet init bao-hiem` | [Hướng dẫn](bao-hiem/HUONG-DAN.html) · [README](bao-hiem/README.md) |
| **Công nghệ thông tin - Phần mềm**<br><sub>Yêu cầu rõ, test đủ, log có bằng chứng, báo cáo trung thực - để đội phần mềm giao hàng mà không phải đoán.</sub> | 36 | 14 | 5 | `kv-cong-nghe-thong-tin@kitviet`<br>`kitviet init cong-nghe-thong-tin` | [Hướng dẫn](cong-nghe-thong-tin/HUONG-DAN.html) · [README](cong-nghe-thong-tin/README.md) |
| **Báo chí - Truyền thông - PR**<br><sub>Nhanh nhưng không sai: mỗi con số có nguồn, mỗi trích dẫn đúng lời, mỗi bài qua hai lớp gác cổng.</sub> | 32 | 13 | 5 | `kv-bao-chi-truyen-thong@kitviet`<br>`kitviet init bao-chi-truyen-thong` | [Hướng dẫn](bao-chi-truyen-thong/HUONG-DAN.html) · [README](bao-chi-truyen-thong/README.md) |
| **Học thuật - Nghiên cứu**<br><sub>Tài liệu có thật, dữ liệu là của bạn, chữ là của bạn - AI chỉ giúp bạn làm nghiên cứu chắc tay hơn.</sub> | 35 | 14 | 5 | `kv-hoc-thuat-nghien-cuu@kitviet`<br>`kitviet init hoc-thuat-nghien-cuu` | [Hướng dẫn](hoc-thuat-nghien-cuu/HUONG-DAN.html) · [README](hoc-thuat-nghien-cuu/README.md) |
| **Sản xuất - Nhà máy**<br><sub>Số ca đúng, lỗi tìm tới gốc, an toàn nêu trước - để nhà máy chạy bằng dữ liệu thật chứ không bằng báo cáo đẹp.</sub> | 33 | 13 | 5 | `kv-san-xuat-nha-may@kitviet`<br>`kitviet init san-xuat-nha-may` | [Hướng dẫn](san-xuat-nha-may/HUONG-DAN.html) · [README](san-xuat-nha-may/README.md) |

## Cài đặt nhanh

Có 3 cách. Chọn cách hợp với nơi bạn dùng AI.

### Cách 1: Claude Code Marketplace (2 lệnh)

Gõ trong Claude Code:

```text
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-ke-toan@kitviet
```

Thay `ke-toan` bằng nghề của bạn, xem tên ở bảng [20 bộ theo nghề](#20-bộ-theo-nghề), ví dụ `kv-xay-dung@kitviet` hay `kv-y-te@kitviet`. Cài xong gõ `/kv:` để xem skill. Cập nhật bằng `/plugin marketplace update kitviet`.

> Nếu báo lỗi *Host key verification failed*, dùng địa chỉ HTTPS: `/plugin marketplace add https://github.com/mochistudio-vn/kitviet.git`. Trên Windows mà báo *Filename too long* thì chạy một lần `git config --global core.longpaths true`.

### Cách 2: CLI `kitviet` (khuyên dùng)

Cần Node.js 18 trở lên. Chạy thẳng, không cần cài:

```bash
npx github:mochistudio-vn/kitviet init ke-toan --ai claude
```

Hoặc cài CLI cho cả máy rồi dùng lệnh `kitviet`:

```bash
npm install -g github:mochistudio-vn/kitviet

kitviet init ke-toan --ai claude         # Claude Code -> ~/.claude/skills/kv
kitviet init ke-toan --ai cursor         # Cursor -> ./.cursor/skills
kitviet init ke-toan --ai codex,gemini   # nhiều AI một lần
kitviet init ke-toan nhan-su --ai copilot # nhiều nghề
kitviet init                             # không ghi gì: hiện menu chọn nghề, tự nhận biết AI
```

Hỗ trợ 26 nền tảng. Skill cài vào thư mục dự án đang mở; thêm `--global` để cài cho cả máy (vào thư mục người dùng `~`). Các AI ngoài Claude Code đều dùng chuẩn Agent Skills (`kv-<tên>/SKILL.md`).

| `--ai` | Nền tảng | Thư mục cài |
|---|---|---|
| `claude` | Claude Code | `~/.claude/skills/kv` |
| `codex` | Codex CLI | `.agents/skills` |
| `desktop` | Claude Desktop / claude.ai | `KitViet/<nghề>` |
| `cursor` | Cursor | `.cursor/skills` |
| `windsurf` | Windsurf | `.windsurf/skills` |
| `antigravity` | Antigravity | `.agents/skills` |
| `copilot` | GitHub Copilot | `.github/skills` |
| `kiro` | Kiro | `.kiro/steering` |
| `qoder` | Qoder | `.qoder/skills` |
| `roocode` | Roo Code | `.roo/skills` |
| `gemini` | Gemini CLI | `.gemini/skills` |
| `trae` | Trae | `.trae/skills` |
| `opencode` | OpenCode | `.opencode/skills` |
| `continue` | Continue | `.continue/skills` |
| `codebuddy` | CodeBuddy | `.codebuddy/skills` |
| `droid` | Droid (Factory) | `.factory/skills` |
| `kilocode` | KiloCode | `.kilocode/skills` |
| `warp` | Warp | `.warp/skills` |
| `augment` | Augment | `.augment/skills` |
| `codewhale` | CodeWhale | `.codewhale/skills` |
| `zcode` | ZCode | `.zcode/skills` |
| `kimi` | Kimi Code | `.kimi-code/skills` |
| `amazonq` | Amazon Q Developer | `.amazonq/rules` |
| `openclaw` | OpenClaw | `.agents/skills` |
| `autoclaw` | AutoClaw | `skills` (`--global`: `~/.openclaw-autoclaw/skills`) |
| `universal` | Universal / Agent Standard | `.agents/skills` |

Codex cài thêm trợ lý vào `.codex/agents`. Claude Desktop nhận file zip để tải lên (Customize → Skills). `--ai all` cài cho tất cả nền tảng.

Lệnh khác:

```bash
kitviet list                  # danh sách nghề
kitviet versions              # phiên bản đang dùng
kitviet update                # cài lại các bộ đã cài bằng phiên bản CLI hiện tại
kitviet init ... --dry-run    # xem trước sẽ chép gì, không ghi file
kitviet platforms             # danh sách nền tảng và thư mục cài
kitviet uninstall             # gỡ khỏi mọi nền tảng đã cài
kitviet uninstall --ai cursor
```

Muốn dùng đúng một phiên bản: `npx github:mochistudio-vn/kitviet#v1.5.0 init ...`.

### Cách 3: Cài thủ công

Tải repo về (**Code → Download ZIP**) rồi giải nén. Mỗi thư mục nghề có sẵn 3 bản cho 3 nền tảng.

**Claude Desktop / claude.ai:**

1. Vào **Customize → Skills**. Cần gói trả phí và bật Code execution.
2. Bấm **Upload skill**, chọn các file `kv-<tên>.zip` trong `<nghề>/claude-web/`. Mỗi file là một skill.
3. Bật skill vừa tải, rồi gõ việc bằng tiếng Việt, hoặc gọi thẳng "Dùng skill kv-<tên> để ...".

**Claude Code:** copy `<nghề>/claude-code/kv` vào `~/.claude/skills/`, mở lại Claude Code, gõ `/kv:`. Dùng nhiều nghề thì copy đè vào cùng thư mục `kv`.

**ChatGPT Codex:** copy `<nghề>/codex/.agents/skills/*` vào `~/.agents/skills/` và `<nghề>/codex/.codex/agents/*` vào `~/.codex/agents/`. Trong Codex gõ `/skills`, gọi skill bằng `$kv-<tên>`.

> Muốn xuất file bằng script trên Claude Code hoặc Codex thì cài thêm: `pip install python-docx openpyxl python-pptx reportlab`.

## Ví dụ

```text
Làm giúp bảng lương tháng 10 từ file cham-cong-t10.csv. Tỷ lệ bảo hiểm và giảm trừ
lấy theo bảng tham số trong CLAUDE.md của tôi. Xuất ra Excel.
```

Claude tự gọi `kv:tinh-luong-thue-tncn-bhxh`, đưa bảng tham số ra để bạn duyệt, kiểm chéo tổng thu nhập, che tên và số tài khoản, rồi xuất file `.xlsx`. Xem thêm ví dụ trên Claude Desktop, Claude Code và Codex trong `HUONG-DAN.html` của từng nghề.

## Bản Pro

Mỗi nghề có bản **Pro**:

| | Free | Pro |
|---|---|---|
| Skill | Skill nghề + 18 kỹ năng nền | **Gần gấp đôi**, thêm việc chuyên sâu của nghề |
| Trong từng skill | Làm trọn việc chính | **Phần nâng cao:** mẫu biểu, bảng tra, script |
| Dây chuyền nhiều trợ lý | 1 dây chuyền | **3 dây chuyền**, có điều phối song song |
| Xuất file | Trình bày chuẩn | **Theo mẫu thương hiệu riêng** (logo, màu, header) |
| Cập nhật theo quy định mới | Cộng đồng | **Ưu tiên** |

Mỗi skill Free đều có mục **"Bản Pro có thêm"** ở cuối file `SKILL.md` để bạn xem trước bản Pro làm được gì. Liên hệ nâng cấp: **[mochistudio.io.vn](https://mochistudio.io.vn/sources/kit-viet-pro-vinh-vien)**

## Cộng đồng

Góp ý, báo lỗi, chia sẻ cách dùng: **[mochistudio.io.vn](https://mochistudio.io.vn)**. Bạn cũng có thể mở Issue ngay trong repo này.

Ba nguyên tắc khi dùng:

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký hoặc nộp.
2. **Không để AI tự gửi thay bạn.** Bộ kit chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam`.

---

<p align="center"><b>Kit Việt</b> là sản phẩm của <a href="https://mochistudio.io.vn"><b>MochiStudio</b></a> · <a href="https://mochistudio.io.vn">mochistudio.io.vn</a><br>Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.</p>

<p align="center"><sub>Kit Việt là sản phẩm độc lập, không liên kết với Anthropic hay OpenAI. Claude là nhãn hiệu của Anthropic. ChatGPT và Codex là nhãn hiệu của OpenAI.</sub></p>
