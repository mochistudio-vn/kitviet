<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Marketing - Content - Bản Free

> Ra nội dung đủ kênh mỗi tuần, đúng giọng thương hiệu, không dính claim cấm.

Bộ skill cho người làm content và marketing ở Việt Nam: nghiên cứu thị trường có nguồn, kế hoạch truyền thông, lịch nội dung, bài fanpage, kịch bản TikTok/Reels, blog SEO, ad copy, email, landing page, lịch đăng và trả lời bình luận, báo cáo ads. Mọi bản nháp bám tài liệu sản phẩm, có khâu soát claim, số liệu thị trường và giọng thương hiệu trước khi tới tay sếp hay khách.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 37 | 15 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Content marketer · Social media executive · Marketing manager doanh nghiệp nhỏ · Agency nhỏ và freelancer

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

### Lập kế hoạch và chiến lược

| Việc của bạn | Gọi |
|---|---|
| Lên content plan tháng theo trụ cột, kênh, ngày lễ, ngày sale | `kv:lich-noi-dung-thang` |
| Viết cẩm nang brand voice để cả team và AI viết cùng một giọng | `kv:cam-nang-giong-thuong-hieu` |
| Dựng chân dung khách từ đơn hàng, inbox, khảo sát - có bằng chứng | `kv:persona-tu-du-lieu-that` |
| Xem đối thủ đang nói gì, chạy ads gì, khoảng trống ở đâu | `kv:phan-tich-doi-thu-noi-dung` |
| Đọc hàng trăm bình luận, review để biết khách thích gì, sợ gì | `kv:insight-tu-binh-luan-review` |
| Tìm số liệu thị trường từ nguồn uy tín, mỗi số có nguồn, năm, ngày truy cập | `kv:nghien-cuu-thi-truong-marketing` |
| Đề cương chiến dịch: mục tiêu, thông điệp, kênh, giai đoạn, ngân sách, KPI | `kv:ke-hoach-truyen-thong-chien-dich` |

### Viết nội dung

| Việc của bạn | Gọi |
|---|---|
| Viết bài Facebook có hook, CTA, hashtag, 2-3 phiên bản | `kv:bai-dang-fanpage` |
| Kịch bản TikTok/Reels: hook 3 giây, phân cảnh, chữ trên màn hình | `kv:kich-ban-video-ngan` |
| Bài blog SEO tiếng Việt: ý định tìm kiếm, dàn ý H2/H3, meta | `kv:bai-blog-chuan-seo` |
| Một webinar/blog thành 8-10 bài cho nhiều kênh | `kv:chuyen-the-noi-dung-da-kenh` |
| Chuỗi email chào mừng, bỏ giỏ, mua lại có link hủy đăng ký | `kv:chuoi-email-cham-soc` |

### Vận hành kênh

| Việc của bạn | Gọi |
|---|---|
| Tiêu đề, ảnh bìa video/blog nhiều phương án, đếm ký tự, cặp thử A/B | `kv:toi-uu-tieu-de-thumbnail` |
| Lịch đăng tuần tới giờ và bộ trả lời bình luận, inbox có quy tắc chuyển cấp | `kv:lich-dang-tra-loi-binh-luan` |

### Quảng cáo và chuyển đổi

| Việc của bạn | Gọi |
|---|---|
| Ad copy Meta/TikTok/Google nhiều biến thể, đếm ký tự, ma trận A/B | `kv:ad-copy-nhieu-bien-the` |
| Chữ cho landing page theo khối, một mục tiêu chuyển đổi | `kv:noi-dung-landing-page` |
| Brief KOL/KOC có điều cấm nói, yêu cầu dùng thật, nghiệm thu | `kv:brief-kol-koc` |

### Đo lường và dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Báo cáo ads đúng công thức, không tự gán nguyên nhân | `kv:bao-cao-hieu-qua-chien-dich` |
| Làm trọn bộ nội dung chiến dịch qua 3 khâu thu thập - soạn - soát | `kv:day-chuyen-chien-dich-marketing` |

