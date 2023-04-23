// function statement / function declaration (same)
function a() {
  console.log("called fn a");
}

// function expression
var b = function () {
  console.log("called fn b");
};

// difference between the above is basically hosting.

// Anonymous Function
() => {
  console.log("anonymous function called");
};
// can only specially be used while returning another function

// Named Function Expression
var b = function test() {
  console.log("test function called through b");
};
test();
// Difference between Parameters and Arguments

function test(param1, param2) {
  console.log(param1, param2);
}

test("arg1", "arg2");

// First Class Functions
// the ability of functions to be used as values, arguments and returned from fns, assigned to variables etc

// First Class Citizens
