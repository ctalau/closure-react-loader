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
      } else {
        console.log('Error loading script "' + src + '": ' + xmlhttp.status); 
      }
    }
    xmlhttp.open("GET", src, false);
    xmlhttp.send();
  } else {
    goog.writeScriptSrcNode_(src);
    written = true;
  }
  return written;
}
