<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Báo chí - Truyền thông - PR - Bản Free

> Nhanh nhưng không sai: mỗi con số có nguồn, mỗi trích dẫn đúng lời, mỗi bài qua hai lớp gác cổng.

Bộ skill và agent tiếng Việt cho phóng viên, biên tập viên, chuyên viên PR và người làm podcast/video tin tức: kiểm chứng tin lan truyền đa nguồn, nghiên cứu đề tài theo bậc nguồn, đề cương điều tra, câu hỏi phỏng vấn, gỡ băng thành bài, viết tin kim tự tháp ngược, tít-sapo, thông cáo, kế hoạch truyền thông, kịch bản khủng hoảng, điểm báo, Q&A họp báo. Mạng xã hội chỉ là manh mối; không bịa nhân vật; bảo vệ nguồn tin; AI soạn và soát, tổng biên tập hoặc lãnh đạo duyệt và đăng.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 32 | 13 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Phóng viên, cộng tác viên báo chí · Biên tập viên, thư ký tòa soạn · Chuyên viên PR, truyền thông doanh nghiệp và agency · Người làm podcast, video tin tức

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-bao-chi-truyen-thong@kitviet

# Hoặc dùng CLI (cần Node.js 18+): --ai claude, codex, cursor, copilot, gemini, windsurf... (kitviet platforms)
npx github:mochistudio-vn/kitviet init bao-chi-truyen-thong --ai claude
```

Cài thủ công từng nền tảng như dưới đây.

### 1. Claude Desktop và Claude web (chat, Cowork) - dễ nhất

1. Vào claude.ai hoặc ứng dụng Claude Desktop -> **Customize -> Skills** (cần gói Pro trở lên, bật Code execution).
2. Bấm **Upload skill**, chọn từng file trong thư mục `claude-web/` (mỗi file `kv-<tên>.zip` là một skill).
3. Bật công tắc skill vừa tải. Nên tải 5-7 skill bạn dùng nhiều nhất trước.
4. Gọi: nói việc bình thường, hoặc "Dùng skill kv-<tên> để ...". Claude web không có agent: các dây chuyền sẽ chạy kiểu đóng vai lần lượt trong cùng cuộc trò chuyện.

### 2. Claude Code (dòng lệnh, hoặc tab Code trong Claude Desktop) - đầy đủ nhất

1. Mở thư mục `claude-code/` trong bộ này, thấy thư mục `kv`.
2. Copy nguyên thư mục `kv` vào `C:\Users\<tên bạn>\.claude\skills\` (Windows) hoặc `~/.claude/skills/` (macOS/Linux). Kết quả: `.claude/skills/kv/.claude-plugin/plugin.json`.
3. Mở lại Claude Code (hoặc gõ `/reload-plugins`). Gõ `/kv:` để thấy danh sách skill.
4. Đã cài bộ nghề khác? Copy đè vào cùng thư mục `kv`, các bộ tự gộp. Bản Pro copy đè lên bản Free.

### 3. ChatGPT Codex (CLI, IDE, app)

1. Copy các thư mục trong `codex/.agents/skills/` vào `~/.agents/skills/` (dùng mọi nơi) hoặc `<thư mục làm việc>/.agents/skills/`.
2. Copy các file `.toml` trong `codex/.codex/agents/` vào `~/.codex/agents/`.
3. Copy `codex/AGENTS-mau.md` ra thư mục làm việc, đổi tên thành `AGENTS.md`, điền thông tin của bạn.
4. Mở Codex, gõ `/skills` để kiểm tra, gọi bằng `$kv-<tên>` hoặc nói việc bình thường.

Tên gọi theo nền tảng: Claude Code dùng `kv:<tên>`, Claude web và Codex dùng `kv-<tên>` (hai nền tảng này không cho dấu `:` trong tên).

## Gặp việc gì thì gọi cái gì

### Kiểm chứng và nghiên cứu

| Việc của bạn | Gọi |
|---|---|
| Fact-check tin, phát ngôn, ảnh/clip lan truyền bằng nhiều nguồn độc lập, ra kết luận có bậc nguồn | `kv:kiem-chung-thong-tin-da-nguon` |
| Lập hồ sơ tư liệu đề tài từ nguồn chính thức, số liệu, chuyên gia; ra danh sách bên cần hỏi | `kv:nghien-cuu-de-tai-bao-chi` |
| Đề cương điều tra, phóng sự: giả thuyết, bằng chứng cần thu, nhân vật, lộ trình, rủi ro | `kv:de-cuong-bai-dieu-tra-phong-su` |

### Phỏng vấn và viết bài

| Việc của bạn | Gọi |
|---|---|
| Bộ câu hỏi phỏng vấn có câu bám, câu khó, thứ tự hỏi, lưu ý nhân vật dễ tổn thương | `kv:bo-cau-hoi-phong-van-bao-chi` |
| Biến bản gỡ băng thành bài hỏi-đáp hoặc bài viết, giữ nguyên trích dẫn, có phụ lục mốc giờ | `kv:go-bang-phong-van-thanh-bai` |
| Viết tin, bài theo kim tự tháp ngược kèm bảng nguồn từng dữ kiện | `kv:viet-tin-kim-tu-thap-nguoc` |
| Nhiều phương án tít, sapo đúng sự thật, không giật tít; tít SEO và mạng xã hội | `kv:bien-tap-tit-sapo` |
| Soát đạo văn, trích dẫn, nhân vật, nguồn tin, đời tư, suy đoán vô tội trước khi đăng | `kv:soat-dao-van-dao-duc-bai-bao` |

### PR và truyền thông doanh nghiệp

| Việc của bạn | Gọi |
|---|---|
| Thông cáo báo chí chuẩn tòa soạn, trích dẫn lãnh đạo chờ duyệt, phụ lục nguồn số liệu | `kv:viet-thong-cao-bao-chi` |
| Kế hoạch truyền thông trước-trong-sau sự kiện, phân công, ngân sách, rủi ro | `kv:ke-hoach-truyen-thong-su-kien` |
| Phân cấp khủng hoảng, tuyên bố ban đầu, thông điệp nhất quán, kế hoạch theo kênh | `kv:kich-ban-xu-ly-khung-hoang-truyen-thong` |
| Theo dõi tin về tổ chức, đối thủ, ngành; bảng điểm báo có sắc thái và việc cần xử lý | `kv:diem-bao-theo-doi-tin-tuc` |
| Bộ Q&A cho người phát ngôn: câu dễ, khó, bẫy, hướng trả lời có dữ kiện, điều không được nói | `kv:hoi-dap-chuan-bi-hop-bao` |

### Dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Ra bài đã kiểm chứng: tra nguồn -> viết -> gác cổng sự thật và pháp lý-đạo đức -> bàn giao | `kv:day-chuyen-bai-bao-kiem-chung` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Soát số bịa, trích dẫn không nguồn trước khi gửi bài, thông cáo | `kv:kiem-tra-chong-bia` |
| Khung nghiên cứu nguồn uy tín dùng chung cho mọi đề tài | `kv:nghien-cuu-nguon-uy-tin` |
| Che danh tính nguồn tin, nạn nhân, dữ liệu cá nhân trước khi đưa tư liệu vào AI | `kv:an-thong-tin-nhay-cam` |
| Email mời phóng viên, gửi câu hỏi phỏng vấn, xin phản hồi | `kv:viet-email` |
| Xuất bài, thông cáo, kịch bản ra file Word | `kv:xuat-word` |
| Xuất kế hoạch truyền thông ra slide trình duyệt | `kv:xuat-pptx` |
| Xuất bảng điểm báo, lịch triển khai, ngân sách ra Excel | `kv:xuat-excel` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dieu-phoi-day-chuyen` | Giao thức chạy Kit Việt cho việc nhiều khâu - lập kế hoạch, thu thập, soạn, gác cổng QUA/CHẶN, bàn giao trong .kv-run/. Dùng khi nói "chạy dây chuyền", "làm từ A đến Z", "đọc rồi viết rồi soát". |
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
| `kv:ghi-chu-hop` | Biến ghi chép, bản ghi âm chép lại thành biên bản họp + bảng đầu việc (ai, làm gì, hạn). Dùng khi nói "làm biên bản", "tóm tắt cuộc họp", "chốt đầu việc", "ghi chú họp". |
| `kv:ho-so-ca-nhan` | Phỏng vấn 8-10 câu để viết hồ sơ CLAUDE.md / AGENTS.md: vai trò, đơn vị, khách, giọng văn, từ cấm, quy tắc. Dùng khi nói "tạo hồ sơ", "cho AI biết về tôi", "viết CLAUDE.md", "cài đặt ban đầu". |
| `kv:lap-ke-hoach-tuan` | Xếp việc trong tuần theo giờ thật có được, ưu tiên rõ, dám nói khi không đủ giờ. Dùng khi nói "lên kế hoạch tuần", "tuần này làm gì trước", "việc nhiều quá", "xếp lịch giúp". |
| `kv:tao-bang-kiem` | Tạo bảng kiểm (checklist) cho việc lặp lại hoặc dễ sót bước: mỗi mục kiểm được, có người và thời điểm. Dùng khi nói "làm checklist", "bảng kiểm", "danh sách việc cần làm khi...", "hay quên bước". |
| `kv:tom-tat-tai-lieu` | Tóm tắt tài liệu dài (báo cáo, hợp đồng, công văn, PDF) thành ý chính có trích vị trí. Dùng khi nói "tóm tắt giúp", "đọc file này nói gì", "rút ý chính", "tài liệu dài quá". |
| `kv:viet-bao-cao` | Viết báo cáo công việc (tuần, tháng, dự án, sự cố) từ số liệu và ghi chú có sẵn, kết luận đặt đầu. Dùng khi nói "viết báo cáo", "báo cáo tuần", "tổng hợp kết quả", "làm báo cáo gửi sếp". |
| `kv:viet-de-cuong` | Lập đề cương cho báo cáo, bài giảng, đề tài nghiên cứu, đề án, thuyết minh, bài viết: mục phân cấp, nguồn dự kiến, độ dài, câu hỏi còn mở. Dùng khi nói "lập đề cương", "dàn ý", "khung bài". |
| `kv:viet-tin-nhan-cong-viec` | Soạn tin nhắn công việc qua Zalo, Teams, Messenger ngắn, đúng xưng hô, rõ việc. Dùng khi nói "nhắn sếp", "nhắn nhóm", "tin Zalo cho khách", "nhắc việc", "nhắn sao cho khéo". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Đọc bảng số, tính biến động, soát dòng tổng, chọn biểu đồ, đối chiếu mọi số trong bài với bảng gốc | `kv:bao-chi-du-lieu-kiem-so` |
| Kịch bản podcast, bản tin video, explainer, video dọc: lời cho tai nghe, cảnh - chữ - nguồn theo phút | `kv:kich-ban-podcast-video-tin-tuc` |
| Danh sách báo chí theo mảng, phân tầng, lịch tiếp xúc, nhật ký quan hệ minh bạch | `kv:media-list-quan-he-bao-chi` |
| Chương trình media training 4-6 buổi, chấm điểm 12 tiêu chí, theo dõi tiến bộ, thẻ bỏ túi | `kv:huan-luyen-nguoi-phat-ngon` |
| Share of voice, sắc thái ròng, tỷ lệ lọt thông điệp, so kỳ và so đối thủ, không dùng AVE | `kv:do-luong-hieu-qua-pr` |
| Báo cáo quý cho lãnh đạo: KPI so mục tiêu, dư luận, sự cố, ngân sách, đề xuất cần quyết | `kv:bao-cao-truyen-thong-quy` |
| Kế hoạch truyền thông nội bộ, truyền thông thay đổi theo tầng, hỏi đáp cho quản lý, đo mức hiểu | `kv:truyen-thong-noi-bo-doanh-nghiep` |
| Lên số, giao bài, biên tập bản tin và tạp chí nội bộ, đồng ý xuất hiện của nhân vật | `kv:bien-tap-an-pham-noi-bo` |
| Loạt bài điều tra: hồ sơ nguồn, sổ bằng chứng nhiều vòng, gác cổng sự thật và nhất quán loạt bài từng kỳ | `kv:day-chuyen-dieu-tra-nhieu-ky` |
| Cẩm nang khủng hoảng 4-8 kịch bản soạn song song, gác cổng nhất quán, ma trận rủi ro, lịch diễn tập | `kv:day-chuyen-ke-hoach-khung-hoang` |

