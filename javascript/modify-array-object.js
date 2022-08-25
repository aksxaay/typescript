let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  let friendsArray = [...userObj.data.friends]
  friendsArray.push(friend);
  userObj.data.friends = friendsArray;
  console.log(userObj.data.friends)
  return userObj
}

console.log(addFriend(user, 'Pete'));