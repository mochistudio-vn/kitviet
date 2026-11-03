<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Kinh doanh B2B - Chăm sóc khách hàng - Bản Free

> Chốt deal nhanh hơn mà không hứa thứ chưa được duyệt.

Bộ skill cho người bán hàng doanh nghiệp và đội CSKH: tìm hiểu khách, chào hàng, gọi điện, báo giá, proposal, đàm phán, rà pipeline, trả lời khiếu nại, chăm sóc khách lớn. Mọi bản nháp bám bảng giá và khung chiết khấu của chính công ty bạn, có agent gác cổng soát cam kết và dữ liệu khách trước khi gửi.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 33 | 14 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Nhân viên kinh doanh B2B, telesales · Account manager, trưởng nhóm sales · Nhân viên CSKH, tổng đài, chat

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add nguyenducthang1997/kitviet
/plugin install kv-kinh-doanh@kitviet

# Hoặc dùng CLI (cần Node.js 18+), --ai claude | codex | desktop | all
npx github:nguyenducthang1997/kitviet init kinh-doanh --ai claude
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

### Tìm khách và mở lời

| Việc của bạn | Gọi |
|---|---|
| Mai gặp khách, cần một trang tóm tắt công ty họ từ nguồn công khai và câu hỏi nên hỏi | `kv:ho-so-khach-truoc-buoi-gap` |
| Viết email/Zalo chào hàng lần đầu cá nhân hóa và 3-4 lần follow-up khi khách im lặng | `kv:chuoi-email-tiep-can-b2b` |
| Soạn kịch bản gọi điện có nhánh theo phản ứng của khách để chốt được lịch hẹn | `kv:kich-ban-goi-telesales` |
| Khách chê đắt, đã có nhà cung cấp, để hỏi sếp - cần câu đáp có bằng chứng | `kv:xu-ly-tu-choi-b2b` |

### Chào giá và chốt deal

| Việc của bạn | Gọi |
|---|---|
| Làm báo giá đúng bảng giá, chiết khấu trong khung, đủ VAT - giao hàng - thanh toán - bảo hành | `kv:bao-gia-dieu-kien-thuong-mai` |
| Viết đề xuất giải pháp bám đúng vấn đề khách đã nói, có phạm vi và lộ trình | `kv:proposal-giai-phap-b2b` |
| Chuẩn bị buổi đàm phán: mục tiêu, điểm dừng, BATNA, nhượng bộ có điều kiện | `kv:chuan-bi-dam-phan-b2b` |
| Vừa gặp khách xong, cần biên bản, việc tiếp theo và email tóm tắt gửi khách | `kv:bien-ban-gap-khach-b2b` |
| Làm trọn hồ sơ chào giá một deal: thu thập -> soạn báo giá + proposal -> soát trước khi gửi | `kv:day-chuyen-chao-gia-b2b` |

### Quản lý pipeline và báo cáo

| Việc của bạn | Gọi |
|---|---|
| Rà file CRM bắt deal treo, số lệch, xác suất sai quy tắc và dự báo doanh số tháng | `kv:ra-soat-pipeline-doanh-so` |
| Soạn báo cáo tuần cho sếp: so chỉ tiêu, deal thắng/mất, việc cần sếp hỗ trợ | `kv:bao-cao-tuan-doi-sales` |
| Lập kế hoạch chăm sóc khách lớn: sơ đồ người liên hệ, cơ hội, rủi ro mất khách | `kv:account-plan-khach-lon` |

### Chăm sóc khách hàng

| Việc của bạn | Gọi |
|---|---|
| Viết kịch bản tổng đài, chat, Zalo OA có điểm chuyển cấp rõ | `kv:kich-ban-tong-dai-cskh` |
| Trả lời khách khiếu nại theo xin lỗi - giải pháp - cam kết, chỉ hứa điều đã duyệt | `kv:phan-hoi-khieu-nai-cskh` |
| Tính NPS/CSAT đúng công thức, gom chủ đề góp ý và lọc khách cần gọi lại ngay | `kv:phan-tich-nps-csat` |

### Dùng chung từ bộ core