Mỗi skill Free đều có mục **"Bản Pro có thêm"** ở cuối file cho biết bản Pro làm sâu hơn những gì. Xem tại https://mochistudio.io.vn

## Trợ lý (agent) - xếp theo quyền

Skill là **cách làm**, agent là **người làm và giới hạn của người đó**. Dòng `tools:` trong file agent là khóa quyền thật.

### ĐIỀU PHỐI - lập kế hoạch, kiểm định bàn giao, không làm thay khâu khác

| Agent | Vai | tools |
|---|---|---|
| `kv:kiem-dinh-ban-giao` | Gác cổng cuối - đối chiếu sản phẩm với 00-ke-hoach.md và các 03-soat-*.md, kết luận QUA/CHẶN, liệt kê việc người dùng phải tự quyết. Chỉ đọc, chỉ được ghi 04-ban-giao.md. | `Read, Glob, Grep, Write` |
| `kv:lap-ke-hoach-dieu-phoi` | Điều phối - đọc yêu cầu và nguồn, viết .kv-run/<viec>-<yyyymmdd>/00-ke-hoach.md: khâu, agent, đầu vào/ra, tiêu chí đạt, rủi ro, khâu nào song song. Chỉ ghi trong .kv-run/, không làm thay khâu nào. | `Read, Glob, Grep, Write` |

