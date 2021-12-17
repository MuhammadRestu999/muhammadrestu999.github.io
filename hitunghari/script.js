function hitung(y1, y2) {
  alert(y1 + "\n" + y2)
  y1 = new Date(y1).getTime();
  y2 = new Date(y2).getTime();
  alert(y1 + "\n" + y2)

  let o = y2 - y1;
  let h = o / (1000 * 3600 * 24);
  alert(h)
  let b = o / (1000 * 3600 * 24 * 30);
  alert(b)
}

alert("Tes")

