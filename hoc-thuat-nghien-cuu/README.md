<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Học thuật - Nghiên cứu - Bản Free

> Tài liệu có thật, dữ liệu là của bạn, chữ là của bạn - AI chỉ giúp bạn làm nghiên cứu chắc tay hơn.

Bộ skill và agent tiếng Việt cho sinh viên làm khóa luận, học viên cao học, nghiên cứu sinh, giảng viên và nghiên cứu viên: tổng quan tài liệu có hệ thống, đề cương, khung lý thuyết, bảng hỏi, kế hoạch phân tích, viết từng chương, trích dẫn APA/IEEE/Harvard, kiểm tra tài liệu có thật, trả lời phản biện, chuẩn bị bảo vệ. Chống bịa tài liệu và dữ liệu là nguyên tắc số một; luôn nhắc tuân thủ quy định của trường về dùng AI.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 35 | 14 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Sinh viên làm khóa luận tốt nghiệp, đề tài NCKH sinh viên · Học viên cao học, nghiên cứu sinh · Giảng viên hướng dẫn, giảng viên viết bài báo · Nghiên cứu viên viện, trung tâm, chủ nhiệm đề tài

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

### Tìm và tổ chức tài liệu

| Việc của bạn | Gọi |
|---|---|
| Tổng quan tài liệu có hệ thống: từ khóa, bậc nguồn, ma trận, khoảng trống nghiên cứu | `kv:tong-quan-tai-lieu-hoc-thuat` |
| Đọc và tóm tắt bài báo theo khung, có số trang để kiểm lại | `kv:tom-tat-bai-bao-khoa-hoc` |
| Đặt tên PDF, thư mục, ma trận Excel, Zotero/Mendeley, dò trùng và thiếu DOI | `kv:quan-ly-tai-lieu-tham-khao` |

### Thiết kế nghiên cứu

| Việc của bạn | Gọi |
|---|---|
| Đề cương khóa luận, luận văn, đề tài: lý do, câu hỏi, giả thuyết, phương pháp, kế hoạch | `kv:de-cuong-nghien-cuu-khoa-hoc` |
| Khung lý thuyết, mô hình và giả thuyết, mỗi mũi tên có căn cứ | `kv:xay-khung-ly-thuyet-nghien-cuu` |
| Bảng hỏi Likert, bảng mã biến, tránh câu dẫn dắt, lời đồng ý tham gia | `kv:thiet-ke-bang-hoi-khao-sat` |
| Kế hoạch phân tích định lượng / định tính, đọc output thật - không bịa kết quả | `kv:ke-hoach-phan-tich-du-lieu` |

### Viết và trích dẫn

| Việc của bạn | Gọi |
|---|---|
| Dàn ý chi tiết và góp ý từng chương theo đúng chức năng chương | `kv:viet-chuong-luan-van` |
| Diễn đạt lại, tổng hợp ý có ghi nguồn, chỉnh văn phong học thuật | `kv:dien-dat-lai-hoc-thuat` |
| Định dạng trích dẫn và danh mục theo APA 7, IEEE, Harvard, mẫu trường | `kv:trich-dan-apa-ieee-harvard` |
| Tóm tắt Việt - Anh tương đương, đúng số từ, có từ khóa | `kv:abstract-song-ngu-hoc-thuat` |

### Liêm chính và soát trước khi nộp

| Việc của bạn | Gọi |
|---|---|
| Xác minh từng tài liệu có thật qua DOI, Crossref, trang tạp chí - chống tài liệu bịa | `kv:kiem-tra-trich-dan-co-that` |
| Đối chiếu quy định dùng AI, nhật ký dùng AI, đoạn khai báo minh bạch | `kv:khai-bao-dung-ai-hoc-thuat` |

### Công bố, bảo vệ, tài trợ

| Việc của bạn | Gọi |
|---|---|
| Thư trả lời phản biện, bảng giải trình chỉnh sửa sau hội đồng | `kv:tra-loi-phan-bien-bai-bao` |
| Dàn slide theo thời gian, lời thuyết trình, câu hỏi hội đồng dự kiến | `kv:chuan-bi-bao-ve-luan-van` |
| Thuyết minh đề tài, hồ sơ xin tài trợ: mục tiêu, sản phẩm, tiến độ, dự toán khung | `kv:de-xuat-xin-tai-tro-nghien-cuu` |

### Dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Viết một chương: đọc PDF -> soạn nháp -> gác cổng trích dẫn và liêm chính -> bàn giao | `kv:day-chuyen-viet-chuong-luan-van` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Nền tảng tra nguồn uy tín, ghi trích nguồn đầy đủ | `kv:nghien-cuu-nguon-uy-tin` |
| Khung đề cương chung cho báo cáo, bài viết dài | `kv:viet-de-cuong` |
| Soát số bịa, số tự suy trong chương kết quả, abstract, dự toán | `kv:kiem-tra-chong-bia` |
| Che thông tin người tham gia khảo sát, phỏng vấn trước khi đưa vào AI | `kv:an-thong-tin-nhay-cam` |
| Xuất đề cương, chương, thư trả lời phản biện ra Word | `kv:xuat-word` |
| Xuất ma trận tài liệu, codebook, dự toán ra Excel | `kv:xuat-excel` |
| Xuất slide bảo vệ có ghi chú người nói | `kv:xuat-pptx` |

### Kỹ năng nền - dùng chéo mọi việc

| Skill | Làm gì |
|---|---|
| `kv:dieu-phoi-day-chuyen` | Giao thức chạy Kit Việt cho việc nhiều khâu - lập kế hoạch, thu thập, soạn, gác cổng QUA/CHẶN, bàn giao trong .kv-run/. Dùng khi nói "chạy dây chuyền", "làm từ A đến Z", "đọc rồi viết rồi soát". |
| `kv:dong-goi-skill-moi` | Biến một việc vừa làm tốt thành skill mới theo khuôn Kit Việt để lần sau gọi lại. Dùng khi nói "lưu cách làm này", "tạo skill mới", "đóng gói thành skill", "lần sau làm y vậy". |
| `kv:ghi-chu-hop` | Biến ghi chép, bản ghi âm chép lại thành biên bản họp + bảng đầu việc (ai, làm gì, hạn). Dùng khi nói "làm biên bản", "tóm tắt cuộc họp", "chốt đầu việc", "ghi chú họp". |
| `kv:ho-so-ca-nhan` | Phỏng vấn 8-10 câu để viết hồ sơ CLAUDE.md / AGENTS.md: vai trò, đơn vị, khách, giọng văn, từ cấm, quy tắc. Dùng khi nói "tạo hồ sơ", "cho AI biết về tôi", "viết CLAUDE.md", "cài đặt ban đầu". |
| `kv:lap-ke-hoach-tuan` | Xếp việc trong tuần theo giờ thật có được, ưu tiên rõ, dám nói khi không đủ giờ. Dùng khi nói "lên kế hoạch tuần", "tuần này làm gì trước", "việc nhiều quá", "xếp lịch giúp". |
| `kv:tao-bang-kiem` | Tạo bảng kiểm (checklist) cho việc lặp lại hoặc dễ sót bước: mỗi mục kiểm được, có người và thời điểm. Dùng khi nói "làm checklist", "bảng kiểm", "danh sách việc cần làm khi...", "hay quên bước". |
| `kv:tom-tat-tai-lieu` | Tóm tắt tài liệu dài (báo cáo, hợp đồng, công văn, PDF) thành ý chính có trích vị trí. Dùng khi nói "tóm tắt giúp", "đọc file này nói gì", "rút ý chính", "tài liệu dài quá". |
| `kv:viet-bao-cao` | Viết báo cáo công việc (tuần, tháng, dự án, sự cố) từ số liệu và ghi chú có sẵn, kết luận đặt đầu. Dùng khi nói "viết báo cáo", "báo cáo tuần", "tổng hợp kết quả", "làm báo cáo gửi sếp". |
| `kv:viet-email` | Soạn email công việc tiếng Việt đúng xưng hô, rõ việc cần người nhận làm. Dùng khi nói "viết email", "trả lời mail này", "soạn thư gửi khách", "mail nhắc", "viết lại cho lịch sự". |
| `kv:viet-tin-nhan-cong-viec` | Soạn tin nhắn công việc qua Zalo, Teams, Messenger ngắn, đúng xưng hô, rõ việc. Dùng khi nói "nhắn sếp", "nhắn nhóm", "tin Zalo cho khách", "nhắc việc", "nhắn sao cho khéo". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Protocol PICO/PCC, tiêu chí chọn, chuỗi tìm kiếm, sàng lọc 2 vòng, số lưu đồ PRISMA 2020 cộng trừ khớp | `kv:tong-quan-he-thong-prisma` |
| Chấm RoB 2, ROBINS-I, NOS, CASP, JBI, AXIS có trích nguyên văn và trang | `kv:danh-gia-nguy-co-sai-lech` |
| Mã hóa bản ghi phỏng vấn đã ẩn danh, codebook, chủ đề theo 6 giai đoạn, trích dẫn có vị trí | `kv:ma-hoa-chu-de-dinh-tinh` |
| Hồi quy, trung gian, điều tiết, CB-SEM, PLS-SEM - kế hoạch và đọc output thật | `kv:phan-tich-hoi-quy-sem-nang-cao` |
| Khung bài IMRaD, ngân sách số từ, góp ý theo đoạn khi rút luận văn thành bài | `kv:viet-bai-bao-imrad` |
| Danh sách ngắn tạp chí đã kiểm Scopus/WoS/HĐGSNN, tránh tạp chí săn mồi, cover letter | `kv:chon-tap-chi-va-thu-gui-bien-tap` |
| Poster đúng khổ ban tổ chức, bố cục 3 cột, lời trình bày 1-3 phút | `kv:poster-hoi-nghi-khoa-hoc` |
| Thuyết minh rủi ro, phiếu thông tin và đồng ý tham gia, kế hoạch dữ liệu cho hội đồng đạo đức | `kv:ho-so-dao-duc-nghien-cuu` |
| Hồ sơ quỹ quốc tế Anh - Việt: ma trận đáp ứng call, khung logic, ngân sách khung | `kv:de-xuat-tai-tro-quoc-te-song-ngu` |
| Lộ trình NCS theo năm, bảng nghĩa vụ theo quy chế, bài báo gắn chương, đường găng | `kv:ke-hoach-nghien-cuu-sinh-theo-nam` |
| Vai trò CRediT, thỏa thuận tác giả, bảng việc, quy ước dữ liệu, báo cáo chủ nhiệm | `kv:quan-ly-du-an-nghien-cuu-nhom` |
| Trích xuất song song từng lô PDF -> bảng đặc điểm, RoB, PRISMA -> gác cổng độc lập -> bàn giao | `kv:day-chuyen-tong-quan-he-thong` |
| Luận văn + output -> bản thảo IMRaD theo khuôn tạp chí -> gác cổng số liệu, số từ, trích dẫn | `kv:day-chuyen-bai-bao-gui-tap-chi` |
| Chia lô PDF cho nhiều agent trích xuất chạy cùng lúc | `kv:dieu-phoi-song-song` |
| Bảng thuật ngữ và bản Anh - Việt tương đương cho hồ sơ tài trợ | `kv:viet-song-ngu` |
| Xuất cover letter, poster, hồ sơ theo mẫu nhận diện của trường / viện | `kv:mau-tai-lieu-thuong-hieu` |
| Dựng slide bảo vệ, slide nhóm đọc, poster một trang | `kv:tao-slide` |

