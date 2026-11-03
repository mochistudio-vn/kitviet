<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Môi giới bất động sản - Bản Free

> Tin đăng đúng sổ, phương án vay đủ cả giai đoạn thả nổi, pháp lý hỏi đúng chỗ - bán nhanh mà không mất uy tín.

Bộ skill cho người làm môi giới nhà phố, căn hộ, đất nền và cho thuê ở Việt Nam: viết tin đăng đa kênh, lọc khách, so sánh căn, tính vay ngân hàng, lập bảng kiểm pháp lý, rà hợp đồng cọc, chăm sóc khách và báo cáo tuần sàn. Mọi bước đều chống thổi phồng: diện tích theo sổ, không cam kết lợi nhuận, không tung tin quy hoạch thiếu nguồn, che thông tin cá nhân chủ nhà và khách.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 36 | 14 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Môi giới nhà phố, căn hộ, đất nền · Nhân viên sàn giao dịch bất động sản · Trưởng nhóm kinh doanh bất động sản · Chủ nhà và người cho thuê nhà, phòng trọ

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add nguyenducthang1997/kitviet
/plugin install kv-bat-dong-san@kitviet

# Hoặc dùng CLI (cần Node.js 18+), --ai claude | codex | desktop | all
npx github:nguyenducthang1997/kitviet init bat-dong-san --ai claude
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

### Nguồn hàng và tin đăng

| Việc của bạn | Gọi |
|---|---|
| Viết tin đăng batdongsan, Chợ Tốt, Facebook, Zalo đúng diện tích sổ, không thổi phồng | `kv:viet-tin-dang-nha-dat` |
| Lên kịch bản video tour TikTok/Reels và chuỗi bài mạng xã hội cho căn đang bán | `kv:kich-ban-video-tour-nha` |
| Chạy trọn dây chuyền: đọc hồ sơ căn -> soạn tin -> gác cổng trước khi đăng | `kv:day-chuyen-ho-so-can-ban` |
| Đăng cho thuê, trả lời khách thuê, rà hợp đồng thuê, làm biên bản bàn giao | `kv:kich-ban-cho-thue-nha` |
| Dựng bộ giới thiệu căn (brochure) 6-8 trang gửi khách, xuất PDF hoặc PPTX | `kv:ho-so-gioi-thieu-can-nha` |

### Tư vấn khách

| Việc của bạn | Gọi |
|---|---|
| Lọc khách: ngân sách, tài chính, mục đích, người quyết định, mức nóng | `kv:ho-so-nhu-cau-khach-bds` |
| So sánh 2-5 căn hoặc dự án theo tiêu chí và trọng số của chính khách | `kv:so-sanh-can-ho-du-an` |
| Soạn lời tư vấn khi khách chê giá, muốn chờ, chưa yên tâm pháp lý | `kv:xu-ly-tu-choi-khach-bds` |
| Tin cảm ơn, trả lời câu treo và lịch chăm sóc sau buổi dẫn xem nhà | `kv:cham-soc-sau-xem-nha` |
| Ghi lại buổi gặp khách, chủ nhà: đã chốt gì, chưa chốt gì, ai làm gì | `kv:ghi-chu-gap-khach-bds` |
| Lịch và tin chăm sóc khách đã mua, đã thuê, khách nguội; xin giới thiệu đúng mực | `kv:cham-soc-khach-cu-bds` |

### Tài chính, giá và pháp lý

| Việc của bạn | Gọi |
|---|---|
| Tính trả góp dư nợ giảm dần, ưu đãi rồi thả nổi, tháng nặng nhất, tỷ lệ trả nợ | `kv:tinh-phuong-an-vay-mua-nha` |
| Ra khoảng giá tham khảo từ căn so sánh, có điều chỉnh minh bạch (không phải thẩm định giá) | `kv:dinh-gia-tham-khao-nha-dat` |
| Biết phải hỏi gì về sổ, quy hoạch, tranh chấp, thế chấp và tra ở đâu | `kv:bang-kiem-phap-ly-nha-dat` |
| Rà hợp đồng đặt cọc, mua bán theo 12 câu hỏi trước khi ký | `kv:ra-soat-hop-dong-dat-coc` |

### Thị trường và quản lý sàn

| Việc của bạn | Gọi |
|---|---|
| Nghiên cứu quy hoạch, lộ giới, hạ tầng khu vực theo bậc nguồn chính thức, mỗi ý có trích nguồn | `kv:nghien-cuu-quy-hoach-khu-vuc` |
| Mô tả khu vực: tiện ích, hạ tầng có nguồn chính thức, mặt bằng giá chào | `kv:phan-tich-khu-vuc-bds` |
| Báo cáo tuần: phễu khách, cọc, giao dịch, giỏ hàng, việc tuần tới | `kv:bao-cao-tuan-san-bds` |