| Việc của bạn | Gọi |
|---|---|
| Soát proposal, báo cáo xem có số bịa, case study không nguồn | `kv:kiem-tra-chong-bia` |
| Che SĐT, CCCD, STK của khách trước khi gửi tài liệu cho người khác | `kv:an-thong-tin-nhay-cam` |
| Viết email công việc chung cho sếp, đồng nghiệp, phòng ban khác | `kv:viet-email` |
| Biên bản họp nội bộ đội sales | `kv:ghi-chu-hop` |
| Ghép các agent thành dây chuyền cho việc nhiều bước khác | `kv:dieu-phoi-day-chuyen` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
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
| Rút chân dung khách lý tưởng từ dữ liệu khách đã mua, chấm điểm và phân hạng A/B/C cả danh mục | `kv:icp-phan-hang-tai-khoan` |
| Soạn sổ tay bán hàng: tiêu chí vào/ra từng giai đoạn có bằng chứng, việc bắt buộc, điểm phải xin duyệt | `kv:playbook-ban-hang-theo-giai-doan` |
| Dự báo tháng/quý 3 kịch bản thận trọng - cơ sở - lạc quan từ file CRM, có độ nhạy theo deal lớn | `kv:du-bao-doanh-so-kich-ban` |
| Tìm lý do thật vì sao thắng/thua deal từ CRM, email, phỏng vấn khách, ra khuôn mẫu và hành động | `kv:phan-tich-thang-thua-deal` |
| Làm trọn phần thương mại hồ sơ chào hàng cạnh tranh / dự thầu / RFP, gác cổng đối chiếu từng yêu cầu | `kv:day-chuyen-chao-hang-canh-tranh` |
| Chuẩn bị buổi rà soát quý với khách lớn: số liệu giá trị, sự cố, kế hoạch quý tới, câu hỏi khó | `kv:kich-ban-qbr-khach-lon` |
| Xây và rà kho câu trả lời CSKH có nguồn chính sách, chủ sở hữu, phiên bản, xuất gói nạp chatbot | `kv:kho-cau-tra-loi-cskh` |
| Chấm chất lượng cuộc gọi/chat cả tổng đài theo phiếu QA, có hiệu chuẩn và báo cáo theo nhân viên | `kv:day-chuyen-qa-tong-dai` |

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
| `kv:doc-lich-su-giao-dich-khach` | Thu thập từ file nội bộ của một deal (email khách, biên bản, CRM, đơn cũ, bảng giá, khung chiết khấu): yêu cầu, lời hứa còn treo, mâu thuẫn, có trích nguồn. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-doanh-nghiep-cong-khai` | Thu thập thông tin công khai về doanh nghiệp khách (đăng ký kinh doanh, website, tuyển dụng, báo chí, đấu thầu) trước cuộc gặp, có nguồn và ngày. Chỉ đọc và tra web, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:soan-ho-so-chao-gia` | Soạn báo giá và proposal B2B thành file nháp từ kết quả thu thập và quyết định của người dùng, giữ chiết khấu trong khung, tách phần nội bộ. Được ghi file trong thư mục deal, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-phan-hoi-khach-hang` | Soạn thư/tin phản hồi khách (khiếu nại, hỏi đáp CSKH, follow-up) thành file nháp theo chính sách và giải pháp đã duyệt, xử lý được cả lô ticket. Được ghi file nháp, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-cam-ket-thuong-mai` | Gác cổng cam kết thương mại - soát báo giá, proposal, thư gửi khách: giá, chiết khấu, công nợ, tiến độ, bảo hành, bồi thường, case study so với khung duyệt và nguồn. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-giong-van-gui-khach` | Gác cổng giọng văn với khách B2B/CSKH - soát email, Zalo, thư phản hồi, proposal về xưng hô, hợp kênh, thuật ngữ nội bộ, đổ lỗi, gây áp lực, lời kêu gọi hành động. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-quyen-dung-du-lieu-khach` | Gác cổng dữ liệu khách - soát bản nháp có dùng thông tin đối thủ, thông tin khách khác, dữ liệu cá nhân, case study chưa được đồng ý, phần nội bộ lọt ra ngoài không. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Hồ sơ chào giá trọn gói cho một deal | `kv:doc-lich-su-giao-dich-khach` | `kv:soan-ho-so-chao-gia` | `kv:soat-cam-ket-thuong-mai` | Dùng kv:day-chuyen-chao-gia-b2b cho deal trong thư mục khach-hang/sao-phuong-nam/D-07: báo giá + proposal, dừng hỏi tôi ở mọi mâu thuẫn về giá và tiến độ. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Từ buổi gặp đầu tới follow-up** - Có lịch gặp khách mới, muốn chuẩn bị kỹ và không để deal nguội sau buổi gặp.

