<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Bán hàng online - Thương mại điện tử - Bản Free

> Lên sản phẩm chuẩn sàn, tính giá không lỗ, chăm khách không hứa quá - bằng tiếng Việt, theo đúng cách shop Việt đang bán.

Bộ skill và agent cho người bán trên Shopee, TikTok Shop, Lazada, Facebook, Zalo. Viết tiêu đề, mô tả, kịch bản live, video ngắn; tính giá và khuyến mãi có công thức minh bạch; trả lời đánh giá, chốt đơn, xử lý đổi trả. Mọi phí sàn đều để bạn xác nhận, mọi claim đều được soát trước khi đăng.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 36 | 14 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Chủ shop trên Shopee, TikTok Shop, Lazada · Người bán hàng qua Facebook, Zalo, Instagram · Nhân viên vận hành sàn, CSKH, host livestream · Hộ kinh doanh online nhỏ, tự làm mọi việc

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-ban-hang-online@kitviet

# Hoặc dùng CLI (cần Node.js 18+): --ai claude, codex, cursor, copilot, gemini, windsurf... (kitviet platforms)
npx github:mochistudio-vn/kitviet init ban-hang-online --ai claude
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

### Lên sản phẩm

| Việc của bạn | Gọi |
|---|---|
| Đăng sản phẩm mới từ A đến Z: gom thông số, xem đối thủ, soạn listing, soát từ cấm và lãi | `kv:day-chuyen-len-san-pham-moi` |
| Đặt tên sản phẩm để khách gõ tìm là thấy, đúng độ dài từng sàn | `kv:tieu-de-seo-san-tmdt` |
| Viết mô tả đúng thông số, đủ thông tin, không claim bị cấm | `kv:mo-ta-san-pham-shop` |
| Soát từ bị sàn cấm, công dụng sai, chứng nhận không giấy tờ trước khi đăng | `kv:loc-tu-cam-san-tmdt` |
| Xem đối thủ bán giá nào, ưu đãi gì, khách chê gì để định vị sản phẩm | `kv:nghien-cuu-doi-thu-san` |

### Giá và khuyến mãi

| Việc của bạn | Gọi |
|---|---|
| Tính giá bán từ giá vốn, phí sàn, ship, quảng cáo - ra giá hòa vốn và giá có lãi | `kv:tinh-gia-ban-san` |
| Thiết kế voucher, combo, flash sale, lịch mega sale mà vẫn biết còn lãi bao nhiêu | `kv:thiet-ke-khuyen-mai-san` |

### Bán hàng và nội dung

| Việc của bạn | Gọi |
|---|---|
| Lịch nội dung 7 ngày cho TikTok Shop, Facebook: video, live, bài đăng gắn sản phẩm, ưu đãi, người làm | `kv:ke-hoach-noi-dung-kenh-ban-hang` |
| Kịch bản live theo phút: mở màn, demo, chốt đơn, xử lý bình luận | `kv:kich-ban-livestream-chot-don` |
| Ý tưởng và kịch bản video TikTok, Shopee Video, Reels quay bằng điện thoại | `kv:y-tuong-video-ngan-ban-hang` |
| Tin nhắn trả lời khách hỏi giá, xử lý từ chối, xác nhận đơn qua inbox và Zalo | `kv:chot-don-inbox-zalo` |
| Viết caption TikTok Shop, kịch bản livestream, trả lời bình luận theo giọng Gen Z vừa liều, kèm giải nghĩa từ lóng | `kv:viet-giong-gen-z` |

### Chăm sóc khách

| Việc của bạn | Gọi |
|---|---|
| Trả lời đánh giá 1-2 sao đúng mực, đúng chính sách, không lộ thông tin khách | `kv:tra-loi-danh-gia-shop` |
| Chuỗi tin sau khi giao: hướng dẫn dùng, mời đánh giá đúng luật, nhắc mua lại | `kv:cham-soc-sau-ban-shop` |
| Xử lý trả hàng, hoàn tiền, khiếu nại: dòng thời gian, bằng chứng, phản hồi gửi sàn | `kv:xu-ly-doi-tra-khieu-nai-don` |

