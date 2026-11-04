<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Hành chính - Văn phòng - Bản Free

> Văn bản đúng thể thức, lịch sếp không trùng, chi phí có báo giá - để phòng hành chính chạy êm mà không ai phải nhắc.

Bộ skill và agent tiếng Việt cho nhân viên hành chính, thư ký - trợ lý giám đốc, văn thư và admin văn phòng: soạn công văn, quyết định, tờ trình, thông báo đúng thể thức; giữ sổ công văn đến - đi, lưu trữ hồ sơ; xếp lịch giám đốc, chuẩn bị họp HĐQT; tổ chức sự kiện, đặt vé công tác; quản lý văn phòng phẩm, tài sản, báo giá và hợp đồng dịch vụ. Mọi quy định thể thức đều được nhắc kiểm tra bản hiện hành; AI chỉ soạn và lập bảng, người có thẩm quyền ký và duyệt chi.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 37 | 14 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Nhân viên hành chính, admin văn phòng · Thư ký, trợ lý giám đốc · Văn thư, lưu trữ · Trưởng phòng Hành chính - Nhân sự

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-hanh-chinh-van-phong@kitviet

# Hoặc dùng CLI (cần Node.js 18+): --ai claude, codex, cursor, copilot, gemini, windsurf... (kitviet platforms)
npx github:mochistudio-vn/kitviet init hanh-chinh-van-phong --ai claude
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

### Văn bản hành chính và văn thư

| Việc của bạn | Gọi |
|---|---|
| Soạn công văn đi đúng thể thức: số ký hiệu, trích yếu, kính gửi, nơi nhận, người ký | `kv:soan-cong-van-hanh-chinh` |
| Soạn quyết định bổ nhiệm, thành lập ban, ban hành quy chế có căn cứ và các Điều | `kv:soan-quyet-dinh-noi-bo` |
| Tờ trình xin duyệt: lý do, phương án, kinh phí, kiến nghị, ô phê duyệt | `kv:soan-to-trinh-de-xuat` |
| Thông báo nghỉ lễ, cắt điện, đổi giờ làm - kèm bản ngắn đăng Zalo | `kv:soan-thong-bao-hanh-chinh` |
| Quy chế, nội quy văn phòng theo chương - điều, có trách nhiệm và biểu mẫu | `kv:soan-quy-che-noi-bo` |
| Vào sổ văn bản đến - đi, cấp số, theo dõi hạn xử lý, báo trùng | `kv:so-cong-van-den-di` |
| Danh mục hồ sơ, quy tắc đặt tên file, mượn trả, đề nghị tiêu hủy | `kv:luu-tru-ho-so-van-phong` |

### Thư ký - trợ lý giám đốc

| Việc của bạn | Gọi |
|---|---|
| Xếp lịch tuần cho sếp, bắt trùng lịch, soạn tin xin dời lịch chờ duyệt | `kv:quan-ly-lich-giam-doc` |
| Bộ tài liệu họp HĐQT/HĐTV: lịch ngược, thư mời, phiếu biểu quyết, khung biên bản | `kv:chuan-bi-hop-hdqt` |
| Chọn phòng họp, checklist hậu cần trước - trong - sau họp, phân công | `kv:dat-phong-hop-hau-can` |
| Kịch bản đón tiếp khách theo giờ và thư cảm ơn sau buổi làm việc | `kv:tiep-khach-thu-cam-on` |

### Sự kiện và công tác

| Việc của bạn | Gọi |
|---|---|
| Kế hoạch hội nghị, tất niên: lịch ngược, checklist, dự toán có nguồn giá, phương án B | `kv:to-chuc-su-kien-hoi-nghi` |
| So phương án vé, khách sạn, dự toán theo quy chế công tác phí, giấy tạm ứng | `kv:dat-ve-du-toan-cong-tac` |

### Tài sản, mua sắm, dịch vụ văn phòng

| Việc của bạn | Gọi |
|---|---|
| Nhập - xuất - tồn VPP, định mức theo phòng, đề xuất mua bổ sung | `kv:quan-ly-van-phong-pham` |
| Sổ tài sản có mã, bàn giao, sửa chữa, kiểm kê, đề xuất thanh lý | `kv:so-tai-san-van-phong` |
| Đưa báo giá về cùng mặt bằng, so sánh, đề xuất nhà cung cấp có lý do | `kv:so-sanh-bao-gia-mua-sam` |
| Theo dõi hợp đồng vệ sinh, bảo vệ, internet: hạn, gia hạn tự động, chất lượng | `kv:theo-doi-hop-dong-dich-vu-vp` |

