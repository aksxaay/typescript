function mutation(arr) {
  
  return arr[1].toLowerCase().split("").every(val => arr[0].toLowerCase().split("").indexOf(val) >= 0)
}

mutation(["hello", "hey"]);