<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Tài chính - Ngân hàng - Bản Free

> Số có nguồn, công thức minh bạch, lời tư vấn không hứa suông - để người làm ngân hàng trình hồ sơ và gặp khách với cái đầu vững.

Bộ skill và agent tiếng Việt cho RM, thẩm định tín dụng, giao dịch viên, phân tích tài chính doanh nghiệp và tư vấn tài chính cá nhân: phân tích BCTC, tờ trình tín dụng, lịch trả nợ, dòng tiền dự án, so sánh sản phẩm, kịch bản tư vấn, nhận diện giao dịch bất thường, báo cáo danh mục. Lãi suất luôn chờ xác nhận, thông tin khách được che, AI chỉ chuẩn bị - phê duyệt thuộc cấp có thẩm quyền.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 34 | 13 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Chuyên viên quan hệ khách hàng (RM) doanh nghiệp và cá nhân · Chuyên viên thẩm định, phân tích tín dụng · Giao dịch viên, chuyên viên dịch vụ khách hàng tại quầy · Chuyên viên phân tích tài chính doanh nghiệp · Chuyên viên tư vấn tài chính cá nhân

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

### Thẩm định và tờ trình tín dụng

| Việc của bạn | Gọi |
|---|---|
| Lập checklist hồ sơ vay theo loại khách, soát file đã nộp, soạn tin báo khách phần còn thiếu | `kv:bang-kiem-ho-so-vay-von` |
| Tính chỉ số thanh khoản, đòn bẩy, hiệu quả, khả năng trả nợ và xu hướng từ BCTC khách đưa | `kv:phan-tich-bctc-doanh-nghiep-vay` |
| Dựng dòng tiền dự án, DSCR từng năm, NPV, IRR và độ nhạy | `kv:phan-tich-dong-tien-du-an-vay` |
| Rà pháp lý, chủ sở hữu, giá trị định giá, LTV và tính thanh khoản của TSBĐ | `kv:danh-gia-tai-san-bao-dam` |
| Nghiên cứu ngành của khách từ nguồn NHNN, thống kê, DN niêm yết, CTCK, có trích nguồn | `kv:nghien-cuu-nganh-khach-hang-vay` |
| Soạn khung tờ trình đề xuất cấp tín dụng 9 mục, rủi ro có biện pháp | `kv:to-trinh-tin-dung-khung` |

### Tư vấn khách hàng

| Việc của bạn | Gọi |
|---|---|
| Tính lịch trả nợ gốc đều hoặc niên kim, ưu đãi, ân hạn, công thức từng kỳ | `kv:lich-tra-no-khoan-vay` |
| So sánh tiền gửi, gói vay theo nhu cầu khách, quy về cùng thước đo | `kv:so-sanh-san-pham-tien-gui-vay` |
| Kịch bản tư vấn tại quầy, qua điện thoại, gặp mặt - hỏi nhu cầu trước, bán sau | `kv:kich-ban-tu-van-khach-ngan-hang` |
| Ngân sách, quỹ dự phòng, thứ tự trả nợ, mục tiêu tiết kiệm cho khách cá nhân | `kv:ke-hoach-tai-chinh-ca-nhan-khach` |
| Email chúc mừng, cảm ơn, nhắc đáo hạn cho khách ưu tiên, kín đáo, không lộ số dư | `kv:email-cham-soc-khach-vip-ngan-hang` |

### Danh mục, thu nợ, tuân thủ

| Việc của bạn | Gọi |
|---|---|
| Báo cáo dư nợ, huy động, quá hạn, đến hạn và việc tuần tới từ file xuất hệ thống | `kv:bao-cao-danh-muc-khach-hang-rm` |
| Thư, tin nhắn nhắc nợ theo mức, đúng số hệ thống, không đe dọa | `kv:thu-nhac-no-khach-vay` |
| Ghi nhận dấu hiệu lừa đảo, giao dịch bất thường để báo cấp trên, không tự kết luận | `kv:nhan-dien-giao-dich-bat-thuong` |
| Tóm tắt quy trình nội bộ thành bảng việc, thẩm quyền, ngưỡng, trích điều khoản | `kv:tom-tat-quy-dinh-noi-bo-ngan-hang` |

### Dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Tờ trình trọn gói: đọc hồ sơ -> lập bảng, soạn -> gác cổng -> bàn giao | `kv:day-chuyen-to-trinh-tin-dung` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Che CCCD, số tài khoản, số dư trước khi đưa dữ liệu khách vào AI | `kv:an-thong-tin-nhay-cam` |
| Soát số bịa, số tự suy trong tờ trình, bảng so sánh trước khi gửi | `kv:kiem-tra-chong-bia` |
| Email gửi khách, đối tác, phòng ban khác | `kv:viet-email` |
| Ghép dây chuyền riêng từ các agent của bộ | `kv:dieu-phoi-day-chuyen` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
| `kv:ghi-chu-hop` | Biến ghi chép, bản ghi âm chép lại thành biên bản họp + bảng đầu việc (ai, làm gì, hạn). Dùng khi nói "làm biên bản", "tóm tắt cuộc họp", "chốt đầu việc", "ghi chú họp". |
| `kv:ho-so-ca-nhan` | Phỏng vấn 8-10 câu để viết hồ sơ CLAUDE.md / AGENTS.md: vai trò, đơn vị, khách, giọng văn, từ cấm, quy tắc. Dùng khi nói "tạo hồ sơ", "cho AI biết về tôi", "viết CLAUDE.md", "cài đặt ban đầu". |
| `kv:lap-ke-hoach-tuan` | Xếp việc trong tuần theo giờ thật có được, ưu tiên rõ, dám nói khi không đủ giờ. Dùng khi nói "lên kế hoạch tuần", "tuần này làm gì trước", "việc nhiều quá", "xếp lịch giúp". |
| `kv:nghien-cuu-nguon-uy-tin` | Tra cứu tài liệu theo bậc nguồn uy tín, ghi trích dẫn đủ (đơn vị, năm, link, ngày truy cập), chỉ ra mâu thuẫn và chỗ chưa có nguồn. Dùng khi nói "tìm tài liệu", "nghiên cứu giúp", "nguồn nào nói". |
| `kv:tao-bang-kiem` | Tạo bảng kiểm (checklist) cho việc lặp lại hoặc dễ sót bước: mỗi mục kiểm được, có người và thời điểm. Dùng khi nói "làm checklist", "bảng kiểm", "danh sách việc cần làm khi...", "hay quên bước". |
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
| Mô hình FCFF, FCFE, WACC, NPV, IRR, MIRR, DSCR, LLCR, tornado và bảng 2 chiều, công thức sống trong Excel | `kv:mo-hinh-tai-chinh-du-an-dau-tu` |
| Chấm điểm xếp hạng tham khảo theo đúng bộ tiêu chí nội bộ người dùng đưa, chỉ ra dữ liệu thiếu và tiêu chí quyết định hạng | `kv:xep-hang-tin-dung-noi-bo-khung` |
| Phân tích ngành 7 phần có trích nguồn theo bậc, so DN cùng ngành, ma trận rủi ro 5x5 kèm biện pháp | `kv:phan-tich-nganh-chuyen-sau-tin-dung` |
| Tách luồng tiền sao kê: thu bán hàng, vay, nội bộ, nghĩa vụ định kỳ, đối tác lớn, đối chiếu doanh thu khai | `kv:phan-tich-sao-ke-luong-tien` |
| Rà 25 dấu hiệu cảnh báo sớm cho cả danh mục, mức Xanh/Vàng/Đỏ và việc cần làm | `kv:canh-bao-som-khoan-vay-ews` |
| Khung phương án cơ cấu nợ, so các cách giãn kỳ hạn, ân hạn với dòng tiền dự kiến của khách | `kv:phuong-an-tai-co-cau-no-vay` |
| Kế hoạch quý của RM: chỉ tiêu theo tháng, khách mục tiêu, pipeline có tỷ lệ chuyển đổi, lịch gặp 13 tuần | `kv:ke-hoach-phat-trien-khach-hang-rm-quy` |
| Đề xuất trọn gói cho DN từ chu kỳ tiền mặt: vốn lưu động, tài trợ thương mại, bảo lãnh, thanh toán, dòng tiền | `kv:goi-giai-phap-tai-chinh-doanh-nghiep` |
| Báo cáo KPI chi nhánh, phòng giao dịch so tiến độ thời gian, đơn vị chậm và việc tháng tới | `kv:bao-cao-kpi-chi-nhanh-ngan-hang` |
| Chương trình 4 tuần cho giao dịch viên mới: ca mẫu, đóng vai, bài kiểm tra có đáp án, phiếu đánh giá | `kv:dao-tao-giao-dich-vien-moi` |
| Thẩm định nhiều khâu: thu thập song song hồ sơ, ngành, tài khoản -> phân tích, chấm điểm -> 2 gác cổng -> bàn giao | `kv:day-chuyen-tham-dinh-tin-dung` |
| Rà mọi khách đến hạn tái cấp: phiếu từng khách, bảng 3 luồng đủ hồ sơ / thiếu / cần thẩm định sâu | `kv:day-chuyen-tai-cap-han-muc-hang-loat` |

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
| `kv:doc-ho-so-tin-dung` | Thu thập - đọc thư mục hồ sơ vay của một khách (BCTC, phương án, TSBĐ, CIC, giấy tờ pháp lý), trả bảng dữ kiện có nguồn, mâu thuẫn, còn thiếu, thông tin cần che. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-nganh-tai-chinh` | Thu thập - tra cứu thông tin ngành của khách vay và văn bản, thống kê chính thống theo bậc nguồn nghề ngân hàng (NHNN, thống kê, DN niêm yết, CTCK), ghi nguồn đủ trường. Chỉ đọc, được ra mạng, cấm ghi. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-bang-phan-tich-tin-dung` | Thực thi - lập bảng tính tín dụng ra file: chỉ số BCTC có công thức, nhu cầu vốn lưu động, lịch trả nợ, dòng tiền dự án, DSCR, LTV, tự kiểm tổng. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-to-trinh-tin-dung` | Thực thi - soạn nháp tờ trình tín dụng, mục TSBĐ, phần ngành, thư gửi khách từ bảng dữ kiện và bảng tính đã có; sửa theo bảng lỗi gác cổng. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-to-trinh-tin-dung` | Gác cổng - soát độc lập tờ trình và bảng tính tín dụng: số trái nguồn, công thức sai, rủi ro thiếu biện pháp, kết luận vượt thẩm quyền, lộ dữ liệu. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |
| `kv:soat-tuan-thu-tu-van-tai-chinh` | Gác cổng - soát tài liệu gửi khách (so sánh sản phẩm, kịch bản, email, slide, thư nhắc nợ): lãi suất chưa xác nhận, hứa lợi nhuận, khuyến nghị đầu tư, đe dọa, lộ thông tin. QUA/CHẶN. Chỉ đọc. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Tờ trình tín dụng trọn gói | `kv:doc-ho-so-tin-dung` | `kv:soan-to-trinh-tin-dung` | `kv:soat-to-trinh-tin-dung` | Chạy kv:day-chuyen-to-trinh-tin-dung cho thư mục tin-dung/khach/KH0412/ho-so, đề xuất hạn mức vốn lưu động 15 tỷ, 12 tháng. Dùng mẫu tờ trình trong quy-dinh/mau-to-trinh.md. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Hồ sơ vay doanh nghiệp từ đầu đến tờ trình** - Khách SME mới đề nghị vay, RM cần gom hồ sơ, phân tích và lên tờ trình

