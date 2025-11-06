class Cuti {
  constructor(nama) {
    this.nama = nama;
  }

  // template
  maxHari() {
    return 0;
  }

  ajukanCuti(name, jumlahHari) {
    if (jumlahHari > this.maxHari()) {
      console.log(
        `Pengajuan atas nama ${name} ditolak! Maksimal ${this.nama} adalah ${this.maxHari()} hari`
      );
    } else {
      console.log(
        `Pengajuan atas nama ${name} ${this.nama} selama ${jumlahHari} hari disetujui`
      );
    }
  }
}

class CutiTahunan extends Cuti {
  constructor(name) {
    super(name = "Cuti Tahunan");
  }
  maxHari() {
    return 12;
  }
}

class CutiSakit extends Cuti {
  constructor(name) {
    super(name = "Cuti Sakit");
  }
  maxHari() {
    return 2;
  }
}

class CutiMelahirkan extends Cuti {
  constructor(name) {
    super(name= "Cuti Melahirkan");
  }
  maxHari() {
    return 90;
  }
}
//yg bener
const karywan = new CutiTahunan();
karywan.ajukanCuti("budi", 12);  

const karywan1 = new CutiSakit();
karywan1.ajukanCuti("Andi",2); 

const karywan2 = new CutiMelahirkan();
karywan2.ajukanCuti("Andi",45); 

//yg salah
const karywan3 = new CutiTahunan();
karywan.ajukanCuti("Jaky",13);  

const karywan4 = new CutiSakit();
karywan1.ajukanCuti("salah",4); 

const karywan5 = new CutiMelahirkan();
karywan2.ajukanCuti("romero",95); 



