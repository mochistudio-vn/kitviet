<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Pháp chế - Văn phòng luật - Bản Free

> Rà hợp đồng kỹ hơn, soạn văn bản nhanh hơn - và không bao giờ bịa một số điều luật.

Bộ skill cho người làm pháp chế doanh nghiệp và văn phòng luật: rà soát hợp đồng theo vị thế bên mình, so phiên bản, dựng dòng thời gian vụ việc, soạn memo, công văn, theo dõi thời hạn. Mọi căn cứ pháp luật phải có nguồn chính thức, tình trạng hiệu lực và ngày truy cập; chỗ cần ý kiến luật sư luôn được đánh dấu. AI hỗ trợ chuẩn bị và rà soát, không thay luật sư.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 37 | 15 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Chuyên viên pháp chế doanh nghiệp · Trợ lý luật sư, paralegal, luật sư tập sự · Nhân viên hành chính - pháp lý, quản lý hợp đồng

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

### Hợp đồng

| Việc của bạn | Gọi |
|---|---|
| Đọc hợp đồng đối tác gửi, biết bên mình gánh gì, rủi ro ở đâu, cần hỏi lại gì | `kv:ra-soat-hop-dong-theo-vi-the` |
| Bắt mọi chỗ đối tác sửa, kể cả sửa ngầm không bật Track Changes | `kv:so-sanh-phien-ban-hop-dong` |
| Điền mẫu hợp đồng của công ty thành dự thảo sạch, chỗ thiếu được đánh dấu | `kv:soan-hop-dong-tu-mau` |
| Gom hợp đồng rải rác thành một sổ: với ai, bao nhiêu, hết hạn khi nào, bản gốc ở đâu | `kv:so-quan-ly-hop-dong` |
| Rà hợp đồng quan trọng qua 3 khâu đọc - soạn - soát trước khi trình luật sư | `kv:day-chuyen-ra-soat-hop-dong` |
| Đọc NDA trước khi ký, bắt điều khoản không cạnh tranh, phạt không trần cài vào "mẫu chuẩn" | `kv:ra-soat-thoa-thuan-bao-mat` |
| Chốt giá trị, công nợ, nghĩa vụ còn lại khi kết thúc hợp đồng mà không lỡ tay từ bỏ quyền | `kv:soan-bien-ban-thanh-ly-hop-dong` |

### Vụ việc và tranh chấp

| Việc của bạn | Gọi |
|---|---|
| Sắp email, biên bản, tin Zalo thành diễn biến có nguồn, thấy ngay chỗ vênh và chỗ thiếu | `kv:dong-thoi-gian-vu-viec` |
| Không lỡ hạn báo trước, hạn trả lời, hạn bảo lãnh; thời hiệu được đánh dấu cho luật sư | `kv:lich-thoi-han-phap-ly` |
| Đọc nhanh bản án đã công bố: tòa nhận định gì, căn cứ gì, xử ra sao | `kv:tom-tat-ban-an` |
| Vào buổi đàm phán, hòa giải với lập trường, thang nhượng bộ và kịch bản rõ ràng | `kv:chuan-bi-dam-phan-hoa-giai` |

### Soạn thảo, nghiên cứu và đào tạo

| Việc của bạn | Gọi |
|---|---|
| Tìm căn cứ trên nguồn chính thức, biết văn bản còn hiệu lực không, kiểm trích dẫn có thật không | `kv:tra-cuu-van-ban-phap-luat` |
| Viết memo trình sếp: vấn đề - căn cứ - phân tích - phương án, chỗ cần luật sư được đánh dấu | `kv:memo-phap-ly-noi-bo` |
| Trả lời khiếu nại, thông báo vi phạm, thư yêu cầu thanh toán - đúng thể thức, không lỡ lời | `kv:soan-cong-van-phap-ly` |
| Dựng đề cương nghiên cứu, ý kiến pháp lý mà mỗi ý đều trỏ về một nguồn đúng bậc | `kv:de-cuong-nghien-cuu-phap-ly` |
| Soạn bài phổ biến quy định cho nhân viên không học luật: slide, tình huống, câu hỏi kiểm tra | `kv:dao-tao-phap-ly-noi-bo` |

### Doanh nghiệp và tuân thủ

| Việc của bạn | Gọi |
|---|---|
| Lập danh mục xin tài liệu, theo dõi data room, ghi phát hiện cho thương vụ | `kv:checklist-tham-dinh-phap-ly` |
| Dựng bản đồ dữ liệu, khung chính sách và mẫu đồng ý để đối chiếu quy định hiện hành | `kv:khung-chinh-sach-du-lieu-ca-nhan` |
| Biết cần giấy tờ gì, ai ký, việc gì phải làm sau khi đổi trụ sở, người đại diện, vốn | `kv:ho-so-thay-doi-dang-ky-doanh-nghiep` |

