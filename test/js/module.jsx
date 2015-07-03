goog.provide('module');

goog.require('goog.dom.classlist');

(function() {
  var ceva = document.getElementById('ceva');
  React.render(
    <h1>Hello, world!</h1>,
    ceva
  );
  setTimeout(function() {
    goog.dom.classlist.add(ceva, 'ceva');
  }, 0);
  
}())