### Dùng kèm từ bộ chung (core)

| Việc của bạn | Gọi |
|---|---|
| Soát số liệu, khẳng định trong bài trước khi gửi | `kv:kiem-tra-chong-bia` |
| Che số điện thoại, địa chỉ khách trước khi đưa file cho AI | `kv:an-thong-tin-nhay-cam` |
| Email công việc gửi khách agency, đối tác, KOL | `kv:viet-email` |
| Bảng kiểm duyệt bài cho team | `kv:tao-bang-kiem` |
| Tự dựng dây chuyền khác từ các agent có sẵn | `kv:dieu-phoi-day-chuyen` |
| Xuất kế hoạch, brief, bài để duyệt ra file Word | `kv:xuat-word` |
| Xuất lịch nội dung, ma trận ad copy, báo cáo ads ra Excel có công thức | `kv:xuat-excel` |
| Xuất kế hoạch, báo cáo thành slide trình sếp/khách | `kv:xuat-pptx` |

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
| `kv:viet-tin-nhan-cong-viec` | Soạn tin nhắn công việc qua Zalo, Teams, Messenger ngắn, đúng xưng hô, rõ việc. Dùng khi nói "nhắn sếp", "nhắn nhóm", "tin Zalo cho khách", "nhắc việc", "nhắn sao cho khéo". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Kế hoạch quý tính ngược phễu từ mục tiêu doanh thu, ngân sách tháng x kênh, KPI có ngưỡng cảnh báo | `kv:ke-hoach-marketing-quy-ngan-sach` |
| Chia ngân sách Meta/TikTok/Google/KOC theo hiệu quả kỳ trước, có lợi suất giảm dần, so 3 phương án | `kv:phan-bo-ngan-sach-kenh-marketing` |
| Chọn danh sách KOL/KOC trong ngân sách theo điểm chấm và báo giá thật, lịch đăng, dự phòng | `kv:ke-hoach-kol-koc-theo-ngan-sach` |
| Chiến lược nội dung theo phễu: kiểm kê, chỗ hổng, tỷ trọng, KPI từng tầng, lộ trình quý | `kv:chien-luoc-noi-dung-theo-pheu` |
| Kịch bản A/B test, tính cỡ mẫu, đọc kết quả bằng kiểm định hai tỷ lệ, 4 mức kết luận | `kv:ab-test-quang-cao-doc-ket-qua` |
| Tỷ lệ khách quay lại theo tháng, doanh thu lũy kế mỗi khách, so theo kênh | `kv:phan-tich-cohort-khach-hang` |
| Báo cáo tháng một trang cho CEO: kết quả so mục tiêu, CAC, việc cần quyết | `kv:bao-cao-marketing-thang-cho-ceo` |
| So 2 kỳ Search Console chọn bài tụt, chẩn đoán, viết bản cập nhật giữ URL | `kv:lam-moi-bai-seo-cu` |
| Duyệt nhiều cấp theo mức rủi ro, tiêu chí và hạn từng cấp, bảng theo dõi trạng thái | `kv:quy-trinh-duyet-noi-dung-nhieu-cap` |
| Quản trị khủng hoảng mạng xã hội: mức độ, nhật ký, sự thật đã xác minh, thông cáo chờ duyệt | `kv:xu-ly-khung-hoang-mang-xa-hoi` |
| Ma trận giọng kênh x dòng sản phẩm x tình huống, chỉ dẫn dán cho AI và người viết | `kv:ma-tran-giong-thuong-hieu-da-kenh` |
| Flow email/Zalo theo hành vi: kích hoạt, rẽ nhánh, điều kiện thoát, holdout đo hiệu quả | `kv:email-tu-dong-theo-hanh-vi` |
| Ra mắt sản phẩm 4 tuần, mỗi tuần một bộ nội dung qua đủ thu thập - soạn - 4 cổng soát | `kv:day-chuyen-ra-mat-san-pham-4-tuan` |
| Đọc số ads -> tìm mẫu thắng có kiểm định -> viết vòng biến thể mới -> soát thống kê và claim | `kv:day-chuyen-toi-uu-sau-chien-dich` |

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
| `kv:do-tham-doi-thu-web` | Thu thập nội dung, ưu đãi, quảng cáo công khai của đối thủ trên web/mạng xã hội, ghi link và ngày xem cho từng dòng. Gọi ở khâu thu thập chiến dịch. Chỉ đọc và tra web, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |
| `kv:gom-insight-khach-hang` | Đọc file bình luận, review, inbox, khảo sát trong thư mục, đếm chủ đề, trích lời khách đã ẩn tên, đánh dấu bình luận đáng ngờ. Gọi ở khâu thu thập. Chỉ đọc file, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:nghien-cuu-thi-truong-web` | Thu thập số liệu thị trường trên web theo bậc nguồn marketing (thống kê nhà nước > hãng nghiên cứu có phương pháp > báo kinh tế > blog), ghi nguồn, năm, link, ngày xem. Chỉ đọc và tra web, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:soan-ad-copy-landing` | Soạn bộ ad copy Meta/TikTok/Google nhiều biến thể có đếm ký tự và ma trận thử, kèm nội dung landing page, ghi vào thư mục bản nháp. Gọi ở khâu thực thi. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-noi-dung-da-kenh` | Soạn lịch chiến dịch, bài fanpage, kịch bản video ngắn, email từ brief và file thu thập, ghi vào thư mục bản nháp. Gọi ở khâu thực thi. Được ghi file, cấm ra mạng, cấm đăng bài. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-claim-quang-cao` | Gác cổng pháp lý quảng cáo - soát bản nháp tìm claim tuyệt đối, cam kết hiệu quả, nói như thuốc, so sánh đối thủ, số liệu không nguồn, đối chiếu tài liệu sản phẩm. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-giong-thuong-hieu` | Gác cổng giọng thương hiệu - đối chiếu bản nháp với cẩm nang brand voice: xưng hô, từ cấm, emoji, độ dài, CTA, nhất quán giữa các kênh. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu-thi-truong` | Gác cổng số liệu thị trường trong kế hoạch, pitch, bài đăng - soát nguồn, bậc nguồn, năm, phạm vi, đơn vị, trích sai, số tự ước. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Bộ nội dung chiến dịch từ brief tới bản duyệt | `kv:do-tham-doi-thu-web` | `kv:soan-noi-dung-da-kenh` | `kv:soat-claim-quang-cao` | Dùng kv:day-chuyen-chien-dich-marketing cho chiến dịch Tết 2027, brief ở chien-dich/tet-2027/00-brief.md, đối thủ: 3 page trong brief, bình luận ở du-lieu/binh-luan-q4.csv. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Nghiên cứu thị trường -> kế hoạch -> trình duyệt** - Đầu quý hoặc trước chiến dịch lớn, cần kế hoạch có số thị trường đứng được để sếp/khách duyệt.

