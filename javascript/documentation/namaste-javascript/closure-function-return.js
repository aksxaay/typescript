function x() {
  var a = 7;
  function y() {
    console.log("a:", a);
  }
  a = 100;
  // here y is bundled along with its lexical env
  return y;
}

z = x();

console.log(z);
z();
