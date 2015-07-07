CLOSURE_IMPORT_SCRIPT = function(src) {
  var written = false;
  if (src.match(/.jsx$/)) {
    var xmlhttp = new XMLHttpRequest(), result = false;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
          var content = xmlhttp.responseText;
          var transformResult = JSXTransformer.transform(content, {sourceMap: true});
          var script = transformResult.code;
          var sourceMap = transformResult.sourceMap;
          if (typeof window.btoa !== "undefined") {
            sourceMap.files = [null];
            sourceMap.file = src;
            sourceMap.sourcesContent = [content];
            var sourceMapUrl = "//# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap));
            script += sourceMapUrl;
            var scriptUrl = "data:text/javascript;base64," + btoa(script);
            document.write('<script src="' + scriptUrl + '"></script>');
          } else {
            document.write('<script>' + script + '</script>')
          }
          written = true;
        }
      } else {
        console.log('Error loading script "' + src + '": ' + xmlhttp.status);
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
};
