<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Giáo viên - Đào tạo - Bản Free

> Bớt giấy tờ, thêm thời gian cho học trò - giáo án, đề, nhận xét đúng chuẩn mà không lộ dữ liệu của trẻ.

Bộ skill cho giáo viên phổ thông và giảng viên: soạn kế hoạch bài dạy theo GDPT 2018, tìm tư liệu có nguồn, dựng slide lên lớp, ra đề có ma trận - đặc tả - đáp án đã soát độc lập, viết nhận xét học bạ, nhắn phụ huynh, lo hồ sơ chủ nhiệm và tổ chuyên môn. Mọi skill nhắc che tên học sinh trước khi dán AI, không bịa số liệu sáng kiến, và luôn dặn đối chiếu văn bản hướng dẫn hiện hành của Bộ, Sở, Phòng.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 39 | 15 | 4 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Giáo viên tiểu học, THCS, THPT · Giáo viên chủ nhiệm · Tổ trưởng, tổ phó chuyên môn · Giảng viên, trainer trung tâm

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-giao-duc@kitviet

# Hoặc dùng CLI (cần Node.js 18+): --ai claude, codex, cursor, copilot, gemini, windsurf... (kitviet platforms)
npx github:mochistudio-vn/kitviet init giao-duc --ai claude
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

### Soạn bài và lên lớp

| Việc của bạn | Gọi |
|---|---|
| Soạn giáo án theo GDPT 2018, đủ mục tiêu, 4 hoạt động, sản phẩm học sinh | `kv:ke-hoach-bai-day-gdpt` |
| Làm phiếu học tập, phiếu thảo luận nhóm in được ngay, kèm đáp án cho giáo viên | `kv:phieu-hoc-tap-nhom` |
| Ra nhiệm vụ 3 mức cho lớp không đều, lập kế hoạch phụ đạo - bồi dưỡng | `kv:day-hoc-phan-hoa-trinh-do` |
| Nghĩ trò chơi khởi động, ôn tập gắn đúng nội dung bài, chơi vừa số phút | `kv:tro-choi-khoi-dong-on-tap` |
| Biến giáo án đã duyệt thành dàn slide lên lớp, xuất PowerPoint có ghi chú người dạy | `kv:bai-trinh-chieu-tu-giao-an` |

### Kiểm tra, đánh giá

| Việc của bạn | Gọi |
|---|---|
| Làm ma trận, bản đặc tả, đề và hướng dẫn chấm khớp nhau từng câu | `kv:ma-tran-dac-ta-de-kiem-tra` |
| Soạn kho câu trắc nghiệm theo mức Biết - Hiểu - Vận dụng, có lời giải và lý do nhiễu | `kv:ngan-hang-cau-hoi-trac-nghiem` |
| Làm rubric chấm bài viết, dự án, thuyết trình để chấm công bằng và nhanh | `kv:rubric-cham-bai-hoc-sinh` |
| Góp ý bài văn theo rubric, chỉ lỗi cụ thể, báo đoạn nghi chép mạng mà không kết tội | `kv:phan-hoi-bai-viet-hoc-sinh` |
| Ra đề cuối kỳ từ A đến Z: thu thập yêu cầu cần đạt -> soạn -> soát đáp án độc lập | `kv:day-chuyen-de-kiem-tra-dinh-ky` |
| Chia buổi ôn theo số tiết còn lại, ưu tiên phần lớp yếu, kèm đề cương ôn tập phát học sinh | `kv:ke-hoach-on-tap-cuoi-ky` |

### Chủ nhiệm và phụ huynh

| Việc của bạn | Gọi |
|---|---|
| Viết nhận xét học bạ cả lớp: cụ thể từng em, giọng tích cực, đúng giới hạn ký tự | `kv:nhan-xet-hoc-ba` |
| Soạn tin nhóm Zalo lớp và tin nhắn riêng cho chuyện nhạy cảm | `kv:tin-nhan-phu-huynh-zalo` |
| Lập kế hoạch chủ nhiệm năm, tháng, soạn tiết sinh hoạt lớp | `kv:ke-hoach-chu-nhiem-lop` |
| Chuẩn bị họp phụ huynh: chương trình, bài nói, câu hỏi khó, biên bản | `kv:hop-phu-huynh-lop` |

### Tổ chuyên môn và phát triển nghề