### Vận hành và số liệu

| Việc của bạn | Gọi |
|---|---|
| Biết khi nào đặt hàng lại, đặt bao nhiêu, hàng nào đang chôn vốn | `kv:ke-hoach-nhap-hang-ton-kho` |
| Báo cáo doanh số tuần theo SKU và theo sàn từ file xuất đơn | `kv:bao-cao-doanh-so-sku` |
| Đọc file xuất đơn, tìm hủy/hoàn tập trung ở SKU, sàn, lý do, đơn vị vận chuyển, COD nào | `kv:phan-tich-huy-hoan-don-san` |

### Dùng chung (core)

| Việc của bạn | Gọi |
|---|---|
| Soát lại số liệu trong báo cáo, bảng giá trước khi gửi | `kv:kiem-tra-chong-bia` |
| Che tên, SĐT, địa chỉ khách trước khi chia sẻ file đơn hàng | `kv:an-thong-tin-nhay-cam` |
| Nhắn nhà cung cấp, đơn vị vận chuyển, nhân viên cho rõ ràng | `kv:viet-tin-nhan-cong-viec` |
| Tự ghép dây chuyền thu thập - thực thi - gác cổng cho việc khác | `kv:dieu-phoi-day-chuyen` |
| Xuất bảng giá, tồn kho, báo cáo SKU ra Excel giữ công thức | `kv:xuat-excel` |
| Xuất bảng giá gửi sỉ, kịch bản live, hồ sơ khiếu nại ra PDF | `kv:xuat-pdf` |

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
| `kv:viet-email` | Soạn email công việc tiếng Việt đúng xưng hô, rõ việc cần người nhận làm. Dùng khi nói "viết email", "trả lời mail này", "soạn thư gửi khách", "mail nhắc", "viết lại cho lịch sự". |
| `kv:xuat-pptx` | Xuất đề cương slide đã duyệt thành file PowerPoint .pptx: slide tiêu đề, slide gạch đầu dòng tối đa 6 ý, ghi chú người nói. Dùng khi nói "xuất PowerPoint", "ra file pptx", "làm file slide". |
| `kv:xuat-word` | Xuất nội dung đã duyệt thành file Word .docx theo kiểu tài liệu Việt Nam: công văn, tờ trình, quyết định, báo cáo, biên bản, hợp đồng. Dùng khi nói "xuất Word", "ra file docx", "làm thành công văn". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Chuẩn bị mega sale cho cả danh mục: số liệu -> khuyến mãi, P&L, live -> soát lãi và từ cấm | `kv:day-chuyen-mega-sale-san` |
| P&L mega sale 3 kịch bản: hòa vốn, ngân sách quảng cáo, hàng và tiền mặt cần ứng | `kv:lap-pnl-mega-sale-shop` |
| Tìm vì sao sản phẩm bán kém theo phễu, soạn listing và giá mới đã qua soát | `kv:day-chuyen-cuu-san-pham-ban-kem` |
| Chọn KOC, brief, theo dõi mẫu, đơn, hoa hồng và lãi thật từng KOC | `kv:quan-ly-koc-affiliate-shop` |
| Mở TikTok Shop, Lazada hay website: điều kiện, giá theo kênh, lộ trình 90 ngày, điểm dừng | `kv:mo-kenh-ban-moi-shop` |
| Kiểm tra trend/meme đang nổi trước khi làm video bán hàng: rủi ro, độ hợp, cửa sổ thời gian, 3 ý tưởng | `kv:bat-trend-gen-z` |
| Nghiên cứu thị trường ngành hàng có trích nguồn theo bậc: số liệu sàn, Bộ Công Thương, thống kê trước tiên | `kv:nghien-cuu-thi-truong-nganh-hang-san` |
| ROAS, ACOS, ROAS hòa vốn từng SKU từ file xuất quảng cáo, chỉ chiến dịch đốt tiền | `kv:phan-tich-quang-cao-san-roas` |
| So báo cáo thanh toán với đơn hoàn thành: đơn chưa về tiền, về thiếu, phí lạ | `kv:doi-soat-thanh-toan-san` |
| Audit gian hàng 5 nhóm, chấm điểm có bằng chứng, việc ưu tiên 30 ngày | `kv:kiem-tra-suc-khoe-gian-hang` |
| Thống nhất mã SKU và tên phân loại giữa các sàn, bảng đổi mã cũ - mới | `kv:chuan-hoa-danh-muc-sku` |
| Tin tự động, trả lời nhanh, cây rẽ nhánh và điểm chuyển người thật cho chat sàn, Fanpage, Zalo OA | `kv:kich-ban-cskh-tu-dong-shop` |

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
| `kv:doc-file-xuat-don-san` | Đọc file xuất đơn hàng của Shopee, TikTok Shop, Lazada, phần mềm bán hàng: ánh xạ cột, đếm đơn theo trạng thái/SKU, báo dòng lỗi và cột chứa thông tin khách. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:gom-du-lieu-shop` | Thu thập dữ liệu nội bộ của shop từ thư mục làm việc: thông số nhà cung cấp, giá vốn, phí, tồn, file xuất đơn - lập bảng dữ kiện có nguồn, chỉ chỗ thiếu và mâu thuẫn. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-doi-thu-san` | Thu thập thông tin công khai về đối thủ trên sàn TMĐT: giá, ưu đãi, tiêu đề, phàn nàn trong đánh giá, kèm link và thời điểm xem. Chỉ đọc và tra web, cấm ghi file, cấm thu dữ liệu cá nhân người mua. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:soan-listing-san-pham` | Thực thi - soạn bộ listing đăng sàn (tiêu đề, mô tả, phân loại, bảng tính giá) từ bảng dữ kiện đã thu thập, sửa theo lỗi gác cổng báo. Được ghi file trong thư mục làm việc, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-tin-cskh-shop` | Thực thi - soạn hàng loạt tin chăm sóc khách: trả lời đánh giá, chốt đơn inbox, phản hồi đổi trả, chuỗi tin sau bán, ghi ra file để duyệt. Được ghi file, cấm ra mạng, cấm tự gửi tin. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-bien-loi-nhuan-shop` | Gác cổng giá và lãi - soát bảng tính giá, khuyến mãi, voucher: thiếu khoản phí, sai công thức, sai đơn vị, phí chưa xác nhận, giá dưới hòa vốn. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-tu-cam-quang-cao-san` | Gác cổng nội dung bán hàng - soát listing, caption, kịch bản live tìm từ bị sàn cấm, claim công dụng, chứng nhận không giấy tờ, thông số trái nguồn, hứa giao không chắc. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Lên sản phẩm mới | `kv:gom-du-lieu-shop` | `kv:soan-listing-san-pham` | `kv:soat-tu-cam-quang-cao-san` | Dùng kv:day-chuyen-len-san-pham-moi cho thư mục san-pham/BINH500, đăng Shopee, biên mục tiêu 15%. Đối thủ: 5 link trong doi-thu.txt. Ghi vào .kv-run/. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Báo cáo thứ Hai** - Đầu tuần, có file xuất đơn tuần trước của các sàn

