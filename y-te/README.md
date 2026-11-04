<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Y tế - Phòng khám, Điều dưỡng, Quản lý y tế - Bản Free

> Bớt giấy tờ, thêm thời gian cho người bệnh - AI lo phần hành chính, chuyên môn vẫn do người có chứng chỉ quyết.

Bộ skill và agent tiếng Việt cho điều dưỡng, phòng khám tư, nha khoa, nhà thuốc và phòng quản lý chất lượng: bàn giao ca SBAR, lịch trực, SOP, báo cáo sự cố, rà hạn dùng thuốc, trả lời đánh giá, chuẩn bị đoàn kiểm tra. Mọi nội dung chuyên môn chỉ lấy từ tài liệu bạn đưa, không chẩn đoán, không kê đơn, có gác cổng chặn lộ dữ liệu người bệnh.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 34 | 14 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Điều dưỡng, điều dưỡng trưởng khoa · Quản lý phòng khám tư, nha khoa, thẩm mỹ · Nhân viên hành chính, chăm sóc khách hàng bệnh viện · Phòng quản lý chất lượng, kiểm soát nhiễm khuẩn · Dược sĩ, nhân viên nhà thuốc (việc hành chính, kho)

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-y-te@kitviet

# Hoặc dùng CLI (cần Node.js 18+), --ai claude | codex | desktop | all
npx github:mochistudio-vn/kitviet init y-te --ai claude
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

### Chăm sóc và bàn giao

| Việc của bạn | Gọi |
|---|---|
| Biến ghi chú cuối ca thành bản bàn giao SBAR gọn, không sót việc theo giờ | `kv:ban-giao-ca-sbar` |
| Xếp lịch trực, chia ca tháng công bằng, đủ người, đúng ngày nghỉ | `kv:xep-lich-truc-dieu-duong` |
| Viết tờ hướng dẫn chăm sóc tại nhà dễ hiểu từ tài liệu chuyên môn | `kv:tai-lieu-giao-duc-suc-khoe` |

### Quy trình và an toàn người bệnh

| Việc của bạn | Gọi |
|---|---|
| Soạn SOP kiểm soát nhiễm khuẩn, tiếp đón, xử lý dụng cụ từ tài liệu nội bộ | `kv:soan-sop-phong-kham` |
| Lập bảng kiểm an toàn phẫu thuật, thủ thuật 3 giai đoạn in được | `kv:bang-kiem-an-toan-thu-thuat` |
| Viết báo cáo sự cố không đổ lỗi, phân tích nguyên nhân gốc, hành động khắc phục | `kv:bao-cao-su-co-y-khoa` |
| Tóm tắt phác đồ, hướng dẫn chuyên môn có trích nguồn từng ý | `kv:tom-tat-phac-do-dieu-tri` |

### Người bệnh và truyền thông

| Việc của bạn | Gọi |
|---|---|
| Trả lời review, khiếu nại lịch sự mà không lộ thông tin bệnh | `kv:tra-loi-danh-gia-nguoi-benh` |
| Viết bài Facebook, TikTok cho phòng khám không vi phạm quy định quảng cáo | `kv:noi-dung-quang-cao-phong-kham` |
| Soạn tin Zalo, SMS nhắc tái khám, tiêm chủng có biến để điền | `kv:nhac-lich-tai-kham-zalo` |
| Thiết kế phiếu khảo sát hài lòng và phân tích kết quả có số liệu | `kv:khao-sat-hai-long-nguoi-benh` |

### Quản lý, kho và chất lượng