| Việc của bạn | Gọi |
|---|---|
| Viết kế hoạch, biên bản sinh hoạt, báo cáo sơ kết - tổng kết của tổ | `kv:bao-cao-to-chuyen-mon` |
| Dựng khung và viết sáng kiến từ việc đã làm thật, không bịa số thực nghiệm | `kv:sang-kien-kinh-nghiem` |

### Tư liệu, chuyên đề và nghiên cứu

| Việc của bạn | Gọi |
|---|---|
| Tìm kiến thức, số liệu, ví dụ cho bài từ SGK, Bộ GD&ĐT, NXB giáo dục, tạp chí - ý nào cũng có nguồn | `kv:nghien-cuu-tu-lieu-bai-giang` |
| Lập đề cương chuyên đề sinh hoạt chuyên môn, bồi dưỡng, bài giảng tập huấn khớp mục tiêu - thời lượng | `kv:de-cuong-chuyen-de-bai-giang` |
| Đề cương NCKHSPƯD: vấn đề, giả thuyết, thiết kế đo trước - sau, công cụ đo - không bịa kết quả | `kv:de-cuong-nckh-su-pham-ung-dung` |

### Truyền thông trường và tuyển sinh

| Việc của bạn | Gọi |
|---|---|
| Viết bài tuyển sinh, fanpage trường/trung tâm, thông báo cho học sinh theo giọng gần gũi Gen Z mà vẫn chuẩn mực | `kv:viet-giong-gen-z` |

### Đi kèm từ bộ chung (core)

| Việc của bạn | Gọi |
|---|---|
| Che tên, ngày sinh, SĐT học sinh và phụ huynh trước khi dán vào AI | `kv:an-thong-tin-nhay-cam` |
| Soát báo cáo, sáng kiến xem có số nào không khớp số liệu gốc | `kv:kiem-tra-chong-bia` |
| Biến ghi chép họp tổ, họp phụ huynh thành biên bản gọn | `kv:ghi-chu-hop` |
| Ghép các agent của nghề thành dây chuyền theo việc riêng của bạn | `kv:dieu-phoi-day-chuyen` |

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
| `kv:viet-email` | Soạn email công việc tiếng Việt đúng xưng hô, rõ việc cần người nhận làm. Dùng khi nói "viết email", "trả lời mail này", "soạn thư gửi khách", "mail nhắc", "viết lại cho lịch sự". |
| `kv:viet-tin-nhan-cong-viec` | Soạn tin nhắn công việc qua Zalo, Teams, Messenger ngắn, đúng xưng hô, rõ việc. Dùng khi nói "nhắn sếp", "nhắn nhóm", "tin Zalo cho khách", "nhắc việc", "nhắn sao cho khéo". |
| `kv:xuat-excel` | Xuất bảng markdown/CSV thành Excel .xlsx: mỗi bảng một sheet, tiêu đề đậm, cố định dòng đầu, số kiểu Việt Nam, giữ công thức. Dùng khi nói "xuất Excel", "ra file xlsx", "chuyển bảng sang Excel". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |
| `kv:xuat-word` | Xuất nội dung đã duyệt thành file Word .docx theo kiểu tài liệu Việt Nam: công văn, tờ trình, quyết định, báo cáo, biên bản, hợp đồng. Dùng khi nói "xuất Word", "ra file docx", "làm thành công văn". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Phân phối tiết cả năm theo tuần, gắn YCCĐ, thiết bị, kiểm tra định kỳ, khớp tổng tiết chương trình | `kv:ke-hoach-day-hoc-mon-nam-hoc` |
| Thiết kế chủ đề STEM/dự án nhiều tuần: vấn đề thực tiễn, tiêu chí sản phẩm đo được, an toàn, rubric | `kv:chu-de-stem-du-an-hoc-tap` |
| Viết kịch bản video bài giảng: phân cảnh, lời thoại tính thời lượng, tương tác, phụ đề, bản quyền | `kv:kich-ban-video-bai-giang-elearning` |
| Soạn trọn chủ đề nhiều tiết: KHBD, phiếu, slide có lời giảng, soát theo tiêu chí dự giờ, xuất PPTX mẫu trường | `kv:day-chuyen-bai-giang-chu-de` |
| Từ file điểm ra phổ điểm, câu sai nhiều, YCCĐ yếu, nhóm cần phụ đạo theo mã | `kv:phan-tich-ket-qua-kiem-tra-lop` |
| Từ điểm đến hành động: phân tích -> kế hoạch phụ đạo, phiếu ôn, tin phụ huynh -> soát số liệu | `kv:day-chuyen-phan-tich-diem-phu-dao` |
| Đề ôn thi vào 10, tốt nghiệp THPT đúng cấu trúc giáo viên đưa, có bảng đối chiếu cấu trúc | `kv:de-on-thi-chuyen-cap-tot-nghiep` |
| KHGDCN cho học sinh khuyết tật, cần hỗ trợ: mục tiêu SMART, biện pháp, theo dõi tháng | `kv:ke-hoach-giao-duc-ca-nhan` |
| Bồi dưỡng đội tuyển: phân tích đề thi, chuyên đề theo tuần, đề luyện, theo dõi tiến bộ | `kv:ke-hoach-boi-duong-hoc-sinh-gioi` |
| Chu trình nghiên cứu bài học: vấn đề về học sinh, thiết kế chung, quan sát, suy ngẫm, áp dụng | `kv:sinh-hoat-chuyen-mon-nghien-cuu-bai-hoc` |
| Hồ sơ thi GVDG: bài trình bày biện pháp, bài dạy thi, kịch bản lớp lạ, câu hỏi hội đồng | `kv:ho-so-thi-giao-vien-day-gioi` |
| Tự đánh giá chuẩn nghề nghiệp: ghép minh chứng từng tiêu chí, đề xuất mức, kế hoạch bồi dưỡng | `kv:danh-gia-chuan-nghe-nghiep-giao-vien` |
| Thiết kế khóa đào tạo doanh nghiệp và kế hoạch đánh giá 4 cấp Kirkpatrick | `kv:khoa-dao-tao-doanh-nghiep-kirkpatrick` |
| Kiểm tra trend học sinh đang dùng trước khi làm nội dung tuyển sinh: rủi ro, độ phù hợp môi trường giáo dục | `kv:bat-trend-gen-z` |

