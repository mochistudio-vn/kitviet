<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Kế toán - Thuế - Bản Free

> Đối chiếu nhanh, số liệu có nguồn, không bịa một đồng - để kế toán ký với cái đầu nhẹ.

Bộ skill và agent tiếng Việt cho kế toán doanh nghiệp nhỏ và vừa, kế toán dịch vụ và chủ hộ kinh doanh: đối chiếu công nợ, sổ phụ ngân hàng, soát hóa đơn điện tử đầu vào, chuẩn bị số liệu tờ khai, công văn giải trình, bảng lương, dòng tiền. Mọi quy định đều được nhắc kiểm tra văn bản hiện hành; AI chỉ chuẩn bị, người có thẩm quyền ký và nộp.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 40 | 14 | 6 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Kế toán viên doanh nghiệp nhỏ và vừa · Kế toán dịch vụ làm cho nhiều khách · Kế toán trưởng · Chủ hộ kinh doanh chuyển sang kê khai

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-ke-toan@kitviet

# Hoặc dùng CLI (cần Node.js 18+): --ai claude, codex, cursor, copilot, gemini, windsurf... (kitviet platforms)
npx github:mochistudio-vn/kitviet init ke-toan --ai claude
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

### Đối chiếu và soát chứng từ

| Việc của bạn | Gọi |
|---|---|
| Đối chiếu công nợ với khách, nhà cung cấp, tìm từng khoản lệch và soạn biên bản | `kv:doi-chieu-cong-no` |
| Khớp sao kê ngân hàng với sổ 112, lập bảng điều hòa số dư | `kv:doi-chieu-so-phu-ngan-hang` |
| Soát hóa đơn đầu vào: trùng, MST sai, thuế lệch, trả tiền mặt, người bán rủi ro | `kv:kiem-tra-hoa-don-dau-vao` |
| Gợi ý hạch toán Nợ/Có theo chế độ kế toán bạn đang áp dụng | `kv:goi-y-dinh-khoan` |
| Ghép hóa đơn từ ngưỡng với chứng từ chuyển khoản, chỉ ra hóa đơn thiếu chứng từ thanh toán | `kv:bang-ke-thanh-toan-khong-tien-mat` |

### Thuế: chuẩn bị, lịch, giải trình

| Việc của bạn | Gọi |
|---|---|
| Tra quy định thuế, kế toán, BHXH theo bậc nguồn chính thống, ra phiếu căn cứ có hiệu lực và link | `kv:nghien-cuu-van-ban-thue` |
| Chuẩn bị số liệu tờ khai GTGT tháng/quý và đối chiếu sổ sách | `kv:chuan-bi-to-khai-gtgt` |
| Gom số liệu TNCN khấu trừ, TNDN tạm nộp và quyết toán | `kv:chuan-bi-so-lieu-tncn-tndn` |
| Soát chi phí nào được trừ khi tính thuế TNDN, hồ sơ nào còn thiếu | `kv:soat-chi-phi-duoc-tru` |
| Lập lịch hạn nộp tờ khai, thuế, báo cáo cho một hay nhiều đơn vị | `kv:lich-han-nop-thue` |
| Tìm nguyên nhân chênh lệch và soạn công văn giải trình gửi cơ quan thuế | `kv:cong-van-giai-trinh-thue` |
| Giúp hộ kinh doanh chuyển sang kê khai: sổ doanh thu, lịch khai, ước thuế | `kv:ho-kinh-doanh-ke-khai-thue` |

### Lương, dòng tiền, báo cáo cho chủ

| Việc của bạn | Gọi |
|---|---|
| Bảng lương có BHXH, thuế TNCN, công thức minh bạch từng cột | `kv:tinh-luong-thue-tncn-bhxh` |
| Dự báo tiền vào ra 13 tuần, chỉ ra tuần thiếu tiền | `kv:du-bao-dong-tien-13-tuan` |
| Phân tích tuổi nợ và lên kế hoạch nhắc nợ lịch sự, có lưu vết | `kv:thu-hoi-no-qua-han` |
| Giải thích báo cáo tài chính cho chủ doanh nghiệp bằng lời dễ hiểu | `kv:doc-bctc-cho-chu-dn` |
| Soạn nháp thuyết minh BCTC năm, mọi số khớp bảng cân đối và sổ | `kv:thuyet-minh-bctc-don-gian` |