### Dùng kèm từ bộ chung (core)

| Việc của bạn | Gọi |
|---|---|
| Che CCCD, số sổ, số tài khoản trước khi gửi hồ sơ vào nhóm | `kv:an-thong-tin-nhay-cam` |
| Soát số liệu bài phân tích, phương án gửi khách trước khi gửi | `kv:kiem-tra-chong-bia` |
| Nhắn Zalo cho chủ nhà, đồng nghiệp, ngân hàng gọn và rõ | `kv:viet-tin-nhan-cong-viec` |
| Xếp lịch dẫn khách, gọi lại, đi thực địa trong tuần | `kv:lap-ke-hoach-tuan` |
| Ghép dây chuyền tùy ý khi cần quy trình khác dây chuyền sẵn có | `kv:dieu-phoi-day-chuyen` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
| `kv:ghi-chu-hop` | Biến ghi chép, bản ghi âm chép lại thành biên bản họp + bảng đầu việc (ai, làm gì, hạn). Dùng khi nói "làm biên bản", "tóm tắt cuộc họp", "chốt đầu việc", "ghi chú họp". |
| `kv:ho-so-ca-nhan` | Phỏng vấn 8-10 câu để viết hồ sơ CLAUDE.md / AGENTS.md: vai trò, đơn vị, khách, giọng văn, từ cấm, quy tắc. Dùng khi nói "tạo hồ sơ", "cho AI biết về tôi", "viết CLAUDE.md", "cài đặt ban đầu". |
| `kv:nghien-cuu-nguon-uy-tin` | Tra cứu tài liệu theo bậc nguồn uy tín, ghi trích dẫn đủ (đơn vị, năm, link, ngày truy cập), chỉ ra mâu thuẫn và chỗ chưa có nguồn. Dùng khi nói "tìm tài liệu", "nghiên cứu giúp", "nguồn nào nói". |
| `kv:tao-bang-kiem` | Tạo bảng kiểm (checklist) cho việc lặp lại hoặc dễ sót bước: mỗi mục kiểm được, có người và thời điểm. Dùng khi nói "làm checklist", "bảng kiểm", "danh sách việc cần làm khi...", "hay quên bước". |
| `kv:tom-tat-tai-lieu` | Tóm tắt tài liệu dài (báo cáo, hợp đồng, công văn, PDF) thành ý chính có trích vị trí. Dùng khi nói "tóm tắt giúp", "đọc file này nói gì", "rút ý chính", "tài liệu dài quá". |
| `kv:viet-bao-cao` | Viết báo cáo công việc (tuần, tháng, dự án, sự cố) từ số liệu và ghi chú có sẵn, kết luận đặt đầu. Dùng khi nói "viết báo cáo", "báo cáo tuần", "tổng hợp kết quả", "làm báo cáo gửi sếp". |
| `kv:viet-de-cuong` | Lập đề cương cho báo cáo, bài giảng, đề tài nghiên cứu, đề án, thuyết minh, bài viết: mục phân cấp, nguồn dự kiến, độ dài, câu hỏi còn mở. Dùng khi nói "lập đề cương", "dàn ý", "khung bài". |
| `kv:viet-email` | Soạn email công việc tiếng Việt đúng xưng hô, rõ việc cần người nhận làm. Dùng khi nói "viết email", "trả lời mail này", "soạn thư gửi khách", "mail nhắc", "viết lại cho lịch sự". |
| `kv:xuat-excel` | Xuất bảng markdown/CSV thành Excel .xlsx: mỗi bảng một sheet, tiêu đề đậm, cố định dòng đầu, số kiểu Việt Nam, giữ công thức. Dùng khi nói "xuất Excel", "ra file xlsx", "chuyển bảng sang Excel". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |
| `kv:xuat-word` | Xuất nội dung đã duyệt thành file Word .docx theo kiểu tài liệu Việt Nam: công văn, tờ trình, quyết định, báo cáo, biên bản, hợp đồng. Dùng khi nói "xuất Word", "ra file docx", "làm thành công văn". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Yield gộp, yield ròng, dòng tiền 10 năm sau trả nợ theo 3 kịch bản thuê, cảnh báo năm âm | `kv:phan-tich-dau-tu-cho-thue-bds` |
| So 2-5 gói vay: tổng chi phí theo mốc tất toán, phí trả trước, bảo hiểm, tháng hòa vốn | `kv:so-sanh-goi-vay-ngan-hang` |
| Chuẩn bị thương lượng giá: khoảng giá có căn cứ, nhượng bộ phi giá, tin chuyển lời hai bên | `kv:kich-ban-dam-phan-gia-bds` |
| Nhận ký gửi: phiếu thông tin có nguồn, danh mục giấy tờ, giá chào, điều khoản, kế hoạch bán 30 ngày | `kv:ho-so-ky-gui-nha-dat` |
| Soát giỏ hàng: tồn lâu, lâu không cập nhật, ký gửi sắp hết hạn, trùng căn, lệch giá | `kv:quan-ly-gio-hang-bds` |
| Sales kit dự án: bảng nguồn chủ đầu tư, pháp lý dạng câu hỏi kiểm, FAQ, câu cấm nói | `kv:sales-kit-du-an-bds` |
| Kế hoạch mở bán: phễu ngược, kênh - ngân sách - KPI theo tuần, rủi ro quảng cáo sai | `kv:ke-hoach-marketing-du-an-bds` |
| Chương trình chăm khách 3-5 năm và chính sách cảm ơn người giới thiệu minh bạch | `kv:chuong-trinh-gioi-thieu-khach-bds` |
| Lộ trình 30-60-90 ngày cho nhân viên mới: bài học, kiểm tra, đóng vai chấm điểm | `kv:dao-tao-nhan-vien-san-bds` |
| Báo cáo thị trường khu vực theo quý, tách giá chào - giá giao dịch, mỗi số có nguồn | `kv:bao-cao-thi-truong-quy-bds` |
| Đọc ảnh sổ, giấy tờ, dự thảo cọc -> bảng kiểm dòng đỏ -> gác cổng trước khi chuyển cọc | `kv:day-chuyen-phap-ly-truoc-coc` |
| Nhu cầu -> so sánh căn -> phương án vay -> gác cổng số liệu, ra một PDF gửi khách | `kv:day-chuyen-tu-van-khach-tron-goi` |

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
| `kv:doc-ho-so-nha-dat` | Thu thập - đọc thư mục hồ sơ một căn hoặc một khách (ghi chú chủ nhà, bản chép sổ, báo giá vay), trả bảng dữ kiện có nguồn, mâu thuẫn và thông tin cần che. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-khu-vuc-bds` | Thu thập - tra web về một khu vực nhà đất: tiện ích, giao thông, hạ tầng, quy hoạch đã công bố, tin rao để tham khảo giá chào; mỗi dòng có nguồn, ngày, mức tin cậy. Chỉ đọc và tra cứu, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-phuong-an-vay-bds` | Thực thi - lập phương án vay mua nhà ra file: lịch trả nợ dư nợ giảm dần, giai đoạn ưu đãi và thả nổi theo nhiều kịch bản, tỷ lệ trả nợ/thu nhập, công thức. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-tin-dang-bds` | Thực thi - soạn tin đăng nhà đất cho batdongsan, Chợ Tốt, Facebook, Zalo chỉ từ bảng dữ kiện đã thu thập, ghi ra file nháp. Được ghi file trong thư mục làm việc, cấm ra mạng, cấm đăng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-nguon-quy-hoach-bds` | Gác cổng nguồn quy hoạch, hạ tầng trong ghi chú nghiên cứu, bài phân tích khu vực, brochure nhà đất - mỗi khẳng định phải có nguồn bậc 1-2, trạng thái không bị nâng. Trả QUA/CHẶN. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-phuong-an-vay-bds` | Gác cổng phương án vay mua nhà - kiểm công thức dư nợ giảm dần, giai đoạn thả nổi, nguồn lãi suất, tổng gốc, tỷ lệ trả nợ/thu nhập, câu hứa duyệt vay. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-tin-dang-bds` | Gác cổng tin đăng nhà đất - bắt cam kết lợi nhuận, tin quy hoạch không nguồn, diện tích lệch sổ, pháp lý làm đẹp, lộ thông tin chủ nhà; trả bảng lỗi và kết luận đăng được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Hồ sơ căn mới ký gửi -> tin đăng đã gác cổng | `kv:doc-ho-so-nha-dat` | `kv:soan-tin-dang-bds` | `kv:soat-tin-dang-bds` | Dùng kv:day-chuyen-ho-so-can-ban cho thư mục can-ban/GV-0201/, cần tin batdongsan, nhóm Facebook và Zalo. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Căn mới ký gửi -> tin đăng -> bộ giới thiệu căn** - Nhận căn ký gửi, cần tin đăng đã gác cổng và brochure gửi khách ở xa