Mỗi skill Free đều có mục **"Bản Pro có thêm"** ở cuối file cho biết bản Pro làm sâu hơn những gì. Xem tại https://mochistudio.io.vn/sources/kit-viet-pro-vinh-vien

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
| `kv:tim-tu-lieu-bai-giang` | Thu thập tư liệu bài giảng (kiến thức, số liệu, sự kiện, ví dụ thực tế) từ file và web theo bậc nguồn ngành giáo dục, mỗi ý kèm trích nguồn. Chỉ đọc và tra cứu, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |
| `kv:tong-hop-ho-so-lop-hoc` | Thu thập và tổng hợp hồ sơ lớp (bảng điểm, chuyên cần, ghi chú GVCN) thành số liệu và ghi chú theo mã học sinh, báo chỗ có dữ liệu cá nhân cần che. Chỉ đọc file, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-yeu-cau-can-dat` | Thu thập yêu cầu cần đạt, nội dung bài, phạm vi kiến thức từ chương trình GDPT 2018, SGK, đề cương tổ (file và nguồn chính thống) để làm đề, giáo án. Chỉ đọc và tra cứu, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:soan-de-va-dap-an` | Thực thi soạn ma trận, bản đặc tả, đề kiểm tra, đáp án và hướng dẫn chấm thành file theo thông số và yêu cầu cần đạt được giao; sửa đúng các dòng lỗi gác cổng báo. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-van-ban-chu-nhiem` | Thực thi soạn văn bản công tác chủ nhiệm từ bản tổng hợp theo mã học sinh - nhận xét học bạ, tin nhắn phụ huynh, phiếu thông tin riêng, báo cáo lớp - ghi thành file. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-an-toan-hoc-sinh` | Gác cổng văn bản trường học trước khi gửi/in: dữ liệu cá nhân học sinh, chuyện riêng lên nhóm chung, nội dung không hợp lứa tuổi, giọng tiêu cực, dán nhãn. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-dap-an-de-thi` | Gác cổng đề kiểm tra - giải lại từng câu độc lập, bắt đáp án sai, câu hai đáp án đúng, câu ngoài phạm vi, ma trận lệch điểm. Trả bảng lỗi và Kết luận Đạt/Chưa đạt. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-nguon-tu-lieu-giang-day` | Gác cổng tư liệu bài giảng, chuyên đề, đề cương, sáng kiến trước khi dùng: ý thiếu nguồn, nguồn bậc thấp làm căn cứ, trích dẫn không khớp, số liệu cũ. Chỉ đọc, chỉ báo lỗi, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Ra đề kiểm tra định kỳ trọn bộ | `kv:tra-yeu-cau-can-dat` | `kv:soan-de-va-dap-an` | `kv:soat-dap-an-de-thi` | Dùng kv:day-chuyen-de-kiem-tra-dinh-ky ra đề kiểm tra cuối học kỳ I môn KHTN 8, 60 phút, 70% trắc nghiệm - 30% tự luận, tỉ lệ Biết 40 - Hiểu 30 - Vận dụng 30, tài liệu trong de-kiem-tra/khtn-8-hk1/nguon/ |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Soạn bài mới trọn gói** - Chuẩn bị một bài dạy từ tư liệu đến slide lên lớp

