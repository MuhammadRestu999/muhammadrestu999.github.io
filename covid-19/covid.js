window.onerror = function (msg, url, lineNo, columnNo, error) {
  var string = msg.toLowerCase();
  var substring = "script error";
  if (string.indexOf(substring) > -1){
    alert('Script Error: See Browser Console for Detail');
  } else {
    var message = [
      'Message: ' + msg,
      'URL: ' + url,
      'Line: ' + lineNo,
      'Column: ' + columnNo,
      'Error object: ' + JSON.stringify(error)
    ].join(' - ');

    alert(message);
  }

  return false;
};

async function get(a, b, c, d) {
  alert("Tunggu 5 detik...")
  let { data } = await axios("https://hardianto-chan.herokuapp.com/api/info/covid?apikey=hardianto")
  let idn = data[0].indo

  let { positif_indo, sembuh_indo, meninggal_indo, update_indo } = idn

  let tgl = update_indo.split("-")
  update_indo = `${tgl[2]}-${tgl[1]}-${tgl[0]}`
  alert("Done!")
  a.innerHTML = positif_indo
  b.innerHTML = sembuh_indo
  c.innerHTML = meninggal_indo
  d.innerHTML = update_indo

}