`kv:bang-kiem-ho-so-vay-von` (Lập checklist, soát file khách nộp, báo phần thiếu) -> `kv:phan-tich-bctc-doanh-nghiep-vay` (Tính chỉ số và xu hướng 2-3 kỳ, câu hỏi cho khách) -> `kv:nghien-cuu-nganh-khach-hang-vay` (Viết phần ngành có trích nguồn) -> `kv:danh-gia-tai-san-bao-dam` (Rà TSBĐ, tính LTV) -> `kv:to-trinh-tin-dung-khung` (Ghép thành tờ trình 9 mục) -> `kv:kiem-tra-chong-bia` (Soát số trước khi trình) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Tư vấn khách cá nhân muốn vay** - Khách hỏi vay mua nhà, mua xe, cần biết sức trả nợ và chọn gói

`kv:ke-hoach-tai-chinh-ca-nhan-khach` (Dựng dòng tiền tháng, tỷ lệ trả nợ hiện tại) -> `kv:lich-tra-no-khoan-vay` (Lịch trả nợ các gói, kỳ nặng nhất) -> `kv:so-sanh-san-pham-tien-gui-vay` (Bảng so sánh gói vay theo nhu cầu khách) -> `kv:soat-tuan-thu-tu-van-tai-chinh` (Gác cổng lãi suất, lời hứa, bảo mật) -> `kv:xuat-pptx` (Slide trình bày cho khách)

