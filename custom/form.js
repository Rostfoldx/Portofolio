const scriptURL =
  "https://script.google.com/macros/s/AKfycbwu9gMNfh7I71Tmlchadg3BeNJxqiGQy8LEBYxHT6_7FKU4S_CDam7UkQDzm8_xQ5-X/exec";
const form = document.forms["kotak-saran"];

form.addEventListener("submit", (e) => {
  const nama = document.getElementById("nama");
  const check = document.getElementById("saran");
  const check2 = document.getElementById("saran2");
  e.preventDefault();
  if (nama.value == "") {
    alert("harap isi nama dulu");
    script.stop;
  }
  if (check.value == "" && check2.value == "") {
    alert("harap isi sarannya terlebih dahulu");
  } else {
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        alert("Terimakasih telah memberikan saran & kritik.");
        console.log("Success!", response);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  }
});
