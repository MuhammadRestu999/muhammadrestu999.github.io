function kirim(l, d) {
  let c = "document.getElementById(\"" + ("l"+l) + "\").hidden = false"
  eval(c)
  d.hidden = true;
}
