let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested',
  ['loop', 'shift', 6, 7, 1000, 'method',
  ['deep','concat', false, true, 'spread', 'array',
  ['deeper','mutate', 1327.98, 'splice', 'slice', 'push',
  ['deepest', 'iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth']]]]]
  // Only change code above this line
];

console.log(myNestedArray)

function getArrayDepth(obj) {
  if (Array.isArray(obj)) return 1 + Math.max(...obj.map(t => getArrayDepth(t)))
  else return 0
}

console.log(getArrayDepth(myNestedArray));