`kv:doc-file-xuat-don-san` (Đọc file xuất đơn, ánh xạ cột, đếm đơn, báo dòng lỗi) -> `kv:bao-cao-doanh-so-sku` (Báo cáo doanh số theo SKU và sàn, so tuần trước) -> `kv:phan-tich-huy-hoan-don-san` (Xem hủy/hoàn tập trung ở đâu) -> `kv:kiem-tra-chong-bia` (Soát lại số trước khi gửi chủ shop) -> `kv:xuat-excel` (Xuất báo cáo SKU ra Excel)

**Lên sản phẩm mới đến tuần mở bán** - Có sản phẩm mới từ nhà cung cấp, muốn đăng và kéo đơn tuần đầu

`kv:day-chuyen-len-san-pham-moi` (Thu thập - soạn listing - soát từ cấm và lãi) -> `kv:thiet-ke-khuyen-mai-san` (Ưu đãi mở bán vẫn còn lãi) -> `kv:soat-bien-loi-nhuan-shop` (Soát bảng khuyến mãi trước khi tạo mã) -> `kv:ke-hoach-noi-dung-kenh-ban-hang` (Lịch video, live, bài đăng tuần mở bán) -> `kv:y-tuong-video-ngan-ban-hang` (Kịch bản từng video trong lịch) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Chuẩn bị mega sale** - Trước 11.11, 12.12, Tết 3-4 tuần

