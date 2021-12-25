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
  alert("Tunggu sebentar...")
  let { data } = await axios("https://restu-restapi.herokuapp.com/covid?country=indonesia")
  let result = data.result

  let { positif, sembuh, meninggal, diperbarui } = result

  alert("Done!")
  a.innerHTML = positif
  b.innerHTML = sembuh
  c.innerHTML = meninggal
  d.innerHTML = diperbarui

}
