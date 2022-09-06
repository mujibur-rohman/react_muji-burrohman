let a = 5;
let b = 'Kampus Merdeka';
const nama = 'budi';
let terdaftar = true; // ===== Jawaban B =====
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = 'indonesia';
  return console.log(
    'Perkenalkan nama saya ' +
      nama +
      ' nomor urut ' +
      a +
      ' sekarang sedang mengikuti ' +
      b +
      ' berasal dari ' +
      asal
  );
}

if (terdaftar) {
  console.log(nama + ' terdaftar sebagai kegiatan kampus merdeka');
}
console.log('Array = ' + lengkap_arr[2]); // ===== Jawaban A =====
a = b;
// nama = b;

// console.log('Asal diakses = ' + nama);
console.log('a adalah = ' + a);
console.log('b adalah = ' + b);
perkenalan(); // ===== Jawaban C =====