`kv:nghien-cuu-thi-truong-web` (Thu thập số liệu theo bậc nguồn, kèm link và ngày xem) -> `kv:nghien-cuu-thi-truong-marketing` (Chấm bậc, đối chiếu số lệch, rút ý cho marketing) -> `kv:soat-so-lieu-thi-truong` (Gác cổng số trước khi dùng, QUA/CHẶN) -> `kv:ke-hoach-truyen-thong-chien-dich` (Viết đề cương: mục tiêu, thông điệp, kênh, giai đoạn, ngân sách) -> `kv:xuat-pptx` (Ra slide trình duyệt)

**Bài fanpage mỗi ngày** - Viết, soát và xếp giờ đăng cho bài lẻ trong tuần.

`kv:bai-dang-fanpage` (Viết 2-3 phiên bản bài) -> `kv:toi-uu-tieu-de-thumbnail` (Chọn hook dòng đầu và brief ảnh bìa) -> `kv:soat-claim-quang-cao` (Soát claim trước khi đăng) -> `kv:lich-dang-tra-loi-binh-luan` (Chốt giờ đăng, người trực và mẫu trả lời bình luận) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Video ngắn từ ý tưởng tới người quay** - Có ý tưởng TikTok/Reels, cần kịch bản, tiêu đề và file gửi người quay.