`kv:nghien-cuu-tu-lieu-bai-giang` (Gom ví dụ, số liệu có nguồn cho bài) -> `kv:ke-hoach-bai-day-gdpt` (Soạn KHBD 4 hoạt động bám YCCĐ) -> `kv:phieu-hoc-tap-nhom` (Làm phiếu học tập kèm đáp án) -> `kv:bai-trinh-chieu-tu-giao-an` (Dựng dàn slide từ giáo án đã duyệt) -> `kv:xuat-pptx` (Xuất file trình chiếu có ghi chú người dạy)

**Ôn tập và ra đề cuối kỳ** - Còn vài tuần trước kiểm tra cuối kỳ

`kv:ke-hoach-on-tap-cuoi-ky` (Chia buổi ôn, làm đề cương ôn tập) -> `kv:ngan-hang-cau-hoi-trac-nghiem` (Soạn câu luyện theo mức) -> `kv:day-chuyen-de-kiem-tra-dinh-ky` (Ra đề có ma trận, soát đáp án độc lập) -> `kv:xuat-word` (Xuất đề và hướng dẫn chấm nộp tổ)

**Nhận xét cuối kỳ cả lớp** - Cuối học kỳ, cần nhận xét để nhập phần mềm

`kv:tong-hop-ho-so-lop-hoc` (Gom điểm, ghi chú theo mã học sinh) -> `kv:nhan-xet-hoc-ba` (Viết nhận xét đúng giới hạn ký tự) -> `kv:soat-an-toan-hoc-sinh` (Soát dữ liệu, giọng văn, dán nhãn) -> `kv:xuat-excel` (Xuất bảng có cột đếm ký tự để dán vào phần mềm)

**Chuyên đề, nghiên cứu sư phạm** - Đăng ký chuyên đề tổ, NCKHSPƯD hoặc sáng kiến có thực nghiệm

`kv:tim-tu-lieu-bai-giang` (Thu thập cơ sở lý luận có nguồn) -> `kv:de-cuong-nckh-su-pham-ung-dung` (Lập đề cương: giả thuyết, thiết kế, công cụ đo) -> `kv:soat-nguon-tu-lieu-giang-day` (Soát trích nguồn, chặn kết quả không có số gốc) -> `kv:xuat-word` (Xuất đề cương nộp hội đồng)

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

- ⭐ 13 skill Pro mới: phân tích kết quả kiểm tra từ file điểm, kế hoạch dạy học cả năm, STEM - dự án, KHGDCN, kịch bản video E-learning, đề ôn thi theo cấu trúc, hồ sơ thi GVDG, nghiên cứu bài học, đánh giá Kirkpatrick...
- ⭐ 2 dây chuyền mới với 7 agent Pro: phân tích điểm -> phụ đạo có khâu tự tính lại số liệu, và bộ bài giảng chủ đề soát theo 12 tiêu chí dự giờ
- ⭐ Nhật ký dây chuyền nhiều vòng: so phiên bản bản nháp, thống kê lỗi theo loại qua từng vòng, tự chỉ khâu chạy tiếp khi bị gián đoạn
- ⭐ KHBD thành bộ slide có lời giảng 5 dòng cho mọi slide, tương tác dựng sẵn (ô chữ, lật mảnh ghép, đếm ngược) và xuất PPTX theo mẫu trường
- ⭐ 25+ script chạy trên máy: trộn 4-24 mã đề, phân tích độ khó - độ phân biệt câu hỏi, t-test và SMD cho NCKHSPƯD, xuất Azota - Kahoot - Quizizz, đổi mã - tên học sinh an toàn
- ⭐ Thư viện dựng sẵn: 30 trò chơi, 21 rubric, 40 tình huống nhắn phụ huynh, 35 tiết sinh hoạt lớp, hơn 150 cụm từ nhận xét học bạ

**Nâng cấp Pro:** https://mochistudio.io.vn/sources/kit-viet-pro-vinh-vien

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
