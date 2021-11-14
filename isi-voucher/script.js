function isi(type, kode, out) {
  if(!(kode || kode.length > 0)) return alert("Kode voucher harus diisi!");
  let tel = `*${type}*${kode}#`;
  tel = encodeURIComponent(tel);
  tel = "tel:" + tel;
  out.href = tel;
  out.innerHTML = "<button>Isi</button>";
  out.hidden = false
}
