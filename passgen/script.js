function generator(hsil, pnjg) {
  if(pnjg < 1) return alert("Minimal 1 huruf!")
  let r = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
  r += r;
  r += r;
  let out = "";
  for(let i = 1; i <= pnjg; i++) {
    out += r[Math.floor(Math.random() * pnjg)];
  }
  hsil.innerHTML = out;
}