### THU THẬP - đọc và tra cứu, cấm ghi file

| Agent | Vai | tools |
|---|---|---|
| `kv:doc-nhieu-tai-lieu` | Thu thập - đọc cả thư mục hoặc nhiều file tài liệu, rút gọn dữ kiện chính kèm vị trí trích (file, trang, dòng) để khâu sau viết. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:nghien-cuu-nguon` | Thu thập - tra cứu nhiều nguồn (web + file), xếp bậc uy tín 1-2-3, trả bảng nguồn và dữ kiện có trích dẫn, mâu thuẫn, chỗ chưa có nguồn. Chỉ đọc, không ghi file; phiên chính ghi 01-thu-thap.md. | `Read, Grep, Glob, WebSearch, WebFetch` |
| `kv:tra-cuu-nguon-bao-chi` | Thu thập - tra web và tài liệu để tìm nguồn gốc khẳng định, văn bản chính thức, số liệu, bài đã đăng cho một đề tài báo chí; ghi bậc nguồn, link, ngày truy cập. Chỉ đọc và tra mạng, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |
| `kv:trich-xuat-bang-ghi-phong-van` | Thu thập - đọc bản gỡ băng, ghi chép hiện trường, tài liệu nhân vật đưa; rút trích dẫn nguyên văn kèm mốc giờ, người nói, dữ kiện cần kiểm. Chỉ đọc file, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:soan-bai-bao-chi` | Thực thi - viết tin, bài, bài phỏng vấn từ file thu thập theo kim tự tháp ngược, kèm bảng nguồn; dữ kiện thiếu để [cần bổ sung]. Đọc và ghi file trong .kv-run, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-tai-lieu-pr` | Thực thi - soạn nháp thông cáo báo chí, bộ hỏi đáp họp báo, tuyên bố khủng hoảng, kế hoạch truyền thông từ dữ kiện đã duyệt; trích dẫn lãnh đạo đánh dấu chờ duyệt. Ghi file trong .kv-run, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-phap-ly-dao-duc-bao-chi` | Gác cổng pháp lý - đạo đức nghề báo: soát bài, thông cáo, tuyên bố về vu khống, kết tội trước, lộ nguồn tin, đời tư, trẻ em, nhân vật không xác minh, đạo văn. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |
| `kv:soat-su-that-bai-bao` | Gác cổng sự thật - đối chiếu mọi số, tên, ngày, trích dẫn, khẳng định trong bài với file thu thập và tư liệu gốc; kiểm bậc nguồn, trích dẫn nguyên văn. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Bài báo kiểm chứng | `kv:tra-cuu-nguon-bao-chi` | `kv:soan-bai-bao-chi` | `kv:soat-su-that-bai-bao` | Chạy kv:day-chuyen-bai-bao-kiem-chung cho đề tài ngập kéo dài ở phường Tân Hòa, tư liệu ở bao-chi/de-tai/ngap-tan-hoa/, tin sâu 700 chữ, gác cổng cả sự thật và pháp lý-đạo đức. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Tin lan truyền thành tin đăng** - Một bài đăng mạng xã hội đang nóng, cần xác minh rồi lên tin nhanh mà không sai