`kv:kich-ban-video-ngan` (Kịch bản hook 3 giây, phân cảnh, chữ trên màn hình) -> `kv:toi-uu-tieu-de-thumbnail` (Tiêu đề, ảnh bìa, cặp thử A/B) -> `kv:soat-claim-quang-cao` (Soát lời thoại và chữ trên màn hình) -> `kv:xuat-word` (Xuất kịch bản gửi người quay/KOC)

**Báo cáo cuối tháng** - Có file xuất từ Ads Manager/sàn, cần báo cáo đúng số để họp.

`kv:bao-cao-hieu-qua-chien-dich` (Kiểm dữ liệu, tính chỉ số, tách quan sát và giả thuyết) -> `kv:soat-so-lieu` (Soát số báo cáo với file gốc) -> `kv:xuat-excel` (Bảng số có công thức, mỗi bảng một sheet) -> `kv:xuat-pptx` (Slide trình sếp/khách)

**Lắng nghe khách hàng** - Bình luận, review nhiều mà chưa ai đọc kỹ; muốn biết khách nghĩ gì và trả lời cho chuẩn.

`kv:an-thong-tin-nhay-cam` (Che tên, số điện thoại trong file bình luận) -> `kv:insight-tu-binh-luan-review` (Nhóm chủ đề, đếm tần suất, trích lời khách) -> `kv:persona-tu-du-lieu-that` (Cập nhật chân dung khách có bằng chứng) -> `kv:lich-dang-tra-loi-binh-luan` (Bộ trả lời theo loại bình luận và quy tắc chuyển cấp) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

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

- ⭐ 14 skill chỉ có ở Pro: kế hoạch quý có ngân sách, phân bổ ngân sách kênh, A/B test có kiểm định, cohort khách hàng, báo cáo CEO, làm mới bài SEO cũ, khủng hoảng mạng xã hội, duyệt nhiều cấp, nội dung theo phễu, KOL theo ngân sách, email theo hành vi, ma trận giọng đa kênh và 2 dây chuyền mới
- ⭐ 2 dây chuyền mới (ra mắt 4 tuần, tối ưu sau chiến dịch) cùng 5 agent mới, trong đó 3 cổng soát: bản quyền hình ảnh - nhạc, dữ liệu cá nhân trong form - email, thống kê A/B
- ⭐ 24 script Python chạy ngay, không cần cài thêm: đếm ký tự và xuất CSV ads, sinh 50 biến thể, đọc file xuất Meta/TikTok/Google, đối chiếu đơn thực, kiểm định A/B, cohort, phân bổ ngân sách, so 2 kỳ Search Console, gom nhóm hàng nghìn bình luận...
- ⭐ Thư viện lớn: 60 hook, 150 câu trả lời bình luận theo 4 ngành, 200 ý tưởng theo trụ cột, 50 mẫu cấu trúc video, 12 khung landing, 8 chuỗi email, 40 tình huống CSKH, bảng kiểm chuyển đổi 30 điểm
- ⭐ Mọi claim bám tài liệu sản phẩm, bảng từ ngữ rủi ro cho 4 ngành có điều kiện; mọi số có nguồn hoặc [cần bổ sung]; kết quả dự kiến luôn ghi là ước tính

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
