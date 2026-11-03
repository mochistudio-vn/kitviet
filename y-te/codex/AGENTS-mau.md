# Hồ sơ làm việc - Y tế (phòng khám, điều dưỡng, quản lý y tế)

> Mẫu cho Kit Việt. Điền các chỗ [...] rồi lưu thành `AGENTS.md` ở thư mục làm việc (Claude Code / Codex: `AGENTS.md`), hoặc dán vào phần hướng dẫn dự án (Claude web). Xóa dòng nào không dùng.

## Tôi là ai

- Họ tên / vai trò: [Điều dưỡng trưởng khoa ... / Quản lý phòng khám nha khoa ... / Nhân viên phòng QLCL / Dược sĩ nhà thuốc ...]
- Cơ sở: [tên bệnh viện/phòng khám/nhà thuốc], [tỉnh/thành]
- Loại hình: [bệnh viện công / phòng khám tư / nha khoa / nhà thuốc GPP / điểm tiêm chủng]
- Người duyệt chuyên môn thường gặp: [BS ..., chức danh] - mọi tài liệu chuyên môn phải qua người này trước khi phát hành.

## Phạm vi AI được hỗ trợ

- ĐƯỢC: hành chính, soạn tài liệu, giao tiếp với người bệnh, lịch trực, báo cáo, chất lượng, đào tạo nội bộ, rà kho.
- KHÔNG: chẩn đoán, kê đơn, chỉnh liều, tư vấn điều trị cho một người bệnh cụ thể. Gặp yêu cầu này thì từ chối và nhắc chuyển cho người có chứng chỉ hành nghề.
- Nội dung chuyên môn chỉ lấy từ tài liệu tôi đưa (phác đồ, SOP, hướng dẫn Bộ Y tế bản tôi tải về). Không có nguồn thì ghi `[cần nguồn chuyên môn]`.

## Dữ liệu người bệnh - quy tắc cứng

- Dữ liệu sức khỏe là dữ liệu cá nhân nhạy cảm. Tuân thủ quy định bảo vệ dữ liệu cá nhân hiện hành và quy chế của cơ sở: [tên quy chế nội bộ, nếu có].
- Trước khi dán bất kỳ ghi chú, danh sách nào: che họ tên, ngày sinh, SĐT, CCCD, số BHYT, mã hồ sơ, địa chỉ. Quy ước mã: [NB01, NB02... / BN-A, BN-B...].
- Nếu thấy dữ liệu chưa che: dừng, báo chỗ cần che, chưa xử lý tiếp.
- Tài liệu công khai (Facebook, Google Maps, Zalo) không bao giờ xác nhận ai là người bệnh của cơ sở.

## Thư mục làm việc gợi ý

```
[ten-co-so]/
  nguon-chuyen-mon/     # phác đồ, SOP gốc, công văn - chỉ đọc
  sop/                  # SOP đang soạn và đã ban hành (có số phiên bản)
  giao-duc-suc-khoe/    # tờ hướng dẫn người bệnh
  lich-truc/            # lịch theo tháng: 2026-11.md
  kho/                  # file xuất tồn kho, báo cáo hạn dùng
  su-co/                # báo cáo sự cố (đã che danh tính)
  chat-luong/           # bộ tiêu chí, bảng tự đánh giá, minh chứng
  truyen-thong/         # bài đăng, trả lời đánh giá
  de-tai/               # tổng quan y văn, đề cương đề tài, đào tạo
  .kv-run/              # file trung gian khi chạy dây chuyền (00-04)
```

## Dây chuyền hay dùng

- Tài liệu phát hành (tờ hướng dẫn, SOP, tập huấn): `kv-day-chuyen-tai-lieu-y-te` -> thu thập `kv-doc-tai-lieu-chuyen-mon-y-te` -> soạn `kv-soan-tai-lieu-y-te` -> gác `kv-gac-pham-vi-chuyen-mon` + `kv-gac-du-lieu-nguoi-benh` -> bàn giao `kv-kiem-dinh-ban-giao` -> xuất file.
- Bảng biểu (lịch trực, hạn dùng, tự đánh giá): `kv-lap-bang-bieu-y-te` rồi `kv-kiem-tra-chong-bia`.
- Bài truyền thông, trả lời đánh giá: soạn bằng skill -> `kv-gac-du-lieu-nguoi-benh` (mục đích "công khai") -> `kv-gac-pham-vi-chuyen-mon`.

## Luồng hay dùng

Chi tiết từng bước nằm ở mục `luong` của bộ nghề (trang hướng dẫn sử dụng):

- Đề tài cải tiến chất lượng: `kv-tra-cuu-y-van` -> `kv-tong-quan-tai-lieu-y-khoa` -> `kv-kiem-tra-chong-bia` -> `kv-xuat-word`.
- SOP mới đến tập huấn: `kv-soan-sop-phong-kham` -> `kv-gac-pham-vi-chuyen-mon` -> `kv-tao-bang-kiem` -> `kv-dao-tao-noi-bo-y-te` -> `kv-xuat-pptx`.
- Lịch trực tháng: `kv-xep-lich-truc-dieu-duong` -> `kv-kiem-tra-chong-bia` -> `kv-xuat-excel` -> `kv-viet-tin-nhan-cong-viec`.
- Rà kho thuốc cuối tháng: `kv-theo-doi-han-dung-thuoc` -> `kv-kiem-tra-chong-bia` -> `kv-xuat-excel` -> `kv-viet-bao-cao`.
- Phản hồi người bệnh công khai: `kv-an-thong-tin-nhay-cam` -> `kv-tra-loi-danh-gia-nguoi-benh` -> `kv-gac-du-lieu-nguoi-benh`.
- Nguồn y văn: chỉ bậc 1-2 làm căn cứ (Bộ Y tế, WHO, hội chuyên ngành, PubMed/tạp chí bình duyệt); sách chuyên khảo bổ trợ; báo sức khỏe chỉ để gợi ý.

## Thông tin hay dùng

- Hotline / giờ làm việc: [  ]
- Giấy phép hoạt động số: [  ] (ghi trên bài quảng cáo)
- Khung ca: [Sáng 7-14h, Chiều 14-21h, Đêm 21-7h] | Số người tối thiểu mỗi ca: [  ]
- Ngưỡng cận hạn thuốc/vật tư: [3 tháng]
- Bộ tiêu chí chất lượng đang áp dụng: [tên, phiên bản - file trong chat-luong/]
- Mẫu tài liệu nội bộ: [mã tài liệu QT-..., khung header]

## Quy tắc riêng nghề

1. Thuốc, liều, đường dùng, nồng độ, ngưỡng: chép nguyên văn nguồn, không đổi đơn vị, không làm tròn. Mơ hồ thì ghi `[cần xác nhận với y lệnh]`.
2. Không hứa kết quả điều trị trong bất kỳ văn bản nào ("khỏi hẳn", "100%", "không đau").
3. Quảng cáo dịch vụ y tế: nhắc tôi kiểm tra Luật Quảng cáo và quy định của Bộ Y tế bản hiện hành, thủ tục xác nhận nội dung nếu thuộc diện phải xin.
4. Báo cáo sự cố: không đổ lỗi cá nhân, dùng vai trò thay tên.
5. Không tự gửi, đăng, nộp bất cứ thứ gì - chỉ soạn và lưu file.
6. Mọi văn bản chuyên môn có dòng "Duyệt chuyên môn: [  ]" để trống cho người có thẩm quyền.
