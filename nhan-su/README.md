<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Nhân sự - Tuyển dụng - Bản Free

> Tuyển đúng người, đối xử công bằng, giữ kín dữ liệu - từ JD tới ngày làm việc cuối.

Bộ skill cho người làm nhân sự ở doanh nghiệp Việt: viết JD và tin tuyển dụng, sàng lọc CV ẩn danh có trọng số, phỏng vấn STAR, offer đúng phê duyệt, onboarding, KPI, đánh giá thử việc, chấm công, khảo sát, đào tạo, kỷ luật, phỏng vấn thôi việc và tra quy định lao động có nguồn. Mọi skill đều chặn tiêu chí phân biệt tuổi/giới/quê quán, che dữ liệu cá nhân và nhắc kiểm tra Bộ luật Lao động hiện hành.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 34 | 13 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Chuyên viên tuyển dụng, headhunter in-house · HR generalist ở doanh nghiệp vừa và nhỏ · Chuyên viên C&B, chấm công - tính lương · Trưởng phòng nhân sự, chủ doanh nghiệp tự lo nhân sự

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

### Thu hút và tuyển chọn

| Việc của bạn | Gọi |
|---|---|
| Viết JD rõ việc, rõ tiêu chí, bỏ tiêu chí tuổi/giới/hộ khẩu | `kv:viet-jd-tuyen-dung` |
| Ra tin đăng TopCV, VietnamWorks, Facebook, Zalo, LinkedIn từ một JD | `kv:dang-tin-tuyen-dung-da-kenh` |
| Chấm CV theo tiêu chí có trọng số, ẩn danh, có trích dẫn | `kv:sang-loc-cv-co-trong-so` |
| Bộ câu hỏi phỏng vấn hành vi và phiếu chấm cho hội đồng | `kv:bo-cau-hoi-phong-van-star` |
| Thư mời phỏng vấn, offer đúng phê duyệt, thư từ chối lịch sự | `kv:thu-gui-ung-vien` |
| Chạy trọn một vị trí: đọc CV -> chấm, soạn -> gác cổng | `kv:day-chuyen-tuyen-dung` |

### Hợp đồng, hội nhập, hiệu suất

| Việc của bạn | Gọi |
|---|---|
| Soát HĐLĐ, hợp đồng thử việc, phụ lục theo bảng kiểm | `kv:soat-hop-dong-lao-dong` |
| Kế hoạch đón nhân viên mới và mục tiêu 30-60-90 ngày | `kv:onboarding-30-60-90` |
| Bộ KPI/OKR có công thức, nguồn dữ liệu, trọng số | `kv:xay-kpi-okr-vi-tri` |
| Phiếu đánh giá thử việc/định kỳ có bằng chứng và thông báo kết quả | `kv:danh-gia-thu-viec` |

### Vận hành và gắn kết

