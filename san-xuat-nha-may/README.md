<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Sản xuất - Nhà máy - Bản Free

> Số ca đúng, lỗi tìm tới gốc, an toàn nêu trước - để nhà máy chạy bằng dữ liệu thật chứ không bằng báo cáo đẹp.

Bộ skill và agent tiếng Việt cho kỹ sư sản xuất, QC/QA, trưởng ca, kế hoạch sản xuất, cán bộ ISO và an toàn ở nhà máy Việt Nam: báo cáo ca, 5 Why - xương cá, NCR - CAPA, kiểm tra đầu vào, WI/SOP tại máy, 5S, kế hoạch tuần theo năng lực máy, OEE, bảo trì phòng ngừa, chuẩn bị đánh giá ISO, đánh giá rủi ro an toàn, báo cáo sự cố và KPI tháng. Không đổ lỗi cá nhân, không bịa thông số; quy định ATVSLĐ luôn được dặn kiểm tra bản hiện hành, người có thẩm quyền duyệt và ký.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 33 | 13 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Kỹ sư sản xuất, kỹ sư cải tiến · QC đầu vào, QC công đoạn, QA · Trưởng ca, tổ trưởng, quản đốc xưởng · Nhân viên kế hoạch sản xuất (PPC), bảo trì · Cán bộ ISO, cán bộ an toàn - vệ sinh lao động

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

### Ca sản xuất, kế hoạch và hiệu suất máy

| Việc của bạn | Gọi |
|---|---|
| Biến ghi chú, tin Zalo nhóm ca thành báo cáo ca: sản lượng, phế, dừng máy, an toàn, bàn giao | `kv:bao-cao-ca-san-xuat` |
| Xếp đơn hàng vào máy theo năng lực thật, chỉ ra máy quá tải và đơn có nguy cơ trễ | `kv:ke-hoach-san-xuat-tuan-theo-may` |
| Tính OEE khả dụng x hiệu suất x chất lượng, quy đổi tổn thất ra phút, công thức từng bước | `kv:tinh-oee-tu-so-lieu` |
| Kế hoạch PM theo hạng máy: hạng mục, chu kỳ có nguồn, LOTO, lịch dừng máy, phụ tùng | `kv:ke-hoach-bao-tri-phong-ngua` |

### Chất lượng: lỗi, khắc phục, đầu vào, nhà cung cấp

| Việc của bạn | Gọi |
|---|---|
| 5 Why và xương cá 6M không đổ lỗi, có IS / IS NOT và kế hoạch kiểm chứng | `kv:phan-tich-nguyen-nhan-goc-loi` |
| Phiếu không phù hợp và CAPA có người, hạn, tiêu chí xác nhận hiệu quả | `kv:bao-cao-ncr-capa` |
| Kế hoạch IQC: chỉ tiêu, dụng cụ, cỡ mẫu theo phương án nhà máy, xử lý lô lỗi | `kv:ke-hoach-kiem-tra-dau-vao-iqc` |
| Chấm điểm nhà cung cấp từ số liệu lô đạt, giao hàng, NCR; nêu điểm đỏ, đề xuất hành động | `kv:danh-gia-nha-cung-cap-vat-tu` |

### Tại nơi làm việc

| Việc của bạn | Gọi |
|---|---|
| WI/SOP dán tại máy: bước - điểm chính - lý do, ký hiệu an toàn, chất lượng | `kv:soan-wi-sop-tai-may` |
| Checklist 5S theo khu, chấm điểm có bằng chứng, việc cải tiến có người và hạn | `kv:checklist-5s-nha-xuong` |
| Chương trình đào tạo công nhân mới: hội nhập, an toàn, thao tác 4 bước, bài kiểm tra tay nghề | `kv:dao-tao-cong-nhan-moi` |

### An toàn lao động và ISO