`kv:day-chuyen-ho-so-can-ban` (Đọc hồ sơ căn, soạn tin đa kênh, gác cổng, bàn giao trong .kv-run/) -> `kv:ho-so-gioi-thieu-can-nha` (Dựng brochure 7 trang từ bảng dữ kiện đã duyệt) -> `kv:soat-tin-dang-bds` (Soát số liệu, pháp lý, lời lẽ trong brochure) -> `kv:kich-ban-video-tour-nha` (Lên kịch bản video tour cùng thông tin) -> `kv:xuat-pdf` (Xuất file PDF để gửi, nộp hoặc lưu)

**Khách cần vay -> chọn căn -> phương án vay** - Khách mới có ngân sách và cần vay ngân hàng

`kv:ho-so-nhu-cau-khach-bds` (Lọc ngân sách, thu nhập, khoản nợ đang có, người quyết định) -> `kv:so-sanh-can-ho-du-an` (So 2-5 căn theo trọng số của khách) -> `kv:tinh-phuong-an-vay-mua-nha` (Lập lịch trả nợ, ưu đãi rồi thả nổi, tháng nặng nhất) -> `kv:soat-phuong-an-vay-bds` (Gác cổng công thức, nguồn lãi suất, tỷ lệ trả nợ) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Khách hỏi quy hoạch khu vực** - Khách hỏi "khu này có quy hoạch gì", "đất có dính lộ giới không"

