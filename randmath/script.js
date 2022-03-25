function math(diff) {
  let r1 = Math.floor(Math.random() * diff)
  let r2 = Math.floor(Math.random() * diff + 5)

  do { r1 = Math.floor(Math.random() * diff); }
  while(r1 < (diff - 10))

  do { r2 = Math.floor(Math.random() * diff); }
  while(r2 < (diff - 15))



  while(true) {
    btul = +prompt(`Berapa hasil dari ${r1} + ${r2}?`, "")
    btul = btul == r1 + r2
    if(btul) {
      alert("Benar!")
      break
    } else {
      alert("Salah!")
    }
  }
  location.reload()
}



let diff = +prompt("Pilih tingkat kesulitan :\n1. Mudah\n2. Normal\n3. Susah\n4. Sangat susah\n5. Benar² susah\n\n0 == Keluar", "")

if(diff == 1) {
  math(5)
} else if(diff == 2) {
  math(10)
} else if(diff == 3) {
  math(25)
} else if(diff == 4) {
  math(50)
} else if(diff == 5) {
  math(100)
} else if(diff == 0) {
  alert("Selamat tinggal!")
  window.history.back()
} else {
  alert("Tidak tersedia!")
  location.reload()
}
