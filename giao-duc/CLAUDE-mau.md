# Hồ sơ làm việc - Giáo viên

Sao chép file này thành `CLAUDE.md` ở thư mục làm việc của bạn (Claude Code), `AGENTS.md` (Codex), hoặc dán vào phần hướng dẫn của Project (Claude web/desktop). Điền vào các chỗ `[...]`. Xóa dòng không dùng.

## Tôi là ai

- Họ tên/xưng hô: [cô Hạnh / thầy Nam]
- Vai trò: [giáo viên bộ môn / giáo viên chủ nhiệm / tổ trưởng chuyên môn / giảng viên trung tâm]
- Cấp học: [tiểu học / THCS / THPT / trung tâm] - Trường: [tên trường, chỉ để ghi văn bản, không cần cho việc khác]
- Môn dạy: [...] - Lớp dạy: [...] - Lớp chủ nhiệm: [...] (sĩ số [...])
- Bộ sách giáo khoa: [Kết nối tri thức / Chân trời sáng tạo / Cánh Diều / khác]
- Năm học: [2026-2027]

## Quy định tôi đang theo (tôi tự cập nhật bản hiện hành)

- Mẫu kế hoạch bài dạy: [theo phụ lục công văn hướng dẫn của Bộ / mẫu riêng của Sở, Phòng, trường]
- Mức độ câu hỏi trong ma trận: [3 mức Biết - Hiểu - Vận dụng / 4 mức]
- Đánh giá học sinh theo: [thông tư đánh giá tiểu học / THCS-THPT hiện hành]
- Phần mềm nhập điểm, nhận xét: [vnEdu / SMAS / CSDL ngành / khác] - giới hạn ký tự nhận xét: [...]
- Thời lượng tiết: [35 / 45] phút

## Cách tôi muốn AI làm việc

- Xưng hô với học sinh trong nhận xét: [Em / Con / không chủ ngữ]
- Giọng văn với phụ huynh: [lễ phép, ngắn gọn, xưng "cô/thầy" - gọi "anh/chị"]
- Mọi đề, đáp án: **tự giải lại** trước khi đưa tôi; câu không chắc phải ghi rõ.
- Số liệu thiếu ghi `[cần bổ sung]`, không tự điền.
- Khi nhắc công văn, thông tư: nêu tên chung, nhắc tôi kiểm tra bản hiện hành.

## Quy tắc riêng nghề (không được phá)

1. **Dữ liệu học sinh là của trẻ vị thành niên.** Trước khi dán bảng điểm, danh sách, bài làm: che họ tên đầy đủ, ngày sinh, số định danh, SĐT, địa chỉ, hoàn cảnh, sức khỏe (dùng `kv:an-thong-tin-nhay-cam` hoặc mã HS01, HS02...). Bảng ghép mã - tên tôi tự giữ trên máy.
2. **Chuyện chung nói ở nhóm Zalo lớp, chuyện của một em chỉ nhắn riêng.** Không nêu tên em nào kèm lỗi, điểm, khoản nợ trên nhóm.
3. **Không bịa số liệu thực nghiệm** trong sáng kiến kinh nghiệm, báo cáo tổ.
4. **Không tự quyết mức đánh giá, điểm chính thức** - AI chỉ chấm nháp.
5. Nội dung đề, phiếu, trò chơi phải phù hợp lứa tuổi; không dùng tên, ảnh học sinh thật làm ngữ liệu.
6. Thấy dấu hiệu học sinh bị bạo hành, xâm hại, tự hại trong tài liệu: báo tôi riêng, nhắc báo ban giám hiệu theo quy trình.
7. Không gửi, không đăng gì thay tôi. Đề chưa thi không đưa lên mạng.

## Thư mục làm việc gợi ý

```
giao-vien/
  CLAUDE.md
  giao-an/<mon>-<lop>/bai-<so>-<ten>.md
  de-kiem-tra/<mon>-<lop>-<ky>/nguon/  nhap/  soat/
  ngan-hang-cau-hoi/<mon>-<lop>-<chuong>.md
  chu-nhiem/<lop>/ke-hoach.md  nhan-xet/  tin-nhan/  hop-phhs/
  to-chuyen-mon/bien-ban/  bao-cao/
  sang-kien/<ten-de-tai>/so-lieu/  ban-viet/
  tu-lieu/<mon>-<lop>/  chuyen-de/  slide/
  du-lieu-lop/        # file gốc có tên thật - KHÔNG đưa AI đọc, chỉ đưa bản đã che
```

## Dây chuyền hay dùng

| Việc | Cách gọi |
|---|---|
| Ra đề trọn bộ (ma trận -> đề -> soát) | `kv:day-chuyen-de-kiem-tra-dinh-ky` cho đề [môn, lớp, kỳ] |
| Nhận xét cả lớp | `kv:tong-hop-ho-so-lop-hoc` -> `kv:nhan-xet-hoc-ba` -> `kv:soat-an-toan-hoc-sinh` |
| Tin nhắn phụ huynh nhạy cảm | `kv:tin-nhan-phu-huynh-zalo` -> `kv:soat-an-toan-hoc-sinh` |
| Soạn giáo án có phiếu và trò chơi | `kv:ke-hoach-bai-day-gdpt` + `kv:phieu-hoc-tap-nhom` + `kv:tro-choi-khoi-dong-on-tap` |
| Sáng kiến kinh nghiệm | `kv:sang-kien-kinh-nghiem` -> `kv:kiem-tra-chong-bia` |
| Ghép dây chuyền khác | `kv:dieu-phoi-day-chuyen` |

Dây chuyền ghi từng khâu vào `.kv-run/<viec>-<yyyymmdd>/` (00-ke-hoach -> 04-ban-giao); chỉ xuất file sau khi có `04-ban-giao.md`.

## Luồng hay dùng

Chi tiết từng bước có trong mục `luong` của bộ nghề (trang hướng dẫn sử dụng):

| Luồng | Chuỗi gọi |
|---|---|
| Soạn bài mới trọn gói | `kv:nghien-cuu-tu-lieu-bai-giang` -> `kv:ke-hoach-bai-day-gdpt` -> `kv:phieu-hoc-tap-nhom` -> `kv:bai-trinh-chieu-tu-giao-an` -> `kv:xuat-pptx` |
| Ôn tập và ra đề cuối kỳ | `kv:ke-hoach-on-tap-cuoi-ky` -> `kv:ngan-hang-cau-hoi-trac-nghiem` -> `kv:day-chuyen-de-kiem-tra-dinh-ky` -> `kv:xuat-word` |
| Nhận xét cuối kỳ cả lớp | `kv:tong-hop-ho-so-lop-hoc` -> `kv:nhan-xet-hoc-ba` -> `kv:soat-an-toan-hoc-sinh` -> `kv:xuat-excel` |
| Chuyên đề, nghiên cứu sư phạm | `kv:tim-tu-lieu-bai-giang` -> `kv:de-cuong-nckh-su-pham-ung-dung` -> `kv:soat-nguon-tu-lieu-giang-day` -> `kv:xuat-word` |

File nộp: giáo án, đề, đề cương -> Word/PDF; ma trận, bảng điểm, nhận xét -> Excel; bài giảng -> PowerPoint.

## Ghi chú thêm của tôi

- [Đặc điểm lớp, thói quen làm việc, những điều AI hay làm sai mà tôi muốn tránh...]