| Việc của bạn | Gọi |
|---|---|
| Nhận diện mối nguy, chấm rủi ro theo ma trận nhà máy, biện pháp theo thứ bậc kiểm soát | `kv:danh-gia-rui-ro-an-toan-lao-dong` |
| Báo cáo sự cố, tai nạn, suýt tai nạn theo dòng thời gian, trung tính, nhắc khai báo | `kv:bao-cao-su-co-tai-nan-nha-may` |
| Bảng kiểm ISO 9001/14001/45001 theo điều khoản bạn đưa, tìm lỗ hổng hồ sơ, tra nguồn uy tín | `kv:chuan-bi-danh-gia-iso` |

### Dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Báo cáo KPI tháng: gom dữ liệu ca -> lập số và nhận xét -> soát số liệu, an toàn -> bàn giao | `kv:day-chuyen-bao-cao-kpi-nha-may` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Soát số bịa, số tự suy trước khi gửi báo cáo cho tập đoàn, khách hàng | `kv:kiem-tra-chong-bia` |
| Che tên, CCCD, số điện thoại công nhân trước khi phổ biến báo cáo sự cố | `kv:an-thong-tin-nhay-cam` |
| Bảng kiểm khác ngoài 5S: đầu ca, giao ca, kiểm tra xe nâng | `kv:tao-bang-kiem` |
| Tin nhắn Zalo giao kế hoạch, nhắc CAPA quá hạn cho các tổ | `kv:viet-tin-nhan-cong-viec` |
| Xuất OEE, kế hoạch tuần, IQC, đánh giá NCC ra Excel giữ công thức | `kv:xuat-excel` |
| Xuất báo cáo KPI tháng thành slide họp | `kv:xuat-pptx` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dieu-phoi-day-chuyen` | Giao thức chạy Kit Việt cho việc nhiều khâu - lập kế hoạch, thu thập, soạn, gác cổng QUA/CHẶN, bàn giao trong .kv-run/. Dùng khi nói "chạy dây chuyền", "làm từ A đến Z", "đọc rồi viết rồi soát". |
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
| `kv:ghi-chu-hop` | Biến ghi chép, bản ghi âm chép lại thành biên bản họp + bảng đầu việc (ai, làm gì, hạn). Dùng khi nói "làm biên bản", "tóm tắt cuộc họp", "chốt đầu việc", "ghi chú họp". |
| `kv:ho-so-ca-nhan` | Phỏng vấn 8-10 câu để viết hồ sơ CLAUDE.md / AGENTS.md: vai trò, đơn vị, khách, giọng văn, từ cấm, quy tắc. Dùng khi nói "tạo hồ sơ", "cho AI biết về tôi", "viết CLAUDE.md", "cài đặt ban đầu". |
| `kv:lap-ke-hoach-tuan` | Xếp việc trong tuần theo giờ thật có được, ưu tiên rõ, dám nói khi không đủ giờ. Dùng khi nói "lên kế hoạch tuần", "tuần này làm gì trước", "việc nhiều quá", "xếp lịch giúp". |
| `kv:nghien-cuu-nguon-uy-tin` | Tra cứu tài liệu theo bậc nguồn uy tín, ghi trích dẫn đủ (đơn vị, năm, link, ngày truy cập), chỉ ra mâu thuẫn và chỗ chưa có nguồn. Dùng khi nói "tìm tài liệu", "nghiên cứu giúp", "nguồn nào nói". |
| `kv:tom-tat-tai-lieu` | Tóm tắt tài liệu dài (báo cáo, hợp đồng, công văn, PDF) thành ý chính có trích vị trí. Dùng khi nói "tóm tắt giúp", "đọc file này nói gì", "rút ý chính", "tài liệu dài quá". |
| `kv:viet-bao-cao` | Viết báo cáo công việc (tuần, tháng, dự án, sự cố) từ số liệu và ghi chú có sẵn, kết luận đặt đầu. Dùng khi nói "viết báo cáo", "báo cáo tuần", "tổng hợp kết quả", "làm báo cáo gửi sếp". |
| `kv:viet-de-cuong` | Lập đề cương cho báo cáo, bài giảng, đề tài nghiên cứu, đề án, thuyết minh, bài viết: mục phân cấp, nguồn dự kiến, độ dài, câu hỏi còn mở. Dùng khi nói "lập đề cương", "dàn ý", "khung bài". |
| `kv:viet-email` | Soạn email công việc tiếng Việt đúng xưng hô, rõ việc cần người nhận làm. Dùng khi nói "viết email", "trả lời mail này", "soạn thư gửi khách", "mail nhắc", "viết lại cho lịch sự". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |
| `kv:xuat-word` | Xuất nội dung đã duyệt thành file Word .docx theo kiểu tài liệu Việt Nam: công văn, tờ trình, quyết định, báo cáo, biên bản, hợp đồng. Dùng khi nói "xuất Word", "ra file docx", "làm thành công văn". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Biểu đồ X-R, I-MR, p và Cp/Cpk/Ppk từ số đo thật, công thức và hằng số minh bạch, 4 quy tắc tín hiệu | `kv:kiem-soat-qua-trinh-spc` |
| PFMEA theo từng bước lưu đồ, chấm theo thang nhà máy/khách, ưu tiên hành động, nối kế hoạch kiểm soát | `kv:fmea-qua-trinh-san-xuat` |
| Sổ thiết bị đo, nhắc hạn 30/7 ngày, xử lý thiết bị ngoài giới hạn và đánh giá ảnh hưởng lô hàng | `kv:quan-ly-hieu-chuan-thiet-bi-do` |
| A3 Kaizen có số trước - sau đo cùng cách, lợi ích có phép tính, chuẩn hóa | `kv:kaizen-cai-tien-co-do-luong` |
| Takt, số trạm tối thiểu, gán công đoạn theo thứ tự công nghệ, hiệu suất chuyền, Yamazumi | `kv:can-bang-chuyen-san-xuat` |
| Bung BOM nhiều tầng, trừ tồn, tồn an toàn, MOQ, ngày đặt muộn nhất, cảnh báo trễ | `kv:tinh-nhu-cau-vat-tu-mrp-bom` |
| TPM máy mô hình, bảo trì tự quản 7 bước, chuẩn CIL, thẻ bất thường, KPI so với nền | `kv:chuong-trinh-tpm-nha-may` |
| Chương trình năm theo rủi ro, kế hoạch đợt, checklist theo bộ phận, phát hiện có bằng chứng, báo cáo | `kv:danh-gia-noi-bo-iso-day-du` |
| Khung báo cáo chất thải, nước thải, khí thải đối chiếu giấy phép, dặn kiểm tra biểu mẫu hiện hành | `kv:bao-cao-moi-truong-khi-thai` |
| Khiếu nại -> NCR, 8D D0-D8, thư song ngữ -> soát logic 8D và số liệu độc lập -> bàn giao | `kv:day-chuyen-khieu-nai-khach-hang-8d` |
| Rà danh mục, thư mục hồ sơ -> bảng lỗ hổng theo bộ phận -> soát bằng chứng độc lập -> bàn giao | `kv:day-chuyen-ho-so-danh-gia-iso` |
| Thu thập nhiều xưởng, nhiều bộ phận ISO, nhiều khiếu nại cùng lúc | `kv:dieu-phoi-song-song` |
| Thư 8D, WI, tài liệu đào tạo Việt - Anh / Trung / Hàn | `kv:viet-song-ngu` |
| Xuất NCR, 8D, WI, báo cáo KPI theo mẫu logo, mã biểu mẫu, ô ký của nhà máy | `kv:mau-tai-lieu-thuong-hieu` |
| Slide KPI tháng 9 trang, A3 Kaizen, báo cáo TPM | `kv:tao-slide` |
| Dựng file Excel OEE 4 sheet có công thức và thác nước | `kv:xu-ly-bang-tinh` |

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
| `kv:doc-du-lieu-san-xuat` | Thu thập - đọc báo cáo ca, CSV sản lượng, dừng máy, sổ NCR, sổ sự cố, phiếu IQC trong thư mục; trả bảng dữ kiện có vị trí nguồn, ca thiếu, số mâu thuẫn, sự cố an toàn. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-tieu-chuan-nha-may` | Thu thập - tra tình trạng, phiên bản tiêu chuẩn ISO/TCVN, văn bản ATVSLĐ, môi trường, chất lượng trên nguồn chính thống; trả bảng có nguồn, ngày truy cập. Không chép nguyên văn tiêu chuẩn. Cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-bang-so-lieu-san-xuat` | Thực thi - lập bảng KPI, OEE, tải máy, kế hoạch tuần, điểm nhà cung cấp, Pareto lỗi thành file CSV/MD trong thư mục chạy, mỗi số có công thức và nguồn. Cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-ho-so-nha-may` | Thực thi - soạn nháp báo cáo ca, báo cáo KPI tháng, NCR/CAPA, WI, báo cáo sự cố, kế hoạch IQC theo skill khuôn mẫu, từ bảng dữ kiện đã thu thập. Chỉ ghi trong .kv-run, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-an-toan-nha-may` | Gác cổng an toàn và thẩm quyền - soát văn bản nhà máy: sự cố bị bỏ sót, làm nhẹ, câu đổ lỗi, tự kết luận đạt/đóng NCR, thông số an toàn tự đặt, quy định không dặn kiểm tra hiện hành. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |
| `kv:soat-so-lieu-chat-luong` | Gác cổng số liệu sản xuất - chất lượng: soát công thức KPI, OEE, tỷ lệ phế, PPM, tổng, đơn vị, định nghĩa, số không nguồn trong bản nháp; kết luận QUA/CHẶN. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Báo cáo KPI nhà máy tháng | `kv:doc-du-lieu-san-xuat` | `kv:lap-bang-so-lieu-san-xuat` | `kv:soat-so-lieu-chat-luong` | Chạy kv:day-chuyen-bao-cao-kpi-nha-may cho tháng 10/2026, nguồn 01-bao-cao-ca/2026-10, 02-chat-luong/, 04-an-toan/. KPI và định nghĩa theo CLAUDE.md. Ra PPTX trình họp và Excel số liệu. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Lỗi chất lượng tới CAPA đóng được** - Ca báo lỗi lặp hoặc khách khiếu nại, cần đi từ hiện tượng tới hành động khắc phục có kiểm chứng

`kv:bao-cao-ca-san-xuat` (Chốt số lượng lỗi, máy, ca, lô bị cách ly từ ghi chú ca) -> `kv:phan-tich-nguyen-nhan-goc-loi` (IS / IS NOT, xương cá 6M, 5 Why có bằng chứng, kế hoạch kiểm chứng) -> `kv:bao-cao-ncr-capa` (Lập NCR, ngăn chặn, CAPA có người, hạn, tiêu chí hiệu quả) -> `kv:soan-wi-sop-tai-may` (Cập nhật WI theo hành động khắc phục) -> `kv:xuat-word` (Xuất phiếu NCR và WI để ký, ban hành)

**Kế hoạch tuần có số hiệu suất thật** - Thứ Sáu lập kế hoạch tuần tới, không muốn xếp theo năng lực lý thuyết 100%

`kv:tinh-oee-tu-so-lieu` (Tính OEE tuần qua từng máy, lấy hệ số hiệu suất thực tế) -> `kv:ke-hoach-bao-tri-phong-ngua` (Lấy giờ dừng PM tuần tới để trừ năng lực) -> `kv:ke-hoach-san-xuat-tuan-theo-may` (Xếp đơn, cân tải, chỉ ra máy quá tải và đơn có nguy cơ trễ) -> `kv:xuat-excel` (Xuất kế hoạch có công thức % tải để các tổ theo dõi)

**Sự cố an toàn trong ca** - Có tai nạn hoặc suýt tai nạn, cần báo cáo đúng sự thật trong ngày và đánh giá lại rủi ro

`kv:bao-cao-su-co-tai-nan-nha-may` (Báo cáo ban đầu theo dòng thời gian, xử lý đã làm, nhắc khai báo) -> `kv:soat-an-toan-nha-may` (Gác cổng: chi tiết bị bỏ sót, câu đổ lỗi, câu vượt thẩm quyền) -> `kv:danh-gia-rui-ro-an-toan-lao-dong` (Đánh giá lại rủi ro công đoạn, biện pháp theo thứ bậc kiểm soát) -> `kv:an-thong-tin-nhay-cam` (Ẩn danh bản phổ biến rút kinh nghiệm) -> `kv:xuat-pdf` (Xuất bản chốt để lãnh đạo ký và lưu hồ sơ)

**Chuẩn bị đánh giá ISO** - Còn 2-4 tuần tới đánh giá giám sát hoặc nội bộ, cần biết hồ sơ nào còn thiếu

`kv:chuan-bi-danh-gia-iso` (Bảng kiểm theo điều khoản bạn đưa, đối chiếu hồ sơ, xếp lỗ hổng) -> `kv:tra-cuu-tieu-chuan-nha-may` (Tra phiên bản tiêu chuẩn, hiệu lực văn bản pháp luật trên nguồn chính thống) -> `kv:danh-gia-rui-ro-an-toan-lao-dong` (Cập nhật bảng đánh giá rủi ro hết hạn) -> `kv:bao-cao-ncr-capa` (Đóng hoặc cập nhật CAPA còn mở có bằng chứng) -> `kv:xuat-excel` (Xuất bảng lỗ hổng để giao việc từng bộ phận)

**Nhà cung cấp và kiểm tra đầu vào** - Cuối quý chấm điểm nhà cung cấp, siết kiểm tra với nhà cung cấp kém

`kv:danh-gia-nha-cung-cap-vat-tu` (Chấm điểm từ số liệu lô đạt, giao hàng, NCR; nêu điểm đỏ) -> `kv:ke-hoach-kiem-tra-dau-vao-iqc` (Chuyển mức kiểm chặt cho nhà cung cấp hạng thấp) -> `kv:viet-email` (Thư thông báo kết quả và yêu cầu cải tiến gửi nhà cung cấp) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

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

- ⭐ 11 skill Pro mới: SPC/Cpk, PFMEA, Kaizen A3, cân bằng chuyền, MRP từ BOM, hiệu chuẩn, đánh giá nội bộ ISO, TPM, báo cáo môi trường và 2 dây chuyền
- ⭐ 2 dây chuyền mới có gác cổng độc lập: khiếu nại khách hàng 8D (2 agent soát song song) và hồ sơ đánh giá ISO, tối đa 2 vòng CHẶN
- ⭐ 18 script Python chạy được ngay: SPC X-R/I-MR/p + Cpk, OEE hàng loạt + TEEP/MTBF, xếp lịch tuần + so sánh 3 kịch bản, MRP nhiều tầng, cân bằng chuyền + Yamazumi
- ⭐ 15 skill Free được nâng cấp: Pareto lỗi, kiểm chéo sản lượng với bộ đếm máy, sổ CAPA tự động, rà thư mục hồ sơ ISO và WI, nhắc hạn kiểm định 60/30/7 ngày
- ⭐ Thư viện dựng sẵn: mối nguy 7 ngành, nguyên nhân tiềm năng 6 công nghệ, checklist 5S 6 khu, chỉ tiêu IQC 6 loại vật tư, 8D D0-D8, giấy phép làm việc 3 loại
- ⭐ Song ngữ Việt - Anh / Trung / Hàn cho WI, đào tạo, thư 8D và thư nhà cung cấp, cùng bảng thuật ngữ an toàn thống nhất

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
