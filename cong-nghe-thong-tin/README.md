<p align="center"><img src="brand/logo.svg" alt="Kit Việt" width="420"></p>

# Kit Việt · Công nghệ thông tin - Phần mềm - Bản Free

> Yêu cầu rõ, test đủ, log có bằng chứng, báo cáo trung thực - để đội phần mềm giao hàng mà không phải đoán.

Bộ skill và agent tiếng Việt cho lập trình viên, BA, PM/PO, QA và IT vận hành ở doanh nghiệp Việt: từ yêu cầu lộn xộn của khách ra story, SRS, test case; review code theo checklist bảo mật; đọc log tìm nguyên nhân gốc; postmortem không đổ lỗi; release note song ngữ; helpdesk cho nhân viên. Không bịa endpoint, số liệu hay mã CVE; không tự commit, triển khai hay chạy lệnh trên production.

| Skill | Trợ lý (agent) | Luồng làm việc | Xuất file | Nền tảng |
|---|---|---|---|---|
| 36 | 14 | 5 | Word · Excel · PDF · PowerPoint | Claude Code · Claude web/Desktop · ChatGPT Codex |

**Mở file `HUONG-DAN.html` bằng trình duyệt** để xem hướng dẫn có hình minh họa và ví dụ thực tế.

**Dành cho:** Lập trình viên và trưởng nhóm kỹ thuật · BA phân tích nghiệp vụ · PM/PO dự án phần mềm · QA/tester · IT helpdesk và sysadmin doanh nghiệp

## Cài đặt

### Cài nhanh bằng lệnh

