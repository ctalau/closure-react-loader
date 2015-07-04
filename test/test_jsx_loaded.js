var assertion = 0;
console.log('TAP version 13');
console.log('1..2');

// setup
addClass();

equal(text(document.querySelector('.ceva > h1')), 'Hello, world!');
equal(document.querySelector('.ceva').id, 'ceva');

function text(elem) { return elem.textContent || elem.innerText }
function equal (a, b) {
    console.log((a === b ? 'ok' : 'not ok') + ' ' + (++ assertion));
    if (a != b) { console.log(a + ' ' + b); }
}
