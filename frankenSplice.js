function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice(0,n)
  result.push(...arr1)
  result.push(...arr2.slice(n))
  console.log(result)
  return result;
}

function frankenSplice2(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  console.log(localArr)
  return localArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1)
frankenSplice2([1, 2, 3], [4, 5, 6], 1)
