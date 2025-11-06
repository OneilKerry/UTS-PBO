class Cuti {
  constructor(nama) {
    this.nama = nama;
  }

  maxHari() {
    return 0;
  }

  ajukanCuti(namaKaryawan, jumlahHari) {
    if (jumlahHari > this.maxHari()) {
      console.log(`Pengajuan atas nama ${namaKaryawan} ditolak! Maksimal ${this.nama} adalah ${this.maxHari()} hari`);
    } else {
      console.log(`Pengajuan atas nama ${namaKaryawan} ${this.nama} selama ${jumlahHari} hari disetujui`);
    }
  }
}

class CutiTahunan extends Cuti {
  constructor() {
    super("Cuti Tahunan");
  }
  maxHari() {
    return 12;
  }
}

class CutiSakit extends Cuti {
  constructor() {
    super("Cuti Sakit");
  }
  maxHari() {
    return 2;
  }
}

class CutiMelahirkan extends Cuti {
  constructor() {
    super("Cuti Melahirkan");
  }
  maxHari() {
    return 90;
  }
}
//yg bener
const karywan = new CutiTahunan();
karywan.ajukanCuti("Budi", 12);

const karywan1 = new CutiSakit();
karywan1.ajukanCuti("Andi", 2);

const karywan2 = new CutiMelahirkan();
karywan2.ajukanCuti("Andi", 45);

//yg salah
const karywan3 = new CutiTahunan();
karywan3.ajukanCuti("Jaky", 13);

const karywan4 = new CutiSakit();
karywan4.ajukanCuti("Joko", 4);

const karywan5 = new CutiMelahirkan();
karywan5.ajukanCuti("Romero", 95);
