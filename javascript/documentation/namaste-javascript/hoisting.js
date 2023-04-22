// debugger here

console.log(getName)
getName();
// getName2();
// getName3();

console.log(x);
console.log(getName);
console.log(getName2);


var x = 7;
function getName() {
  console.log("Namaste Javascript");
}

var getName2 = () => {
  console.log("Namaste Javascript2");
};

// arrow function alternate
var getName3 = function() {
  console.log("Namaste Javascript3")
}

getName2();