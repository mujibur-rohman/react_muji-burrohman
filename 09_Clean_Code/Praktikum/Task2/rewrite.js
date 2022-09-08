class Kendaraan {
  totalRoda = 0;
  kecepatanPerJam = 0;
}

class Mobil extends Kendaraan {
  berjalan() {
    tambahKecepatan(10);
  }

  tambahKecepatan(kecepatanBaru) {
    this.kecepatanPerJam += kecepatanBaru;
  }
}

let mobilCepat = new Mobil();
mobilCepat.berjalan();
mobilCepat.berjalan();
mobilCepat.berjalan();

let mobilLamban = new Mobil();
mobilLamban.berjalan();