**Cuối tháng của RM** - Tổng kết danh mục, nhắc khoản quá hạn, chăm sóc khách sắp đáo hạn

`kv:bao-cao-danh-muc-khach-hang-rm` (Báo cáo dư nợ, huy động, quá hạn, đến hạn) -> `kv:thu-nhac-no-khach-vay` (Soạn nhắc nợ theo mức cho khoản quá hạn) -> `kv:soat-chinh-ta-giong-van` (Soát giọng văn thư nhắc nợ) -> `kv:email-cham-soc-khach-vip-ngan-hang` (Email nhắc đáo hạn cho khách ưu tiên) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Thấy giao dịch lạ** - Giao dịch viên hoặc RM thấy dấu hiệu khách bị lừa hoặc giao dịch đáng ngờ

`kv:an-thong-tin-nhay-cam` (Che định danh trong sao kê, ghi chú) -> `kv:nhan-dien-giao-dich-bat-thuong` (Ghi nhận dấu hiệu khách quan, mức khẩn) -> `kv:soat-bao-mat` (Soát bản ghi nhận không lộ thông tin) -> `kv:viet-tin-nhan-cong-viec` (Tin báo cấp trên qua kênh nội bộ) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Thẩm định dự án trung dài hạn** - Khách vay đầu tư nhà xưởng, máy móc, cần kiểm khả năng trả nợ từng năm

`kv:doc-ho-so-tin-dung` (Đọc phương án, BCTC, TSBĐ, trả bảng dữ kiện) -> `kv:phan-tich-dong-tien-du-an-vay` (Dòng tiền, DSCR, NPV, IRR, độ nhạy) -> `kv:lich-tra-no-khoan-vay` (Lịch vay có ân hạn khớp tiến độ dự án) -> `kv:soat-to-trinh-tin-dung` (Gác cổng công thức và giả định) -> `kv:xuat-excel` (File Excel có công thức đính kèm tờ trình)

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

- ⭐ 12 skill chuyên sâu mới và 5 agent mới, trong đó 2 dây chuyền: thẩm định nhiều khâu có 2 gác cổng, tái cấp hạn mức hàng loạt phân 3 luồng
- ⭐ 23 script Python chạy ngay: lịch trả nợ theo ngày thực tế và nghỉ lễ, 31 chỉ số BCTC, mô hình dự án 6 sheet công thức sống, EWS 25 dấu hiệu, luồng tiền sao kê, chấm điểm xếp hạng
- ⭐ Thư viện dựng sẵn: 30 kịch bản tư vấn, 40 mẫu dấu hiệu lừa đảo, 25 mẫu email khách VIP, 12 mẫu nhắc nợ, 44 điều kiện giảm rủi ro, 20 bẫy giả định
- ⭐ Danh mục hồ sơ 12 sản phẩm, bảng kiểm 8 loại TSBĐ, khung 15 ngành hay vay vốn và ma trận rủi ro ngành 5x5
- ⭐ Mọi lãi suất, phí gắn nhãn [cần xác nhận]; điểm xếp hạng, mức EWS, phân luồng tái cấp đều ghi rõ là tham khảo, phê duyệt thuộc cấp có thẩm quyền

**Nâng cấp Pro:** https://mochistudio.io.vn/kit-viet-pro

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
