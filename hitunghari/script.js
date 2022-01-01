function addZero(n) {
  return (n * 1) < 10 ? "0" + n : n;
}

function hitung(y1, y2, res) {
  if(y1 == "" || y2 == "") return alert(`Tahun ${y1 == "" ? "1" : "2"} tidak boleh kosong!`)
  y1 = new Date(y1).getTime();
  y2 = new Date(y2).getTime();

  let o = y2 - y1;
  let h = Math.floor((o / (1000 * 3600 * 24)));
  let b = Math.floor((o / (1000 * 3600 * 24 * 30)));
  let t = Math.floor((o / (1000 * 3600 * 24 * 30 * 12)));

  if(h < 0) h = 0
  if(b < 0) b = 0
  if(t < 0) t = 0

  res.innerHTML = `${addZero(t)} Tahun<br>${addZero(b)} Bulan<br>${addZero(h)} Hari`
}
