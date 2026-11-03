<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Du lịch - Khách sạn - Bản Free

> Lịch trình chạy được, báo giá cộng đúng, trả lời khách đúng mực - giá vé và giờ mở cửa luôn được xác nhận trước khi gửi.

Bộ skill và agent tiếng Việt cho điều hành tour, sales du lịch, hướng dẫn viên, lễ tân, quản lý khách sạn và chủ homestay: lịch trình theo ngày, báo giá có cấu thành chi phí, nghiên cứu điểm đến có nguồn, thuyết minh, trả lời review OTA, email xác nhận song ngữ, xử lý overbooking, SOP buồng phòng, giá phòng theo mùa, công suất phòng, đề xuất MICE. AI chỉ chuẩn bị bản nháp; người có thẩm quyền duyệt giá, cam kết và gửi khách.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 33 | 13 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Điều hành tour và sales du lịch · Hướng dẫn viên du lịch · Lễ tân, quản lý khách sạn, resort · Chủ homestay, căn hộ dịch vụ

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

### Sản phẩm tour

| Việc của bạn | Gọi |
|---|---|
| Lịch trình theo ngày có giờ giấc, quãng đường, bữa ăn, thời gian đệm và phương án mưa bão | `kv:thiet-ke-lich-trinh-tour` |
| Báo giá tour tách chi phí cố định - biến đổi, giá theo mốc số khách, FOC, trẻ em | `kv:bao-gia-tour-chi-phi` |
| Hồ sơ điểm đến từ nguồn chính thống, mỗi ý có nguồn, giờ mở cửa và giá vé luôn cần xác nhận | `kv:nghien-cuu-diem-den-du-lich` |
| Đề xuất tour đoàn công ty 2-3 phương án, gala, team building, ngân sách, ra slide | `kv:de-xuat-tour-mice-doan-cong-ty` |

### Dẫn đoàn và an toàn

| Việc của bạn | Gọi |
|---|---|
| Bài thuyết minh theo đối tượng và thời lượng, tách sử liệu với truyền thuyết | `kv:thuyet-minh-diem-tham-quan` |
| Bảng kiểm an toàn theo từng hoạt động: xe, biển, núi, sức khỏe, thời tiết, số khẩn cấp | `kv:checklist-an-toan-tour` |

### Khách sạn - lưu trú

| Việc của bạn | Gọi |
|---|---|
| Trả lời review Booking, Agoda, TripAdvisor, Google đúng mực, không lộ thông tin khách | `kv:tra-loi-review-khach-san` |
| Email xác nhận đặt phòng song ngữ Việt - Anh, kiểm số đêm, tổng tiền, mốc hủy | `kv:email-xac-nhan-dat-phong` |
| Phương án overbooking, kịch bản xin lỗi, mức hỗ trợ theo thẩm quyền, biên bản sự việc | `kv:xu-ly-overbooking-khieu-nai` |
| Kịch bản lễ tân nhận phòng, trả phòng song ngữ và các tình huống thường gặp | `kv:kich-ban-le-tan-check-in-out` |
| SOP dọn phòng, kiểm phòng, đồ thất lạc, an toàn hóa chất có tiêu chuẩn đạt | `kv:sop-buong-phong-khach-san` |
| Mô tả phòng và listing OTA song ngữ, đúng sự thật, có mục lưu ý trước khi đặt | `kv:mo-ta-phong-listing-ota` |

### Giá và hiệu quả kinh doanh phòng

| Việc của bạn | Gọi |
|---|---|
| Bảng giá phòng theo mùa, lễ Tết, cuối tuần, giá ròng theo kênh, kiểm nhất quán | `kv:gia-phong-theo-mua` |
| Báo cáo công suất, ADR, RevPAR, cơ cấu kênh, tỷ lệ hủy từ file đặt phòng | `kv:bao-cao-cong-suat-phong` |

### Dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Hồ sơ tour đoàn: gom yêu cầu -> lịch trình + báo giá -> gác cổng -> bàn giao | `kv:day-chuyen-ho-so-tour-doan` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Soát số tiền, giờ giấc, đơn giá trước khi gửi khách | `kv:kiem-tra-chong-bia` |
| Che hộ chiếu, CCCD, số điện thoại khách trước khi đưa dữ liệu vào AI | `kv:an-thong-tin-nhay-cam` |
| Email gửi báo giá, xin lỗi, làm việc với nhà cung cấp | `kv:viet-email` |
| In bảng kiểm ca trực, kiểm phòng, chuẩn bị đoàn | `kv:tao-bang-kiem` |
| Ghép dây chuyền riêng từ các agent của bộ | `kv:dieu-phoi-day-chuyen` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
| `kv:ghi-chu-hop` | Biến ghi chép, bản ghi âm chép lại thành biên bản họp + bảng đầu việc (ai, làm gì, hạn). Dùng khi nói "làm biên bản", "tóm tắt cuộc họp", "chốt đầu việc", "ghi chú họp". |
| `kv:ho-so-ca-nhan` | Phỏng vấn 8-10 câu để viết hồ sơ CLAUDE.md / AGENTS.md: vai trò, đơn vị, khách, giọng văn, từ cấm, quy tắc. Dùng khi nói "tạo hồ sơ", "cho AI biết về tôi", "viết CLAUDE.md", "cài đặt ban đầu". |
| `kv:lap-ke-hoach-tuan` | Xếp việc trong tuần theo giờ thật có được, ưu tiên rõ, dám nói khi không đủ giờ. Dùng khi nói "lên kế hoạch tuần", "tuần này làm gì trước", "việc nhiều quá", "xếp lịch giúp". |
| `kv:nghien-cuu-nguon-uy-tin` | Tra cứu tài liệu theo bậc nguồn uy tín, ghi trích dẫn đủ (đơn vị, năm, link, ngày truy cập), chỉ ra mâu thuẫn và chỗ chưa có nguồn. Dùng khi nói "tìm tài liệu", "nghiên cứu giúp", "nguồn nào nói". |
| `kv:tom-tat-tai-lieu` | Tóm tắt tài liệu dài (báo cáo, hợp đồng, công văn, PDF) thành ý chính có trích vị trí. Dùng khi nói "tóm tắt giúp", "đọc file này nói gì", "rút ý chính", "tài liệu dài quá". |
| `kv:viet-bao-cao` | Viết báo cáo công việc (tuần, tháng, dự án, sự cố) từ số liệu và ghi chú có sẵn, kết luận đặt đầu. Dùng khi nói "viết báo cáo", "báo cáo tuần", "tổng hợp kết quả", "làm báo cáo gửi sếp". |
| `kv:viet-de-cuong` | Lập đề cương cho báo cáo, bài giảng, đề tài nghiên cứu, đề án, thuyết minh, bài viết: mục phân cấp, nguồn dự kiến, độ dài, câu hỏi còn mở. Dùng khi nói "lập đề cương", "dàn ý", "khung bài". |
| `kv:viet-tin-nhan-cong-viec` | Soạn tin nhắn công việc qua Zalo, Teams, Messenger ngắn, đúng xưng hô, rõ việc. Dùng khi nói "nhắn sếp", "nhắn nhóm", "tin Zalo cho khách", "nhắc việc", "nhắn sao cho khéo". |
| `kv:xuat-excel` | Xuất bảng markdown/CSV thành Excel .xlsx: mỗi bảng một sheet, tiêu đề đậm, cố định dòng đầu, số kiểu Việt Nam, giữ công thức. Dùng khi nói "xuất Excel", "ra file xlsx", "chuyển bảng sang Excel". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |
| `kv:xuat-word` | Xuất nội dung đã duyệt thành file Word .docx theo kiểu tài liệu Việt Nam: công văn, tờ trình, quyết định, báo cáo, biên bản, hợp đồng. Dùng khi nói "xuất Word", "ra file docx", "làm thành công văn". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| ADR ròng theo kênh, NetRevPAR, đặt sớm/muộn, đánh đổi khi nhận đoàn từ file đặt phòng | `kv:quan-ly-doanh-thu-khach-san` |
| Kế hoạch mùa cao điểm: mục tiêu 3 mức, giá, kênh, giữ chỗ nhà cung cấp, lịch việc theo tuần | `kv:ke-hoach-kinh-doanh-mua-cao-diem` |
| Báo cáo tháng cho chủ đầu tư: GOP, RevPAR, GOPPAR so kế hoạch - cùng kỳ, giải trình chênh lệch | `kv:bao-cao-kinh-doanh-thang-chu-dau-tu` |
| Chương trình thành viên: hạng, quyền lợi có chi phí, phân hạng RFM từ dữ liệu ẩn danh, thể lệ | `kv:chuong-trinh-khach-than-thiet-luu-tru` |
| Chỉ số danh tiếng 0-100 gộp nhiều kênh, tỷ lệ và tốc độ phản hồi, xu hướng tháng | `kv:chi-so-danh-tieng-da-kenh` |
| Rà hợp đồng nhà xe, nhà hàng, khách sạn, đơn vị tàu: điều thiếu, bất lợi, lệch báo giá, an toàn | `kv:ra-soat-hop-dong-doi-tac-du-lich` |
| Lộ trình đào tạo 30-60-90 ngày có mốc năng lực, cách kiểm, phiếu đánh giá | `kv:lo-trinh-dao-tao-le-tan-buong-phong` |
| Bộ bài nói Việt - Anh cho cả tour khách quốc tế: đón, trên xe, tại điểm, phong tục, câu hỏi nhạy cảm | `kv:thuyet-minh-tour-inbound-song-ngu` |
| Kế hoạch khẩn cấp cho một tour: rủi ro tuyến, điều kiện DỪNG, phân vai, diễn tập, truyền thông | `kv:ke-hoach-ung-pho-khan-cap-tour` |
| Quyết toán đoàn: gom chứng từ -> đối chiếu dự toán, lãi lỗ -> gác cổng -> bàn giao | `kv:day-chuyen-quyet-toan-doan-tour` |
| Mở tuyến mới: nghiên cứu nhiều điểm song song -> lịch trình + giá thành 3 mùa -> gác cổng | `kv:day-chuyen-mo-tuyen-tour-moi` |

