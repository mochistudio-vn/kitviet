<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Tư vấn bảo hiểm - Bản Free

> Tư vấn đúng nhu cầu, số quyền lợi có trang tài liệu, không một lời hứa sai - để khách tin bạn lâu dài.

Bộ skill và agent tiếng Việt cho đại lý, tư vấn viên bảo hiểm nhân thọ và phi nhân thọ, trưởng nhóm kinh doanh và nhân viên bồi thường: phân tích nhu cầu bảo vệ, so sánh quyền lợi từ tài liệu sản phẩm, giải thích loại trừ, kịch bản tư vấn trung thực, hồ sơ claim, lịch nhắc phí, nội dung mạng xã hội, báo cáo tuần, tuyển đại lý. Có gác cổng chặn cam kết lợi nhuận và so sánh sai; mọi quy định đều được nhắc kiểm tra luật hiện hành.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 30 | 12 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Đại lý, tư vấn viên bảo hiểm nhân thọ · Đại lý bảo hiểm phi nhân thọ (xe, nhà, sức khỏe, du lịch) · Trưởng nhóm kinh doanh bảo hiểm · Nhân viên hỗ trợ bồi thường

## Cài đặt

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

### Tư vấn đúng nhu cầu

| Việc của bạn | Gọi |
|---|---|
| Tính khoảng trống bảo vệ từ thu nhập, người phụ thuộc, khoản vay khách kể - không đoán | `kv:phan-tich-nhu-cau-bao-ve` |
| So sánh quyền lợi, phí, loại trừ các gói, mỗi ô có trang tài liệu sản phẩm | `kv:so-sanh-quyen-loi-bao-hiem` |
| Giải thích loại trừ, thời gian chờ bằng lời dễ hiểu, kèm ví dụ được và không được trả | `kv:giai-thich-dieu-khoan-loai-tru` |
| Kịch bản buổi gặp trung thực: khai thác, trình bày, công bố giới hạn, không ép ký | `kv:kich-ban-tu-van-bao-hiem` |
| Đáp lời từ chối bằng sự thật, biết khi nào nên dừng | `kv:xu-ly-tu-choi-bao-hiem` |

### Bồi thường và chăm sóc khách

| Việc của bạn | Gọi |
|---|---|
| Checklist hồ sơ claim theo quyền lợi và thư hướng dẫn khách nộp đủ, đúng hạn | `kv:ho-so-boi-thuong-bao-hiem` |
| Lịch nhắc phí, thời gian gia hạn, sinh nhật, kỷ niệm hợp đồng kèm tin nhắn mẫu | `kv:lich-cham-soc-nhac-phi` |

### Phát triển kinh doanh và nhóm

| Việc của bạn | Gọi |
|---|---|
| Bài Facebook, Zalo, TikTok đúng quy định: không cam kết lãi, không chê đối thủ | `kv:noi-dung-mxh-bao-hiem` |
| Báo cáo phễu hoạt động tuần, hồ sơ treo, kế hoạch tuần sau | `kv:bao-cao-tuan-kinh-doanh-bao-hiem` |
| Kế hoạch tuyển đại lý trung thực, không hứa thu nhập, lộ trình 90 ngày | `kv:ke-hoach-tuyen-dai-ly` |