| Việc của bạn | Gọi |
|---|---|
| Tìm dòng chấm công bất thường trước khi chốt lương | `kv:soat-bang-cham-cong` |
| Thiết kế khảo sát ẩn danh, tính eNPS, rút việc cần làm | `kv:khao-sat-gan-ket-nhan-vien` |
| Kế hoạch đào tạo năm từ nhu cầu thật, có dự toán và cách đo | `kv:ke-hoach-dao-tao-nam` |
| Kế hoạch xử lý kỷ luật đúng trình tự, chờ pháp chế duyệt | `kv:quy-trinh-ky-luat-lao-dong` |
| Exit interview, tổng hợp lý do nghỉ việc, checklist thủ tục | `kv:phong-van-thoi-viec` |
| Tra thử việc, phép năm, làm thêm, BHXH trên nguồn chính thống, có trích nguồn, viết lại dễ hiểu | `kv:tra-cuu-quy-dinh-lao-dong` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Che CCCD, số tài khoản, số điện thoại trước khi dán CV, bảng lương | `kv:an-thong-tin-nhay-cam` |
| Email nội bộ, thông báo chính sách cho nhân viên | `kv:viet-email` |
| Biên bản họp hội đồng tuyển dụng, họp giao ban HR | `kv:ghi-chu-hop` |
| Checklist hồ sơ nhân viên mới, thủ tục nghỉ việc | `kv:tao-bang-kiem` |
| Soát báo cáo nhân sự trước khi gửi ban giám đốc | `kv:kiem-tra-chong-bia` |

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
| `kv:viet-tin-nhan-cong-viec` | Soạn tin nhắn công việc qua Zalo, Teams, Messenger ngắn, đúng xưng hô, rõ việc. Dùng khi nói "nhắn sếp", "nhắn nhóm", "tin Zalo cho khách", "nhắc việc", "nhắn sao cho khéo". |
| `kv:xuat-excel` | Xuất bảng markdown/CSV thành Excel .xlsx: mỗi bảng một sheet, tiêu đề đậm, cố định dòng đầu, số kiểu Việt Nam, giữ công thức. Dùng khi nói "xuất Excel", "ra file xlsx", "chuyển bảng sang Excel". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |
| `kv:xuat-word` | Xuất nội dung đã duyệt thành file Word .docx theo kiểu tài liệu Việt Nam: công văn, tờ trình, quyết định, báo cáo, biên bản, hợp đồng. Dùng khi nói "xuất Word", "ra file docx", "làm thành công văn". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Khung năng lực theo cấp và lộ trình thăng tiến có điều kiện đo được | `kv:khung-nang-luc-lo-trinh-thang-tien` |
| Dải lương min-giữa-max theo bậc từ dữ liệu bạn đưa, compa-ratio, chi phí điều chỉnh | `kv:xay-thang-bang-luong` |
| Định biên từng phòng, lịch tuyển theo quý, ngân sách chi phí nhân sự có giả định | `kv:ke-hoach-nhan-su-nam` |
| Chạy cả đợt 360: kiểm phiếu -> báo cáo ẩn danh từng người -> gác cổng | `kv:day-chuyen-danh-gia-360` |
| EVP từ dữ liệu thật, trang tuyển dụng, lịch nội dung 3 tháng | `kv:thuong-hieu-nha-tuyen-dung` |
| Sổ tay nhân viên 22 mục, mỗi mục có căn cứ, chờ pháp chế soát | `kv:soan-so-tay-nhan-vien` |
| Tỷ lệ nghỉ theo phòng, quản lý, thâm niên, cohort, chi phí, tín hiệu theo nhóm | `kv:phan-tich-nghi-viec-nhan-su` |
| Từ dữ liệu nghỉ việc ra chương trình giữ chân có ngân sách, qua gác cổng | `kv:day-chuyen-giu-chan-nhan-tai` |
| Lịch mốc nghỉ việc, chuyển giao tri thức, thu hồi quyền, quyết toán | `kv:offboarding-ban-giao-cong-viec` |

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
| `kv:doc-ho-so-ung-vien` | Thu thập - đọc JD và thư mục CV, rút hồ sơ ứng viên ẩn danh theo mã (kinh nghiệm, kỹ năng, câu trích có vị trí), đánh dấu thông tin nhạy cảm và chỉ dẫn lạ. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-thi-truong-tuyen-dung` | Thu thập - tra mặt bằng lương, tin tuyển dụng tương tự, yêu cầu phổ biến cho một vị trí trên các trang việc làm và báo cáo lương công khai, ghi rõ nguồn và ngày. Chỉ đọc, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-bang-sang-loc-ung-vien` | Thực thi - từ hồ sơ ứng viên rút gọn và bộ tiêu chí có trọng số, chấm điểm có trích dẫn, tính tổng, đề xuất mời phỏng vấn và ghi ra file bảng sàng lọc. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-tai-lieu-tuyen-dung` | Thực thi - soạn ra file các tài liệu tuyển dụng: JD, tin đăng, bộ câu hỏi STAR + phiếu chấm, thư mời phỏng vấn, offer, thư từ chối - đúng nguồn đã duyệt. Được ghi file, cấm ra mạng, cấm gửi. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-du-lieu-nhan-su` | Gác cổng - soát file nhân sự trước khi chuyển đi: lộ CCCD, số điện thoại, địa chỉ, lương, sức khỏe; offer/thư hứa vượt phê duyệt; điều khoản giữ giấy tờ, đặt cọc. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-thien-kien-tuyen-dung` | Gác cổng - soát JD, tin đăng, bảng sàng lọc, câu hỏi phỏng vấn, thư ứng viên tìm tiêu chí phân biệt tuổi/giới/hôn nhân/quê quán/ngoại hình và điểm chấm thiếu bằng chứng. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Sàng lọc và chuẩn bị phỏng vấn một vị trí | `kv:doc-ho-so-ung-vien` | `kv:lap-bang-sang-loc-ung-vien` | `kv:soat-thien-kien-tuyen-dung` | Dùng kv:day-chuyen-tuyen-dung cho vị trí Kế toán tổng hợp. JD ở tuyen-dung/KT01/jd.md, CV trong tuyen-dung/KT01/cv/. Đề xuất tiêu chí cho tôi duyệt trước, sau đó chấm, soạn câu hỏi phỏng vấn và thư mời nháp. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Từ JD tới thư mời phỏng vấn** - Mở một vị trí mới, cần đăng tin, lọc CV và mời phỏng vấn

`kv:viet-jd-tuyen-dung` (Viết JD theo năng lực, bỏ tiêu chí nhân thân) -> `kv:dang-tin-tuyen-dung-da-kenh` (Ra tin TopCV, Facebook, Zalo từ JD đã duyệt) -> `kv:sang-loc-cv-co-trong-so` (Chấm CV ẩn danh theo tiêu chí có trọng số) -> `kv:bo-cau-hoi-phong-van-star` (Câu hỏi STAR và phiếu chấm cho hội đồng) -> `kv:thu-gui-ung-vien` (Thư mời phỏng vấn và thư từ chối nháp) -> `kv:xuat-excel` (Bảng sàng lọc và phiếu chấm ra file .xlsx)

**Offer tới ngày làm việc đầu tiên** - Đã chốt ứng viên, cần offer, hợp đồng và kế hoạch hội nhập

`kv:thu-gui-ung-vien` (Soạn offer đúng phiếu phê duyệt) -> `kv:soat-du-lieu-nhan-su` (Gác cổng: lộ dữ liệu, hứa vượt duyệt) -> `kv:soat-hop-dong-lao-dong` (Soát HĐLĐ, phụ lục lương khớp offer) -> `kv:onboarding-30-60-90` (Kế hoạch tuần đầu và mục tiêu 30-60-90) -> `kv:xuat-pdf` (Offer và hợp đồng bản chốt ra PDF)

**Chốt công tháng trước khi tính lương** - Cuối tháng, cần soát chấm công và gửi danh sách xác minh

`kv:an-thong-tin-nhay-cam` (Bỏ họ tên, số tài khoản, chỉ giữ mã NV) -> `kv:soat-bang-cham-cong` (Tìm dòng bất thường, cộng dồn làm thêm) -> `kv:soat-so-lieu` (Gác cổng: soát lại số giờ cộng dồn) -> `kv:viet-tin-nhan-cong-viec` (Tin nhắn quản lý xác minh từng dòng) -> `kv:xuat-excel` (Danh sách bất thường ra .xlsx gửi kế toán lương)

**Thông báo chính sách nội bộ có căn cứ** - Cần thông báo hoặc sổ tay nhân viên về phép, làm thêm, thử việc

`kv:tra-cuu-quy-dinh-lao-dong` (Tra quy định trên nguồn chính thống, ghi nguồn từng ý) -> `kv:viet-de-cuong` (Đề cương thông báo/sổ tay theo mục) -> `kv:viet-email` (Viết thông báo gửi toàn công ty) -> `kv:kiem-tra-chong-bia` (Soát con số, căn cứ không có nguồn) -> `kv:xuat-word` (Bản thông báo .docx để trình ký)

**Đánh giá, khảo sát và kế hoạch đào tạo** - Cuối kỳ, cần biến kết quả đánh giá và khảo sát thành kế hoạch đào tạo

`kv:danh-gia-thu-viec` (Phiếu đánh giá có bằng chứng, rút năng lực cần bù) -> `kv:khao-sat-gan-ket-nhan-vien` (Phân tích khảo sát, nhóm điểm thấp) -> `kv:ke-hoach-dao-tao-nam` (Ưu tiên, lịch theo quý, dự toán) -> `kv:soat-so-lieu` (Gác cổng: soát tổng dự toán) -> `kv:xuat-pptx` (Slide trình ban giám đốc duyệt ngân sách)

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

- ⭐ 9 skill chỉ có ở Pro: khung năng lực - lộ trình thăng tiến, thang bảng lương, kế hoạch nhân sự năm, 360 độ, employer branding, sổ tay nhân viên, phân tích nghỉ việc, giữ chân nhân tài, offboarding
- ⭐ 2 dây chuyền mới có gác cổng ẩn danh - công bằng (360 độ, giữ chân nhân tài) cùng 3 agent mới, nâng tổng lên 5 dây chuyền
- ⭐ 21 script Python chạy được ngay: chấm CV hàng loạt, soát chấm công 8 loại bất thường, phân tích khảo sát và eNPS, tỷ lệ nghỉ việc, dải lương, tổng hợp 360, tính mốc kỷ luật...
- ⭐ Thư viện lớn: 40 JD mẫu, 200 câu hỏi STAR theo 20 năng lực, 150 KPI theo 12 phòng ban, 25 bộ tiêu chí sàng lọc, 88 cụm từ phân biệt đối xử
- ⭐ Bảng kiểm HĐLĐ 45 điểm, bộ 4 văn bản kỷ luật có ghi chú pháp lý, sổ tay nhân viên 22 mục có căn cứ - mọi mức luật để ô chờ xác nhận bản hiện hành
- ⭐ Mọi báo cáo nhóm tự ẩn dưới 5 người (360 dưới 3 phiếu), script dừng khi dữ liệu có cột tuổi, giới, hôn nhân

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
