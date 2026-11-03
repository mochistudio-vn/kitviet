# Hồ sơ làm việc - Du lịch - Khách sạn

> Bản mẫu của Kit Việt. Điền vào các chỗ [...], xóa dòng không dùng. Claude đọc file này mỗi phiên để không phải hỏi lại.

## Tôi là ai

- Họ tên / cách xưng hô: [...]
- Vai trò: [điều hành tour / sales du lịch / hướng dẫn viên / lễ tân / quản lý khách sạn / chủ homestay]
- Đơn vị: [tên công ty lữ hành hoặc cơ sở lưu trú], địa bàn: [...]
- Phần mềm đang dùng: [PMS ... / channel manager ... / Excel / sổ tay]

## Cơ sở lưu trú (nếu có)

| Mục | Giá trị |
|---|---|
| Loại hình, hạng | [khách sạn ... sao / resort / homestay / căn hộ dịch vụ] |
| Số phòng sẵn sàng bán | [...] |
| Hạng phòng | [Superior ... phòng, Deluxe ... phòng, ...] |
| Giờ nhận / trả phòng | [14:00 / 12:00] |
| Chính sách cọc | [...] |
| Chính sách hủy, không đến | [...] |
| Ăn sáng | [gồm / không gồm, giờ phục vụ] |
| Kênh bán | [trực tiếp, Booking.com, Agoda, Traveloka, Airbnb, đại lý ...] |
| Tỷ lệ hoa hồng từng kênh | [theo hợp đồng ...] |
| Giọng thương hiệu khi trả lời khách | [trang trọng / thân thiện / trẻ trung] |
| Người ký phản hồi review | [tên, chức danh] |

## Công ty lữ hành (nếu có)

| Mục | Giá trị |
|---|---|
| Tuyến tour chính | [...] |
| Chính sách lợi nhuận | [tỷ lệ ... % hoặc lãi cố định .../khách] |
| Báo giá gồm VAT? | [có / không, thuế suất do kế toán xác nhận] |
| Chính sách FOC | [1 suất miễn phí mỗi ... khách] |
| Quy ước trẻ em | [dưới ... tuổi miễn phí, ... - ... tuổi tính ... %] |
| Điều kiện cọc và hủy tour | [...] |
| Ngưỡng giờ ngồi xe tối đa/ngày | [...] giờ |

## Nhà cung cấp hay dùng (để Claude không bịa)

| Loại | Tên | Đơn giá mới nhất | File báo giá | Hiệu lực |
|---|---|---|---|---|
| Nhà xe | [...] | [...] | [...] | [...] |
| Khách sạn | [...] | [...] | [...] | [...] |
| Nhà hàng | [...] | [...] | [...] | [...] |

Đơn giá nào trống thì Claude ghi `[cần bổ sung]`, không tự điền.

## Thẩm quyền

- Ca trực / nhân viên tự quyết: [ví dụ đổi phòng cùng hạng, tặng đồ uống]
- Phải xin quản lý: [giảm giá, hoàn tiền, nâng hạng, đền bù]
- Người duyệt giá bán tour cuối: [...]

## Liên lạc khẩn cấp

- Điều hành trực 24/7: [...]
- Cơ sở y tế gần nhất: [...]
- Cấp cứu 115, công an 113, cứu hỏa - cứu nạn 114.

## Thư mục làm việc gợi ý

```
du-lich/
  tour-doan/
    <khach>-<yyyy-mm>/
      yeu-cau/            # email, biên bản gọi điện của khách
      nha-cung-cap/       # báo giá xe, khách sạn, nhà hàng, vé
      ket-qua/            # lịch trình, báo giá đã duyệt
  san-pham/
    diem-den/             # hồ sơ điểm đến, bài thuyết minh
  khach-san/
    review/               # review xuất theo tuần + ghi nhận nội bộ
    dat-phong/            # file xuất PMS theo tháng
    gia-phong/            # bảng giá theo năm
    sop/                  # SOP buồng phòng, lễ tân
  .kv-run/                # dây chuyền tự tạo, không sửa tay
```

## Luồng hay dùng

- Tour đoàn: `kv:day-chuyen-ho-so-tour-doan` - gom yêu cầu -> lịch trình + báo giá -> gác cổng -> bàn giao.
- Khách lẻ: `kv:thiet-ke-lich-trinh-tour` -> `kv:bao-gia-tour-chi-phi` -> `kv:kiem-tra-chong-bia`.
- Review hằng tuần: `kv:tra-loi-review-khach-san` -> agent `kv:soat-cam-ket-dich-vu-luu-tru`.
- Cuối tháng: `kv:bao-cao-cong-suat-phong` -> `kv:gia-phong-theo-mua`.

## Quy tắc riêng của tôi (Claude phải làm theo)

1. Không bịa đơn giá, tên nhà cung cấp, giờ mở cửa, giá vé. Thiếu thì ghi `[cần bổ sung]` hoặc `[cần xác nhận]`.
2. Báo giá gửi khách không bao giờ có giá vốn, tỷ lệ lời.
3. Nội dung công khai (review, listing) không có tên đầy đủ, số phòng, số điện thoại, giấy tờ của khách.
4. Không hứa hoàn tiền, đền bù, nâng hạng khi chưa có người có thẩm quyền duyệt.
5. Quy định lữ hành, lưu trú, bảo hiểm du lịch: luôn nhắc kiểm văn bản hiện hành; chỉ nêu số hiệu văn bản khi chắc chắn hoặc đã tra.
6. Không tự gửi email, đăng review, cập nhật giá lên OTA.
7. [Thêm quy tắc của bạn ...]