### Gác cổng và dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Soát tin tư vấn, bảng so sánh, bài đăng trước khi gửi: chặn cam kết sai | `kv:soat-loi-tu-van-bao-hiem` |
| Bộ đề xuất trọn gói: gom dữ kiện -> soạn -> gác cổng -> bàn giao | `kv:day-chuyen-de-xuat-bao-hiem` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Che CCCD, số tài khoản, bệnh án trước khi đưa dữ liệu khách vào AI | `kv:an-thong-tin-nhay-cam` |
| Soát số liệu trong báo cáo, bài đăng trước khi gửi | `kv:kiem-tra-chong-bia` |
| Tin nhắn Zalo hẹn gặp, nhắc phí, hỏi thăm khách | `kv:viet-tin-nhan-cong-viec` |
| Xuất bảng nhu cầu, bảng so sánh, thư hướng dẫn claim ra Word | `kv:xuat-word` |
| Xuất lịch phí, báo cáo tuần ra Excel có công thức | `kv:xuat-excel` |
| Bản chốt gửi khách qua Zalo, email | `kv:xuat-pdf` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dieu-phoi-day-chuyen` | Giao thức chạy Kit Việt cho việc nhiều khâu - lập kế hoạch, thu thập, soạn, gác cổng QUA/CHẶN, bàn giao trong .kv-run/. Dùng khi nói "chạy dây chuyền", "làm từ A đến Z", "đọc rồi viết rồi soát". |
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
| `kv:ghi-chu-hop` | Biến ghi chép, bản ghi âm chép lại thành biên bản họp + bảng đầu việc (ai, làm gì, hạn). Dùng khi nói "làm biên bản", "tóm tắt cuộc họp", "chốt đầu việc", "ghi chú họp". |
| `kv:ho-so-ca-nhan` | Phỏng vấn 8-10 câu để viết hồ sơ CLAUDE.md / AGENTS.md: vai trò, đơn vị, khách, giọng văn, từ cấm, quy tắc. Dùng khi nói "tạo hồ sơ", "cho AI biết về tôi", "viết CLAUDE.md", "cài đặt ban đầu". |
| `kv:lap-ke-hoach-tuan` | Xếp việc trong tuần theo giờ thật có được, ưu tiên rõ, dám nói khi không đủ giờ. Dùng khi nói "lên kế hoạch tuần", "tuần này làm gì trước", "việc nhiều quá", "xếp lịch giúp". |
| `kv:nghien-cuu-nguon-uy-tin` | Tra cứu tài liệu theo bậc nguồn uy tín, ghi trích dẫn đủ (đơn vị, năm, link, ngày truy cập), chỉ ra mâu thuẫn và chỗ chưa có nguồn. Dùng khi nói "tìm tài liệu", "nghiên cứu giúp", "nguồn nào nói". |
| `kv:tao-bang-kiem` | Tạo bảng kiểm (checklist) cho việc lặp lại hoặc dễ sót bước: mỗi mục kiểm được, có người và thời điểm. Dùng khi nói "làm checklist", "bảng kiểm", "danh sách việc cần làm khi...", "hay quên bước". |
| `kv:tom-tat-tai-lieu` | Tóm tắt tài liệu dài (báo cáo, hợp đồng, công văn, PDF) thành ý chính có trích vị trí. Dùng khi nói "tóm tắt giúp", "đọc file này nói gì", "rút ý chính", "tài liệu dài quá". |
| `kv:viet-bao-cao` | Viết báo cáo công việc (tuần, tháng, dự án, sự cố) từ số liệu và ghi chú có sẵn, kết luận đặt đầu. Dùng khi nói "viết báo cáo", "báo cáo tuần", "tổng hợp kết quả", "làm báo cáo gửi sếp". |
| `kv:viet-de-cuong` | Lập đề cương cho báo cáo, bài giảng, đề tài nghiên cứu, đề án, thuyết minh, bài viết: mục phân cấp, nguồn dự kiến, độ dài, câu hỏi còn mở. Dùng khi nói "lập đề cương", "dàn ý", "khung bài". |
| `kv:viet-email` | Soạn email công việc tiếng Việt đúng xưng hô, rõ việc cần người nhận làm. Dùng khi nói "viết email", "trả lời mail này", "soạn thư gửi khách", "mail nhắc", "viết lại cho lịch sự". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Bức tranh tài chính cả nhà: dòng tiền, quỹ khẩn cấp, bảo vệ, mục tiêu - không khuyến nghị đầu tư | `kv:ke-hoach-tai-chinh-gia-dinh-bao-ve` |
| Đề xuất phúc lợi bảo hiểm nhóm: dữ liệu xin báo giá, so phương án theo báo giá, tờ trình | `kv:de-xuat-bao-hiem-nhom-doanh-nghiep` |
| Kịch bản hội thảo 60-90 phút theo phút, slide, hỏi đáp, không chốt hợp đồng tại chỗ | `kv:kich-ban-hoi-thao-tu-van-bao-hiem` |
| Đọc hợp đồng đang có, tìm khoảng trống bảo vệ, gác cổng không đề xuất hủy | `kv:day-chuyen-ra-soat-hop-dong-bao-hiem` |
| Hồ sơ đề nghị xem xét lại khi bị từ chối claim: điều khoản, chứng cứ, đơn, gác cổng | `kv:day-chuyen-khieu-nai-boi-thuong` |
| Ma trận khách x dòng sản phẩm, lịch tái tục 90 ngày, kỷ niệm hợp đồng cần rà soát | `kv:phan-tich-danh-muc-tai-tuc-bao-hiem` |
| Báo cáo tháng: nộp, phát hành, phí quy năm, % mục tiêu, hồ sơ treo, chất lượng soát | `kv:bao-cao-hieu-suat-doi-bao-hiem-thang` |
| Lộ trình 90 ngày cho từng đại lý mới, theo dõi tuần, đánh giá mốc 30/60/90 có bằng chứng | `kv:huan-luyen-dai-ly-moi-90-ngay` |

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
| `kv:gom-du-kien-tu-van-bao-hiem` | Thu thập - đọc phiếu thông tin khách và tài liệu sản phẩm bảo hiểm, trích dữ kiện tài chính, người phụ thuộc, quyền lợi, loại trừ, thời gian chờ, phí kèm vị trí nguồn. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:kiem-ke-ho-so-boi-thuong` | Thu thập - kiểm kê thư mục hồ sơ bồi thường của khách so với mục thủ tục trong quy tắc điều khoản: giấy tờ đã có, thiếu, có dấu hiệu cần sửa, thời hạn nộp. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:soan-de-xuat-bao-hiem` | Thực thi - từ kế hoạch và dữ kiện đã thu thập, soạn bộ đề xuất bảo hiểm nháp: bảng nhu cầu bảo vệ, so sánh quyền lợi, giải thích loại trừ, kịch bản tư vấn vào .kv-run. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-thu-huong-dan-claim` | Thực thi - từ kết quả kiểm kê hồ sơ bồi thường, soạn checklist và thư hướng dẫn khách bổ sung giấy tờ, nộp claim đúng hạn, lưu vào thư mục được giao. Được ghi file, cấm ra mạng, cấm gửi. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-cam-ket-tu-van` | Gác cổng - soát bản nháp tư vấn, so sánh, thư claim, bài đăng bảo hiểm: cam kết lợi nhuận, số quyền lợi trái tài liệu, so sánh sai, che loại trừ, áp lực giả, lộ dữ liệu. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Bộ đề xuất bảo hiểm cho một khách | `kv:gom-du-kien-tu-van-bao-hiem` | `kv:soan-de-xuat-bao-hiem` | `kv:soat-cam-ket-tu-van` | Chạy kv:day-chuyen-de-xuat-bao-hiem cho khách bao-hiem/khach/KH017, tài liệu sản phẩm trong bao-hiem/san-pham/, phạm vi: nhu cầu, so sánh 2 gói, loại trừ, kịch bản buổi 2. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Chuẩn bị buổi trình bày giải pháp** - Sau buổi khai thác, trước buổi gặp thứ hai với khách

`kv:phan-tich-nhu-cau-bao-ve` (Lập bảng nhu cầu và khoảng trống từ phiếu thông tin) -> `kv:so-sanh-quyen-loi-bao-hiem` (Đặt các gói phù hợp cạnh nhau theo tài liệu sản phẩm) -> `kv:kich-ban-tu-van-bao-hiem` (Soạn kịch bản buổi 2 có đoạn công bố giới hạn) -> `kv:soat-loi-tu-van-bao-hiem` (Soát toàn bộ trước khi gặp khách) -> `kv:xuat-pdf` (Xuất bảng minh họa nhu cầu và so sánh để trao khách)

**Khách báo nằm viện** - Khách hoặc người nhà nhắn vừa nằm viện, phẫu thuật, tai nạn

`kv:an-thong-tin-nhay-cam` (Che CCCD, số tài khoản trong ảnh giấy tờ khách gửi) -> `kv:ho-so-boi-thuong-bao-hiem` (Lập checklist và thư hướng dẫn khách) -> `kv:soat-loi-tu-van-bao-hiem` (Bắt câu hứa 'chắc chắn được trả' trước khi gửi) -> `kv:xuat-pdf` (Xuất thư gửi khách qua Zalo)

**Đầu tháng: chăm sóc và giữ hợp đồng** - Ngày làm việc đầu tháng, rà hợp đồng sắp đến hạn phí

`kv:lich-cham-soc-nhac-phi` (Lập lịch nhắc phí, hợp đồng trong thời gian gia hạn lên đầu) -> `kv:xuat-excel` (Xuất lịch phí có công thức) -> `kv:viet-tin-nhan-cong-viec` (Soạn tin nhắn riêng cho khách cần gọi gấp)

**Đăng bài tuần** - Lên nội dung mạng xã hội cho tuần tới

`kv:noi-dung-mxh-bao-hiem` (Viết 3 bài xen kẽ kiến thức, câu chuyện, chăm sóc) -> `kv:soat-loi-tu-van-bao-hiem` (Soát cam kết sai, so sánh sai, thông tin khách) -> `kv:soat-chinh-ta-giong-van` (Soát chính tả và giọng văn)

**Cuối tuần của trưởng nhóm** - Tổng hợp hoạt động nhóm và lên kế hoạch tuyển, huấn luyện

`kv:bao-cao-tuan-kinh-doanh-bao-hiem` (Lập phễu hoạt động và hồ sơ treo của nhóm) -> `kv:kiem-tra-chong-bia` (Soát số trước khi gửi văn phòng) -> `kv:ke-hoach-tuyen-dai-ly` (Cập nhật kế hoạch tuyển và lộ trình kèm người mới) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

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

- ⭐ 8 skill chuyên sâu mới: kế hoạch tài chính gia đình, bảo hiểm nhóm doanh nghiệp, hội thảo, danh mục tái tục, báo cáo tháng, huấn luyện 90 ngày và 2 dây chuyền
- ⭐ 2 dây chuyền mới có gác cổng: rà soát hợp đồng đang có (không bao giờ đề xuất hủy) và khiếu nại bồi thường (không hứa kết quả)
- ⭐ 9 script Python chạy thật: bảng kịch bản nhu cầu cả gia đình có biểu đồ, đọc bảng minh họa PDF, theo dõi claim tự tô màu, K13/K25, dashboard nhóm 8 tuần, soát hàng loạt
- ⭐ Thư viện tra cứu: 80 câu cấm có câu thay, 60 thuật ngữ, 40 lời từ chối, 50 câu hỏi khai thác, 25 tình huống từ chối bồi thường, checklist 10 loại quyền lợi
- ⭐ 3 agent mới, trong đó 1 điều phối lô chạy nhiều hồ sơ claim, khách rà soát hoặc đề xuất cả nhóm và gộp bảng trạng thái theo đại lý
- ⭐ Mẫu sẵn dùng: giáo án kèm cặp 12 tuần, slide giới thiệu nghề 20 trang, thẻ chấm phỏng vấn 10 câu, lịch nội dung 12 tuần, 30 kịch bản video, 20 tin nhắn chăm sóc

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
