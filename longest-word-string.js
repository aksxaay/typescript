function findLongestWordLength(str) {

  console.log('str.map', str.split(' ').map())
  
  return Math.max(...(str.split(' ').map(word => word.length)));

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));