```text
# Trong Claude Code
/plugin marketplace add mochistudio-vn/kitviet
/plugin install kv-cong-nghe-thong-tin@kitviet

# Hoặc dùng CLI (cần Node.js 18+): --ai claude, codex, cursor, copilot, gemini, windsurf... (kitviet platforms)
npx github:mochistudio-vn/kitviet init cong-nghe-thong-tin --ai claude
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

### Yêu cầu và kế hoạch

| Việc của bạn | Gọi |
|---|---|
| Biến chuỗi Zalo, email của khách thành task, tách lỗi với yêu cầu mới, gom câu hỏi lại | `kv:chuyen-yeu-cau-khach-thanh-task` |
| User story chuẩn INVEST kèm tiêu chí chấp nhận Cho trước/Khi/Thì đo được | `kv:viet-user-story-tieu-chi` |
| Tài liệu đặc tả yêu cầu có mã, nguồn, phi chức năng có số đo, ma trận truy vết | `kv:dac-ta-yeu-cau-srs` |
| Ước lượng 3 điểm hoặc story point, xếp sprint theo năng lực đội có đệm | `kv:uoc-luong-ke-hoach-sprint` |
| Đề xuất dự án, đề cương tài liệu thiết kế: vấn đề có số, mục tiêu đo được, lộ trình, rủi ro | `kv:de-xuat-du-an-cntt` |
| So sánh công nghệ theo tiêu chí có trọng số, nguồn chính thức, RFC, CVE/NVD | `kv:so-sanh-giai-phap-ky-thuat` |

### Kiểm thử và chất lượng mã

| Việc của bạn | Gọi |
|---|---|
| Test case có giá trị biên, phân quyền, ma trận phủ truy về yêu cầu | `kv:sinh-test-case-tu-yeu-cau` |
| Báo cáo lỗi đủ bước tái hiện, môi trường, bằng chứng đã che dữ liệu | `kv:viet-bug-report-chuan` |
| Review code theo logic, bảo mật OWASP, hiệu năng, xử lý lỗi; mỗi nhận xét có file:dòng | `kv:review-code-theo-checklist` |
| Checklist bảo vệ dữ liệu cá nhân trong phần mềm, dặn đối chiếu quy định hiện hành | `kv:soat-du-lieu-ca-nhan-phan-mem` |

### Tài liệu và truyền thông

| Việc của bạn | Gọi |
|---|---|
| README chạy được theo và tài liệu API lấy từ route thật, không bịa endpoint | `kv:viet-readme-tai-lieu-api` |
| Ghi chú phát hành Việt - Anh cho người dùng, lỗi bảo mật không lộ cách khai thác | `kv:release-note-song-ngu` |
| Báo cáo tiến độ cho khách với trạng thái xanh/vàng/đỏ trung thực, việc khách cần làm | `kv:bao-cao-tien-do-du-an-phan-mem` |

### Vận hành và sự cố

| Việc của bạn | Gọi |
|---|---|
| Dựng dòng thời gian từ log, gom chữ ký lỗi, 5 Why tách bằng chứng với giả thuyết | `kv:phan-tich-log-nguyen-nhan-goc` |
| Báo cáo sau sự cố không đổ lỗi, việc cần làm có người và hạn | `kv:postmortem-su-co-khong-do-loi` |
| Runbook có lệnh, kết quả mong đợi, điểm dừng, quay lui cho người trực ca | `kv:runbook-van-hanh-he-thong` |
| Hướng dẫn tự xử lý lỗi máy in, Wi-Fi, email, VPN cho nhân viên không chuyên | `kv:helpdesk-ho-tro-nhan-vien` |

### Dây chuyền

| Việc của bạn | Gọi |
|---|---|
| Đọc mã nguồn -> viết test và review -> gác cổng bảo mật -> bàn giao, trước khi gắn tag | `kv:day-chuyen-soat-ma-truoc-phat-hanh` |

### Dùng kèm từ bộ chung

| Việc của bạn | Gọi |
|---|---|
| Soát số liệu, cam kết trong báo cáo, đề xuất trước khi gửi khách | `kv:kiem-tra-chong-bia` |
| Che token, SĐT, email, CCCD trong log và ảnh chụp trước khi đưa vào AI | `kv:an-thong-tin-nhay-cam` |
| Tra cứu có trích nguồn đầy đủ khi so sánh giải pháp, tra quy định | `kv:nghien-cuu-nguon-uy-tin` |
| Dựng đề cương tài liệu dài trước khi viết chi tiết | `kv:viet-de-cuong` |
| Email gửi khách, đối tác tích hợp, thông báo sự cố | `kv:viet-email` |
| Xuất SRS, biên bản soát mã, postmortem ra Word | `kv:xuat-word` |
| Xuất test case, backlog, bảng ước lượng ra Excel | `kv:xuat-excel` |
| Slide demo cuối sprint, trình bày đề xuất dự án | `kv:xuat-pptx` |

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
| `kv:viet-tin-nhan-cong-viec` | Soạn tin nhắn công việc qua Zalo, Teams, Messenger ngắn, đúng xưng hô, rõ việc. Dùng khi nói "nhắn sếp", "nhắn nhóm", "tin Zalo cho khách", "nhắc việc", "nhắn sao cho khéo". |
| `kv:xuat-pdf` | Xuất bản chốt (.docx hoặc markdown) thành PDF để gửi, in, nộp, giữ đúng dấu tiếng Việt. Dùng khi nói "xuất PDF", "chuyển sang pdf", "làm bản pdf gửi khách", "in ra pdf". |

### ⭐ Có thêm trong bản Pro

| Việc | Skill Pro |
|---|---|
| Kịch bản chất lượng có số, sơ đồ C4, luồng chính, chuỗi ADR có hệ quả xấu và điều kiện xem lại | `kv:thiet-ke-kien-truc-he-thong-adr` |
| Sơ đồ luồng dữ liệu có ranh giới tin cậy, mối đe dọa STRIDE theo từng phần tử, mức, biện pháp, cách kiểm | `kv:mo-hinh-moi-de-doa-stride` |
| Khung chính sách an toàn thông tin vừa sức doanh nghiệp nhỏ: phân loại dữ liệu, tài khoản, thiết bị, AI, sự cố | `kv:chinh-sach-bao-mat-thong-tin-noi-bo` |
| Master test plan: phạm vi theo rủi ro, loại test, môi trường, tiêu chí vào / tạm dừng / ra có số, lịch UAT | `kv:ke-hoach-kiem-thu-tong-the` |
| Mô hình tải từ số thật, kịch bản k6 mẫu, ngưỡng viết trước, tìm điểm gãy và nút cổ chai có số đo | `kv:kiem-thu-hieu-nang-tai` |
| Nhật ký rủi ro 'do - có thể - dẫn đến', chấm X x T, ứng phó, dấu hiệu sớm, rà định kỳ | `kv:quan-ly-rui-ro-du-an-phan-mem` |
| 4 chỉ số DORA và chất lượng sprint tính bằng script từ CI/CD, sự cố, Jira - theo xu hướng, không chấm cá nhân | `kv:do-luong-dora-chat-luong-sprint` |
| Hồ sơ mời chào, tiêu chí công bố trước, demo theo kịch bản, so TCO, rủi ro hợp đồng, biên bản đánh giá | `kv:danh-gia-nha-cung-cap-phan-mem-rfp` |
| Lộ trình 30-60-90 ngày: quyền tối thiểu, chạy dự án ngày đầu, việc đầu tay, mốc đo được | `kv:onboarding-lap-trinh-vien-moi` |
| Kiểm kê, ánh xạ trường, chạy thử 2 lần, đối soát số, kế hoạch cutover theo giờ, quay lui | `kv:ke-hoach-di-chuyen-du-lieu-he-thong` |
| Danh mục tài sản có chủ sở hữu, cấu hình không lộ bí mật, sao lưu đã thử khôi phục, biên bản bàn giao | `kv:ho-so-ban-giao-van-hanh` |
| SLI theo hành trình người dùng, SLO, ngân sách lỗi, cảnh báo theo tốc độ đốt có runbook | `kv:thiet-ke-slo-canh-bao-giam-sat` |
| SRS / email -> story, test case, bộ UAT -> gác cổng độ phủ -> gác cổng sẵn sàng phát hành có truy vết | `kv:day-chuyen-yeu-cau-den-phat-hanh` |
| Đọc log song song từng dịch vụ -> dòng thời gian, nguyên nhân có bằng chứng -> postmortem -> gác cổng không đổ lỗi | `kv:day-chuyen-su-co-den-postmortem` |
| Chia nhiều dịch vụ / nhiều nguồn log / nhiều tài liệu yêu cầu cho agent chạy cùng lúc, chạy tiếp khi gián đoạn | `kv:dieu-phoi-song-song` |
| Xuất SRS, biên bản soát mã, postmortem, báo giá theo mẫu nhận diện công ty | `kv:mau-tai-lieu-thuong-hieu` |
| Làm sạch dữ liệu nguồn trước khi chuyển hệ thống | `kv:lam-sach-du-lieu` |
| Slide trình duyệt đề xuất, kiến trúc, retro quý | `kv:tao-slide` |
| Tài liệu API, release note song ngữ cho đối tác nước ngoài | `kv:viet-song-ngu` |
| Bản 1 trang cho giám đốc từ báo cáo tiến độ, đề xuất dự án | `kv:tom-tat-cho-sep` |

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
| `kv:doc-log-he-thong` | Thu thập - đọc file log ứng dụng, web server, CSDL trong thư mục được giao, quy đổi giờ về +07:00, gom chữ ký lỗi, dựng dòng thời gian kèm vị trí dòng log. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:doc-ma-nguon` | Thu thập - đọc mã nguồn trong repo theo phạm vi được giao, dựng bản đồ thay đổi, luồng dữ liệu và điểm rủi ro (xác thực, SQL, dữ liệu cá nhân) kèm file:dòng. Chỉ đọc, cấm ghi, cấm ra mạng. | `Read, Grep, Glob` |
| `kv:tra-cuu-tai-lieu-ky-thuat` | Thu thập - tra tài liệu kỹ thuật trên nguồn bậc cao: docs chính thức của hãng, RFC, CVE/NVD, thông báo bảo mật; ghi nguồn, phiên bản, ngày truy cập. Chỉ đọc và tra cứu, cấm ghi file. | `Read, Grep, Glob, WebSearch, WebFetch` |

