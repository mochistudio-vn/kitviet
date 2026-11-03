<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Nhà hàng - F&B - Bản Free

> Giá vốn tính từ hóa đơn thật, dị ứng ghi đúng từng món - để quán đông khách mà vẫn có lời.

Bộ skill và agent tiếng Việt cho chủ quán cafe, nhà hàng, quản lý cửa hàng, bếp trưởng và người làm marketing F&B: tính food cost theo công thức định lượng, làm menu có dòng dị ứng, đặt nguyên liệu, xếp ca, SOP vệ sinh an toàn thực phẩm, checklist ca, trả lời review, khuyến mãi có tính lãi, báo cáo doanh thu. Mọi quy định ATTP, PCCC, khuyến mại đều được nhắc kiểm tra văn bản hiện hành; AI chuẩn bị, chủ quán quyết và tự đăng, tự nộp.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 31 | 12 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Chủ quán cafe, nhà hàng, quán ăn · Quản lý cửa hàng, quản lý ca · Bếp trưởng, trưởng quầy pha chế · Người làm marketing F&B

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add nguyenducthang1997/kitviet
/plugin install kv-nha-hang-fnb@kitviet

# Hoặc dùng CLI (cần Node.js 18+), --ai claude | codex | desktop | all
npx github:nguyenducthang1997/kitviet init nha-hang-fnb --ai claude
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

### Giá vốn, menu, nguyên liệu

| Việc của bạn | Gọi |
|---|---|
| Tính giá vốn món từ công thức định lượng, có hao hụt sơ chế, ra % food cost và giá bán đề xuất | `kv:tinh-food-cost-mon` |
| Sắp bố cục menu, viết mô tả món, ghi đúng chất gây dị ứng, bản cho app giao đồ ăn | `kv:thiet-ke-menu-mo-ta-mon` |
| Tính số cần đặt theo tồn đếm, mức dùng, lịch giao; cảnh báo hàng gần hết hạn | `kv:nhap-nguyen-lieu-ton-kho-bep` |

### Vận hành bếp và ca

| Việc của bạn | Gọi |
|---|---|
| SOP ATTP từ nhận hàng đến phục vụ, có biểu mẫu và xử lý sự cố | `kv:sop-ve-sinh-an-toan-thuc-pham` |
| Checklist mở ca, giao ca, đóng ca: két tiền, thiết bị, gas điện, đồ thừa | `kv:checklist-mo-dong-ca-quan` |
| Xếp lịch ca tuần theo lượng khách, ngày nghỉ đăng ký, giới hạn giờ làm | `kv:xep-lich-ca-nhan-vien-quan` |
| Lộ trình và cẩm nang đào tạo phục vụ, thu ngân, pha chế mới, có bài kiểm tra | `kv:dao-tao-nhan-vien-phuc-vu` |
| Checklist giấy phép mở quán có tra nguồn chính thống: đăng ký kinh doanh, ATTP, PCCC, rượu bia | `kv:ho-so-giay-phep-fnb` |

### Khách, khuyến mãi, doanh thu

| Việc của bạn | Gọi |
|---|---|
| Trả lời review Google Maps, Foody/ShopeeFood, GrabFood và xử lý khiếu nại tại bàn | `kv:phan-hoi-review-khieu-nai-quan` |
| Thiết kế combo, giờ vàng, deal app có bảng lãi và ngưỡng hòa | `kv:khuyen-mai-quan-tinh-lai` |
| Lịch bài và caption Facebook, TikTok, Instagram, Zalo OA, Google Maps cho quán | `kv:noi-dung-mxh-quan-an` |
| Báo cáo doanh thu ngày/tuần từ file POS và app: theo kênh, giờ, món, việc cần kiểm | `kv:bao-cao-doanh-thu-quan` |

### Dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Ra món mới: gom công thức, hóa đơn -> food cost + mô tả menu -> gác cổng dị ứng và giá vốn | `kv:day-chuyen-ra-mat-mon-moi` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Soát giá, số liệu, khẳng định trước khi in menu hay gửi báo cáo | `kv:kiem-tra-chong-bia` |
| Che tên, số điện thoại khách và thông tin nhân viên trước khi đưa vào AI | `kv:an-thong-tin-nhay-cam` |
| Tin nhắn Zalo báo lịch ca, nhắc nhà cung cấp, thông báo nội bộ | `kv:viet-tin-nhan-cong-viec` |
| Biến quy trình thành bảng kiểm in ra cho ca | `kv:tao-bang-kiem` |
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
| `kv:viet-email` | Soạn email công việc tiếng Việt đúng xưng hô, rõ việc cần người nhận làm. Dùng khi nói "viết email", "trả lời mail này", "soạn thư gửi khách", "mail nhắc", "viết lại cho lịch sự". |
| `kv:xuat-excel` | Xuất bảng markdown/CSV thành Excel .xlsx: mỗi bảng một sheet, tiêu đề đậm, cố định dòng đầu, số kiểu Việt Nam, giữ công thức. Dùng khi nói "xuất Excel", "ra file xlsx", "chuyển bảng sang Excel". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |
| `kv:xuat-word` | Xuất nội dung đã duyệt thành file Word .docx theo kiểu tài liệu Việt Nam: công văn, tờ trình, quyết định, báo cáo, biên bản, hợp đồng. Dùng khi nói "xuất Word", "ra file docx", "làm thành công văn". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Rà menu theo quý: món ngôi sao, ngựa kéo, câu đố, cần bỏ theo kênh và độ phức tạp bếp; quyết giữ, đổi giá, bỏ món | `kv:ra-soat-menu-engineering-quy` |
| P&L quản trị tháng: giá vốn thực tế, prime cost, khấu hao đầu tư, so ngân sách, nhiều cơ sở, hòa vốn | `kv:lap-pnl-thang-cua-hang-fnb` |
| Chương trình 8 tuần giảm hao hụt: đo thu hồi sơ chế, đặt chuẩn chia phần, theo dõi chênh kho và sổ hủy | `kv:chuong-trinh-giam-hao-hut-bep` |
| Rà hợp đồng nhà cung cấp theo 10 nhóm điều khoản: giá, chất lượng, chứng từ ATTP, đổi trả, công nợ | `kv:ra-soat-hop-dong-ncc-nguyen-lieu` |
| Thiết kế chương trình khách thân thiết: tích điểm, hạng, chi phí mỗi khách quay lại, đồng ý dữ liệu cá nhân | `kv:chuong-trinh-thanh-vien-quan-an` |
| Chiến dịch theo mùa/lễ: mục tiêu có số nền, ưu đãi tính lãi, lịch đa kênh, chuẩn bị bếp và ca, đo kết quả | `kv:chien-dich-marketing-mua-le-fnb` |
| Tuyển và đào tạo bếp theo bậc: ma trận kỹ năng, bài test tay nghề, lộ trình 30-60-90 ngày, kế cận | `kv:lo-trinh-tuyen-dao-tao-bep` |
| Mở chi nhánh: khảo sát mặt bằng -> dự toán, hòa vốn - hoàn vốn 3 kịch bản -> gác cổng dự toán độc lập | `kv:day-chuyen-mo-chi-nhanh-fnb` |
| Audit chuỗi: 29 tiêu chí, gom phiếu có bằng chứng -> chấm, xếp hạng -> gác cổng không cho lỗi ATTP bị bù điểm | `kv:day-chuyen-audit-chat-luong-chuoi` |

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
| `kv:doc-so-lieu-quan-an` | Thu thập - đọc thư mục của quán (công thức, hóa đơn nhập, nhãn nguyên liệu, file POS, tồn kho), trả bảng dữ kiện kèm vị trí nguồn, chỗ thiếu và mâu thuẫn. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-quy-dinh-fnb` | Thu thập - tra quy định hiện hành về ATTP, đăng ký kinh doanh, PCCC, rượu bia, hóa đơn, khuyến mại cho quán ăn/cafe trên nguồn chính thống, ghi nguồn và ngày truy cập. Chỉ đọc, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:soan-tai-lieu-quan-an` | Thực thi - soạn bản nháp cho quán từ dữ kiện đã thu thập: bảng food cost, giá đề xuất, mô tả menu và dòng dị ứng, SOP, checklist, lịch ca, báo cáo. Được ghi file trong thư mục làm việc, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-di-ung-attp-mon` | Gác cổng dị ứng và ATTP - soát menu, mô tả món, SOP, bài đăng: dòng dị ứng thiếu/sai, nhãn chay sai, claim sức khỏe, quy định không nguồn. Chỉ đọc, cấm sửa, cấm ra mạng; kết luận QUA/CHẶN. | `Read, Glob, Grep` |
| `kv:soat-gia-von-lai-quan` | Gác cổng giá vốn và lãi - soát bảng food cost, giá bán đề xuất, khuyến mãi, báo cáo doanh thu: sai đơn vị, thiếu hao hụt, sai VAT, thiếu bao bì, phí app chưa xác nhận. Chỉ đọc, cấm sửa; QUA/CHẶN. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Ra mắt món mới | `kv:doc-so-lieu-quan-an` | `kv:soan-tai-lieu-quan-an` | `kv:soat-di-ung-attp-mon` | Chạy kv:day-chuyen-ra-mat-mon-moi cho thư mục menu/dong-2026-11: 4 món, food cost mục tiêu 32%, bán tại quán và GrabFood. Gác cổng thêm kv:soat-gia-von-lai-quan. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Lên món mới từng bước** - Khi chỉ thêm 1-2 món và muốn tự kiểm từng khâu

`kv:tinh-food-cost-mon` (Tính giá vốn từ công thức và hóa đơn nhập, ra 2-3 mức giá) -> `kv:soat-gia-von-lai-quan` (Soát độc lập quy đổi, hao hụt, VAT, bao bì) -> `kv:thiet-ke-menu-mo-ta-mon` (Viết tên, mô tả, dòng dị ứng theo giá đã chốt) -> `kv:soat-di-ung-attp-mon` (Soát dị ứng, nhãn chay, claim trước khi in) -> `kv:xuat-pdf` (Xuất trang menu để in hoặc làm menu QR)

**Chốt tuần của quản lý cửa hàng** - Tối Chủ nhật hoặc sáng thứ Hai: nhìn số tuần qua, đặt hàng, xếp ca tuần tới

`kv:bao-cao-doanh-thu-quan` (Báo cáo tuần từ file POS và app, chỉ ra khung giờ yếu và việc cần kiểm) -> `kv:nhap-nguyen-lieu-ton-kho-bep` (Từ tồn đếm và dự báo, lập phiếu đặt theo nhà cung cấp) -> `kv:xep-lich-ca-nhan-vien-quan` (Xếp ca tuần tới theo khung đông khách) -> `kv:xuat-excel` (Xuất báo cáo, phiếu đặt, lịch ca thành file Excel)

**Có review xấu hoặc khách khiếu nại** - Review 1-2 sao, khách phàn nàn tại bàn, nghi vấn sức khỏe

`kv:an-thong-tin-nhay-cam` (Che tên, số điện thoại, mã đơn khách trước khi dán vào) -> `kv:phan-hoi-review-khieu-nai-quan` (Phân loại, soạn trả lời, đề xuất đền bù trong quyền, ghi sổ) -> `kv:dao-tao-nhan-vien-phuc-vu` (Lỗi lặp lại thì soạn buổi đào tạo lại cho ca) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Chạy khuyến mãi có lời** - Trước dịp lễ hoặc khi khung giờ vắng khách

`kv:bao-cao-doanh-thu-quan` (Xem số bán theo giờ, món của 2-4 tuần gần nhất) -> `kv:khuyen-mai-quan-tinh-lai` (So 2-3 phương án, tính lãi/đơn và ngưỡng hòa) -> `kv:soat-gia-von-lai-quan` (Soát độc lập bảng lãi trước khi chủ quán chốt) -> `kv:noi-dung-mxh-quan-an` (Viết bài giới thiệu với điều kiện chương trình đầy đủ) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Chuẩn bị mở quán mới** - Trước khai trương 1-2 tháng hoặc khi mở chi nhánh

`kv:ho-so-giay-phep-fnb` (Checklist giấy phép theo loại hình, địa điểm, có nguồn) -> `kv:tra-cuu-quy-dinh-fnb` (Tra sâu nhóm hồ sơ còn [chưa có nguồn]) -> `kv:sop-ve-sinh-an-toan-thuc-pham` (Soạn bộ SOP ATTP cho bếp và quầy) -> `kv:checklist-mo-dong-ca-quan` (Checklist mở, giao, đóng ca theo SOP) -> `kv:dao-tao-nhan-vien-phuc-vu` (Lộ trình đào tạo tuần đầu cho nhân viên mới) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

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

- ⭐ 13/13 skill Free được nâng cấp, kèm 24 script Python (thêm 2 trong dây chuyền mới) chạy được ngay trên file POS, kho, chấm công, review, giấy tờ
- ⭐ Menu engineering 4 ô theo từng kênh + rà menu theo quý ra quyết định giữ, đổi giá, đẩy, bỏ cho từng món
- ⭐ Bộ 12 SOP ATTP + 8 biểu mẫu sổ, bảng tự chấm 27 mục có điểm liệt, kế hoạch HACCP 7 nguyên tắc cho món rủi ro cao
- ⭐ Ngân hàng 60 tình huống đóng vai, cẩm nang 4 vị trí x 6 bài, 30 kịch bản video, thuật ngữ món Việt 4 ngôn ngữ
- ⭐ 2 dây chuyền mới có gác cổng độc lập: mở chi nhánh (hoàn vốn 3 kịch bản) và audit chuỗi (29 tiêu chí, lỗi ATTP không được bù điểm)
- ⭐ 9 skill chuyên sâu chỉ có ở Pro: P&L tháng, giảm hao hụt 8 tuần, thẻ thành viên, chiến dịch mùa lễ, tuyển - đào tạo bếp theo bậc, rà hợp đồng nhà cung cấp

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
