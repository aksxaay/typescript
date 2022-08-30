function x() {
  function y() {
    console.log('display y');
  }

  return y;
}

z = x();
console.log(z)