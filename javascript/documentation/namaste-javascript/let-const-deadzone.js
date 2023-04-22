var x = (function() {
  var y = 0;

  return function() {
    y++;
    return y;
  }
})();


// closest behavior to let
console.log(x());
console.log(x());
console.log(x());