`kv:kiem-chung-thong-tin-da-nguon` (Tách khẳng định, tìm nguồn gốc, kết luận từng ý) -> `kv:viet-tin-kim-tu-thap-nguoc` (Viết tin từ phần đã kiểm chứng, phần chưa rõ ghi đúng mức) -> `kv:bien-tap-tit-sapo` (Đặt tít không giật, sapo bổ sung thông tin) -> `kv:soat-phap-ly-dao-duc-bao-chi` (Gác cổng kết tội trước, đời tư, người dễ tổn thương) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Từ phỏng vấn đến bài hỏi-đáp** - Chuẩn bị gặp nhân vật, có băng ghi âm, cần bài đăng giữ đúng lời

`kv:bo-cau-hoi-phong-van-bao-chi` (Soạn câu hỏi theo mục tiêu, câu bám, câu khó) -> `kv:trich-xuat-bang-ghi-phong-van` (Rút trích dẫn nguyên văn kèm mốc giờ, đoạn không được ghi) -> `kv:go-bang-phong-van-thanh-bai` (Biên tập thành bài hỏi-đáp, có phụ lục đối chiếu) -> `kv:soat-dao-van-dao-duc-bai-bao` (Soát trích dẫn, nhân vật, đời tư trước khi gửi duyệt) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Đề tài điều tra** - Nhận manh mối, cần nghiên cứu nền và đề cương trình ban biên tập