### THỰC THI - đọc và ghi file, cấm ra mạng

| Agent | Vai | tools |
|---|---|---|
| `kv:soan-tai-lieu-ky-thuat` | Thực thi - soạn bản nháp tài liệu kỹ thuật (SRS, README, tài liệu API, postmortem, release note, runbook, báo cáo tiến độ) từ dữ kiện khâu thu thập, ghi vào .kv-run hoặc ket-qua/. Được ghi file, cấm ra mạng. | `Read, Write, Edit, Glob, Grep` |
| `kv:viet-test-tu-dong` | Thực thi - viết test tự động (unit, integration) theo framework sẵn có của repo cho phần thay đổi và điểm rủi ro được giao, ghi bản nháp review vào .kv-run. Được ghi file, cấm ra mạng, không chạy lệnh. | `Read, Write, Edit, Glob, Grep` |

### GÁC CỔNG - chỉ đọc, chỉ báo lỗi, cấm sửa

| Agent | Vai | tools |
|---|---|---|
| `kv:soat-bao-mat` | Gác cổng bảo mật - soát bản nháp trước khi gửi ra ngoài để bắt dữ liệu cá nhân, số tài khoản, thông tin nội bộ, mật khẩu, câu lệnh lạ. Trả bảng rủi ro và kết luận. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-chinh-ta-giong-van` | Gác cổng câu chữ - soát chính tả, dấu tiếng Việt, xưng hô, câu rối, từ cấm trong CLAUDE.md/AGENTS.md của bản nháp trước khi gửi. Trả bảng lỗi kèm gợi ý. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-so-lieu` | Gác cổng số liệu - đối chiếu mọi con số, ngày, tên và khẳng định trong bản nháp với tài liệu nguồn, trả bảng lỗi và kết luận gửi được chưa. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-bao-mat-ma-nguon` | Gác cổng bảo mật mã nguồn - soát độc lập theo nhóm rủi ro OWASP: tiêm mã, phân quyền, bí mật viết cứng, lộ dữ liệu cá nhân trong log, upload, cấu hình; kết luận QUA/CHẶN. Chỉ đọc, cấm sửa, cấm ra mạng. | `Read, Glob, Grep` |
| `kv:soat-do-phu-yeu-cau-test` | Gác cổng yêu cầu và kiểm thử - soát user story, SRS, bộ test case: tiêu chí đo được, mỗi yêu cầu có test, test biên và phân quyền, không kết quả tự đoán; kết luận QUA/CHẶN. Chỉ đọc, cấm sửa. | `Read, Glob, Grep` |

## Dây chuyền có sẵn

Khuôn chung: **thu thập -> thực thi -> gác cổng**. Gác cổng báo lỗi thì quay lại thực thi.

| Việc | Thu thập | Thực thi | Gác cổng | Câu gọi mẫu |
|---|---|---|---|---|
| Soát mã trước phát hành | `kv:doc-ma-nguon` | `kv:viet-test-tu-dong` | `kv:soat-bao-mat-ma-nguon` | Chạy kv:day-chuyen-soat-ma-truoc-phat-hanh cho repo app-dat-hang, phạm vi v2.14.0..main, ticket trong yeu-cau/release-2.15.md. Lệnh test: npm test. |

## Luồng làm việc mẫu

Mỗi skill kết thúc bằng mục **Luồng tiếp theo**, nên các việc nối nhau thành luồng cố định:

**Từ yêu cầu khách đến sprint** - Khách gửi một loạt yêu cầu qua Zalo/email, cần biến thành kế hoạch sprint có test

`kv:chuyen-yeu-cau-khach-thanh-task` (Tách ý, phân loại lỗi/yêu cầu mới, gom câu hỏi lại) -> `kv:viet-user-story-tieu-chi` (Viết story và tiêu chí chấp nhận cho task trong phạm vi) -> `kv:sinh-test-case-tu-yeu-cau` (Sinh test case từ tiêu chí chấp nhận) -> `kv:soat-do-phu-yeu-cau-test` (Gác cổng: soát story mơ hồ và yêu cầu 0 test) -> `kv:uoc-luong-ke-hoach-sprint` (Ước lượng và xếp sprint theo năng lực đội) -> `kv:xuat-excel` (Xuất file Excel để gửi, nộp hoặc lưu)

**Phát hành phiên bản mới** - Trước khi gắn tag: soát mã, rồi báo người dùng có gì mới

`kv:day-chuyen-soat-ma-truoc-phat-hanh` (Đọc mã -> viết test -> gác cổng bảo mật -> bàn giao) -> `kv:release-note-song-ngu` (Viết ghi chú phát hành Việt - Anh từ ticket đã đóng) -> `kv:soat-chinh-ta-giong-van` (Soát chính tả, giọng văn trước khi đăng) -> `kv:xuat-pdf` (Xuất release note PDF gửi khách doanh nghiệp)

**Xử lý sự cố production** - Hệ thống lỗi hoặc chậm, cần tìm nguyên nhân và viết báo cáo rút kinh nghiệm

`kv:an-thong-tin-nhay-cam` (Che token, SĐT, email trong log trước khi phân tích) -> `kv:doc-log-he-thong` (Lọc log, dựng dòng thời gian, gom chữ ký lỗi) -> `kv:phan-tich-log-nguyen-nhan-goc` (5 Why, tách bằng chứng với giả thuyết, đề xuất khắc phục) -> `kv:postmortem-su-co-khong-do-loi` (Viết postmortem không đổ lỗi, việc cần làm có hạn) -> `kv:xuat-word` (Xuất bản gửi khách)

**Chọn công nghệ và lập đề xuất** - Cần chọn giải pháp kỹ thuật và trình ban giám đốc hoặc khách

`kv:tra-cuu-tai-lieu-ky-thuat` (Tra docs chính thức, vòng đời phiên bản, CVE, trang giá) -> `kv:so-sanh-giai-phap-ky-thuat` (Chấm điểm theo tiêu chí có trọng số, khuyến nghị có điều kiện) -> `kv:de-xuat-du-an-cntt` (Đưa phương án vào đề xuất dự án) -> `kv:kiem-tra-chong-bia` (Soát số, giá, cam kết trước khi trình) -> `kv:xuat-pptx` (Slide trình bày phê duyệt)

**Báo cáo khách cuối tuần** - Thứ Sáu tổng hợp tiến độ gửi khách

`kv:bao-cao-tien-do-du-an-phan-mem` (Đếm việc từ file xuất Jira, đặt trạng thái, nêu vấn đề cần khách quyết) -> `kv:kiem-tra-chong-bia` (Đối chiếu số trong báo cáo với file xuất) -> `kv:viet-email` (Viết email gửi kèm báo cáo) -> `kv:xuat-word` (Xuất file Word để gửi, nộp hoặc lưu)

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

- ⭐ 14 skill chỉ có ở Pro: kiến trúc + ADR, STRIDE, chính sách an toàn thông tin nội bộ, test plan tổng thể, kiểm thử tải (kèm kịch bản k6), rủi ro dự án, DORA, RFP chọn nhà cung cấp, onboarding 30-60-90, di chuyển dữ liệu, bàn giao vận hành, SLO và cảnh báo, 2 dây chuyền
- ⭐ 2 dây chuyền mới với 5 agent mới (2 gác cổng chỉ đọc): yêu cầu -> UAT -> sẵn sàng phát hành có truy vết, và sự cố -> postmortem soát không đổ lỗi
- ⭐ 21 script Python thư viện chuẩn chạy cục bộ, đã chạy thử trên dữ liệu giả: Monte Carlo 10.000 lần, burndown, quét schema tìm dữ liệu cá nhân, sinh OpenAPI 3 + Postman / Bruno, xuất Jira CSV / JSON + lệnh gh (không gọi API thay bạn), gom chữ ký lỗi log nhiều GB, release note từ git, soát phụ thuộc với OSV, gom trùng ticket, TCO, ROI, DORA
- ⭐ Kho tra cứu viết sẵn: 50 bài tự xử lý helpdesk, 25 runbook Linux / Windows / Docker / Kubernetes, 6 checklist review theo ngôn ngữ (190 mục), 80 câu hỏi khảo sát, 60 story mẫu 4 miền, checklist dữ liệu cá nhân 70 mục, 30 tiêu chí phát hành
- ⭐ Nâng cấp đủ 18 skill free với phần Pro: báo cáo hai bản cho khách, đề nghị phát sinh, 4 mẫu đề xuất dự án đã điền, thang SEV1-SEV4, thông báo sự cố 4 giai đoạn, diễn tập khôi phục thảm họa đo RTO / RPO

**Nâng cấp Pro:** https://mochistudio.io.vn/sources/kit-viet-pro-vinh-vien

## Ba nguyên tắc khi dùng

1. **AI hỗ trợ, bạn chịu trách nhiệm cuối.** Đọc lại mọi bản trước khi gửi, ký, nộp.
2. **Không để AI tự gửi, đăng, thanh toán thay bạn.** Bộ này chỉ soạn và lưu file.
3. **Che thông tin nhạy cảm trước khi dán vào AI.** Dùng `kv:an-thong-tin-nhay-cam` và agent `kv:soat-bao-mat`.

## Sửa cho hợp việc của bạn

Mọi file là văn bản thường. Sửa `skills/<tên>/SKILL.md` để đổi cách làm, sửa dòng `tools:` trong `agents/<tên>.md` để nới/siết quyền. Tạo skill mới từ việc vừa làm bằng `kv:dong-goi-skill-moi`. Dòng `name` phải trùng tên thư mục.

---

**Kit Việt** là sản phẩm của **MochiStudio** · https://mochistudio.io.vn · Bộ phát hành theo giấy phép MIT, giữ nguyên file LICENSE trong gói.
