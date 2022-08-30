function aFunc() {
  console.log(a);
  console.log(b);

  function bFunc() {
    console.log(a);
    console.log(b);
  }
}

var a = 1;
let b = 2;
aFunc();
bFunc();
