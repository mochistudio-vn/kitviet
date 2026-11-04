<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Xây dựng - Kỹ sư công trường - Bản Free

> Hồ sơ công trường đúng sự thật, khối lượng có công thức, an toàn không bị bỏ sót.

17 skill và 6 agent tiếng Việt cho người làm công trường: nhật ký thi công, báo cáo tuần, biên bản nghiệm thu, checklist an toàn, kiểm tra khối lượng, tiến độ, RFI - phát sinh, báo cáo sự cố, báo cáo ảnh, đề cương thuyết minh có nguồn, hồ sơ hoàn công. AI soạn và soát; kỹ sư có chứng chỉ và người có thẩm quyền vẫn là người tính kết cấu, nghiệm thu và ký.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 35 | 13 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Kỹ sư giám sát, kỹ sư thi công · Chỉ huy trưởng công trường · QS - kỹ sư khối lượng, dự toán · Cán bộ an toàn lao động · Chủ thầu nhà dân · Ban quản lý dự án

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-xay-dung@kitviet

# Hoặc dùng CLI (cần Node.js 18+): --ai claude, codex, cursor, copilot, gemini, windsurf... (kitviet platforms)
npx github:mochistudio-vn/kitviet init xay-dung --ai claude
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

### Ghi chép hằng ngày ở công trường

| Việc của bạn | Gọi |
|---|---|
| Biến tin Zalo, ghi chú cuối ngày thành trang nhật ký thi công đủ thời tiết, nhân lực, máy, khối lượng, sự cố | `kv:nhat-ky-thi-cong` |
| Chép cuộc họp giao ban thành biên bản có việc - người làm - hạn, tách rõ điều đã chốt và chưa thống nhất | `kv:bien-ban-giao-ban-cong-truong` |
| Gom ghi chú đi kiểm tra thành punch list theo phòng, mức độ, đội sửa, hạn | `kv:tong-hop-loi-hoan-thien` |
| Biến ảnh và ghi chú ảnh thành báo cáo ảnh có số, vị trí, ngày giờ, chú thích đúng điều thấy, an toàn lên đầu | `kv:bao-cao-anh-hien-truong` |

### Báo cáo và văn bản đi

| Việc của bạn | Gọi |
|---|---|
| Soạn báo cáo tuần gửi chủ đầu tư: kế hoạch vs thực hiện, an toàn, vướng mắc cần quyết | `kv:bao-cao-tuan-ban-chi-huy` |
| Viết RFI hỏi lại thiết kế và đề nghị phát sinh có căn cứ, bảng khối lượng, hạn trả lời | `kv:de-nghi-phat-sinh-rfi` |
| Làm phiếu yêu cầu vật tư đúng quy cách, đủ số, đúng ngày, kèm giấy tờ nghiệm thu đầu vào | `kv:yeu-cau-vat-tu-cong-truong` |
| Báo cáo nhanh sự cố, tai nạn theo dòng thời gian, đúng sự thật, không đổ lỗi | `kv:bao-cao-su-co-cong-truong` |

### Chất lượng và hồ sơ

| Việc của bạn | Gọi |
|---|---|
| Soạn khung biên bản nghiệm thu công việc đủ căn cứ, nội dung kiểm tra, để trống kết quả cho người kiểm tra điền | `kv:bien-ban-nghiem-thu-cong-viec` |
| Rà danh mục hồ sơ hoàn công: thiếu biên bản nào, ngày tháng nào ngược thứ tự | `kv:soat-ho-so-hoan-cong` |

### An toàn và biện pháp thi công

| Việc của bạn | Gọi |
|---|---|
| Lập checklist an toàn cho giàn giáo, làm việc trên cao, hố đào, điện, cẩu lắp - có dòng DỪNG VIỆC | `kv:checklist-an-toan-hang-muc` |
| Dựng dàn ý biện pháp thi công, chỉ rõ chỗ nào cần kỹ sư tính toán | `kv:dan-y-bien-phap-thi-cong` |
| Lập đề cương thuyết minh BPTC/kỹ thuật, mỗi ý có căn cứ TCVN, QCVN, hồ sơ thiết kế duyệt, kèm bảng nguồn và hiệu lực | `kv:de-cuong-thuyet-minh-thi-cong` |

