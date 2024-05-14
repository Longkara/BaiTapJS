// 1 chuyển tất cả các chữ viết hoa trong chuỗi thành chữ viết thường
// 2 xóa tất cả các ký tự đặc biệt bao gồm: "A", "O", "Y", "E", "U", "I"
// 3 thêm dấu "." trước môi ký tự thường trong chuỗi kết quả
// function stringTask(str) {
//   //chuyển đổi chữ hoa thành chữ thường
//   let lowerCase = str.toLowerCase();
//   //loại bỏ các ký tự đặc biệt
//   let cleanedStr = lowerCase.replace(/[aoyeui]/g, "");
//   //chèn dấu "." vào trước mỗi ký tự
//   let result = cleanedStr.replace(/./g, ".$&");
//   return result;
// }
// console.log(stringTask("tour")); // Kết quả: ".t.o.u.r"
// console.log(stringTask("aBAcAba")); // Kết quả: ".b.c.b"
// console.log(
//   stringTask(
//     "GUyYCKeOHFvQJfLqbRaiEPrWUbbkeYRFJaUDPEPwLbPfhvgQcYvovKhDACPLTTIhOCDGvGKxeDngHLxeMMxbHpLwbALvGGPpXDkY"
//   )
// );
// Kết quả: ".g.c.k.h.f.v.q.j.f.l.q.b.r.p.r.w.b.b.k.r.f.j.d.p.p.w.l.b.p.f.h.v.g.q.c.v.v.k.h.d.c.p.l.t.t.h.c.d.g.v.g.k.x.d.n.g.h.l.x.m.m.x.b.h.p.l.w.b.l.v.g.g.p.p.x.d.k"
/////////////c2////////////////////////
function stringTask(str) {
  // chuyển đổi chữ hoa thành chữ thường
  let lowerCase = str.toLowerCase();

  //xóa các ký tự đặc biệt
  let noSpecialChars = "";
  const specialChar = "aoyeui";
  for (let i = 0; i < lowerCase.length; i++) {
    if (!specialChar.includes(lowerCase[i])) {
      noSpecialChars += lowerCase[i];
    }
  }
  //chèn dấu chấm trước mỗi ký tự
  let result = "";
  for (let i = 0; i < noSpecialChars.length; i++) {
    result += "." + noSpecialChars[i];
  }
  return result;
}
console.log(stringTask("tour")); // Kết quả: ".t.o.u.r"
console.log(stringTask("aBAcAba")); // Kết quả: ".b.c.b"
console.log(
  stringTask(
    "GUyYCKeOHFvQJfLqbRaiEPrWUbbkeYRFJaUDPEPwLbPfhvgQcYvovKhDACPLTTIhOCDGvGKxeDngHLxeMMxbHpLwbALvGGPpXDkY"
  )
);
// Kết quả: ".g.c.k.h.f.v.q.j.f.l.q.b.r.p.r.w.b.b.k.r.f.j.d.p.p.w.l.b.p.f.h.v.g.q.c.v.v.k.h.d.c.p.l.t.t.h.c.d.g.v.g.k.x.d.n.g.h.l.x.m.m.x.b.h.p.l.w.b.l.v.g.g.p.p.x.d.k"
