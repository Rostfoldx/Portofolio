const btn = document.getElementById("btns");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  const nama = document.getElementById("nama");
  const check = document.getElementById("saran");
  const check2 = document.getElementById("saran2");

  if (nama.value == "") {
    alert("harap isi nama dulu");
    script.stop;
  }
  if (check.value == "" && check2.value == "") {
    alert("harap isi sarannya terlebih dahulu");
  } else {
    show();
  }
});

function show() {
  alert("Terima kasih telah memberikan sarannya");
  alert("sayangnya pesan belum bisa diterima");
  alert("karena fitur ini sedang dalam tahap pengembangan");
  alert("untuk sementara bisa lewat salah satu kontak saya :) ");
}
