function titleCase(str) {
  return str.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }).join(" ")
  
}

textSample = "I'm a little tea pot" 
console.log(textSample.toLowerCase())



console.log(titleCase(textSample))