Mỗi skill Free đều có mục **"Bản Pro có thêm"** ở cuối file cho biết bản Pro làm sâu hơn những gì. Xem tại https://mochistudio.io.vn

## Trợ lý (agent) - xếp theo quyền

Skill là **cách làm**, agent là **người làm và giới hạn của người đó**. Dòng `tools:` trong file agent là khóa quyền thật.

### ĐIỀU PHỐI - lập kế hoạch, kiểm định bàn giao, không làm thay khâu khác

| Agent | Vai | tools |
|---|---|---|
| `kv:kiem-dinh-ban-giao` | Gác cổng cuối - đối chiếu sản phẩm với 00-ke-hoach.md và các 03-soat-*.md, kết luận QUA/CHẶN, liệt kê việc người dùng phải tự quyết. Chỉ đọc, chỉ được ghi 04-ban-giao.md. | `Read, Glob, Grep, Write` |
| `kv:lap-ke-hoach-dieu-phoi` | Điều phối - đọc yêu cầu và nguồn, viết .kv-run/<viec>-<yyyymmdd>/00-ke-hoach.md: khâu, agent, đầu vào/ra, tiêu chí đạt, rủi ro, khâu nào song song. Chỉ ghi trong .kv-run/, không làm thay khâu nào. | `Read, Glob, Grep, Write` |
| `kv:dieu-phoi-luan-van` | Điều phối - lập kế hoạch lần chạy cho một chương / đề cương / bài báo (00-ke-hoach.md), theo dõi tiến độ luận văn và tổng hợp trạng thái các khâu trong .kv-run. Không làm thay khâu khác. | `Read, Glob, Grep, Write` |