`kv:ho-so-khach-truoc-buoi-gap` (Một trang về công ty khách từ nguồn công khai, câu hỏi khám phá) -> `kv:bien-ban-gap-khach-b2b` (Biên bản, việc tiếp theo, email tóm tắt gửi khách) -> `kv:chuoi-email-tiep-can-b2b` (Chuỗi 3-4 lần follow-up nếu khách im lặng) -> `kv:soat-giong-van-gui-khach` (Soát xưng hô, thuật ngữ nội bộ, lời kêu gọi hành động trước khi gửi) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Chào giá một deal** - Khách xin báo giá kèm đề xuất, cần bản sạch đã soát để xuất Word/PDF gửi khách.

`kv:doc-lich-su-giao-dich-khach` (Rút yêu cầu, lời hứa còn treo, mâu thuẫn từ email và biên bản) -> `kv:bao-gia-dieu-kien-thuong-mai` (Báo giá đúng bảng giá, chiết khấu trong khung, đủ điều kiện thương mại) -> `kv:proposal-giai-phap-b2b` (Proposal bám vấn đề khách đã nói, có phạm vi và lộ trình) -> `kv:soat-cam-ket-thuong-mai` (Soát giá, CK, tiến độ, bảo hành so với khung duyệt) -> `kv:kiem-tra-chong-bia` (Soát case study, số liệu năng lực không nguồn, rồi xuất Word/PDF bằng kv:xuat-word, kv:xuat-pdf) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Khách chê đắt tới chốt deal** - Khách đòi giảm giá hoặc so với đối thủ, cần câu đáp, điểm dừng và báo giá mới.

`kv:xu-ly-tu-choi-b2b` (Câu đáp có bằng chứng, nhượng bộ có điều kiện trong khung) -> `kv:chuan-bi-dam-phan-b2b` (Mục tiêu, điểm dừng, BATNA, kế hoạch nhượng bộ) -> `kv:bao-gia-dieu-kien-thuong-mai` (Báo giá mới theo phương án đã chốt) -> `kv:soat-cam-ket-thuong-mai` (Soát mọi lời hứa mới trước khi gửi) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Báo cáo thứ Sáu** - Cuối tuần cần số pipeline đúng và báo cáo cho sếp, xuất Excel.

`kv:ra-soat-pipeline-doanh-so` (Bắt deal trùng, treo, sai xác suất; dự báo theo quy tắc) -> `kv:bao-cao-tuan-doi-sales` (So chỉ tiêu, deal thắng/mất, việc cần sếp hỗ trợ) -> `kv:kiem-tra-chong-bia` (Soát số không nguồn rồi xuất bảng bằng kv:xuat-excel) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Xử lý khiếu nại khách** - Khách khiếu nại hoặc chấm điểm thấp, cần thư phản hồi chỉ hứa điều đã duyệt.

`kv:phan-tich-nps-csat` (Lọc khách cần gọi lại trong 48 giờ và chủ đề chính (nếu có khảo sát)) -> `kv:phan-hoi-khieu-nai-cskh` (Thư phản hồi xin lỗi - giải pháp - cam kết theo chính sách) -> `kv:soat-cam-ket-thuong-mai` (Soát bồi thường, mốc xử lý so với giải pháp đã duyệt) -> `kv:soat-giong-van-gui-khach` (Soát đổ lỗi, xin lỗi chung chung, hứa mơ hồ) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

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

- ⭐ 8 skill chỉ có ở Pro: ICP và phân hạng A/B/C, playbook theo giai đoạn, dự báo 3 kịch bản, phân tích thắng/thua, QBR khách lớn, kho câu trả lời CSKH, 2 dây chuyền mới
- ⭐ 2 dây chuyền mới có gác cổng: hồ sơ chào hàng cạnh tranh / dự thầu (đối chiếu từng yêu cầu có mã) và QA tổng đài (hiệu chuẩn 2 lần chấm)
- ⭐ 3 agent mới: đọc hồ sơ mời thầu/RFP, chấm điểm cuộc gọi có trích dẫn, gác cổng đáp ứng hồ sơ thầu
- ⭐ 16 skill free đều có phần nâng cao: 15+ script Python chạy thật (báo giá có số bằng chữ, rà pipeline, NPS, nhượng bộ, ROI, phân loại ticket...) xuất Excel giữ công thức
- ⭐ Thư viện dùng ngay: 40 lời từ chối B2B, 30 mẫu email tiếp cận, 30 tình huống tổng đài, 15 mẫu khiếu nại theo loại x mức, 15 chiến thuật ép giá
- ⭐ Chạy hàng loạt: 20-50 hồ sơ khách, cả lô ticket, nhiều deal chào giá song song với bảng tổng tình trạng

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