### Kiểm toán: chuẩn bị và làm việc với kiểm toán viên

| Việc của bạn | Gọi |
|---|---|
| Lập danh mục tài liệu (PBC), lịch và tự rà lỗi hay bị điều chỉnh trước khi kiểm toán viên vào | `kv:chuan-bi-kiem-toan-bctc` |
| Soạn thư xác nhận số dư công nợ, ngân hàng, hàng gửi; theo dõi phản hồi và giải thích chênh lệch | `kv:thu-xac-nhan-so-du-kiem-toan` |
| Tính biến động, tỷ suất so kỳ trước và soạn giải trình có bằng chứng cho câu kiểm toán viên sẽ hỏi | `kv:phan-tich-bien-dong-bctc` |
| Trả lời thư quản lý, bút toán điều chỉnh có căn cứ, tính ảnh hưởng lợi nhuận và thuế, lập kế hoạch khắc phục | `kv:tra-loi-thu-quan-ly-kiem-toan` |

### Dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Khóa sổ cuối tháng 3 bước: gom chứng từ -> lập đối chiếu -> gác cổng | `kv:day-chuyen-khoa-so-thang` |

### Dùng chung (core) hay đi kèm

| Việc của bạn | Gọi |
|---|---|
| Soát số bịa, số tự suy trước khi gửi báo cáo, công văn | `kv:kiem-tra-chong-bia` |
| Che CCCD, số tài khoản, lương trước khi đưa dữ liệu vào AI | `kv:an-thong-tin-nhay-cam` |
| Viết email gửi khách, nhà cung cấp, cơ quan thuế | `kv:viet-email` |
| Ghép dây chuyền riêng từ các agent của bộ | `kv:dieu-phoi-day-chuyen` |
| Xuất bảng đối chiếu, bảng lương, bảng kê ra Excel giữ công thức | `kv:xuat-excel` |
| Xuất công văn, biên bản, thuyết minh ra Word đúng thể thức | `kv:xuat-word` |

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
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Khóa sổ 31/12 và checklist quyết toán theo từng tài khoản, bút toán cuối năm chờ duyệt | `kv:khoa-so-cuoi-nam-quyet-toan` |
| Đối chiếu hàng loạt 12 kỳ tờ khai với sổ sách, nhiều đơn vị, kiểm liên tục thuế còn khấu trừ | `kv:doi-chieu-to-khai-so-sach` |
| Danh mục hồ sơ, rà rủi ro trước, sổ theo dõi yêu cầu của đoàn kiểm tra, ý kiến với biên bản | `kv:ho-so-lam-viec-doan-kiem-tra-thue` |
| Sổ TSCĐ và bảng khấu hao theo tháng có công thức minh bạch, tăng giảm, phân bổ bộ phận | `kv:tai-san-co-dinh-khau-hao` |
| Kiểm kê kho, đối chiếu thẻ kho - sổ - thực tế, soát giá xuất kho, tồn âm | `kv:kiem-ke-ton-kho-gia-von` |
| Báo cáo quản trị tháng: kết quả theo kênh, so ngân sách, tiền, KPI, việc cần quyết | `kv:bao-cao-quan-tri-thang-chu-dn` |
| Giá thành và biên lợi nhuận theo sản phẩm, khách, kênh với tiêu thức phân bổ rõ ràng | `kv:phan-tich-gia-thanh-bien-loi-nhuan` |
| Ngân sách năm từ giả định có tên, theo dõi thực hiện và giải thích chênh lệch hằng tháng | `kv:ngan-sach-nam-theo-doi-thuc-hien` |
| Rà kiểm soát chu trình mua hàng - thanh toán, phân quyền, kiểm thử dữ liệu nghi vấn | `kv:kiem-soat-noi-bo-mua-hang` |
| Chuẩn hóa file xuất từ MISA, Fast, Bravo thành bảng sạch để lập báo cáo, có kiểm tổng | `kv:chuyen-du-lieu-phan-mem-ke-toan` |
| Lập kế hoạch kiểm toán nội bộ năm theo rủi ro: chấm điểm chu trình, lịch theo nguồn lực, chương trình kiểm toán từng cuộc | `kv:ke-hoach-kiem-toan-noi-bo` |
| Chọn mẫu chứng từ tái lập được (seed), lập giấy làm việc và suy rộng sai sót thận trọng | `kv:chon-mau-kiem-tra-chung-tu` |
| Lọc bút toán cần xem xét từ sổ nhật ký: ngày nghỉ, số tròn, sát khóa sổ, tự duyệt, cặp tài khoản hiếm, Benford | `kv:kiem-tra-but-toan-bat-thuong` |
| Chạy trọn một cuộc kiểm toán nội bộ chu trình đến báo cáo nháp đã qua gác cổng giấy làm việc | `kv:day-chuyen-kiem-toan-noi-bo-chu-trinh` |
| Gom số liệu cả năm -> lập hồ sơ TNDN, TNCN, checklist -> gác cổng quyết toán -> bàn giao | `kv:day-chuyen-quyet-toan-nam` |
| Đọc thông báo thuế -> soạn công văn và hồ sơ đính kèm -> gác cổng căn cứ, số liệu | `kv:day-chuyen-giai-trinh-thue` |

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
| `kv:gom-chung-tu-ke-toan` | Thu thập - đọc thư mục chứng từ kế toán tháng (sổ chi tiết, sao kê, bảng kê hóa đơn), lập danh mục, chỉ ra file thiếu và dấu hiệu bất thường. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-van-ban-thue` | Thu thập - tra văn bản pháp luật thuế, kế toán, BHXH hiện hành trên nguồn chính thống, trả tên văn bản, ngày hiệu lực, tình trạng, đường dẫn. Chỉ đọc và tra mạng, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-so-lieu-doi-chieu` | Thực thi - từ chứng từ đã gom, lập file bảng đối chiếu công nợ, điều hòa ngân hàng, soát hóa đơn đầu vào, số liệu tờ khai GTGT; ghi vào thư mục ket-qua. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-ho-so-thue` | Thực thi - soạn nháp công văn giải trình thuế, bảng số liệu tờ khai, tờ trình cho giám đốc từ số liệu đã đối chiếu; ghi file vào ket-qua. Được ghi file, cấm ra mạng, cấm nộp. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chung-tu-hoa-don` | Gác cổng - soát bảng đối chiếu và bảng kê hóa đơn với chứng từ gốc: trùng, MST sai, thuế lệch, thiếu ngày, cấn trừ chưa có biên bản, bảng không cân. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-khop-thuyet-minh-bctc` | Gác cổng - soát nháp thuyết minh BCTC với BCTC và bảng cân đối số phát sinh: số không khớp, tổng bảng lệch, đầu năm khác cuối năm trước, chính sách mâu thuẫn số liệu. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-tuan-thu-thue` | Gác cổng - soát công văn, bảng số liệu tờ khai, tờ trình trước khi gửi: căn cứ pháp lý chưa kiểm chứng, tỷ lệ tự suy, khẳng định quá mức, lộ dữ liệu cá nhân, thiếu người ký. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Khóa sổ cuối tháng | `kv:gom-chung-tu-ke-toan` | `kv:lap-so-lieu-doi-chieu` | `kv:soat-chung-tu-hoa-don` | Chạy kv:day-chuyen-khoa-so-thang cho thư mục ke-toan/sao-mai/2026-10, phạm vi: công nợ 131, ngân hàng, hóa đơn đầu vào, số liệu GTGT. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Khai GTGT tháng** - Đầu tháng, trước hạn nộp tờ khai GTGT của kỳ trước.

