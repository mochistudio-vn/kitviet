# Hồ sơ làm việc - Sản xuất, nhà máy (Kit Việt)

> Chép file này vào thư mục làm việc của xưởng/nhà máy, đổi tên thành `CLAUDE.md` (Claude Code), `AGENTS.md` (Codex) hoặc dán vào phần hướng dẫn dự án (Claude web / Desktop). Điền các chỗ `[...]`. Xóa dòng không dùng.

## Tôi là ai

- Họ tên / vai trò: [...] - [kỹ sư sản xuất / QC / QA / trưởng ca / kế hoạch sản xuất (PPC) / cán bộ ISO / cán bộ an toàn / bảo trì]
- Nhà máy: [...]   Xưởng/bộ phận: [...]   Ngành: [ép nhựa / cơ khí / may mặc / điện tử / thực phẩm / bao bì / ...]
- Cách xưng hô: [anh/chị/em...]. Văn phong: [gọn kiểu báo cáo nội bộ / trang trọng gửi khách hàng, tập đoàn]
- Ngôn ngữ cần thêm: [tiếng Anh cho khách hàng / tiếng Hàn, Trung, Nhật cho chuyên gia]

## Nhà máy đang làm

- Ca làm việc: [số ca, giờ từng ca, nghỉ giữa ca, ngày nghỉ, quy định tăng ca]
- Máy/chuyền chính: [mã máy - loại - mã hàng làm được, ví dụ Ép 01-05 (180-250 tấn), Chuyền may 1-8]
- Mã hàng và định mức: [file định mức chu kỳ/năng suất, ví dụ dinh-muc/chu-ky-chuan.csv]
- Khách hàng chính và yêu cầu riêng: [ví dụ khách A yêu cầu 8D trong 7 ngày, PPM mục tiêu ...]
- Hệ thống đang áp dụng: [ISO 9001 / 14001 / 45001 / IATF 16949 / ISO 22000 / ...], tổ chức chứng nhận: [...], kỳ đánh giá tới: [...]
- Phần mềm, nơi xuất dữ liệu: [ERP/MES, file Excel, Google Sheets - xuất CSV để AI đọc]

## Định nghĩa KPI của nhà máy (AI dùng đúng các định nghĩa này)

- Thời gian kế hoạch sản xuất: [giờ ca trừ ... ]   Thay khuôn/set-up tính là: [dừng / kế hoạch]
- OEE: A x P x Q, chu kỳ chuẩn lấy từ [file]. Mục tiêu: [..]%
- Tỷ lệ phế: [phế / tổng làm ra]. Mục tiêu: [..]%   PPM khiếu nại: [...]
- Giao hàng đúng hạn: [định nghĩa]   NCR quá hạn: [quá bao nhiêu ngày]
- Ma trận rủi ro an toàn: [5x5 / 4x4], ngưỡng cao: [..]
- Thang điểm 5S: [0-4 / 1-5]   Tiêu chí, trọng số đánh giá nhà cung cấp: [file]
- Phương án lấy mẫu IQC: [ví dụ theo ISO 2859-1 hoặc TCVN tương đương, mức kiểm tra II, AQL nặng/nhẹ = ...]

## Thư mục làm việc gợi ý

```
<nha-may>/
  01-bao-cao-ca/       # ghi chú ca, tin Zalo nhóm ca xuất .txt, CSV đếm máy
  02-chat-luong/       # phiếu IQC, NCR, CAPA, phân tích nguyên nhân
  03-ke-hoach/         # đơn hàng, định mức, kế hoạch tuần, bảo trì
  04-an-toan/          # đánh giá rủi ro, sự cố, suýt tai nạn, đào tạo
  05-iso/              # danh mục tài liệu, checklist đánh giá, hồ sơ
  06-bao-cao-thang/    # KPI tháng, slide họp
  nhap/                # AI chỉ ghi bản nháp vào đây
```

## Dây chuyền hay dùng

- Báo cáo KPI tháng: `kv:day-chuyen-bao-cao-kpi-nha-may` -> đọc `01-bao-cao-ca/` + `02-chat-luong/` + `04-an-toan/` của tháng -> lập số + soạn nhận xét -> soát `kv:soat-so-lieu-chat-luong` + `kv:soat-an-toan-nha-may` -> `kv:kiem-dinh-ban-giao`.
- Dây chuyền ghi nháp và kết quả soát vào `.kv-run/<viec>-<yyyymmdd>/` (00-ke-hoach ... 04-ban-giao); chỉ xuất file sau khi bàn giao đạt.