### Báo cáo và dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Báo cáo tháng: văn thư, chi phí so dự toán, tài sản, việc tồn, đề xuất | `kv:bao-cao-hanh-chinh-thang` |
| Ra văn bản 3 khâu: gom căn cứ -> soạn -> gác cổng thể thức, rồi mới trình ký | `kv:day-chuyen-van-ban-hanh-chinh` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Soát số, ngày, tên trong văn bản và báo cáo trước khi trình | `kv:kiem-tra-chong-bia` |
| Che CCCD, hộ chiếu, số tài khoản trước khi gửi hoặc đưa vào AI | `kv:an-thong-tin-nhay-cam` |
| Biên bản họp và đầu việc từ ghi chép | `kv:ghi-chu-hop` |
| Email gửi đối tác, nhà cung cấp, tòa nhà | `kv:viet-email` |
| Xuất công văn, quyết định, tờ trình ra file Word | `kv:xuat-word` |
| Xuất sổ công văn, sổ tài sản, dự toán ra Excel | `kv:xuat-excel` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dieu-phoi-day-chuyen` | Giao thức chạy Kit Việt cho việc nhiều khâu - lập kế hoạch, thu thập, soạn, gác cổng QUA/CHẶN, bàn giao trong .kv-run/. Dùng khi nói "chạy dây chuyền", "làm từ A đến Z", "đọc rồi viết rồi soát". |
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
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
| Kế hoạch số hóa hồ sơ giấy: chuẩn quét, quy tắc đặt tên, cây thư mục, ma trận phân quyền, sao lưu 3-2-1 | `kv:so-hoa-ho-so-dien-tu` |
| Quy trình hành chính kiểu ISO: mã tài liệu, lưu đồ, bước - trách nhiệm - biểu mẫu - hồ sơ, theo dõi sửa đổi | `kv:quy-trinh-iso-van-phong` |
| Sổ tay 12 phần cho nhân viên mới, bảng đầu mối, FAQ, có nguồn quy chế từng phần | `kv:so-tay-hanh-chinh-nhan-vien` |
| Ngân sách hành chính năm theo khoản mục và tháng, có căn cứ, so năm trước, theo dõi cảnh báo vượt | `kv:ngan-sach-hanh-chinh-nam` |
| Chấm NCC theo SLA có bằng chứng, xếp loại A-D, đề xuất giữ - cải thiện - thay gắn mốc hợp đồng | `kv:danh-gia-nha-cung-cap-dich-vu-vp` |
| Báo cáo quý 1 trang cho giám đốc, 2 biểu đồ SVG có bảng số, KPI, đề xuất cần quyết | `kv:bao-cao-hanh-chinh-quy` |
| Bảng điều khoản thuê văn phòng, so mặt bằng tổng chi phí 3 năm, lịch chuyển, danh sách thông báo đổi địa chỉ | `kv:thue-chuyen-van-phong` |
| Xếp xe - lái xe theo đề nghị, bắt trùng, nhật ký hành trình, nhiên liệu so định mức, hạn giấy tờ xe | `kv:quan-ly-xe-cong-tac` |
| Đội PCCC văn phòng, lối thoát - điểm tập kết, bảng kiểm thiết bị tháng, kịch bản diễn tập | `kv:pccc-so-tan-van-phong` |
| ĐHĐCĐ / hội nghị 300+ người: phân ban, check-in, kiểm tra tư cách, hậu cần biểu quyết - kiểm phiếu | `kv:to-chuc-dai-hoi-co-dong` |
| Gom báo giá song song -> kế hoạch, dự toán, kịch bản -> gác cổng chi phí và an toàn -> hồ sơ trình | `kv:day-chuyen-su-kien-tron-goi` |
| Gom báo giá -> so sánh, chấm điểm, tờ trình, đơn hàng dự thảo -> gác cổng dự toán -> chờ duyệt | `kv:day-chuyen-mua-sam-van-phong` |
| Chia lô báo giá, văn bản đến, hợp đồng cho nhiều agent đọc cùng lúc | `kv:dieu-phoi-song-song` |
| Xuất công văn, tờ trình, báo cáo, tem tài sản theo nhận diện công ty | `kv:mau-tai-lieu-thuong-hieu` |
| Tờ trình 1 trang, trang tóm tắt báo cáo quý cho giám đốc | `kv:tom-tat-cho-sep` |
| Thông báo, thư cảm ơn, sổ tay bản Việt - Anh giữ nguyên số liệu | `kv:viet-song-ngu` |
| Slide giao ban quý, slide điều hành đại hội | `kv:tao-slide` |

Mỗi skill Free đều có mục **"Bản Pro có thêm"** ở cuối file cho biết bản Pro làm sâu hơn những gì. Xem tại https://mochistudio.io.vn

## Trợ lý (agent) - xếp theo quyền

Skill là **cách làm**, agent là **người làm và giới hạn của người đó**. Dòng `tools:` trong file agent là khóa quyền thật.

### ĐIỀU PHỐI - lập kế hoạch, kiểm định bàn giao, không làm thay khâu khác

| Agent | Vai | tools |
|---|---|---|
| `kv:kiem-dinh-ban-giao` | Gác cổng cuối - đối chiếu sản phẩm với 00-ke-hoach.md và các 03-soat-*.md, kết luận QUA/CHẶN, liệt kê việc người dùng phải tự quyết. Chỉ đọc, chỉ được ghi 04-ban-giao.md. | `Read, Glob, Grep, Write` |
| `kv:lap-ke-hoach-dieu-phoi` | Điều phối - đọc yêu cầu và nguồn, viết .kv-run/<viec>-<yyyymmdd>/00-ke-hoach.md: khâu, agent, đầu vào/ra, tiêu chí đạt, rủi ro, khâu nào song song. Chỉ ghi trong .kv-run/, không làm thay khâu nào. | `Read, Glob, Grep, Write` |
| `kv:dieu-phoi-hau-can-su-kien` | Điều phối - lập kế hoạch chạy cho sự kiện, hội nghị, họp lớn trong .kv-run (khâu, mốc, tiêu chí đạt), rồi tổng hợp kết quả các khâu thành bảng trạng thái hậu cần. Chỉ ghi trong .kv-run, không làm thay khâu khác. | `Read, Glob, Grep, Write` |

### THU THẬP - đọc và tra cứu, cấm ghi file

| Agent | Vai | tools |
|---|---|---|
| `kv:doc-nhieu-tai-lieu` | Thu thập - đọc cả thư mục hoặc nhiều file tài liệu, rút gọn dữ kiện chính kèm vị trí trích (file, trang, dòng) để khâu sau viết. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:nghien-cuu-nguon` | Thu thập - tra cứu nhiều nguồn (web + file), xếp bậc uy tín 1-2-3, trả bảng nguồn và dữ kiện có trích dẫn, mâu thuẫn, chỗ chưa có nguồn. Chỉ đọc, không ghi file; phiên chính ghi 01-thu-thap.md. | `Read, Grep, Glob, WebSearch, WebFetch` |
| `kv:gom-ho-so-van-thu` | Thu thập - đọc thư mục hồ sơ (công văn đến, hợp đồng, biên bản, báo giá, quy chế) và rút căn cứ, số liệu, tên, ngày kèm vị trí nguồn cho văn bản sắp soạn; chỉ ra chỗ thiếu. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-the-thuc-van-ban` | Thu thập - tra quy định hiện hành về thể thức văn bản, văn thư, lưu trữ, công tác phí, nghỉ lễ trên nguồn chính thức, ghi rõ nguồn, ngày truy cập, tình trạng hiệu lực. Chỉ đọc và tra, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-bang-hanh-chinh` | Thực thi - lập file bảng hành chính từ dữ liệu đã gom: dự toán sự kiện, dự toán công tác, so sánh báo giá, sổ công văn, sổ tài sản, nhập - xuất - tồn VPP, checklist hậu cần. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-van-ban-hanh-chinh` | Thực thi - từ file thu thập, soạn nháp công văn, quyết định, tờ trình, thông báo, quy chế đúng thể thức vào thư mục chạy; sửa theo lỗi gác cổng báo. Được ghi file, cấm ra mạng, cấm phát hành. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-du-toan-mua-sam` | Gác cổng - soát dự toán sự kiện, dự toán công tác, bảng so sánh báo giá, đề xuất mua: cộng sai, VAT lẫn lộn, giá không nguồn, báo giá hết hiệu lực, thiếu báo giá, vượt định mức. Trả QUA/CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |
| `kv:soat-the-thuc-van-ban` | Gác cổng - soát văn bản hành chính trước khi trình ký: đủ thành phần thể thức, trích yếu, thẩm quyền ký, căn cứ có nguồn, nơi nhận, ngày - thứ, lộ dữ liệu cá nhân. Trả QUA/CHẶN. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Ra văn bản hành chính quan trọng | `kv:gom-ho-so-van-thu` | `kv:soan-van-ban-hanh-chinh` | `kv:soat-the-thuc-van-ban` | Chạy kv:day-chuyen-van-ban-hanh-chinh: soạn công văn gửi Ban quản lý tòa nhà đề nghị gia hạn hợp đồng thuê tầng 5 thêm 12 tháng. Hồ sơ trong hanh-chinh/van-ban/cv-gia-han-mat-bang/, người ký Giám đốc. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Có văn bản đến cần trả lời** - Công văn của cơ quan, đối tác, tòa nhà vừa đến và có hạn trả lời

