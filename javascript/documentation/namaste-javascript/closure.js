function x() {
  // a = 7;
  var b = 10;
  // var a = 7;
  function y() {
    // console.log(a);
    console.log(b);
  }
  // console.log(a);
  y();
}
x();

function a() {
  var a = 10;
  function b() {
    let b = 20;

    return function c() {
      console.log("inside c", a, b);
    };
  }
  return b;
}
let returnFunc = a();
console.log(returnFunc, returnFunc(), returnFunc()());
// console.log(returnFunc.c())
