let s = 0;
let m = 0;
let h = 0;

function a() {
 s++;

 if (s >= 60) {
  s = 0;
  m++;
 }
 if (m >= 60) {
  m = 0;
  h++;
 }
 if (h >= 24) {
  h = 0;
 }

 document.getElementById("soat").innerText = h + ":" + m + ":" + s;
}
setInterval(a, 1000);