`kv:nghien-cuu-de-tai-bao-chi` (Hồ sơ tư liệu theo bậc nguồn, dòng thời gian, các bên cần hỏi) -> `kv:de-cuong-bai-dieu-tra-phong-su` (Giả thuyết, luận điểm, bằng chứng cần thu, lộ trình) -> `kv:soat-phap-ly-dao-duc-bao-chi` (Soát rủi ro pháp lý, bảo vệ nguồn tin của đề cương) -> `kv:xuat-word` (Xuất đề cương trình duyệt)

**Sự kiện PR trọn gói** - Doanh nghiệp sắp ra mắt sản phẩm, cần kế hoạch, thông cáo, chuẩn bị họp báo

`kv:ke-hoach-truyen-thong-su-kien` (Mục tiêu, thông điệp, lịch trước-trong-sau, phân công) -> `kv:viet-thong-cao-bao-chi` (Soạn thông cáo, trích dẫn lãnh đạo chờ duyệt) -> `kv:hoi-dap-chuan-bi-hop-bao` (Bộ Q&A cho người phát ngôn) -> `kv:kiem-tra-chong-bia` (Soát số liệu và tuyên bố trước khi phát hành) -> `kv:xuat-pptx` (Xuất kế hoạch thành slide trình lãnh đạo)

**Khủng hoảng truyền thông** - Bài tiêu cực về tổ chức đang lan, cần nắm tình hình và phản hồi đúng

