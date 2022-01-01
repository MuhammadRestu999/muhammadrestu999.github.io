function loadNav() {
  let nav = `      <a href="/">Home</a> | <a href="/about/">About me</a> | <a href="/portal/">Portal Nether</a> | <a href="/umur/">Hitung umur</a> | <a href="/randmath/">Random Math</a> | <a href="/passgen/">Password Generator</a> | <a href="/isi-voucher/">Isi Voucher</a> | <a href="/lirik/">Lirik Lagu</a> | <a href="/covid-19/">Covid-19</a> | <a href="/hitunghari/">Hitung Hari Berlalu</a>`
  let loc = location.pathname
  let now = nav.substr(nav.indexOf(loc) - 9).split(">")
  now[0] = now[0] + " class=\"saiki\""
  now = now.join(">")

  document.getElementsByTagName("nav")[0].innerHTML = (nav.substr(0, nav.indexOf(loc)) + now.substr(9))
}
