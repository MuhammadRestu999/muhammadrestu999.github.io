function addZero(n) {
  n = Number(n)
  return n < 10 ? "0" + n : n
}

function hitung(t) {
  let tttt = t.split("-")[0]
  let bb = t.split("-")[1]
  let tt = t.split("-")[2]

  tttt = Number(tttt)
  bb = Number(bb)
  tt = Number(tt)

  let tahun = new Date().getFullYear()
  let bulan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12][new Date().getMonth()]
  let tanggal = new Date().getDate()

  let umur = bulan >= bb && tanggal >= tt ? tahun - tttt : bb < bulan ? tahun - tttt : tahun - tttt - 1
  let next = bulan >= bb && tanggal >= tt ? `${tahun + 1}-${bb < 10 ? "0" + bb : bb}-${tt < 10 ? "0" + tt : tt}` : bb < bulan ? `${tahun + 1}-${bb < 10 ? "0" + bb : bb}-${tt < 10 ? "0" + tt : tt}` : `${tahun}-${bb < 10 ? "0" + bb : bb}-${tt < 10 ? "0" + tt : tt}`

  return umur
}
