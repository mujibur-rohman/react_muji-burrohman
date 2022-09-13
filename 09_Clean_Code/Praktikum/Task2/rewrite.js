class Kendaraan {
  totalRoda = 0;
  kecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam += kecepatanBaru;
  }
  berjalan() {
    this.tambahKecepatan(10);
  }
}

let mobilCepat = new Mobil();
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();

let mobilLamban = new Mobil();
mobilLamban.berjalan();

console.log(mobilCepat.kecepatanPerJam);
console.log(mobilLamban.kecepatanPerJam);
