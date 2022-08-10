function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  newArr = [...arr];
  console.log(newArr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === elem) {
        let index = newArr.indexOf(arr[i]);
        if (index > -1) {
          newArr.splice(index, 1);
        }
        break;
      }
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
