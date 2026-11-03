# Hồ sơ làm việc - Nhân sự - Tuyển dụng

Đọc file này đầu mỗi phiên. Điền phần `[...]`, xóa dòng không dùng.

## Tôi là ai

- Vai trò: [Chuyên viên tuyển dụng / HR generalist / C&B / Trưởng phòng nhân sự]
- Công ty: [tên viết tắt hoặc mã, không cần tên đầy đủ] - ngành [...] - quy mô khoảng [...] nhân sự
- Địa bàn: [TP.HCM / Hà Nội / ...] - vùng lương tối thiểu áp dụng: [kiểm tra bản hiện hành, ghi ngày kiểm tra ...]
- Tôi báo cáo cho: [Giám đốc / Trưởng phòng HCNS]
- Pháp chế / luật sư lao động liên hệ khi cần: [nội bộ / thuê ngoài / chưa có]

## Công cụ đang dùng

- Chấm công: [máy vân tay / khuôn mặt / app ...] - xuất file dạng [CSV/Excel]
- Lương - BHXH: [MISA AMIS / Excel / phần mềm ...]
- Kênh tuyển: [TopCV / VietnamWorks / CareerViet / ITviec / LinkedIn / Facebook group / Zalo / giới thiệu nội bộ]
- Khảo sát: [Google Forms / Microsoft Forms]
- Giao tiếp nội bộ: [Zalo nhóm / email / Lark / Teams]

## Thư mục làm việc gợi ý

```
nhan-su/
  tuyen-dung/<ma-vi-tri>/      jd.md, tieu-chi.md, cv/, ket-qua/
  offer-hop-dong/<ma-ung-vien>/ phieu-phe-duyet.md, offer.md, hop-dong.md
  cham-cong/<nam-thang>/        file xuat may cham cong, nghi-phep.csv
  danh-gia/<ky>/                phieu danh gia, KPI
  dao-tao/<nam>/                ke hoach, nhu cau
  mau-bieu/                     mau thu, mau hop dong cong ty da duyet
```

Thư mục `cv/` và `offer-hop-dong/` chứa dữ liệu cá nhân: không đồng bộ lên nơi công khai, xóa CV ứng viên không trúng tuyển theo thời hạn công ty quy định [... tháng].

## Dây chuyền hay dùng

- Tuyển một vị trí: `kv-day-chuyen-tuyen-dung` - đọc CV -> chấm + soạn câu hỏi, thư -> soát thiên kiến + soát dữ liệu.
- Offer: `kv-thu-gui-ung-vien` -> `kv-soat-hop-dong-lao-dong` -> agent `kv-soat-du-lieu-nhan-su`.
- Chốt công: `kv-soat-bang-cham-cong` -> gửi danh sách xác minh -> chốt.
- Việc khác ngoài nghề: `kv-dieu-phoi-day-chuyen`.

## Luồng hay dùng

Chi tiết từng bước nằm trong mục `luong` của `nghe.free.json` (hướng dẫn sử dụng HTML hiển thị lại).

- **Từ JD tới thư mời phỏng vấn:** `kv-viet-jd-tuyen-dung` -> `kv-dang-tin-tuyen-dung-da-kenh` -> `kv-sang-loc-cv-co-trong-so` -> `kv-bo-cau-hoi-phong-van-star` -> `kv-thu-gui-ung-vien` -> `kv-xuat-excel`.
- **Offer tới ngày làm việc đầu tiên:** `kv-thu-gui-ung-vien` -> `kv-soat-du-lieu-nhan-su` -> `kv-soat-hop-dong-lao-dong` -> `kv-onboarding-30-60-90` -> `kv-xuat-pdf`.
- **Chốt công tháng:** `kv-an-thong-tin-nhay-cam` -> `kv-soat-bang-cham-cong` -> `kv-soat-so-lieu` -> `kv-viet-tin-nhan-cong-viec` -> `kv-xuat-excel`.
- **Thông báo chính sách nội bộ có căn cứ:** `kv-tra-cuu-quy-dinh-lao-dong` -> `kv-viet-de-cuong` -> `kv-viet-email` -> `kv-kiem-tra-chong-bia` -> `kv-xuat-word`.
- **Đánh giá, khảo sát, đào tạo:** `kv-danh-gia-thu-viec` -> `kv-khao-sat-gan-ket-nhan-vien` -> `kv-ke-hoach-dao-tao-nam` -> `kv-soat-so-lieu` -> `kv-xuat-pptx`.

## Quy tắc riêng của tôi (AI phải theo)

1. **Che trước khi dán.** Trên Claude web/Desktop: CCCD, số tài khoản, số điện thoại, địa chỉ, dữ liệu sức khỏe phải che trước (dùng `kv-an-thong-tin-nhay-cam`). Báo cáo chỉ dùng mã NV / mã UV.
2. **Không tiêu chí nhân thân.** Không dùng tuổi, giới, hôn nhân, con cái, quê quán, hộ khẩu, ngoại hình, tôn giáo làm tiêu chí tuyển, chấm, đánh giá - kể cả khi tôi lỡ yêu cầu; nhắc tôi.
3. **Offer theo phê duyệt.** Mọi con số và lời hứa trong offer, hợp đồng phải có trong phiếu phê duyệt [tên/mẫu phiếu ...]. Thiếu thì ghi `[cần bổ sung]`.
4. **Luật lao động luôn kiểm tra bản hiện hành.** Thử việc, lương tối thiểu vùng, BHXH, làm thêm giờ, kỷ luật: nêu tên văn bản ở mức chung, không trích số điều khi không chắc.
5. **Kỷ luật, chấm dứt hợp đồng, tranh chấp:** chỉ lập kế hoạch và khung văn bản; quyết định phải qua [pháp chế / luật sư ...].
6. **Không tự gửi.** Không gửi email, không nhắn Zalo ứng viên/nhân viên, không đăng tin. Chỉ soạn và lưu file.
7. Giọng thư: xưng [Công ty/chúng tôi - Anh/Chị], ký tên [Phòng Nhân sự / tên người phụ trách].

## Thông tin hay dùng (điền một lần)

- Giờ làm việc: [08:00-17:00, nghỉ trưa ...], ngày làm việc: [T2-T6 / T2-T7 sáng]
- Ngưỡng đi muộn/về sớm: [...]; trần làm thêm theo quy chế: [...] giờ/tháng
- Thời gian thử việc thường dùng: [...] ngày (theo loại vị trí); lương thử việc: [...]% 
- Phép năm: [...] ngày; quy chế lương thưởng: [tên file ...]
- Thưởng giới thiệu nội bộ: [có/không, mức ...]