`kv:so-cong-van-den-di` (Vào sổ đến, cấp số đến, ghi hạn xử lý, báo trùng) -> `kv:soan-cong-van-hanh-chinh` (Soạn công văn trả lời, trích số và ngày văn bản đến) -> `kv:soat-the-thuc-van-ban` (Gác cổng thể thức, thẩm quyền ký, căn cứ) -> `kv:xuat-word` (Xuất bản trình ký) -> `kv:so-cong-van-den-di` (Sau khi ký: vào sổ đi, đóng dòng văn bản đến)

**Mua sắm có 3 báo giá** - Mua thiết bị, thuê dịch vụ vượt ngưỡng phải so sánh báo giá và trình duyệt

`kv:so-sanh-bao-gia-mua-sam` (Đưa báo giá về cùng mặt bằng, bảng so sánh, đề xuất) -> `kv:soat-du-toan-mua-sam` (Gác cổng tính toán, VAT, hiệu lực báo giá, số báo giá) -> `kv:soan-to-trinh-de-xuat` (Tờ trình xin duyệt có ô phê duyệt) -> `kv:xuat-excel` (Xuất bảng so sánh kèm tờ trình)

**Tổ chức hội nghị, tất niên** - Sự kiện có ban tổ chức, ngân sách và nhiều nhà cung cấp

