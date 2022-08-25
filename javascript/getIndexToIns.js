function getIndexToIns(arr, num) {
  arr.sort((a,b) => a - b)
  console.log('sorted:', arr)
  let result = arr.map(element => element >= num)
  console.log(result)
  return result.indexOf(true) !== -1? result.indexOf(true): result.length;
  
}

// console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([5, 3, 20, 3], 5));
console.log(getIndexToIns([2, 5, 10], 15));