`kv:nghien-cuu-quy-hoach-khu-vuc` (Chia câu hỏi con, đặt bậc nguồn, ghi chú có trích nguồn) -> `kv:tra-cuu-khu-vuc-bds` (Tra cổng quy hoạch, sở ngành, báo chính thống) -> `kv:soat-nguon-quy-hoach-bds` (Chặn khẳng định thiếu nguồn bậc 1-2, trạng thái bị nâng) -> `kv:phan-tich-khu-vuc-bds` (Đưa phần đã qua soát vào bản phân tích gửi khách) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Trước buổi đặt cọc** - Khách đã chọn căn, sắp ký cọc

`kv:bang-kiem-phap-ly-nha-dat` (Liệt kê dòng đỏ về sổ, thế chấp, đồng sở hữu, quy hoạch) -> `kv:ra-soat-hop-dong-dat-coc` (Rà dự thảo cọc, ra câu hỏi mang đi hỏi công chứng viên) -> `kv:an-thong-tin-nhay-cam` (Che CCCD, số sổ trước khi gửi nhóm) -> `kv:soat-bao-mat` (Soát lần cuối thông tin cá nhân trong file chia sẻ) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Sau buổi xem -> giữ khách lâu dài** - Dẫn khách xem xong, muốn chăm đúng nhịp và có khách giới thiệu

`kv:ghi-chu-gap-khach-bds` (Ghi điều đã chốt, câu còn treo, việc cần làm) -> `kv:cham-soc-sau-xem-nha` (Tin cảm ơn, trả lời câu treo, lịch 2 tuần) -> `kv:cham-soc-khach-cu-bds` (Đưa khách vào nhóm chăm dài hạn, xin giới thiệu khi đã giao dịch) -> `kv:lap-ke-hoach-tuan` (Xếp lịch gọi, nhắn trong tuần) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

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

- ⭐ 2 dây chuyền mới: pháp lý trước cọc (gác cổng dòng đỏ) và tư vấn khách trọn gói ra 1 PDF, kèm bản hàng loạt cho cả thư mục căn ký gửi
- ⭐ 10 script python chạy được ngay: lịch trả nợ và so sánh 3 gói vay có điểm hòa vốn, dòng tiền cho thuê 10 năm, soát giỏ hàng, gộp phễu cả nhóm, kiểm tin đăng, so sánh 2 bản hợp đồng, tính tiền thuê nhiều phòng
- ⭐ Bảng hơn 60 cụm từ thổi phồng kèm cách viết lại, mẫu tin 8 loại bất động sản, 30 móc video và lịch nội dung 30 ngày
- ⭐ Bảng kiểm pháp lý riêng 6 loại tài sản, bộ câu hỏi 5 loại hợp đồng, 8 điều khoản mẫu và danh mục nơi tra cứu theo 34 tỉnh thành mới
- ⭐ Thư viện 40 câu từ chối, 4 kịch bản cuộc gọi, 20 + 30 tin chăm sóc theo dịp và bài đóng vai chấm điểm 10 tiêu chí trung thực
- ⭐ 12 skill Pro mới: phân tích đầu tư cho thuê, so gói vay, sales kit, kế hoạch mở bán, đàm phán giá, đào tạo 30-60-90 ngày, báo cáo thị trường quý...

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