`kv:to-chuc-su-kien-hoi-nghi` (Kế hoạch, lịch ngược, checklist, dự toán) -> `kv:soan-quyet-dinh-noi-bo` (Quyết định thành lập Ban tổ chức) -> `kv:soat-du-toan-mua-sam` (Gác cổng dự toán trước khi trình) -> `kv:soan-to-trinh-de-xuat` (Tờ trình xin duyệt ngân sách) -> `kv:dat-phong-hop-hau-can` (Checklist hậu cần ngày diễn ra) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Tuần làm việc của thư ký giám đốc** - Đầu tuần lên lịch sếp, lo phòng họp, đón khách và chuyến công tác

`kv:quan-ly-lich-giam-doc` (Lịch tuần đề xuất, xung đột, việc cần sếp quyết) -> `kv:dat-phong-hop-hau-can` (Phòng và hậu cần cho các cuộc họp trong tuần) -> `kv:tiep-khach-thu-cam-on` (Kịch bản đón đối tác và thư cảm ơn sau buổi gặp) -> `kv:dat-ve-du-toan-cong-tac` (Phương án vé, dự toán, giấy tạm ứng cho chuyến đi) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Chốt sổ hành chính cuối tháng** - Ngày làm việc cuối tháng: kho, tài sản, hợp đồng, báo cáo gửi giám đốc

`kv:quan-ly-van-phong-pham` (Nhập - xuất - tồn VPP và đề xuất mua tháng sau) -> `kv:theo-doi-hop-dong-dich-vu-vp` (Hợp đồng sắp đến hạn quyết định gia hạn) -> `kv:bao-cao-hanh-chinh-thang` (Báo cáo tháng: văn thư, chi phí so dự toán, việc tồn) -> `kv:kiem-tra-chong-bia` (Soát số trước khi gửi giám đốc) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

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

- ⭐ 12 skill chỉ có ở Pro: số hóa hồ sơ, quy trình ISO, ngân sách hành chính năm, quản lý xe, ĐHĐCĐ / hội nghị 300+ người, thuê và chuyển văn phòng, PCCC - sơ tán, sổ tay nhân viên mới, đánh giá NCC, báo cáo quý có biểu đồ và 2 dây chuyền mới
- ⭐ 2 dây chuyền mới có gác cổng độc lập: sự kiện trọn gói (gom báo giá song song theo lô, soát cả chi phí lẫn an toàn) và mua sắm so sánh - duyệt - đặt hàng
- ⭐ 4 agent mới: đọc báo giá chép đúng từng dòng kèm trang, lập kế hoạch sự kiện, soạn hồ sơ mua sắm, gác cổng chi phí - an toàn sự kiện
- ⭐ 20 script Python chạy cục bộ, không cần cài thêm: tem tài sản QR, lịch .ics cho lịch giám đốc - hợp đồng - bảo trì, Excel 12 tháng có biểu đồ, chấm điểm báo giá, quét ổ đĩa chung, đánh số Điều quyết định, so sánh quy chế cũ - mới
- ⭐ Kho mẫu viết sẵn: 25 công văn, 18 quyết định, 12 tờ trình, 20 thông báo, 10 khung quy chế, 15 thư cảm ơn song ngữ, danh mục hồ sơ 60 loại, checklist sự kiện 80 mục
- ⭐ Nâng cấp cả 19 skill free với phần Pro: đọc hàng loạt văn bản đến, báo giá, hợp đồng; bộ mẫu họp HĐQT - HĐTV - ĐHĐCĐ; quyết toán công tác và sự kiện

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
