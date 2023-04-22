function aFunc() {
  var a = 0;
  let b = 0;
  console.log(a);
  console.log(b);

  // this inner function is an IIFE
  // ik var is declared globally which is fine, but even let also got called
  (function bFunc() {
    console.log(a);
    console.log(b);
    console.log(global.b);

  })();
}

var a = 1;
let b = 2;
aFunc();

// error
// bFunc();