### Khối lượng, chi phí, tiến độ

| Việc của bạn | Gọi |
|---|---|
| Bóc và kiểm tra khối lượng có diễn giải công thức, bắt lỗi m2/m3, nhân sai, tính trùng | `kv:kiem-tra-khoi-luong-xay-dung` |
| Ước chi phí sơ bộ từ khối lượng, mỗi đơn giá có nguồn hoặc đánh dấu cần xác nhận | `kv:du-toan-so-bo-cong-trinh` |
| Lập tiến độ, tìm đường găng, biết việc chậm nào kéo lùi ngày bàn giao | `kv:tien-do-thi-cong-duong-gang` |

### Dây chuyền nhiều bước

| Việc của bạn | Gọi |
|---|---|
| Đọc nguồn -> soạn -> soát khối lượng và an toàn bằng agent độc lập trước khi trình ký | `kv:day-chuyen-ho-so-cong-truong` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Soát số bịa, số tự suy trước khi gửi văn bản cho chủ đầu tư | `kv:kiem-tra-chong-bia` |
| Che CCCD, số điện thoại người lao động trước khi gửi báo cáo ra ngoài | `kv:an-thong-tin-nhay-cam` |
| Viết tin Zalo giao việc cho tổ đội, nhắc nhà cung cấp | `kv:viet-tin-nhan-cong-viec` |

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
| `kv:xuat-excel` | Xuất bảng markdown/CSV thành Excel .xlsx: mỗi bảng một sheet, tiêu đề đậm, cố định dòng đầu, số kiểu Việt Nam, giữ công thức. Dùng khi nói "xuất Excel", "ra file xlsx", "chuyển bảng sang Excel". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |
| `kv:xuat-word` | Xuất nội dung đã duyệt thành file Word .docx theo kiểu tài liệu Việt Nam: công văn, tờ trình, quyết định, báo cáo, biên bản, hợp đồng. Dùng khi nói "xuất Word", "ra file docx", "làm thành công văn". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Lập bảng giá trị khối lượng hoàn thành theo đợt: lũy kế, thu hồi tạm ứng, giữ lại, phần vượt HĐ tách riêng | `kv:bang-thanh-toan-khoi-luong-dot` |
| Dự báo dòng tiền theo tháng từ tiến độ và điều khoản thanh toán, chỉ ra tháng âm quỹ, chạy kịch bản tiền về chậm | `kv:dong-tien-du-an-xay-dung` |
| Sổ thầu phụ, ma trận phạm vi, đối chiếu KL thầu phụ đề nghị với nghiệm thu và KL thầu chính được duyệt | `kv:quan-ly-nha-thau-phu-xay-dung` |
| Checklist hồ sơ quyết toán hợp đồng, tổng hợp giá trị, phát sinh đã duyệt, việc tồn | `kv:checklist-quyet-toan-cong-trinh` |
| Lập ITP theo hạng mục có điểm dừng H/W/R và kế hoạch kiểm tra vật liệu đầu vào | `kv:ke-hoach-chat-luong-itp` |
| Lập HSE plan tổng thể: tổ chức, mối nguy theo giai đoạn, huấn luyện, ứng cứu khẩn cấp, môi trường | `kv:ke-hoach-an-toan-hse-du-an` |
| Ma trận tuân thủ tiêu chí HSMT và khung đề xuất kỹ thuật, nhân sự - thiết bị chỉ lấy từ hồ sơ thật | `kv:ho-so-du-thau-ky-thuat-xay-dung` |
| Báo cáo tháng cho CĐT có Gantt kế hoạch - thực tế, giá trị, chất lượng, an toàn, vướng mắc cần quyết | `kv:bao-cao-thang-chu-dau-tu` |
| Đọc HĐ, KL, biên bản -> lập bảng giá trị -> soát khối lượng và hợp đồng song song -> bàn giao | `kv:day-chuyen-thanh-toan-dot-xay-dung` |
| Rà thư mục hồ sơ -> danh mục đủ/thiếu + kế hoạch bổ sung -> soát trình tự ngày tháng -> bàn giao | `kv:day-chuyen-nghiem-thu-hoan-thanh` |

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
| `kv:doc-ho-so-cong-truong` | Thu thập - đọc ghi chú hiện trường, nhật ký, tin Zalo, CSV khối lượng trong thư mục; trả bảng dữ kiện có vị trí nguồn, danh sách thiếu, mâu thuẫn, rủi ro an toàn. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-quy-chuan-xay-dung` | Thu thập - tra cứu tình trạng hiệu lực TCVN, QCVN, nghị định, thông tư xây dựng từ nguồn chính thống; trả tên, số hiệu, trạng thái, link, ngày tra. Đọc file và mạng, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-bang-khoi-luong` | Thực thi - lập bảng khối lượng có diễn giải công thức, bảng kiểm lại khối lượng nhà thầu, dự toán sơ bộ từ kích thước và đơn giá có sẵn; ghi file CSV/MD. Cấm ra mạng, cấm đoán kích thước. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-van-ban-cong-truong` | Thực thi - soạn nhật ký thi công, báo cáo tuần, biên bản, báo cáo sự cố, punch list thành file nháp từ bảng dữ kiện đã thu thập. Chỉ ghi trong thư mục làm việc, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-an-toan-cong-truong` | Gác cổng an toàn và thẩm quyền - soát văn bản công trường: rủi ro an toàn bị bỏ sót, câu đổ lỗi, tự kết luận đạt, tự tính kết cấu, quy chuẩn không dặn kiểm tra hiện hành. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-khoi-luong-don-vi` | Gác cổng khối lượng - soát đơn vị m2/m3/tấn, số chiều, phép nhân, cộng tổng, tính trùng, số không nguồn trong bảng khối lượng, dự toán, báo cáo; trả bảng lỗi và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Báo cáo tuần trình chủ đầu tư | `kv:doc-ho-so-cong-truong` | `kv:soan-van-ban-cong-truong` | `kv:soat-khoi-luong-don-vi` | Dùng kv:day-chuyen-ho-so-cong-truong làm báo cáo tuần 44 từ thư mục 01-nhat-ky/ và 02-khoi-luong/, gửi Ban QLDA. Soát cả khối lượng và an toàn trước khi đưa tôi duyệt. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Từ nhật ký tới báo cáo tuần trình chủ đầu tư** - Cuối tuần cần báo cáo có ảnh, số liệu đã soát, trình chiếu ở họp giao ban với CĐT

`kv:nhat-ky-thi-cong` (Chốt đủ nhật ký các ngày trong tuần, đánh dấu chỗ [cần bổ sung]) -> `kv:bao-cao-anh-hien-truong` (Lập phụ lục ảnh tiến độ, vi phạm an toàn lên đầu) -> `kv:day-chuyen-ho-so-cong-truong` (Thu thập -> soạn báo cáo tuần -> soát khối lượng, an toàn -> kiểm định bàn giao) -> `kv:xuat-pptx` (Xuất slide trình họp tuần với chủ đầu tư) -> `kv:xuat-word` (Xuất báo cáo Word gửi kèm công văn)

**Soát khối lượng đề nghị thanh toán** - Nhà thầu phụ gửi bảng khối lượng đợt, cần kiểm lại trước khi ký xác nhận

`kv:kiem-tra-khoi-luong-xay-dung` (Tính lại từ kích thước, bắt lỗi nhân, cộng, đơn vị, tính trùng) -> `kv:soat-khoi-luong-don-vi` (Gác cổng độc lập: QUA hoặc CHẶN kèm bảng lỗi) -> `kv:du-toan-so-bo-cong-trinh` (Ra giá trị theo đơn giá hợp đồng, đơn giá thiếu ghi [cần xác nhận]) -> `kv:xuat-excel` (Xuất bảng tính lại có công thức để đối chiếu với nhà thầu phụ)

**Biện pháp thi công có căn cứ** - Trước khi thi công hạng mục mới, cần thuyết minh BPTC trình TVGS/CĐT duyệt

`kv:de-cuong-thuyet-minh-thi-cong` (Tra TCVN, QCVN, hồ sơ thiết kế duyệt, dựng đề cương có mã nguồn) -> `kv:dan-y-bien-phap-thi-cong` (Mở rộng thành dàn ý chi tiết, đánh dấu chỗ CẦN KỸ SƯ TÍNH TOÁN) -> `kv:checklist-an-toan-hang-muc` (Lập checklist an toàn đi kèm biện pháp) -> `kv:kiem-tra-chong-bia` (Soát số hiệu tiêu chuẩn, trị số không có nguồn) -> `kv:xuat-word` (Xuất thuyết minh Word để kỹ sư hoàn thiện, trình duyệt)

**Nghiệm thu đến hồ sơ hoàn công** - Gần bàn giao, cần biên bản đủ, lỗi hoàn thiện được sửa, danh mục hồ sơ không thiếu

`kv:bien-ban-nghiem-thu-cong-viec` (Soạn khung biên bản cho công việc còn thiếu, để trống kết quả) -> `kv:tong-hop-loi-hoan-thien` (Gom ghi chú đi kiểm tra thành punch list theo phòng, đội, hạn) -> `kv:soat-ho-so-hoan-cong` (Rà danh mục: thiếu biên bản nào, ngày nào ngược thứ tự) -> `kv:xuat-excel` (Xuất danh mục hồ sơ và punch list để theo dõi)

**Sự cố công trường** - Có tai nạn hoặc sự cố kỹ thuật, cần báo cáo nhanh đúng sự thật trong ngày

`kv:bao-cao-anh-hien-truong` (Lập bảng ảnh hiện trường đúng vị trí, giờ chụp, không suy nguyên nhân) -> `kv:bao-cao-su-co-cong-truong` (Soạn báo cáo theo dòng thời gian, việc đã xử lý) -> `kv:soat-an-toan-cong-truong` (Soát câu đổ lỗi, chi tiết bị bỏ sót, câu vượt thẩm quyền) -> `kv:an-thong-tin-nhay-cam` (Che CCCD, số điện thoại người lao động trước khi gửi) -> `kv:xuat-pdf` (Xuất bản chốt PDF để Chỉ huy trưởng ký, gửi)

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

- ⭐ 10 skill Pro mới: hồ sơ thanh toán đợt, dòng tiền, ITP và vật liệu đầu vào, HSE plan, quản lý thầu phụ, checklist quyết toán, HSDT kỹ thuật, báo cáo tháng có Gantt và 2 dây chuyền mới
- ⭐ 4 agent mới, trong đó 2 gác cổng độc lập (soát hợp đồng, soát trình tự ngày tháng hồ sơ) và 1 điều phối lô chạy cả tháng nhật ký hoặc nhiều tầng một lượt
- ⭐ 17 script python chạy ngay: kiểm bảng khối lượng CSV/Excel, lũy kế nhiều đợt, đường găng + Gantt HTML, đường cong S, quét thư mục hoàn công, đọc EXIF ảnh, dòng tiền, đối chiếu giao hàng
- ⭐ Thư viện dựng sẵn: 22 mẫu nội dung nghiệm thu, 15 checklist an toàn, 4 mẫu giấy phép làm việc, 12 dàn ý biện pháp, 4 danh mục hồ sơ hoàn công dạng CSV, 3 mẫu tiến độ
- ⭐ Mọi đơn giá, định mức, tỷ lệ tạm ứng - giữ lại để [cần xác nhận theo văn bản hiện hành]; AI không tính kết cấu, không tự ký, không sửa ngày cho khớp

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
