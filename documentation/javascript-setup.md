
- [Javascript Basics](#javascript-basics)
    - [multidimensional arrays](#multidimensional-arrays)
    - [arrays append / remove?](#arrays-append--remove)
    - [functions](#functions)
    - [equality](#equality)
    - [javascript objects](#javascript-objects)
      - [Delete a property from the Obj](#delete-a-property-from-the-obj)
    - [testing objects for properties](#testing-objects-for-properties)
    - [recursion](#recursion)
- [ES6](#es6)
    - [Scopes of let and var](#scopes-of-let-and-var)
    - [immutable arrays (allegedly)](#immutable-arrays-allegedly)
    - [Prevent Object Mutation](#prevent-object-mutation)
    - [Arrow Functions](#arrow-functions)
    - [Paramterized Arrow Functions](#paramterized-arrow-functions)
    - [arrow functions any number args rest operator](#arrow-functions-any-number-args-rest-operator)
    - [spread operator to evaluate Arrays in-place](#spread-operator-to-evaluate-arrays-in-place)
    - [destructuring assignment from objects](#destructuring-assignment-from-objects)
    - [template literals](#template-literals)
    - [concise object literal using object property shorthand](#concise-object-literal-using-object-property-shorthand)
    - [concise declarative functions](#concise-declarative-functions)
    - [class syntax](#class-syntax)
    - [getters and setters to Control Access to an Object](#getters-and-setters-to-control-access-to-an-object)
    - [javascript method export](#javascript-method-export)
    - [javascript method import](#javascript-method-import)
    - [Javascript Promises](#javascript-promises)
      - [Promise States](#promise-states)
    - [fulfilled promise with then](#fulfilled-promise-with-then)
    - [rejected promise with catch](#rejected-promise-with-catch)
- [Regular Expressions](#regular-expressions)
    - [using test method](#using-test-method)
    - [regex exact matches](#regex-exact-matches)
    - [find more than first match](#find-more-than-first-match)
    - [lazy matching characters](#lazy-matching-characters)



# Javascript Basics

I thought I'd take the freecodecamp 300 hours of training first and right away, it' is like a whole ass game.

[javascript algorithms and data structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

when javascript variables are declared, their initial values are `undefined`

mathOperation(undefined) -> NaN \
concatenateString(undefined) -> undefined

always initialize variables to something of the type you can determine.

---

`let` keyword was introduced in ES6, to prevent variable overwrites
`let` only lets you declare the variable once.

`const` is also part of ES6, is a read-only `let`. Cannot be re-assigned.

use **uppercase variable** identifiers for immutable values and **lowercase or camelCase** for mutable values (objects and arrays)

pretty simple.

<table class="table table-striped">
  <thead>
    <tr>
      <th>Code</th>
      <th>Output</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>\'</code></td>
      <td>single quote</td>
    </tr>
    <tr>
      <td><code>\"</code></td>
      <td>double quote</td>
    </tr>
    <tr>
      <td><code>\\</code></td>
      <td>backslash</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>newline</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>carriage return</td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>tab</td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>word boundary</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>form feed</td>
    </tr>
  </tbody>
</table>


this is sick table.

---

```js
// Setup
let myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

you can't do this shit however.

---

### multidimensional arrays
```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```
crazy.


### arrays append / remove?
```js
const arr1 = [1, 2, 3];
arr1.push(4);
arr1.pop(4); // removes last element of the array
arr1.shift(4); // removes first element of the array
arr1.unshift(4); // adds element of the beginning of the array



```


### functions
```js
function myLocalScope() {
  // using var / let / const still gives you output
  var myVar = 'heya'
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
```
OUTPUT
```
inside myLocalScope heya
ReferenceError: myVar is not defined
inside myLocalScope heya
ReferenceError: myVar is not defined
```


> It is possible to have both local and global variables with the same name. When you do this, the **local variable** takes precedence over the global variable.

local variable takes precedence.

```js
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum +=5
}

// Only change code above this line

addThree();
addFive();
```

this affects the global variable and it's ez
this sum here accesses the global variable because it was `let`.


### equality
```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```
strictly unequal
strict inequality.


I thought this was funny but `undefined` is just undefined, it is not a string.


### javascript objects
```js
const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

```js
ourDog.bark = "bow-wow";
```
```js
ourDog['bark']] = "bow-wow";
```
both are functionally the same.

#### Delete a property from the Obj
```js
delete ourDog.bark;
```
i did not know that.


### testing objects for properties
```js
const myObj = {
  top: "hat",
  bottom: "pants"
};

myObj.hasOwnProperty("top");
myObj.hasOwnProperty("middle");
```
they return true or false.

even if you have the value stored as something else you can't use
`obj.Property` you have to use `obj.[Property]`
I think i've run into this one before as well, but my dumbass never realizes.

you can combine properties and things btw
```js
const gloveBoxContents = myStorage.car.inside['glove box'];
```

like that.

### recursion
[recursion example](./../recursion-example.js)

using debugging I can observe the call stacks and the variables increment in realtime. This helps immensely while doing recursions and other complex tasks.


I just completed basic Javascript.

# ES6
ES6
ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms **ECMAScript and JavaScript are interchangeable**.

Most of the JavaScript you've learned up to this point was in ES5 (ECMAScript 5), which was finalized in 2009. While you can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year.

ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules.




### Scopes of let and var

var declared globally / locally if declared within function

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```
OUTPUT
```
[0, 1, 2] and 3.
```

this is a problem as functionally this is equivalent to 


```js
var numArray = [];
var i; // notice here
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
console.log(i);
```

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
```
display **2**


```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);
```
display **3**

here's more sample code

```js
function checkScope() {
  var i = 'function scope';
  if (true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

console.log('Global scope i is: ', i);

```
**OUTPUT**
```
Block scope i is:  block scope
Function scope i is:  block scope
ReferenceError: i is not defined
```
hence you have to use `var`


### immutable arrays (allegedly)
const arrays are mutable if done right

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

this way.


### Prevent Object Mutation
to prevent proper mutation you have to use Javascript ES6 feature

JavaScript provides a function Object.freeze to prevent data mutation.

```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad";
obj.newProp = "Test";
console.log(obj); 
```

> if the script is running in strict mode.

strict mode? -> introduced in ECMAScript 5 *opt* in a restricted variant of Javascript.

### Arrow Functions

we use Arrow Function to concisely write Anonymous Functions

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

```js
const myFunc = () => "value";
```


### Paramterized Arrow Functions

```js
const increment = (number, value = 1) => number + value;
```
apparently you can't use brackets internally again.




### arrow functions any number args rest operator
```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
  // 0 is the  initialValue
}
```

what type of variable is args.
you **can't** make changes to the args variable that is used in there.

reducer function
> The reduce() method takes two arguments: a callback function and an optional initial value. If an initial value is provided, reduce() calls the "reducer" callback function on each element in the array, in order. If no initial value is provided, reduce() calls the callback function on each element in the array after the first element.

> reduce() returns the value that is returned from the callback function on the final iteration of the array.


this is crazy bruh.


### spread operator to evaluate Arrays in-place

NaN. Math.max() *expects* comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // copy by value
arr2 = arr1;  // copy by reference


console.log(arr2);
```

**note** important, not available online easily.


### destructuring assignment from objects

Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.


```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```
new ES6 equivalent
```js
const {name, age} = user;
```

it also has another advantage, you can pick out the object that you want.

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const { today } = HIGH_TEMPERATURES;
const {yesterday} = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;


// Only change code above this line
```

idk how to do it for a bunch of objects can't tell

```js

[a, b, ...rest] = [10, 20, 30, 40, 50];
// expected output: Array [30,40,50]
```

```js
const { name: userName, age: userAge } = user;
```
you can also assign destructure

nested
```js
const {today:{low:lowToday, high:highToday}} = LOCAL_FORECAST;
```


```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
```
**OUTPUT**
```js
a, b, and c as 1, 2, 5.

```

you can just swap values like 
```js
[a,b] = [b,a]
```

### template literals
es6 feature
this is almost like bash scripting lmao

```js

```

### concise object literal using object property shorthand

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

can be converted to just `{x,y}` in the return statement of the arrow function, under the hood the conversion would be done.


### concise declarative functions
```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

we can remove the `: function` and it would be the same.
also this means we can fun functions inside objects?

ik I just tried to use arrow functions but that's not it's intended use case i'm soz LMAO

it's because


```js
// whatever `this` is here
const person = {
  name: "Taylor",
  sayHello: () => this.name // is the same `this` here
};

console.log(person.sayHello())

```
this code snippet runs a `undefined` simply because

explanation above on the code snippet
yeah as you can see I'm not typing from vim and this is pretty fucking cool
```js
console.log(this.name) simply does not work
```


okay i'm having way too much fun on vim


### class syntax

It should be noted that the class syntax is just syntax, and not a full-fledged class-based implementation of an object-oriented paradigm, unlike in languages such as Java, Python, Ruby, etc.
In ES5, we usually define a constructor function and use the new keyword to instantiate an object.

```js
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
```

`class` syntax simply replaces the `constructor` function and use the `new` keyword to instantiate an object.

```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```

UpperCamelCase -> used for ES6 class convention.
tbh I just prefer the OG method, makes more sense because it's literally just a function
however the use of `new` operator does sorta freak me out


### getters and setters to Control Access to an Object

get value
set value

similar to C++ classes
```js
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
```

yeahhhh
idk the _author doesn't really work idk. we'll see.



### javascript method export

```js
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

export {uppercaseString, lowercaseString}
```

you can also add `export` keyword right before they do anything.

### javascript method import
```js
import {uppercaseString, lowercaseString} from './string_functions.js'  
// Only change code above this line

uppercaseString("hello");
lowercaseString("WORLD!");
```

use * to import everything from the file
```js
import * as stringFunctions from './string_functions.js'
```

there's also *export fallback* where `export default` is used.

while *importing* a default export however, you can drop the `{ function }` brackets

```js
import add from './string_functions.js'
```


### Javascript Promises
`Promise` is a constructor function, so you need to use the `new` keyword to create one. It takes a function, as its argument, with two parameters - `resolve` and `reject`

```js
const myPromise = new Promise((resolve, reject) => {
  // code you want run async
});
```

notice the arrow function

lemme try and rewrite this another way for my understanding

```js
const makeServerRequest = new Promise(function(resolve, reject){
  return;
} 
);
```
this is also valid syntax substituting out the arrow function

#### Promise States
- pending
- fulfilled
- rejected


**pending** -   did not add a way to complete the promise.
**resolve** - promise succeed
**reject** - promise fail


```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer; // true of false
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});
```


### fulfilled promise with then
```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
```

so the separate `arrow function` we use helps us get whatever the result is from the promise.
it takes an unknown amount of time.

apparently the `responseFromServer` `.then` does not compute for `false`

```js
makeServerRequest.then(result => {
  console.log(result);
}, reason => {
  console.log(reason);
});
```

so this is how you make it work for if a promise is **rejected**
> A promise is said to be **settled** if it is either **fulfilled** or **rejected**

### rejected promise with catch
```js

makeServerRequest.then(result => {
  console.log(result);
})
.catch(error => {
  console.log(error);
});
```
executed immediately after `reject` is called.


I also finished the entire ES6 course as well goddamn cnograts to me.

# Regular Expressions

### using test method

you can test for regex strings returns `true/false`
```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
```

you can notice that there's no strings whatsoever
```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /waldo/gi; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```
gi - global + case insensitive

you can `OR` the strings with `|` pipe operator
`/dog|cat/` oh they are forward slashes.  


so far we been checking if a pattern exists or not.

### regex exact matches
extract actual matches with `.matches()`

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```
exact opposite syntax as well.

```js
string'.match(/regex/);
/regex/.test('string');
```


### find more than first match
```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Change this line
let result = twinkleStar.match(starRegex); // Change this line
console.log(result)
```

there's the wildcard
`/.un/`

- greedy match - longest possible part of a string that fits *regex*
- lazy match? - smallest possible part of the string that fits *regex*

### lazy matching characters

regular expressions by default are `greed matching`

