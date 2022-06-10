// bài tập 1
 // input:soNgaylam, luongMotNgay
// output:btnTienLuong
// xử lý:  tienLuong = soNgaylam * luongMotNgay;

document.getElementById('btnTienLuong').onclick = function(){
   var soNgaylam = document.getElementById('soNgaylam').value;
   var luongMotNgay = document.getElementById('luongMotNgay').value;
   var tienLuong = 0;
   
   tienLuong = soNgaylam * luongMotNgay;
   document.getElementById('tienLuong').innerHTML = 'Tiền lương là: '  + tienLuong + 'VND';
   

}
// BAITAP 2
// input: number1, nuber2,number3,number4, nuber5
// output: giatriTB
// xử lý:   giatriTB = (number1 + number2 + number3 + number4 + number5)/5;


document.getElementById('btngiatriTB').onclick = function() {
   var number1 =Number(document.getElementById('number1').value);
   var number2 =Number( document.getElementById('number2').value);
   var number3 =Number( document.getElementById('number3').value);
   var number4 =Number( document.getElementById('number4').value);
   var number5 =Number( document.getElementById('number5').value);
   var giatriTB = 0;
   giatriTB = (number1 + number2 + number3 + number4 + number5)/5;
   document.getElementById('giatriTB').innerHTML = 'Giá trị trung bình la: '+ giatriTB;
}

// BÀI TẬP 3
// INPUT: giá 1 USD = 23500, số USD người dùng nhập vào
// OUTPUT: số tiền sau khi đổi thanhTien = ?
// XỬLY: thanhTien = 23500 * soUSD

document.getElementById('btnThanhTien').onclick = function() {
   var motUSD = 23500;
   var soUSD = document.getElementById('soUSD').value;
   thanhTien = motUSD * soUSD;
   document.getElementById('thanhTien').innerHTML = 'Số tiền sau khi đổi là:'+ thanhTien;
}

// BÀI TẬP 4: Tính chu vi và diệ tích
// INPUT: chieuDai, chieuRong
// OUTPUT: dienTich, chuVi
// XULY: dienTich = chieuDai * chieuRong
//       chuVi = (chieuDai + chieuRong)* 2

document.getElementById('btnTinh').onclick = function (){
   var chieuDai = Number(document.getElementById('chieuDai').value);
   var chieuRong = Number(document.getElementById('chieuRong').value);
   var chuVi = 0;
   var dienTich = 0;
   chuVi = (chieuDai + chieuRong)*2;
   dienTich = chieuDai * chieuRong;
   document.getElementById('dienTich').innerHTML = 'Diện tích :' + dienTich +'m2';
   document.getElementById('chuVi').innerHTML = 'Chu vi :' + chuVi + 'm';
}
// BÀI TẬP 5 : Tính tổng 2 ký số 
// Mô hình 3 khối 
// - INPUT : nhập vào 1 số bất kì có 2 chữ số bất kì 
// -OUTPUT: tổng 2 ký số
// - Xử Lí : 
// + tách lấy hàng chục n / 10 => làm tròn số Math.floor(n / 10)
// + tách lấy hàng đơn vị n % 10 => làm tròn số Math.floor(n % 10)
// sau đó tính tổng 2 con số chục + đơn vị


document.getElementById('btnTong').onclick = function(){
   var soCanTinh = Number(document.getElementById('soCanTinh').value);
   var donVi = Math.floor(soCanTinh % 10);
   var chuc = Math.floor(soCanTinh / 10)
   var tongHaiKySo = 0;
   tongHaiKySo = donVi + chuc;
   document.getElementById('tongHaiKySo').innerHTML = 'Tổng hai ký số là :' + tongHaiKySo;

}