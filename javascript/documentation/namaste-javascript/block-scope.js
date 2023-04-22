// this variable was shadowed by the block a
var a = 100;
{
  // block scoped
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a);


// you CANNOT shadow let using var
// you CAN shadow var using let.
// let doesn't cross boundary of scope
let z = 100;
{
  var z = 10;
}
