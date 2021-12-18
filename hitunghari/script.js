function addZero(n) {
  return (n * 1) < 10 ? "0" + n : n;
}

function hitung(y1, y2, res) {
  y1 = new Date(y1).getTime();
  y2 = new Date(y2).getTime();

  let o = y2 - y1;
  let h = Math.floor((o / (1000 * 3600 * 24)) % 30);
  let b = Math.floor((o / (1000 * 3600 * 24 * 30))) % 12;
  let t = Math.floor((o / (1000 * 3600 * 24 * 30 * 12)));

  res.innerHTML = `${addZero(t)} Tahun<br>${addZero(b)} Bulan<br>${addZero(h)} Hari`
}
