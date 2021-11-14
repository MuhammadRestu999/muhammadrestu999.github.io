let covid = ["1. Menggunakan Masker", "2. Mencuci Tangan", "3. Menjaga Jarak"]

i = 0
function kopit() {
  if(i > 2) i = 0
  document.getElementById("3m").innerHTML = covid[i]
  i++
  setTimeout(kopit, 1500)
}

function load() {
  document.getElementById("nama").innerHTML = localStorage["nama"]
}