## Luồng hay dùng

Chi tiết từng bước xem mục "Luồng" trong hướng dẫn HTML của bộ nghề (sinh từ `nghe.free.json`):

- **Lỗi chất lượng tới CAPA đóng được:** `kv:bao-cao-ca-san-xuat` -> `kv:phan-tich-nguyen-nhan-goc-loi` -> `kv:bao-cao-ncr-capa` -> `kv:soan-wi-sop-tai-may` -> `kv:xuat-word`.
- **Kế hoạch tuần có số hiệu suất thật:** `kv:tinh-oee-tu-so-lieu` -> `kv:ke-hoach-bao-tri-phong-ngua` -> `kv:ke-hoach-san-xuat-tuan-theo-may` -> `kv:xuat-excel`.
- **Sự cố an toàn:** `kv:bao-cao-su-co-tai-nan-nha-may` -> `kv:soat-an-toan-nha-may` -> `kv:danh-gia-rui-ro-an-toan-lao-dong` -> `kv:an-thong-tin-nhay-cam` -> `kv:xuat-pdf`.
- **Chuẩn bị đánh giá ISO:** `kv:chuan-bi-danh-gia-iso` -> `kv:danh-gia-rui-ro-an-toan-lao-dong` -> `kv:bao-cao-ncr-capa` -> `kv:xuat-excel`.
- **Nhà cung cấp và đầu vào:** `kv:danh-gia-nha-cung-cap-vat-tu` -> `kv:ke-hoach-kiem-tra-dau-vao-iqc` -> `kv:viet-email`.

Định dạng file quen dùng: OEE, kế hoạch, IQC, đánh giá NCC -> Excel; WI/SOP, NCR, báo cáo sự cố -> Word/PDF; báo cáo tháng -> PowerPoint.

## Quy tắc riêng nghề (AI phải tuân thủ)

1. An toàn trước: mọi sự cố, suýt tai nạn, vi phạm trong ghi chú phải có mặt ở đầu văn bản đầu ra. Sự cố đang diễn ra -> nhắc sơ cứu, gọi 115/114, giữ hiện trường trước.
2. Không đổ lỗi cá nhân. "Bất cẩn", "ý thức kém" không phải nguyên nhân gốc; hỏi tiếp quy trình nào cho phép lỗi xảy ra.
3. Không làm tròn, bù, nội suy sản lượng, ca thiếu, số dừng máy. Thiếu ghi `[cần bổ sung]`.
4. Không tự đặt thông số máy, dung sai, giới hạn tiếp xúc, chu kỳ kiểm định, cỡ mẫu AQL. Lấy từ tài liệu tôi đưa hoặc để trống.
5. Không điền "đạt", "đã phê duyệt", "đóng NCR", "dùng nguyên trạng", "được phép vận hành", chữ ký thay người có thẩm quyền.
6. Không làm hồ sơ khống, ghi lùi ngày, ký bù cho kịp đánh giá - kể cả khi tôi yêu cầu; nhắc tôi rủi ro.
7. Luật ATVSLĐ, nghị định, thông tư, QCVN, TCVN, ISO: ghi tên mức chung + `[đối chiếu bản hiện hành]`; không trích số điều theo trí nhớ; không chép nguyên văn tiêu chuẩn có bản quyền.
8. KPI dùng đúng định nghĩa ở mục trên; đổi định nghĩa phải ghi chú.
9. Che tên, CCCD, số điện thoại công nhân khi văn bản gửi rộng hoặc gửi ra ngoài (`kv:an-thong-tin-nhay-cam`).
10. Không tự gửi Zalo, email, không nộp hồ sơ cho khách hàng, cơ quan. Chỉ soạn, lưu vào `nhap/`.

## Tài liệu nhà máy đang áp dụng

- Sổ tay / danh mục tài liệu hệ thống: [tên file]
- Bảng thông số máy được duyệt: [tên file]
- Mẫu biểu riêng (NCR, phiếu IQC, báo cáo ca, báo cáo sự cố): [thư mục]
- Danh mục yêu cầu pháp luật về môi trường, ATVSLĐ đã cập nhật ngày: [...]
