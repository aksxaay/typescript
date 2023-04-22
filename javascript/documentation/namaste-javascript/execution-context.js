var ans = 2;

var square2 = square(ans);
var square4 = square_alt(4);

console.log("ans", ans);
console.log("square2", square2);
console.log(square_hoist(5));

function square(num) {
  var ans = num * num;
  return ans;
}

function square_alt(num) {
  ans = num * num;
  return ans;
}

function square_hoist(num) {
  console.log(bruh);
  var bruh = num;
  return bruh;
}
