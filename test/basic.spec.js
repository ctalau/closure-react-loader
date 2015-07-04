describe('closure-react-loader', function() {
  it('transforms JSX files on the fly', function(done) {
    var iframe = document.createElement('iframe');
    iframe.src = '/base/test/index.html';
    document.body.appendChild(iframe);
    iframe.onload = function() {
      var doc = iframe.contentWindow.document;
      var reactElem = doc.querySelector('.ceva > h1');
      expect(reactElem.textContent).toBe('Hello, world!');
      done();
    };
  });
});
