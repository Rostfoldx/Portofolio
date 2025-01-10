// Tanggal lahir
const tanggalLahir = new Date(2005, 3, 23); // 23 April 2005 (bulan dimulai dari 0)

// Tanggal saat ini
const sekarang = new Date();

// Hitung usia awal (berdasarkan tahun)
let usia = sekarang.getFullYear() - tanggalLahir.getFullYear();

// Buat ulang tanggal ulang tahun di tahun ini
const ulangTahunTahunIni = new Date(
  sekarang.getFullYear(),
  tanggalLahir.getMonth(),
  tanggalLahir.getDate()
);

// Kurangi usia jika ulang tahun tahun ini belum lewat
if (sekarang < ulangTahunTahunIni) {
  usia--;
}

document.getElementById("usia").textContent = usia;