Mỗi skill Free đều có mục **"Bản Pro có thêm"** ở cuối file cho biết bản Pro làm sâu hơn những gì. Xem tại https://mochistudio.io.vn/kit-viet-pro

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
| `kv:gom-yeu-cau-doan-khach` | Thu thập - đọc thư mục đoàn khách (email yêu cầu, biên bản gọi, báo giá nhà cung cấp, chính sách giá), rút yêu cầu và đơn giá kèm vị trí, chỉ ra chỗ thiếu, mâu thuẫn. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-diem-den-du-lich` | Thu thập - tra cứu điểm đến trên web theo bậc nguồn du lịch (cơ quan du lịch, cổng địa phương, UNESCO > sách hướng dẫn, báo > review), trả tư liệu có nguồn, ngày truy cập. Được đọc web, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:soan-ho-so-tour` | Thực thi - từ kết quả thu thập, soạn nháp lịch trình tour theo ngày, bảng cấu thành chi phí, báo giá gửi khách, bảng kiểm an toàn vào thư mục .kv-run. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-noi-dung-khach-san` | Thực thi - soạn hàng loạt nội dung khách sạn vào file: phản hồi review, email xác nhận song ngữ, mô tả phòng OTA, SOP, kịch bản lễ tân, từ dữ liệu người dùng đưa. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-cam-ket-dich-vu-luu-tru` | Gác cổng - soát nội dung gửi khách (phản hồi review, email, listing, báo giá, thư xin lỗi): cam kết quá mức, đền bù chưa duyệt, lộ thông tin khách, sai chính sách, giọng không phù hợp. QUA/CHẶN. Chỉ đọc. | `Read, Glob, Grep` |
| `kv:soat-lich-trinh-bao-gia` | Gác cổng - soát độc lập lịch trình và báo giá tour: giờ giấc khả thi, số đêm số bữa khớp, phép tính chi phí, đơn giá có nguồn, lộ giá vốn, thông tin chưa xác nhận. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Hồ sơ tour đoàn | `kv:gom-yeu-cau-doan-khach` | `kv:soan-ho-so-tour` | `kv:soat-lich-trinh-bao-gia` | Chạy kv:day-chuyen-ho-so-tour-doan cho thư mục tour-doan/minh-phat-2027-04: lịch trình Đà Nẵng - Hội An 3N2Đ, báo giá 3 mốc 30-40-50 khách, bảng kiểm an toàn. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Khách lẻ hỏi tour đến báo giá** - Sales nhận yêu cầu tour gia đình, nhóm bạn, cần gửi chương trình và giá trong ngày

`kv:nghien-cuu-diem-den-du-lich` (Nắm nhanh điểm đến, mùa, điều cần xác nhận) -> `kv:thiet-ke-lich-trinh-tour` (Dựng chương trình theo ngày có đệm thời gian) -> `kv:bao-gia-tour-chi-phi` (Tính giá từ đơn giá nhà cung cấp, tách bản gửi khách) -> `kv:kiem-tra-chong-bia` (Soát số tiền, số đêm, số bữa) -> `kv:viet-email` (Email gửi chương trình và báo giá cho khách) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Đoàn công ty (MICE)** - Phòng nhân sự công ty khách gửi yêu cầu nghỉ mát, hội nghị, khen thưởng