`kv:kiem-tra-hoa-don-dau-vao` (Soát bảng kê hóa đơn đầu vào: trùng, MST, thuế lệch, người bán rủi ro) -> `kv:bang-ke-thanh-toan-khong-tien-mat` (Ghép hóa đơn từ ngưỡng với chứng từ chuyển khoản) -> `kv:chuan-bi-to-khai-gtgt` (Lập số liệu theo chỉ tiêu tờ khai và đối chiếu sổ) -> `kv:soat-so-lieu` (Soát số trái nguồn, số tự suy) -> `kv:xuat-excel` (Xuất bảng số liệu để nhập HTKK/eTax)

**Trả lời thông báo của cơ quan thuế** - Nhận thông báo yêu cầu giải trình chênh lệch doanh thu, thuế.

`kv:nghien-cuu-van-ban-thue` (Tra căn cứ hiện hành, ghi hiệu lực và link) -> `kv:cong-van-giai-trinh-thue` (Phân tích chênh lệch, soạn nháp công văn trung thực) -> `kv:soat-tuan-thu-thue` (Gác cổng: căn cứ chưa kiểm chứng, khẳng định quá mức, lộ dữ liệu) -> `kv:xuat-word` (Xuất công văn Word để ký, đóng dấu)

**Lương tháng** - Cuối tháng, khi có bảng chấm công.