`kv:ke-hoach-nhap-hang-ton-kho` (Đặt hàng đủ cho sale, chọn hàng chậm để xả) -> `kv:thiet-ke-khuyen-mai-san` (Voucher, combo, flash sale và lịch ngược) -> `kv:soat-bien-loi-nhuan-shop` (Soát lãi từng mức giảm) -> `kv:kich-ban-livestream-chot-don` (Kịch bản live đêm sale) -> `kv:loc-tu-cam-san-tmdt` (Soát câu nói và claim trước giờ live) -> `kv:xuat-pdf` (Xuất file PDF để gửi, nộp hoặc lưu)

**Chăm sóc khách cả tuần** - Cuối tuần gom đánh giá, chat, yêu cầu đổi trả cần trả lời

`kv:soan-tin-cskh-shop` (Soạn hàng loạt trả lời vào file để duyệt) -> `kv:tra-loi-danh-gia-shop` (Xử lý riêng các đánh giá 1-2 sao khó) -> `kv:xu-ly-doi-tra-khieu-nai-don` (Hồ sơ đơn khiếu nại cần gửi sàn) -> `kv:an-thong-tin-nhay-cam` (Che thông tin khách trước khi chia sẻ cho nhân viên) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Gửi bảng giá sỉ** - Đại lý, khách sỉ xin bảng giá theo số lượng

`kv:tinh-gia-ban-san` (Tính giá sỉ theo mức số lượng từ giá vốn và biên mục tiêu) -> `kv:soat-bien-loi-nhuan-shop` (Soát công thức, giá dưới hòa vốn) -> `kv:kiem-tra-chong-bia` (Soát lại số trên bản gửi khách) -> `kv:xuat-pdf` (Xuất bảng giá sỉ ra PDF, không lộ giá vốn)

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

- ⭐ 11 skill Pro mới, trong đó 2 dây chuyền: chuẩn bị mega sale cả danh mục và cứu sản phẩm bán kém, mỗi dây chuyền có gác cổng tối đa 2 vòng sửa
- ⭐ 4 agent Pro mới: điều phối chiến dịch, đọc báo cáo quảng cáo, soạn kế hoạch sale, chẩn đoán phễu sản phẩm
- ⭐ Hơn 10 script python chạy một lệnh: gộp đơn 3 sàn, hủy/hoàn 12 tuần, kế hoạch nhập ABC, tính giá hàng loạt, ROAS/ACOS, đối soát tiền về, chuẩn hóa SKU
- ⭐ File Excel sinh sẵn công thức thật và tô màu: tính giá 4 sheet, mô phỏng khuyến mãi 5 sheet, dashboard doanh số 6 sheet
- ⭐ Thư viện nội dung có số đếm: 80 tin chốt đơn, 100 câu móc video, 60 góc nội dung, 60 câu xử lý bình luận live, 40 câu trả lời đánh giá
- ⭐ Nghiên cứu thị trường ngành hàng theo 4 bậc nguồn, mỗi con số có tên - đơn vị - năm - link - ngày truy cập

**Nâng cấp Pro:** https://mochistudio.io.vn/sources/kit-viet-pro-vinh-vien

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
