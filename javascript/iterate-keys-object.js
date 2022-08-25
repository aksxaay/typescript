const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  for (let user in usersObj) {
    console.log(usersObj[user].online)
    
  }
  return 'count'
  // Only change code above this line
}
// console.log(users)
console.log(countOnline(users));
