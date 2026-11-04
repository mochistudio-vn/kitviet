<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Xuất nhập khẩu - Logistics - Bản Free

> Chứng từ khớp từng con số, mã HS có căn cứ, cước so trên cùng mặt bằng - để lô hàng thông quan không phải chờ.

Bộ skill và agent tiếng Việt cho nhân viên chứng từ, khai báo hải quan, sales/ops logistics, forwarder và mua hàng quốc tế: soát chéo bộ chứng từ, chuẩn bị số liệu tờ khai, tra mã HS và chính sách từ nguồn chính thống, so báo giá cước, tính landed cost, đàm phán song ngữ, rà hợp đồng và L/C, xử lý claim. Mã HS và thuế suất luôn là đề xuất cần xác nhận trên biểu thuế hiện hành; AI chỉ chuẩn bị, người khai và người ký chịu trách nhiệm.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 32 | 12 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Nhân viên chứng từ, khai báo hải quan · Sales và ops logistics, forwarder · Nhân viên mua hàng quốc tế · Chủ doanh nghiệp nhỏ tự nhập hàng

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-xuat-nhap-khau@kitviet

# Hoặc dùng CLI (cần Node.js 18+): --ai claude, codex, cursor, copilot, gemini, windsurf... (kitviet platforms)
npx github:mochistudio-vn/kitviet init xuat-nhap-khau --ai claude
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

### Chứng từ và khai báo hải quan

| Việc của bạn | Gọi |
|---|---|
| Đối chiếu chéo invoice, packing list, B/L, C/O, hợp đồng - bắt lệch tên, số kiện, trọng lượng, mã HS | `kv:soat-bo-chung-tu-xnk` |
| Lập bảng số liệu nhập tờ khai: trị giá tính thuế, mã HS đề xuất, thuế dự tính, câu hỏi cho người khai | `kv:chuan-bi-to-khai-hai-quan` |
| Nghiên cứu mã HS, thuế, giấy phép, kiểm tra chuyên ngành từ nguồn chính thống, có trích nguồn | `kv:tra-cuu-ma-hs-chinh-sach` |
| So thuế MFN với ưu đãi FTA, chọn mẫu C/O khả thi và tính phần tiết kiệm | `kv:chon-uu-dai-thue-fta` |

### Cước, chi phí và vận hành lô hàng

| Việc của bạn | Gọi |
|---|---|
| Đưa báo giá nhiều forwarder về cùng mặt bằng: cước, phụ phí, local charge, free time | `kv:so-sanh-bao-gia-cuoc` |
| Tính giá vốn hàng nhập về kho, phân bổ từng mã hàng, có bảng độ nhạy tỷ giá, cước | `kv:tinh-landed-cost` |
| Bảng theo dõi booking, cut-off, ETD/ETA, free time, cảnh báo lô sắp trễ | `kv:theo-doi-booking-lich-tau` |
| Cập nhật tình trạng lô hàng cho khách, rõ việc khách cần làm, bản email và Zalo | `kv:bao-cao-lo-hang-cho-khach` |
| Giữ quyền khiếu nại, gom bằng chứng, lịch hạn và thư claim gửi hãng tàu, bảo hiểm, nhà cung cấp | `kv:xu-ly-claim-hang-hu-hong` |

### Hợp đồng, thanh toán, đàm phán

| Việc của bạn | Gọi |
|---|---|
| Giải thích Incoterms 2020 áp vào lô hàng: điểm chuyển rủi ro, chi phí, bảo hiểm, bẫy hay gặp | `kv:giai-thich-incoterms` |
| Rà hợp đồng mua bán quốc tế theo vị thế bên mua/bán, đề xuất câu sửa song ngữ | `kv:ra-soat-hop-dong-ngoai-thuong` |
| Soát L/C: điều khoản mềm, mốc ngày, chứng từ khó làm, lệch hợp đồng, danh sách tu chỉnh | `kv:soat-dieu-khoan-lc` |
| Email song ngữ Anh - Việt đàm phán giá, MOQ, thanh toán, sửa chứng từ, nhắc chậm hàng | `kv:email-dam-phan-nha-cung-cap` |

### Dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Hồ sơ một lô hàng: gom chứng từ -> lập đối chiếu, số liệu tờ khai -> gác cổng chứng từ và khai báo -> bàn giao | `kv:day-chuyen-ho-so-lo-hang` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Soát số bịa, số tự suy trước khi gửi báo cáo, bảng số liệu cho khách, sếp | `kv:kiem-tra-chong-bia` |
| Che số tài khoản, giá vốn, điểm dừng đàm phán trước khi gửi đối tác | `kv:an-thong-tin-nhay-cam` |
| Email thường ngày với forwarder, hãng tàu, khách trong nước | `kv:viet-email` |
| Khung xếp bậc và trích nguồn dùng cho tra cứu chính sách | `kv:nghien-cuu-nguon-uy-tin` |
| Xuất bảng đối chiếu, landed cost, theo dõi lô hàng ra Excel | `kv:xuat-excel` |
| Xuất thư, bản rà soát hợp đồng, hồ sơ claim ra Word | `kv:xuat-word` |
| Ghép dây chuyền riêng từ các agent của bộ | `kv:dieu-phoi-day-chuyen` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
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
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| So tổng chi phí FCL, LCL, air, đường bộ, đường sắt gồm vốn tồn trên đường và rủi ro trễ, tìm điểm hòa vốn | `kv:toi-uu-chi-phi-logistics-tuyen` |
| Lịch đặt hàng ngược từ mùa bán: lượng đặt, ngày đặt muộn nhất, số cont, giá về kho, dòng tiền trả NCC | `kv:ke-hoach-nhap-hang-theo-mua` |
| Scorecard KPI nhà cung cấp: đúng hạn, lỗi chứng từ, lỗi C/O, chất lượng, phản hồi, giá - xếp hạng A/B/C | `kv:danh-gia-nha-cung-cap-quoc-te` |
| Gộp nhiều file theo dõi, trạng thái từng lô, ngoại lệ Cao/Vừa/Thấp, việc cần xử lý hôm nay | `kv:control-tower-lo-hang` |
| Dự báo P50/P80 thời gian thông quan từ lịch sử doanh nghiệp, chỉ ra lô có nguy cơ trễ hạn giao | `kv:du-bao-thong-quan-cham-hang` |
| Checklist hồ sơ xin C/O theo FTA, bảng định mức, tính RVC, soát chuyển đổi mã số cho hàng xuất | `kv:ho-so-xin-co-hang-xuat` |
| Rà 12 nhóm điều khoản hợp đồng ủy thác XNK theo vị thế, phân định trách nhiệm khai báo, truy thu | `kv:ra-soat-hop-dong-uy-thac-xnk` |
| Lộ trình 30 ngày, bài tập trên chứng từ thật đã che, 22 câu kiểm tra có đáp án, bảng đánh giá | `kv:dao-tao-nhan-vien-chung-tu` |
| Đấu thầu cước: RFQ -> gom hồ sơ chào -> chấm có trọng số -> gác cổng -> đề xuất chính/dự phòng theo tuyến | `kv:day-chuyen-dau-thau-cuoc` |
| Báo cáo XNK tháng cho ban giám đốc: gom số liệu -> KPI và báo cáo -> gác cổng số liệu -> Word/slide | `kv:day-chuyen-bao-cao-xnk-thang` |

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
| `kv:gom-chung-tu-lo-hang` | Thu thập - kiểm kê chứng từ trong thư mục một lô hàng XNK (invoice, PL, B/L, C/O, hợp đồng, L/C), trích các trường dữ liệu kèm vị trí, chỉ ra chứng từ thiếu. Chỉ đọc file, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-chinh-sach-hai-quan` | Thu thập - tra mã HS khả dĩ, thuế suất, giấy phép, kiểm tra chuyên ngành, quy tắc xuất xứ FTA trên nguồn chính thống (Cục Hải quan, Bộ Công Thương, văn bản pháp luật), trả kèm nguồn. Chỉ đọc và tra mạng, cấm ghi. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-bang-doi-chieu-xnk` | Thực thi - từ danh mục chứng từ đã thu thập, lập bảng đối chiếu chéo, thông tin chung và dòng hàng cho tờ khai, landed cost, ghi vào .kv-run/. Được ghi file trong thư mục làm việc, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chung-tu-xnk` | Gác cổng chứng từ - soát độc lập bảng đối chiếu và số liệu lô hàng với chứng từ gốc: lệch các bên, số kiện, trọng lượng, trị giá, C/O, B/L. Trả QUA hoặc CHẶN. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-khai-bao-hai-quan` | Gác cổng khai báo - soát số liệu tờ khai nháp: mã HS có căn cứ và mức tin cậy, trị giá tính thuế, công thức thuế, tham số không nguồn, chính sách mặt hàng chưa kiểm. Trả QUA hoặc CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Hồ sơ một lô hàng | `kv:gom-chung-tu-lo-hang` | `kv:lap-bang-doi-chieu-xnk` | `kv:soat-chung-tu-xnk` | Chạy kv:day-chuyen-ho-so-lo-hang cho thư mục xnk/2026-11/NK-2611-04, nhập kinh doanh, có C/O Form E, phân bổ cước theo trị giá. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Lô hàng nhập về** - Nhận bộ chứng từ từ nhà cung cấp đến khi có bảng số liệu tờ khai và báo khách

