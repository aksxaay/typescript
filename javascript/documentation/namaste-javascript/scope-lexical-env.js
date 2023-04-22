function a() {
  var b = 10;
  c();

  function c() {
    // able to find `b` is due to as scope chain.
    // no reference in memory? next level of scope chain
    console.log(b);
  }
}

a();
console.log(b);