`kv:diem-bao-theo-doi-tin-tuc` (Gom bài, phân sắc thái, tìm nguồn gốc lan truyền) -> `kv:kich-ban-xu-ly-khung-hoang-truyen-thong` (Phân cấp, tuyên bố ban đầu, kế hoạch theo kênh) -> `kv:hoi-dap-chuan-bi-hop-bao` (Chuẩn bị người phát ngôn cho câu hỏi báo chí) -> `kv:soat-phap-ly-dao-duc-bao-chi` (Soát tuyên bố trước khi lãnh đạo duyệt) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

## Xuất file Word, Excel, PDF, PowerPoint

Skill nào làm ra văn bản, bảng hay slide đều có mục **Xuất file**. Duyệt nội dung xong, nói "xuất ra Word" (hoặc Excel, PDF, PowerPoint): `kv:xuat-word`, `kv:xuat-excel`, `kv:xuat-pdf`, `kv:xuat-pptx` lo phần còn lại. Claude Code và Codex chạy script Python kèm theo (cần `pip install python-docx openpyxl python-pptx reportlab`); Claude web/Desktop dùng tính năng tạo file có sẵn.

## Giao thức chạy dây chuyền

Việc nhiều khâu chạy theo `kv:dieu-phoi-day-chuyen`: tạo thư mục `.kv-run/<việc>-<ngày>/` -> 00 kế hoạch -> 01 thu thập -> 02 bản nháp -> 03 gác cổng (QUA/CHẶN, tối đa 2 vòng sửa) -> 04 kiểm định bàn giao -> xuất file. Mọi bước để lại file, xem lại được, chạy tiếp được.

## Free và Pro

| | Free | Pro |
|---|---|---|
| Skill nghề + kỹ năng nền | Đủ dùng hằng ngày | Gấp gần đôi, thêm skill chuyên sâu |
| Mỗi skill | Làm trọn việc chính | Thêm phần nâng cao: mẫu biểu, bảng tra, script, xử lý hàng loạt |
| Dây chuyền nhiều agent | 1 | 3, có điều phối song song |
| Xuất Word/Excel/PDF/PPTX | Trình bày chuẩn | Mẫu thương hiệu riêng, xuất hàng loạt |
| Luồng làm việc mẫu | 3-5 | Thêm 2-3 luồng chuyên sâu |
| Cập nhật và hỗ trợ | Cộng đồng | Ưu tiên, cập nhật theo quy định mới |

- ⭐ 10 skill chỉ có ở Pro: báo chí dữ liệu, podcast/video tin tức, media list, media training, đo lường PR, báo cáo quý, truyền thông và ấn phẩm nội bộ, 2 dây chuyền mới
- ⭐ 2 dây chuyền mới với 4 agent riêng: loạt bài điều tra nhiều kỳ (sổ bằng chứng, gác cổng lộ nguồn khi ghép các kỳ) và cẩm nang khủng hoảng soạn song song 4-8 kịch bản
- ⭐ 9 script Python chạy thật: làm sạch phụ đề .srt/.vtt, so trùng văn bản ngưỡng 70%, sổ kiểm chứng báo tin cũ quay lại, share of voice, kiểm số bảng, sổ bằng chứng, soát văn phong, quét từ rủi ro
- ⭐ Kho mẫu lớn: 200 từ rủi ro có cách thay, 150 câu phỏng vấn theo 5 loại nhân vật, 300 câu họp báo theo 6 ngành, 15 kịch bản khủng hoảng, 12 mẫu thông cáo
- ⭐ Bảng kiểm ảnh/clip 20 dấu hiệu (gồm nội dung tạo bởi AI), bảng kiểm đạo đức theo 6 đề tài nhạy cảm, mẫu cải chính - xin lỗi
- ⭐ Ma trận phê duyệt 30 phút, tập dượt phỏng vấn giả lập chấm 12 điểm mỗi câu, điểm báo hằng ngày trước 8 giờ sáng

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
