# Hồ sơ làm việc - Xây dựng (Kit Việt)

> Chép file này vào thư mục dự án/công trình, đổi tên thành `AGENTS.md` (Claude Code), `AGENTS.md` (Codex) hoặc dán vào phần hướng dẫn dự án (Claude web / Desktop). Điền các chỗ `[...]`. Xóa dòng không dùng.

## Tôi là ai

- Họ tên / vai trò: [...] - [kỹ sư giám sát / chỉ huy trưởng / QS / cán bộ an toàn / chủ thầu nhà dân / ban QLDA]
- Đơn vị: [...]   Chứng chỉ hành nghề (nếu có): [lĩnh vực, hạng - chỉ để AI biết phạm vi, không ghi số]
- Cách xưng hô: [anh/chị/em...]. Văn phong văn bản: [trang trọng hành chính / gọn kiểu báo cáo nội bộ]

## Công trình đang làm

- Tên công trình: [...]   Địa điểm: [...]   Loại, cấp công trình: [...]
- Chủ đầu tư: [...]   TVGS: [...]   Thiết kế: [...]   Nhà thầu chính: [...]
- Nhà thầu phụ / tổ đội chính: [cốp pha - ..., sắt - ..., nề - ..., điện nước - ...]
- Hợp đồng số: [...]   Khởi công: [...]   Hoàn thành theo HĐ: [...]
- Lịch làm việc: [nghỉ Chủ nhật? làm ca đêm? giờ cấm xe tải khu vực]
- Mã phòng/căn, trục, tầng theo bản vẽ: [ví dụ P201, trục 1-6 / A-E, tầng 1-5]

## Thư mục làm việc gợi ý

```
<cong-trinh>/
  01-nhat-ky/          # ghi chú hằng ngày, tin Zalo xuất ra .txt
  02-khoi-luong/       # bảng kích thước, CSV khối lượng, đợt thanh toán
  03-bien-ban/         # nghiệm thu, giao ban, hiện trường
  04-an-toan/          # checklist, vi phạm, sự cố
  05-van-ban-di/       # RFI, phát sinh, yêu cầu vật tư, báo cáo tuần
  06-hoan-cong/        # danh mục hồ sơ, bản vẽ hoàn công
  nhap/                # AI chỉ ghi bản nháp vào đây
```

## Dây chuyền hay dùng

- Báo cáo tuần: `kv-day-chuyen-ho-so-cong-truong` -> đọc `01-nhat-ky/` tuần này -> `kv-bao-cao-tuan-ban-chi-huy` -> soát `kv-soat-khoi-luong-don-vi` + `kv-soat-an-toan-cong-truong`.
- Kiểm tra khối lượng thanh toán: `kv-kiem-tra-khoi-luong-xay-dung` trên `02-khoi-luong/` -> gác cổng `kv-soat-khoi-luong-don-vi`.
- Nhật ký cuối ngày: `kv-nhat-ky-thi-cong` từ tin Zalo -> `kv-soat-an-toan-cong-truong` nếu ngày có việc trên cao, hố đào, cẩu lắp.
- Trước khi gửi văn bản có số: `kv-kiem-tra-chong-bia`.
- Dây chuyền ghi nháp và kết quả soát vào `.kv-run/<viec>-<yyyymmdd>/` (00-ke-hoach ... 04-ban-giao); chỉ xuất file sau khi `kv-kiem-dinh-ban-giao` đạt.

## Luồng hay dùng

Chi tiết từng bước xem mục "Luồng" trong hướng dẫn HTML của bộ nghề (sinh từ `nghe.free.json`):

- **Từ nhật ký tới báo cáo tuần trình chủ đầu tư:** `kv-nhat-ky-thi-cong` -> `kv-bao-cao-anh-hien-truong` -> `kv-day-chuyen-ho-so-cong-truong` -> `kv-xuat-pptx` + `kv-xuat-word`.
- **Soát khối lượng đề nghị thanh toán:** `kv-kiem-tra-khoi-luong-xay-dung` -> `kv-soat-khoi-luong-don-vi` -> `kv-du-toan-so-bo-cong-trinh` -> `kv-xuat-excel`.
- **Biện pháp thi công có căn cứ:** `kv-de-cuong-thuyet-minh-thi-cong` -> `kv-dan-y-bien-phap-thi-cong` -> `kv-checklist-an-toan-hang-muc` -> `kv-kiem-tra-chong-bia` -> `kv-xuat-word`.
- **Nghiệm thu đến hồ sơ hoàn công:** `kv-bien-ban-nghiem-thu-cong-viec` -> `kv-tong-hop-loi-hoan-thien` -> `kv-soat-ho-so-hoan-cong` -> `kv-xuat-excel`.
- **Sự cố công trường:** `kv-bao-cao-anh-hien-truong` -> `kv-bao-cao-su-co-cong-truong` -> `kv-soat-an-toan-cong-truong` -> `kv-an-thong-tin-nhay-cam` -> `kv-xuat-pdf`.

Định dạng file quen dùng: nhật ký, biên bản -> Word/PDF; khối lượng, dự toán, vật tư -> Excel; báo cáo tuần họp chủ đầu tư -> PowerPoint.

## Quy tắc riêng nghề (AI phải tuân thủ)

1. Không tự tính kết cấu, không tự đặt thông số kỹ thuật an toàn. Chỗ cần tính ghi "CẦN KỸ SƯ TÍNH TOÁN".
2. Không điền "đạt", "chấp nhận nghiệm thu", chữ ký, số đo kiểm tra thay người có thẩm quyền.
3. Không ghi việc chưa xảy ra vào nhật ký, biên bản - kể cả khi tôi yêu cầu cho kịp; nhắc tôi rủi ro.
4. Khối lượng: luôn có diễn giải công thức, soát đơn vị m2/m3/tấn; không đoán kích thước từ bản vẽ.
5. Đơn giá: chỉ dùng nguồn tôi đưa (báo giá, HĐ, công bố giá Sở Xây dựng [tỉnh]); không có thì `[cần xác nhận]`.
6. Mọi rủi ro an toàn trong ghi chú phải xuất hiện trong văn bản đầu ra và nêu ở đầu câu trả lời.
7. TCVN, QCVN, nghị định, thông tư: ghi tên mức chung + `[đối chiếu bản hiện hành]`; không trích số điều khoản theo trí nhớ.
8. Báo cáo sự cố: sự thật, trung tính, không đổ lỗi; nguyên nhân chờ người có thẩm quyền kết luận.
9. Che CCCD, số điện thoại, địa chỉ người lao động khi văn bản gửi ra ngoài (`kv-an-thong-tin-nhay-cam`).
10. Không tự gửi Zalo, email, nộp hồ sơ. Chỉ soạn, lưu vào `nhap/`.

## Tiêu chuẩn, tài liệu dự án đang áp dụng

- Chỉ dẫn kỹ thuật dự án: [tên file]
- Danh mục tiêu chuẩn áp dụng đã được CĐT chấp thuận: [tên file]
- Mẫu biểu riêng của CĐT / ban QLDA: [tên file hoặc thư mục]