### Dùng chung từ bộ lõi

| Việc của bạn | Gọi |
|---|---|
| Soát bản nháp trước khi gửi: số, ngày, tên có khớp hồ sơ gốc không | `kv:kiem-tra-chong-bia` |
| Che CCCD, số tài khoản, tên khách hàng trước khi chia sẻ tài liệu | `kv:an-thong-tin-nhay-cam` |
| Tóm nhanh tài liệu dài không thuộc loại hợp đồng, bản án | `kv:tom-tat-tai-lieu` |
| Ghi biên bản họp với khách hàng, đối tác thành việc cần làm | `kv:ghi-chu-hop` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dieu-phoi-day-chuyen` | Giao thức chạy Kit Việt cho việc nhiều khâu - lập kế hoạch, thu thập, soạn, gác cổng QUA/CHẶN, bàn giao trong .kv-run/. Dùng khi nói "chạy dây chuyền", "làm từ A đến Z", "đọc rồi viết rồi soát". |
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
| `kv:ho-so-ca-nhan` | Phỏng vấn 8-10 câu để viết hồ sơ CLAUDE.md / AGENTS.md: vai trò, đơn vị, khách, giọng văn, từ cấm, quy tắc. Dùng khi nói "tạo hồ sơ", "cho AI biết về tôi", "viết CLAUDE.md", "cài đặt ban đầu". |
| `kv:lap-ke-hoach-tuan` | Xếp việc trong tuần theo giờ thật có được, ưu tiên rõ, dám nói khi không đủ giờ. Dùng khi nói "lên kế hoạch tuần", "tuần này làm gì trước", "việc nhiều quá", "xếp lịch giúp". |
| `kv:nghien-cuu-nguon-uy-tin` | Tra cứu tài liệu theo bậc nguồn uy tín, ghi trích dẫn đủ (đơn vị, năm, link, ngày truy cập), chỉ ra mâu thuẫn và chỗ chưa có nguồn. Dùng khi nói "tìm tài liệu", "nghiên cứu giúp", "nguồn nào nói". |
| `kv:tao-bang-kiem` | Tạo bảng kiểm (checklist) cho việc lặp lại hoặc dễ sót bước: mỗi mục kiểm được, có người và thời điểm. Dùng khi nói "làm checklist", "bảng kiểm", "danh sách việc cần làm khi...", "hay quên bước". |
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
| Viết ra vị trí chuẩn - dự phòng - lằn ranh dừng của công ty cho từng điều khoản, kèm người được duyệt | `kv:xay-playbook-dieu-khoan-hop-dong` |
| Rà cả thư mục hợp đồng theo playbook, ra ma trận lệch chuẩn và bảng rủi ro Cao theo file | `kv:ra-soat-hop-dong-theo-playbook` |
| Kiểm đối tác còn hoạt động, người ký có thẩm quyền, tài khoản đúng tên trước khi ký hay đặt cọc | `kv:tham-tra-phap-ly-doi-tac` |
| Gom Điều lệ, quy chế, giấy ủy quyền thành bảng ai duyệt - ai ký đến giá trị nào | `kv:ma-tran-tham-quyen-ky-phap-che` |
| Dựng dòng thời gian, bảng chứng cứ, lịch hạn và memo cho luật sư qua 3 khâu đọc - soạn - soát | `kv:day-chuyen-ho-so-tranh-chap` |
| Đánh số chứng cứ, lập danh mục tài liệu nộp kèm, khung đơn để luật sư hoàn thiện | `kv:ho-so-khoi-kien-bang-chung-cu` |
| Một sổ cho mọi vụ việc: giai đoạn, giá trị, mốc tới, chi phí, báo cáo quý cho lãnh đạo | `kv:so-quan-tri-tranh-chap` |
| Chia data room theo mảng cho nhiều lượt đọc song song, gác cổng mở lại tài liệu gốc cho mọi phát hiện Đỏ | `kv:day-chuyen-tham-dinh-phap-ly` |
| Biến bảng phát hiện thành red flag report và báo cáo đầy đủ có đề xuất xử lý trong giao dịch | `kv:bao-cao-tham-dinh-phap-ly` |
| Soạn trọn bộ tài liệu họp HĐQT, ĐHĐCĐ, HĐTV theo Điều lệ và mẫu của công ty | `kv:soan-tai-lieu-hop-hdqt-dhdcd` |
| Hợp nhất Điều lệ, bắt điều mâu thuẫn và lệch thực tế, soạn bảng đối chiếu cũ - mới | `kv:ra-soat-dieu-le-cong-ty` |
| Lịch báo cáo định kỳ, gia hạn giấy phép, họp thường niên - mỗi nghĩa vụ có nguồn và người phụ trách | `kv:lich-nghia-vu-tuan-thu-phap-che` |
| Lập khung hồ sơ đánh giá tác động cho từng hoạt động xử lý dữ liệu cá nhân | `kv:danh-gia-tac-dong-du-lieu-ca-nhan` |
| So luật cũ - mới từ nguyên văn, biết ngay hợp đồng mẫu, quy chế nào phải sửa | `kv:bang-thay-doi-van-ban-luat-cu-moi` |
| Kế hoạch đào tạo tuân thủ cả năm theo vai trò, có chỉ số đo và hồ sơ đã phổ biến | `kv:lo-trinh-dao-tao-phap-ly-theo-vai-tro` |

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
| `kv:doc-ho-so-phap-ly` | Thu thập - đọc hợp đồng, phụ lục, hồ sơ vụ việc, trả bảng dữ kiện có vị trí, mâu thuẫn giữa tài liệu, tài liệu thiếu, nội dung đáng ngờ. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:kiem-tra-hieu-luc-van-ban` | Thu thập - nhận danh sách văn bản pháp luật đang được dẫn (sổ căn cứ, mẫu hợp đồng, memo cũ), tra nguồn chính thức xem còn hiệu lực tại thời điểm áp dụng không, bị sửa đổi/thay thế bởi gì. Chỉ đọc, cấm ghi. | `Read, Grep, Glob, WebSearch, WebFetch` |
| `kv:tra-cuu-nguon-luat-chinh-thuc` | Thu thập - tra văn bản pháp luật chỉ trên nguồn chính thức (vbpl.vn, chinhphu.vn, Công báo, cổng của cơ quan ban hành), trả số hiệu, hiệu lực, nguyên văn, ngày truy cập. Chỉ đọc, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-bang-doi-chieu-phap-ly` | Thực thi - lập bảng pháp lý từ dữ kiện đã đọc: bảng thay đổi hai phiên bản hợp đồng, sổ hợp đồng, lịch thời hạn, dòng thời gian vụ việc (Markdown/CSV). Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-thao-van-ban-phap-ly` | Thực thi - soạn báo cáo rà soát hợp đồng, memo nội bộ, công văn từ bảng dữ kiện và căn cứ đã tra, đánh dấu chỗ cần luật sư. Được ghi file trong thư mục làm việc, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-can-cu-phap-ly` | Gác cổng - soát mọi trích dẫn pháp luật trong bản nháp: có nguồn chính thức chưa, đúng số hiệu, số điều, còn hiệu lực, nguyên văn khớp, có kết luận vượt thẩm quyền. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-dien-giai-hop-dong` | Gác cổng - đối chiếu từng nhận xét trong bản rà soát/memo với nguyên văn hợp đồng: bắt hiểu lệch nghĩa, trích sai, bỏ sót mâu thuẫn phụ lục, lộ bí mật khách hàng. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-trich-dan-nguon-phap-ly` | Gác cổng - soát trích dẫn trong đề cương nghiên cứu, ý kiến pháp lý, slide đào tạo: mỗi ý có nguồn, đúng bậc nguồn, trích khớp nguyên văn, đủ trường. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Rà soát hợp đồng trước khi trình luật sư | `kv:doc-ho-so-phap-ly` | `kv:soan-thao-van-ban-phap-ly` | `kv:soat-can-cu-phap-ly` | Dùng kv:day-chuyen-ra-soat-hop-dong cho thư mục hop-dong/HD-2026-27, bên mình là Bên A (bên sử dụng dịch vụ), cần tra căn cứ về mức phạt vi phạm. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Hợp đồng đối tác gửi tới - từ rà đến lưu sổ** - Đối tác soạn hợp đồng hoặc NDA, cần rà, thương lượng bản sửa rồi ký và lưu.

`kv:ra-soat-hop-dong-theo-vi-the` (Rà theo vị thế bên mình, lập bảng rủi ro và câu hỏi lại) -> `kv:so-sanh-phien-ban-hop-dong` (Đối tác gửi lại bản sửa - bắt mọi chỗ sửa ngầm) -> `kv:kiem-tra-chong-bia` (Soát số tiền, tên, ngày trước khi trình ký) -> `kv:so-quan-ly-hop-dong` (Ký xong, đưa vào sổ hợp đồng) -> `kv:xuat-excel` (Xuất sổ hợp đồng ra file Excel)

**Nghiên cứu vấn đề pháp lý thành memo** - Câu hỏi mới, cần nhiều bậc nguồn trước khi trình ý kiến cho lãnh đạo hoặc khách hàng.

`kv:de-cuong-nghien-cuu-phap-ly` (Tách vấn đề, chốt thời điểm áp dụng, dựng đề cương có bậc nguồn) -> `kv:tra-cuu-nguon-luat-chinh-thuc` (Tra văn bản QPPL trên nguồn chính thức) -> `kv:kiem-tra-hieu-luc-van-ban` (Kiểm hiệu lực mọi văn bản trong bảng nguồn) -> `kv:soat-trich-dan-nguon-phap-ly` (Soát mỗi ý có nguồn đúng bậc, kết luận QUA/CHẶN) -> `kv:memo-phap-ly-noi-bo` (Viết memo từ đề cương đã qua soát) -> `kv:xuat-word` (Xuất memo ra Word để trình ký)

**Vụ việc tranh chấp đến khi chốt** - Có tranh chấp với đối tác, cần nắm diễn biến, giữ hạn, đi thương lượng và chốt bằng biên bản.

`kv:dong-thoi-gian-vu-viec` (Dựng diễn biến có nguồn từ email, biên bản, tin nhắn) -> `kv:lich-thoi-han-phap-ly` (Lập lịch hạn trả lời, hạn báo trước, đánh dấu thời hiệu cho luật sư) -> `kv:chuan-bi-dam-phan-hoa-giai` (Chuẩn bị lập trường, thang nhượng bộ, kịch bản buổi họp) -> `kv:soan-bien-ban-thanh-ly-hop-dong` (Ghi nhận nội dung đã thỏa thuận hoặc thanh lý hợp đồng) -> `kv:kiem-tra-chong-bia` (Soát số, ngày, tên trước khi trình ký) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Phổ biến quy định mới cho nhân viên** - Có văn bản hoặc quy chế mới, cần buổi đào tạo nội bộ ngắn, đúng nguồn.

`kv:tra-cuu-van-ban-phap-luat` (Tra văn bản mới, ghi hiệu lực và ngày truy cập) -> `kv:dao-tao-phap-ly-noi-bo` (Soạn đề cương slide, tình huống, câu hỏi kiểm tra) -> `kv:soat-trich-dan-nguon-phap-ly` (Soát nguồn trong slide trước khi duyệt) -> `kv:xuat-pptx` (Xuất bài trình bày ra PowerPoint)

**Rà định kỳ cuối tháng** - Cập nhật sổ, lọc hạn sắp tới và kiểm mẫu hợp đồng còn dẫn văn bản hết hiệu lực.

`kv:so-quan-ly-hop-dong` (Cập nhật sổ hợp đồng từ các hợp đồng mới ký) -> `kv:lich-thoi-han-phap-ly` (Lọc các mốc trong 30 ngày tới) -> `kv:kiem-tra-hieu-luc-van-ban` (Kiểm văn bản được dẫn trong thư mục mẫu hợp đồng) -> `kv:xuat-excel` (Xuất sổ và lịch thời hạn ra Excel)

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

- ⭐ 6 agent mới và 2 dây chuyền chuyên sâu: hồ sơ tranh chấp cho luật sư, thẩm định data room đọc song song 4-6 mảng cùng lúc
- ⭐ 15 skill chỉ có ở Pro: playbook điều khoản, rà hàng loạt theo playbook, red flag report, hồ sơ khởi kiện, tài liệu họp HĐQT-ĐHĐCĐ, lịch tuân thủ, đánh giá tác động dữ liệu cá nhân...
- ⭐ 15 script Python chạy ngay: so sánh hợp đồng ghép điều kể cả khi đánh số lại, điền mẫu hàng loạt .docx, sổ hợp đồng Excel có công thức, tính ngày làm việc xuất .ics, đối chiếu data room
- ⭐ Đủ 19 skill Free được nâng cấp, kèm 30 tài liệu mẫu, bảng tra và 9 file mẫu CSV: điều khoản theo 6 loại hợp đồng, câu sửa NDA song ngữ, 6 mẫu công văn, 4 mẫu biên bản thanh lý, 6 câu miễn trừ có chú giải
- ⭐ Gác cổng mở lại tài liệu gốc cho 100% phát hiện Đỏ; mọi căn cứ phải có nguồn chính thức, mọi kết luận gắn nhãn cần luật sư

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
