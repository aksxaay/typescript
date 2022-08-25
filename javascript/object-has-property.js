let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) => {
    console.log("first");
    return userObj.hasOwnProperty(name);
  });
}

// apparently theres some issue if I encole the arrow function in brackets
function isEveryoneHere2(userObj) {
  let arr = ["Alan", "Jeff", "Sarah", "Ryan"];
  return arr.every((name) => userObj.hasOwnProperty(name));
}

console.log(isEveryoneHere(users));
console.log(isEveryoneHere2(users));
