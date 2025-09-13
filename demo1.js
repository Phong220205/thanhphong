// demo1.js

// Hàm hiển thị tên và tuổi
function hienThiTenTuoi(ten, tuoi) {
    console.log(`Họ tên: ${ten}, Tuổi: ${tuoi}`);
}

// Hàm tính tuổi từ năm sinh
function tinhTuoi(namSinh) {
    const namHienTai = new Date().getFullYear();
    return namHienTai - namSinh;
}

// Gọi thử
let ten = "Phong";
let namSinh = 2006;
let tuoi = tinhTuoi(namSinh);
hienThiTenTuoi(ten, tuoi);