`kv:gom-yeu-cau-doan-khach` (Gom yêu cầu và báo giá nhà cung cấp, chỉ chỗ thiếu) -> `kv:de-xuat-tour-mice-doan-cong-ty` (Đề xuất 2-3 phương án, ra slide đi gặp khách) -> `kv:day-chuyen-ho-so-tour-doan` (Khách chọn phương án, chạy hồ sơ lịch trình + báo giá có gác cổng) -> `kv:soat-cam-ket-dich-vu-luu-tru` (Soát cam kết trong báo giá gửi khách) -> `kv:xuat-pptx` (Xuất file PowerPoint để gửi, nộp hoặc lưu)

**Hướng dẫn viên chuẩn bị đoàn** - Trước ngày đi 2-3 ngày, HDV chuẩn bị bài nói và an toàn

`kv:nghien-cuu-diem-den-du-lich` (Tư liệu điểm tham quan có nguồn) -> `kv:thuyet-minh-diem-tham-quan` (Bài thuyết minh theo đối tượng khách và thời lượng) -> `kv:checklist-an-toan-tour` (Bảng kiểm an toàn theo chương trình) -> `kv:viet-tin-nhan-cong-viec` (Tin nhắn nhóm đoàn: giờ hẹn, đồ cần mang, lưu ý) -> `kv:xuat-pdf` (Xuất file PDF để gửi, nộp hoặc lưu)

**Review và khiếu nại hằng tuần** - Quản lý khách sạn xử lý review mới và sự việc trong tuần

`kv:xu-ly-overbooking-khieu-nai` (Xử lý các sự việc còn mở, ghi biên bản) -> `kv:tra-loi-review-khach-san` (Soạn phản hồi từng review theo ghi nhận nội bộ) -> `kv:soat-cam-ket-dich-vu-luu-tru` (Soát cam kết, dữ liệu khách trước khi đăng) -> `kv:viet-bao-cao` (Báo cáo tuần về chủ đề khách phàn nàn cho ban giám đốc) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Giá và công suất cuối tháng** - Chủ khách sạn, homestay xem lại tháng qua và chỉnh giá tháng tới

`kv:bao-cao-cong-suat-phong` (Tính OCC, ADR, RevPAR, kênh, hủy từ file đặt phòng) -> `kv:gia-phong-theo-mua` (Đề xuất chỉnh bảng giá mùa tới để chủ quyết) -> `kv:mo-ta-phong-listing-ota` (Cập nhật mô tả hạng phòng bán chậm) -> `kv:kiem-tra-chong-bia` (Soát số trước khi trình chủ) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

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

- ⭐ 11 skill chuyên sâu mới: quản trị doanh thu, kế hoạch mùa cao điểm, báo cáo chủ đầu tư (GOP, GOPPAR), chỉ số danh tiếng đa kênh, khách thân thiết RFM, rà hợp đồng đối tác, đào tạo 30-60-90 ngày, thuyết minh inbound, kế hoạch khẩn cấp
- ⭐ 2 dây chuyền mới có gác cổng QUA/CHẶN: quyết toán đoàn tour và mở tuyến tour mới (nghiên cứu nhiều điểm song song, giá thành 3 mùa) với 4 agent mới
- ⭐ 17 script Python chạy thật: công suất + OTB 30-60-90 ngày, giá động theo pickup, quy đổi âm - dương lịch, bảng giá 10 mốc khách có công thức Excel sống, quyết toán lãi lỗ, phân phòng theo ca, kiểm giờ xe
- ⭐ 15 skill free được nâng cấp với hơn 40 file mẫu: 30 khung tour, 12 email vòng đời song ngữ, 40 tình huống lễ tân, 25 kịch bản khiếu nại, 15 SOP buồng phòng, thư viện 20 gala + 30 trò team building
- ⭐ Danh bạ nguồn bậc 1 đủ 63 tỉnh cũ theo 34 đơn vị hành chính mới, lịch lễ Tết 2027-2029 tính bằng thuật toán âm lịch
- ⭐ Thêm tiếng Hàn, Trung, Nhật cho email, listing, câu chào lễ tân; giá vé, giờ mở cửa luôn [cần xác nhận], an toàn khách luôn đặt trước lịch trình

**Nâng cấp Pro:** https://mochistudio.io.vn/kit-viet-pro

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
