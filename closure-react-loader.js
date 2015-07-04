CLOSURE_IMPORT_SCRIPT = function(src) {
  var written = false;
  if (src.match(/.jsx$/)) {
    var xmlhttp = new XMLHttpRequest(), result = false;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
          var script = JSXTransformer.transform(xmlhttp.responseText).code;
          document.write('<script>' + script + '</script>');
          written = true;
        }
      } 
    }
    xmlhttp.open("GET", src, false);
    xmlhttp.send();
  } else {
    document.write(
          '<script type="text/javascript" src="' + src + '"></' + 'script>');
    written = true;
  }
  return written;
}