`kv:soat-bo-chung-tu-xnk` (Đối chiếu chéo chứng từ nháp, gửi yêu cầu sửa trước khi NCC phát hành bản gốc) -> `kv:chuan-bi-to-khai-hai-quan` (Lập bảng dòng hàng, trị giá tính thuế, mã HS đề xuất) -> `kv:soat-khai-bao-hai-quan` (Gác cổng rủi ro khai báo trước khi nhập phần mềm) -> `kv:tinh-landed-cost` (Tính giá vốn về kho cho kế toán và phòng kinh doanh) -> `kv:bao-cao-lo-hang-cho-khach` (Báo khách/ban giám đốc mốc thông quan và việc cần làm) -> `kv:xuat-pdf` (Xuất file PDF để gửi, nộp hoặc lưu)

**Mặt hàng mới, nhà cung cấp mới** - Trước khi đặt hàng lần đầu: biết mã HS, chính sách, ưu đãi và giá về kho

`kv:tra-cuu-ma-hs-chinh-sach` (Tra mã HS khả dĩ, giấy phép, kiểm tra chuyên ngành từ nguồn bậc 1) -> `kv:chon-uu-dai-thue-fta` (So MFN với các FTA, chọn mẫu C/O nhà cung cấp làm được) -> `kv:tinh-landed-cost` (Tính giá về kho theo phương án thuế đã chọn) -> `kv:email-dam-phan-nha-cung-cap` (Email song ngữ chốt giá, Incoterms, yêu cầu C/O) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Chọn forwarder và đặt chỗ** - Có nhiều báo giá cước, cần chọn và theo dõi đến khi tàu chạy

`kv:so-sanh-bao-gia-cuoc` (Đưa báo giá về cùng mặt bằng, chọn phương án chính và dự phòng) -> `kv:giai-thich-incoterms` (Kiểm phần cước, phí nào thuộc mình theo điều kiện giao hàng) -> `kv:theo-doi-booking-lich-tau` (Đưa booking vào bảng theo dõi, đặt mốc cut-off) -> `kv:bao-cao-lo-hang-cho-khach` (Báo khách lịch tàu và việc cần chuẩn bị) -> `kv:xuat-pdf` (Xuất file PDF để gửi, nộp hoặc lưu)

**Ký hợp đồng có thanh toán L/C** - Đối tác gửi hợp đồng và L/C nháp, cần rà trước khi ký và giao hàng

`kv:ra-soat-hop-dong-ngoai-thuong` (Rà điều khoản theo vị thế, đối chiếu thỏa thuận email) -> `kv:soat-dieu-khoan-lc` (Soát L/C với hợp đồng, lập danh sách tu chỉnh) -> `kv:email-dam-phan-nha-cung-cap` (Email song ngữ đề nghị sửa hợp đồng và tu chỉnh L/C) -> `kv:kiem-tra-chong-bia` (Soát số tiền, ngày, tên trước khi gửi) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Hàng về bị hư hỏng** - Phát hiện tổn thất khi nhận hàng, cần giữ quyền khiếu nại và báo khách

`kv:xu-ly-claim-hang-hu-hong` (Việc gấp 48 giờ, lịch hạn, thư thông báo tổn thất) -> `kv:giai-thich-incoterms` (Xác định điểm chuyển rủi ro để biết đòi ai) -> `kv:bao-cao-lo-hang-cho-khach` (Báo khách tổn thất và hướng xử lý) -> `kv:xuat-pdf` (Xuất file PDF để gửi, nộp hoặc lưu)

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

- ⭐ 19 script Python chạy thật (thư viện chuẩn): landed cost ra Excel đủ công thức, đối chiếu chứng từ cả tháng, DEM/DET bậc thang, trích email booking, control tower, dự báo thông quan P50/P80, RVC, chấm thầu
- ⭐ 10 skill chuyên sâu mới: control tower, dự báo thông quan, kế hoạch nhập theo mùa, tối ưu tuyến, scorecard NCC, hồ sơ C/O hàng xuất, hợp đồng ủy thác, đào tạo 30 ngày và 2 dây chuyền
- ⭐ 2 dây chuyền mới có gác cổng độc lập: đấu thầu cước vận tải (RFQ đến đề xuất theo tuyến) và báo cáo XNK tháng cho ban giám đốc
- ⭐ Thư viện 40 email XNK song ngữ, 69 mã phụ phí logistics, 30 bất hợp lệ L/C hay gặp, 15 tình huống tranh chấp Incoterms
- ⭐ Bảng tra FTA theo 17 nhóm đối tác và bảng kiểm C/O 14 trường cho mẫu D, E, AK, AJ, VJ, RCEP, EUR.1, tự chứng nhận
- ⭐ Dây chuyền hồ sơ lô mở rộng: biến thể bộ chứng từ L/C, hàng xuất, chạy hàng loạt cả tháng và nhật ký soát làm bằng chứng kiểm tra sau thông quan

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
