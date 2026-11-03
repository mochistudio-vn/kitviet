# Hồ sơ làm việc - Nhà hàng, quán cafe (F&B)

> Bản mẫu của Kit Việt. Điền vào chỗ `[...]`, xóa dòng không dùng. Lưu thành `CLAUDE.md` ở thư mục gốc của quán (Claude Code), dán vào phần Hướng dẫn dự án (Claude web/Desktop) hoặc `AGENTS.md` (Codex).

## Về quán

- Tên quán: [...] - số cơ sở: [...]
- Loại hình: [quán cafe / trà sữa / nhà hàng gọi món / quán nhậu / lẩu nướng / cơm văn phòng / bếp chỉ bán online]
- Pháp lý: [hộ kinh doanh / công ty] - không ghi mã số thuế, CCCD vào file này nếu chia sẻ cho người khác
- Địa chỉ (tỉnh/thành, phường hiện tại): [...] - diện tích [...] m2, [...] tầng, [...] chỗ ngồi
- Giờ mở cửa: [...] - khung ca: [Sáng ...h-...h / Chiều ...h-...h / Gãy ...]
- Kênh bán: [tại quán / mang đi / GrabFood / ShopeeFood / Be / tự giao / Zalo]
- Phần mềm bán hàng: [KiotViet / Sapo FnB / iPOS / CukCuk / Excel tự ghi]
- Vai trò của tôi: [chủ quán / quản lý cửa hàng / bếp trưởng / marketing]

## Giọng văn và xưng hô

- Với khách: [quán - bạn / em - anh chị / mình - bạn], mức thân mật [...]
- Ký tên trả lời review: "[...]"
- Từ quán không dùng: [...]

## Số liệu nền (cập nhật khi đổi)

| Khoản | Giá trị | Nguồn | Ngày xác nhận |
|---|---|---|---|
| % food cost mục tiêu (đồ ăn / đồ uống) | [...]% / [...]% | chủ quán | [...] |
| Giá bán trên menu đã gồm VAT chưa, thuế suất | [...] | kế toán | [...] |
| Hoa hồng GrabFood / ShopeeFood / Be | [...] | hợp đồng/trang đối tác | [...] |
| Phần quán gánh khi tham gia khuyến mãi app | [...] | trang đối tác | [...] |
| Chi phí bao bì mang đi trung bình/đơn | [...] | phiếu nhập | [...] |
| Tiền lẻ đầu ca, mức lệch két phải báo | [...] | chủ quán | [...] |

Quy tắc: phí app, thuế suất chỉ lấy từ bảng này. Ô trống thì ghi `[cần xác nhận]`, không tự điền.

## Chất gây dị ứng - ký hiệu dùng trên menu

| Ký hiệu | Nhóm | Ghi chú của quán |
|---|---|---|
| [G] | Gluten/lúa mì | [...] |
| [GX] / [NT] | Giáp xác / nhuyễn thể | [...] |
| [C] | Cá (gồm nước mắm) | [...] |
| [T] / [S] | Trứng / sữa | [...] |
| [Đp] / [H] | Đậu phộng / các loại hạt | [...] |
| [ĐN] / [M] | Đậu nành / mè | [...] |
| Khác | [...] | [...] |

- Bếp dùng chung dầu chiên / thớt / máy xay: [có/không - món nào]
- Quy tắc: khách báo dị ứng -> ghi POS + nói trực tiếp bếp; bếp không chắc thì không phục vụ món đó.

## Quy định nội bộ

- Giới hạn giờ làm, nghỉ giữa ca, nghỉ tuần, quy tắc cho nhân viên dưới 18 tuổi (đã kiểm theo Bộ luật Lao động hiện hành ngày [...]): [...]
- Quyền xử lý khiếu nại: phục vụ [...] / quản lý ca [...] / vượt mức -> chủ quán
- Nhà cung cấp chính: [tên - mặt hàng - lịch giao - giờ chốt đặt]

## Giấy tờ đang có

| Giấy tờ | Số/ngày cấp | Hạn | Nơi lưu |
|---|---|---|---|
| Đăng ký kinh doanh | [...] | - | [...] |
| Giấy chứng nhận/cam kết ATTP | [...] | [...] | [...] |
| Xác nhận kiến thức ATTP, khám sức khỏe nhân viên | [...] | [...] | [...] |
| PCCC | [...] | [...] | [...] |
| Giấy phép bán rượu/bia (nếu có) | [...] | [...] | [...] |

## Thư mục làm việc gợi ý

```
quan/
  CLAUDE.md
  menu/<dot-ra-mon>/       # công thức, nhãn nguyên liệu đã chép chữ, ghi chú bếp
  gia-von/                 # bảng food cost, hóa đơn/phiếu nhập
  kho/                     # file tồn kho, phiếu đặt hàng
  nhan-su/                 # lịch ca, cẩm nang đào tạo (không lưu CCCD ở đây)
  van-hanh/                # SOP ATTP, checklist mở/đóng ca, sổ sự cố
  bao-cao/<nam-tuan>/      # file xuất POS, báo cáo app giao đồ ăn
  khach/                   # review, khiếu nại, sổ khiếu nại
  marketing/               # lịch bài, khuyến mãi
  giay-phep/
  .kv-run/                 # dây chuyền tự tạo
```

## Luồng hay dùng

- Ra món mới: `kv:day-chuyen-ra-mat-mon-moi` (hoặc `kv:tinh-food-cost-mon` -> `kv:thiet-ke-menu-mo-ta-mon` -> `kv:kiem-tra-chong-bia` -> `kv:xuat-pdf`)
- Cuối tuần: `kv:bao-cao-doanh-thu-quan` -> `kv:nhap-nguyen-lieu-ton-kho-bep` -> `kv:xep-lich-ca-nhan-vien-quan`
- Có review xấu: `kv:an-thong-tin-nhay-cam` -> `kv:phan-hoi-review-khieu-nai-quan`

## Quy tắc riêng nghề

- Không bao giờ ghi "không chứa chất gây dị ứng" khi bếp chưa xác nhận thành phần sốt, gia vị đóng gói.
- Giá vốn chỉ tính từ hóa đơn/phiếu nhập của quán, ghi ngày; không dùng giá trên mạng.
- Mọi quy định ATTP, PCCC, thuế, khuyến mại, lao động: ghi "kiểm tra văn bản hiện hành", không bịa số văn bản.
- Nghi ngộ độc thực phẩm: dừng món, giữ mẫu, báo chủ quán và cơ quan y tế - AI không tư vấn điều trị.
- AI không tự đăng bài, trả lời review, đặt hàng, đăng ký khuyến mãi app hay nộp hồ sơ.