| Việc của bạn | Gọi |
|---|---|
| Rà tồn kho, lọc thuốc hết hạn, cận hạn, bắt dữ liệu lỗi | `kv:theo-doi-han-dung-thuoc` |
| Tự đánh giá theo bộ tiêu chí, lập danh mục minh chứng, việc còn thiếu | `kv:chuan-bi-doan-kiem-tra-chat-luong` |
| Soạn bài tập huấn nhân viên và đề kiểm tra có đáp án từ SOP | `kv:dao-tao-noi-bo-y-te` |
| Tổng quan y văn có trích nguồn theo bậc (Bộ Y tế, WHO, PubMed...) và dựng đề cương đề tài, đào tạo | `kv:tong-quan-tai-lieu-y-khoa` |
| Làm trọn gói: đọc nguồn -> soạn -> soát phạm vi chuyên môn và dữ liệu người bệnh | `kv:day-chuyen-tai-lieu-y-te` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Che tên, SĐT, mã hồ sơ người bệnh trước khi dán vào AI | `kv:an-thong-tin-nhay-cam` |
| Soát số liệu, liều, ngày tháng trong bản nháp với file gốc | `kv:kiem-tra-chong-bia` |
| Làm bảng kiểm giám sát tuân thủ từ SOP | `kv:tao-bang-kiem` |
| Ghi biên bản giao ban, họp hội đồng chất lượng | `kv:ghi-chu-hop` |
| Xuất SOP, tờ hướng dẫn, đề cương đã duyệt ra file Word | `kv:xuat-word` |
| Xuất lịch trực, báo cáo hạn dùng, kết quả khảo sát ra Excel | `kv:xuat-excel` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dieu-phoi-day-chuyen` | Giao thức chạy Kit Việt cho việc nhiều khâu - lập kế hoạch, thu thập, soạn, gác cổng QUA/CHẶN, bàn giao trong .kv-run/. Dùng khi nói "chạy dây chuyền", "làm từ A đến Z", "đọc rồi viết rồi soát". |
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
| `kv:ho-so-ca-nhan` | Phỏng vấn 8-10 câu để viết hồ sơ CLAUDE.md / AGENTS.md: vai trò, đơn vị, khách, giọng văn, từ cấm, quy tắc. Dùng khi nói "tạo hồ sơ", "cho AI biết về tôi", "viết CLAUDE.md", "cài đặt ban đầu". |
| `kv:lap-ke-hoach-tuan` | Xếp việc trong tuần theo giờ thật có được, ưu tiên rõ, dám nói khi không đủ giờ. Dùng khi nói "lên kế hoạch tuần", "tuần này làm gì trước", "việc nhiều quá", "xếp lịch giúp". |
| `kv:nghien-cuu-nguon-uy-tin` | Tra cứu tài liệu theo bậc nguồn uy tín, ghi trích dẫn đủ (đơn vị, năm, link, ngày truy cập), chỉ ra mâu thuẫn và chỗ chưa có nguồn. Dùng khi nói "tìm tài liệu", "nghiên cứu giúp", "nguồn nào nói". |
| `kv:tom-tat-tai-lieu` | Tóm tắt tài liệu dài (báo cáo, hợp đồng, công văn, PDF) thành ý chính có trích vị trí. Dùng khi nói "tóm tắt giúp", "đọc file này nói gì", "rút ý chính", "tài liệu dài quá". |
| `kv:viet-bao-cao` | Viết báo cáo công việc (tuần, tháng, dự án, sự cố) từ số liệu và ghi chú có sẵn, kết luận đặt đầu. Dùng khi nói "viết báo cáo", "báo cáo tuần", "tổng hợp kết quả", "làm báo cáo gửi sếp". |
| `kv:viet-de-cuong` | Lập đề cương cho báo cáo, bài giảng, đề tài nghiên cứu, đề án, thuyết minh, bài viết: mục phân cấp, nguồn dự kiến, độ dài, câu hỏi còn mở. Dùng khi nói "lập đề cương", "dàn ý", "khung bài". |
| `kv:viet-email` | Soạn email công việc tiếng Việt đúng xưng hô, rõ việc cần người nhận làm. Dùng khi nói "viết email", "trả lời mail này", "soạn thư gửi khách", "mail nhắc", "viết lại cho lịch sự". |
| `kv:viet-tin-nhan-cong-viec` | Soạn tin nhắn công việc qua Zalo, Teams, Messenger ngắn, đúng xưng hô, rõ việc. Dùng khi nói "nhắn sếp", "nhắn nhóm", "tin Zalo cho khách", "nhắc việc", "nhắn sao cho khéo". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Lập đề án PDCA có chỉ số tử/mẫu số, đường nền, Pareto, Gantt, quy tắc đọc biểu đồ chạy | `kv:ke-hoach-cai-tien-pdca-y-te` |
| Phân tích nguyên nhân gốc sự cố nghiêm trọng theo khung: rào chắn, 7 nhóm yếu tố, hành động mạnh - yếu, theo dõi hiệu quả | `kv:phan-tich-rca-su-co-y-khoa` |
| Tính dashboard chỉ số tháng từ tử/mẫu số, bắt tín hiệu dịch chuyển/xu hướng, vẽ biểu đồ chạy | `kv:dashboard-chi-so-chat-luong-y-te` |
| Chuẩn bị trọn gói bộ hồ sơ đánh giá chất lượng theo bộ tiêu chí bạn đưa, có đánh giá chéo và gác minh chứng | `kv:day-chuyen-ho-so-chat-luong-benh-vien` |
| Làm đề án cải tiến trọn gói từ số liệu thật, gác cổng chỉ số và dữ liệu người bệnh | `kv:day-chuyen-de-an-cai-tien-chat-luong` |
| Ma trận khoa x quy trình KSNK, kế hoạch soạn/rà soát SOP, lịch giám sát tuân thủ | `kv:bo-quy-trinh-ksnk-theo-khoa` |
| Giám sát vệ sinh tay 5 thời điểm, tính tỷ lệ theo khoa/nghề/thời điểm, đẩy số sang dashboard | `kv:giam-sat-ve-sinh-tay-y-te` |
| Tổng hợp giờ đào tạo liên tục theo chu kỳ, báo người thiếu giờ, lập hồ sơ năng lực nhân viên | `kv:quan-ly-cme-ho-so-nang-luc` |
| Kịch bản gọi xác nhận trước thủ thuật cho lễ tân: lịch, chuẩn bị, chi phí - chuyển câu hỏi chuyên môn cho bác sĩ | `kv:kich-ban-tu-van-truoc-thu-thuat` |

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
| `kv:doc-tai-lieu-chuyen-mon-y-te` | Thu thập - đọc phác đồ, SOP, công văn, tài liệu chuyên môn y tế trong thư mục, trả bảng ý chính kèm vị trí nguồn, chép nguyên văn thuốc/liều/ngưỡng. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-quy-dinh-y-te` | Thu thập - tra cứu văn bản quy định y tế hiện hành (quảng cáo dịch vụ y tế, KSNK, dược, dữ liệu cá nhân) trên nguồn chính thống, trả danh sách có link và tình trạng hiệu lực. Chỉ đọc, cấm ghi. | `Read, Grep, Glob, WebSearch, WebFetch` |
| `kv:tra-cuu-y-van` | Thu thập - tra y văn trên web (Bộ Y tế, WHO, hội chuyên ngành, PubMed, tạp chí bình duyệt) cho tổng quan tài liệu, đề cương; chỉ giữ nguồn bậc 1-2, trả bảng nguồn có link/DOI. Chỉ đọc, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-bang-bieu-y-te` | Thực thi - lập bảng biểu hành chính y tế từ dữ liệu có sẵn: lịch trực, báo cáo hạn dùng thuốc, bảng kiểm, bảng tự đánh giá tiêu chí, kết quả khảo sát. Ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-tai-lieu-y-te` | Thực thi - soạn bản nháp tài liệu y tế (tờ hướng dẫn người bệnh, SOP, bài tập huấn, tóm tắt phác đồ, bài truyền thông) từ bảng nguồn đã thu thập, ghi ra file. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:gac-du-lieu-nguoi-benh` | Gác cổng - soát tài liệu, tin nhắn, báo cáo y tế còn lộ thông tin người bệnh: họ tên, giường, mã hồ sơ, chẩn đoán gắn người, SĐT, CCCD, BHYT, ảnh. Trả bảng lỗi, kết luận Qua/Chặn. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |
| `kv:gac-pham-vi-chuyen-mon` | Gác cổng - soát bản nháp y tế: có chẩn đoán, kê đơn, chỉnh liều, cam kết khỏi bệnh, ý vượt nguồn, thông số lệch nguồn không. Trả bảng lỗi và kết luận Qua/Chặn. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Soạn tài liệu y tế an toàn để phát hành | `kv:doc-tai-lieu-chuyen-mon-y-te` | `kv:soan-tai-lieu-y-te` | `kv:gac-pham-vi-chuyen-mon` | Dùng kv:day-chuyen-tai-lieu-y-te: từ 3 file trong nguon-chuyen-mon/ soạn tờ hướng dẫn chăm sóc vết mổ tại nhà cho người cao tuổi, khổ A5, người duyệt BS Trần Văn Bình. Xong xuất Word. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Đề tài cải tiến chất lượng từ y văn** - Khi khoa cần đề cương đề tài cải tiến (giảm té ngã, tăng vệ sinh tay) có tổng quan tài liệu đúng nguồn

`kv:tra-cuu-y-van` (Tra Bộ Y tế, WHO, hội chuyên ngành, PubMed, chỉ giữ nguồn bậc 1-2) -> `kv:tong-quan-tai-lieu-y-khoa` (Viết tổng quan có mã nguồn từng ý và dựng đề cương) -> `kv:kiem-tra-chong-bia` (Soát số liệu, trích dẫn với nguồn gốc) -> `kv:xuat-word` (Xuất đề cương Word nộp hội đồng khoa học)

**SOP mới đến tập huấn** - Khi ban hành quy trình mới và cần tập huấn, giám sát tuân thủ

`kv:soan-sop-phong-kham` (Soạn SOP từ nguồn nội bộ và hướng dẫn chuyên môn) -> `kv:gac-pham-vi-chuyen-mon` (Soát thông số kỹ thuật lệch nguồn) -> `kv:tao-bang-kiem` (Rút phiếu giám sát tuân thủ) -> `kv:dao-tao-noi-bo-y-te` (Soạn bài tập huấn và đề kiểm tra) -> `kv:xuat-pptx` (Xuất slide tập huấn)

**Lịch trực tháng** - Cuối tháng, điều dưỡng trưởng xếp lịch cho tháng sau

`kv:xep-lich-truc-dieu-duong` (Xếp ca theo ràng buộc và ngày nghỉ đăng ký) -> `kv:kiem-tra-chong-bia` (Soát số người mỗi ca, ngày nghỉ) -> `kv:xuat-excel` (Xuất lịch Excel có thống kê ca) -> `kv:viet-tin-nhan-cong-viec` (Soạn tin báo lịch cho nhóm khoa)

**Rà kho thuốc cuối tháng** - Nhà thuốc, kho khoa dược rà hạn dùng và báo cáo

`kv:theo-doi-han-dung-thuoc` (Lọc hết hạn, cận hạn, dữ liệu lỗi) -> `kv:kiem-tra-chong-bia` (Đếm khớp số dòng với file kho gốc) -> `kv:xuat-excel` (Xuất báo cáo hạn dùng nhiều sheet) -> `kv:viet-bao-cao` (Viết báo cáo kho tháng gửi quản lý)

**Phản hồi người bệnh công khai** - Khi có review, khiếu nại trên Google Maps, Facebook

`kv:an-thong-tin-nhay-cam` (Che tên, SĐT trước khi dán nội dung khiếu nại) -> `kv:tra-loi-danh-gia-nguoi-benh` (Soạn trả lời công khai và việc nội bộ) -> `kv:gac-du-lieu-nguoi-benh` (Soát mục đích công khai, không xác nhận người bệnh) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

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

- ⭐ 16 skill nghề được nâng cấp + 9 skill chỉ-Pro (PDCA có chỉ số, RCA theo khung, dashboard biểu đồ chạy, hồ sơ đánh giá chất lượng, CME, KSNK theo khoa, vệ sinh tay, kịch bản trước thủ thuật)
- ⭐ 2 dây chuyền chất lượng mới với 4 agent riêng: gác minh chứng chặn mức tự chấm vượt hồ sơ, gác chỉ số đối chiếu từng con số với file gốc
- ⭐ 19 script python chạy thật: kiểm hạn thuốc ra Excel tô màu đỏ/vàng/xanh, xếp lịch trực + đổi ca có kiểm ràng buộc, quét minh chứng, chấm đề hàng loạt, xuất Vancouver/APA + file RIS
- ⭐ Thư viện mẫu dựng sẵn: 30 tin nhắc lịch theo chuyên khoa, 40 mẫu trả lời đánh giá, 20 khung tờ hướng dẫn, 15 khung SOP, hơn 200 cụm từ quảng cáo rủi ro kèm cách viết thay
- ⭐ Chấm bằng chứng GRADE rút gọn và 3 mẫu đề cương (PDCA, nghiên cứu cấp cơ sở, đào tạo liên tục) cho hội đồng khoa học
- ⭐ Mọi script không sửa file gốc, che danh tính người bệnh trước khi xử lý, không chẩn đoán - không kê đơn - không chỉnh liều

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