### THU THẬP - đọc và tra cứu, cấm ghi file

| Agent | Vai | tools |
|---|---|---|
| `kv:doc-nhieu-tai-lieu` | Thu thập - đọc cả thư mục hoặc nhiều file tài liệu, rút gọn dữ kiện chính kèm vị trí trích (file, trang, dòng) để khâu sau viết. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:nghien-cuu-nguon` | Thu thập - tra cứu nhiều nguồn (web + file), xếp bậc uy tín 1-2-3, trả bảng nguồn và dữ kiện có trích dẫn, mâu thuẫn, chỗ chưa có nguồn. Chỉ đọc, không ghi file; phiên chính ghi 01-thu-thap.md. | `Read, Grep, Glob, WebSearch, WebFetch` |
| `kv:doc-pdf-bai-bao` | Thu thập - đọc thư mục PDF bài báo, luận án, sách người dùng có, rút thông tin thư mục, phương pháp, kết quả, trích dẫn nguyên văn kèm số trang. Chỉ đọc file, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tim-tai-lieu-hoc-thuat` | Thu thập - tìm và xác minh tài liệu học thuật trên web (DOI, Crossref, trang tạp chí, Google Scholar để tìm), xếp bậc nguồn, ghi link và ngày truy cập. Chỉ đọc và tra cứu, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:lap-ma-tran-tai-lieu` | Thực thi - dựng ma trận tài liệu (CSV) từ kết quả đọc PDF hoặc danh mục: tác giả, năm, phương pháp, kết quả, bậc nguồn, chương dùng, trạng thái xác minh. Ghi file trong .kv-run, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:soan-ban-thao-hoc-thuat` | Thực thi - soạn bản nháp học thuật (dàn ý chi tiết, đoạn tổng quan, đề cương, mục phương pháp) chỉ từ dữ kiện thu thập có vị trí nguồn, đánh dấu chỗ thiếu nguồn. Ghi file trong .kv-run, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-liem-chinh-hoc-thuat` | Gác cổng liêm chính - soát bản nháp học thuật tìm đoạn thiếu nguồn, chép gần nguyên văn, số liệu không có trong output, dữ liệu bịa, khai báo dùng AI thiếu. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |
| `kv:soat-trich-dan-hoc-thuat` | Gác cổng trích dẫn - đối chiếu mọi trích dẫn trong bản nháp với dữ kiện thu thập và PDF gốc: tài liệu ma, sai năm, nói quá nguồn, lệch danh mục. Kết luận QUA/CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Viết một chương luận văn có soát độc lập | `kv:doc-pdf-bai-bao` | `kv:soan-ban-thao-hoc-thuat` | `kv:soat-trich-dan-hoc-thuat` | Chạy kv:day-chuyen-viet-chuong-luan-van cho chương 2 (cơ sở lý thuyết), tài liệu trong luan-van/tai-lieu, chuẩn APA 7, không tra web. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Từ ý tưởng đến đề cương nộp khoa** - Mới nhận đề tài hoặc có ý tưởng mơ hồ, cần đề cương có tổng quan và mô hình

`kv:tong-quan-tai-lieu-hoc-thuat` (Lập chuỗi từ khóa, lọc nguồn theo bậc, tìm khoảng trống) -> `kv:xay-khung-ly-thuyet-nghien-cuu` (Chọn lý thuyết nền, dựng mô hình và giả thuyết) -> `kv:de-cuong-nghien-cuu-khoa-hoc` (Soạn đề cương có ma trận nhất quán và kế hoạch) -> `kv:kiem-tra-trich-dan-co-that` (Xác minh tài liệu tham khảo trước khi nộp) -> `kv:xuat-word` (Xuất đề cương theo mẫu trường)

**Từ thang đo đến chương kết quả** - Đề cương đã duyệt, chuẩn bị khảo sát và xử lý số liệu

`kv:thiet-ke-bang-hoi-khao-sat` (Dịch, hiệu chỉnh thang đo, soát câu dẫn dắt, lập codebook) -> `kv:ke-hoach-phan-tich-du-lieu` (Ghép giả thuyết với kỹ thuật, đọc output SPSS/R tự chạy) -> `kv:viet-chuong-luan-van` (Dàn ý chương kết quả và thảo luận từ output thật) -> `kv:kiem-tra-chong-bia` (Soát mọi con số trong chương với output) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

**Viết chương tổng quan từ thư mục PDF** - Có sẵn vài chục bài báo, cần chương tổng quan có trích dẫn đứng vững

`kv:quan-ly-tai-lieu-tham-khao` (Đặt lại tên PDF, dựng ma trận, dò trùng) -> `kv:doc-pdf-bai-bao` (Rút dữ kiện từng bài kèm số trang) -> `kv:soan-ban-thao-hoc-thuat` (Soạn bản nháp theo dàn ý, đánh dấu chỗ thiếu nguồn) -> `kv:soat-trich-dan-hoc-thuat` (Gác cổng tài liệu ma, câu nói quá nguồn) -> `kv:soat-liem-chinh-hoc-thuat` (Gác cổng chép không ngoặc kép, đoạn thiếu nguồn) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Trước khi nộp và bảo vệ** - Bản thảo đã xong, còn 2-3 tuần đến hạn nộp và bảo vệ

`kv:trich-dan-apa-ieee-harvard` (Chuẩn hóa danh mục, soát trích dẫn hai chiều) -> `kv:abstract-song-ngu-hoc-thuat` (Viết tóm tắt Việt - Anh đúng số từ) -> `kv:khai-bao-dung-ai-hoc-thuat` (Đối chiếu quy định, soạn đoạn khai báo dùng AI) -> `kv:chuan-bi-bao-ve-luan-van` (Dàn slide, câu hỏi dự kiến) -> `kv:xuat-pptx` (Xuất slide bảo vệ)

**Bài báo sau phản biện** - Tạp chí trả major / minor revision

`kv:tra-loi-phan-bien-bai-bao` (Tách ý, đề xuất xử lý, soạn thư trả lời có vị trí sửa) -> `kv:tim-tai-lieu-hoc-thuat` (Tìm và xác minh tài liệu bổ sung người phản biện yêu cầu) -> `kv:soat-chinh-ta-giong-van` (Soát giọng văn thư trả lời) -> `kv:xuat-word` (Xuất thư trả lời phản biện)

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

- ⭐ 13 skill chỉ có ở Pro: tổng quan hệ thống PRISMA 2020, đánh giá nguy cơ sai lệch (7 công cụ theo thiết kế), mã hóa chủ đề định tính, SEM, IMRaD, chọn tạp chí và cover letter, hồ sơ đạo đức, tài trợ quốc tế song ngữ, lộ trình NCS, poster, quản lý nhóm
- ⭐ 2 dây chuyền mới có gác cổng độc lập: tổng quan hệ thống (trích xuất song song theo lô PDF) và bài báo gửi tạp chí (soát từng con số với output SPSS/R/SmartPLS)
- ⭐ 5 agent mới, trong đó 2 gác cổng chỉ đọc: soát lưu đồ PRISMA cộng trừ khớp và soát bản thảo với output thật
- ⭐ Script chạy cục bộ: tra Crossref hàng loạt, đọc RIS/BibTeX thành ma trận, vẽ sơ đồ PRISMA 2020, chuyển BibTeX sang APA/IEEE/Harvard, soát trích dẫn hai chiều trong Word, Gantt Excel, kiểm dự toán
- ⭐ Kho tra cứu viết sẵn: ngân hàng 120 câu hỏi hội đồng, 30 lý thuyết nền, bộ từ khóa 12 ngành, thang đo đã Việt hóa có nguồn gốc, thư viện câu trả lời phản biện Anh - Việt
- ⭐ Nâng cấp cả 17 skill free với phần Pro: tóm tắt hàng loạt thư mục PDF, dây chuyền cả luận văn, nhật ký dùng AI tự ghi, báo cáo tiến độ cho giảng viên hướng dẫn

**Nâng cấp Pro:** https://mochistudio.io.vn

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
