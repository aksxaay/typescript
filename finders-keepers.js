function findElement(arr, func) {
  let result = arr.map(func)
  let index = result.indexOf(true)
  return arr[index]
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);
console.log([1,2,3,4][-1])