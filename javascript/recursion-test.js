function rangeOfNumbers(startNum, endNum) {
  const n = endNum;
  if (n < startNum) {
    return [];
  } else {
    const rangeArray = rangeOfNumbers(startNum, n-1);
    rangeArray.push(n);

    return rangeArray;
  }

  return;

};

console.log(rangeOfNumbers(7,10)); 