`kv:an-thong-tin-nhay-cam` (Che CCCD, số tài khoản trước khi đưa dữ liệu vào) -> `kv:tinh-luong-thue-tncn-bhxh` (Lập bảng lương có bảo hiểm, giảm trừ, thuế TNCN) -> `kv:soat-so-lieu` (Kiểm chéo tổng thu nhập, thực lĩnh, khấu trừ) -> `kv:xuat-excel` (Xuất bảng lương giữ công thức từng cột)

**Khóa sổ và báo cáo cho chủ** - Cuối tháng, cần chốt số và nói cho giám đốc biết tình hình.

`kv:day-chuyen-khoa-so-thang` (Gom chứng từ -> lập đối chiếu -> gác cổng -> bàn giao trong .kv-run/) -> `kv:du-bao-dong-tien-13-tuan` (Dự báo tiền vào ra, chỉ ra tuần thiếu tiền) -> `kv:doc-bctc-cho-chu-dn` (Giải thích số liệu bằng lời dễ hiểu cho chủ DN) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**BCTC năm** - Quý 1 năm sau, lập bộ báo cáo tài chính và quyết toán.

`kv:soat-chi-phi-duoc-tru` (Soát chi phí được trừ, hồ sơ còn thiếu) -> `kv:chuan-bi-so-lieu-tncn-tndn` (Gom số liệu quyết toán TNDN, TNCN) -> `kv:thuyet-minh-bctc-don-gian` (Soạn nháp thuyết minh khớp BCTC) -> `kv:soat-khop-thuyet-minh-bctc` (Gác cổng: số không khớp, tổng lệch, chính sách mâu thuẫn) -> `kv:xuat-word` (Xuất thuyết minh Word đính kèm bộ BCTC)

**Mùa kiểm toán báo cáo tài chính** - Từ lúc nhận kế hoạch kiểm toán đến khi chốt bút toán điều chỉnh và thư quản lý

`kv:chuan-bi-kiem-toan-bctc` (Lập danh mục tài liệu, phân công, tự rà lỗi hay bị điều chỉnh) -> `kv:phan-tich-bien-dong-bctc` (Tính biến động, tỷ suất, soạn sẵn giải trình) -> `kv:thu-xac-nhan-so-du-kiem-toan` (Chuẩn bị thư xác nhận, theo dõi phản hồi, giải thích chênh lệch) -> `kv:tra-loi-thu-quan-ly-kiem-toan` (Trả lời bút toán điều chỉnh, thư quản lý, lập kế hoạch khắc phục)

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

- ⭐ 18 skill bản Free đều có phần nâng cao, kèm 18 script Python chạy hàng loạt (khớp sao kê nhiều ngân hàng, soát hóa đơn từ cổng, tổng hợp tờ khai GTGT, bảng lương, tuổi nợ, lịch thuế .ics...), tất cả đã chạy thử trên dữ liệu mẫu
- ⭐ 12 skill chỉ có ở Pro cho mùa quyết toán và kế toán quản trị: khóa sổ năm, đối chiếu 12 kỳ tờ khai - sổ, hồ sơ đón đoàn kiểm tra thuế, khấu hao TSCĐ công thức minh bạch, báo cáo quản trị tháng, ngân sách năm
- ⭐ 2 dây chuyền mới (quyết toán năm, giải trình thuế) với 5 agent Pro, có agent điều phối chạy song song nhiều khách cho kế toán dịch vụ
- ⭐ Bảng tra 156 nghiệp vụ định khoản, 62 khoản chi được trừ, 24 tình huống lệch công nợ, checklist khóa sổ 40 mục, bộ 12 mẫu nhắc nợ
- ⭐ Không tự điền thuế suất, tỷ lệ bảo hiểm, ngưỡng: mọi script dừng và báo [cần xác nhận theo quy định hiện hành] khi thiếu tham số; chỉ chuẩn bị, không nộp

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
