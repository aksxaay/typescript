
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
    - [positive and negative lookahead](#positive-and-negative-lookahead)
    - [re-use using capture groups](#re-use-using-capture-groups)
    - [capture groups to search and replace](#capture-groups-to-search-and-replace)
- [Debugging.](#debugging)
      - [mixed usage of single and double quotes](#mixed-usage-of-single-and-double-quotes)
      - [asignment instead of equality operator](#asignment-instead-of-equality-operator)
      - [Re-initializing Variables Inside Loop](#re-initializing-variables-inside-loop)
    - [links](#links)
- [basic data structures.](#basic-data-structures)
    - [arrays](#arrays)
    - [copy array items using slice()](#copy-array-items-using-slice)
    - [spread operator ES6](#spread-operator-es6)
    - [combine arrays with Spread Operator](#combine-arrays-with-spread-operator)
    - [check presence of element in Array using `indexOf()`](#check-presence-of-element-in-array-using-indexof)
    - [Iterate through All an Array's items Using For Loop](#iterate-through-all-an-arrays-items-using-for-loop)
    - [complex multi-dimensional arrays](#complex-multi-dimensional-arrays)
    - [Javascript Objects Key Value Pairs](#javascript-objects-key-value-pairs)
    - [modify Object Nested within Object](#modify-object-nested-within-object)
    - [delete object property](#delete-object-property)
    - [check if object hasOwnProperty()](#check-if-object-hasownproperty)
    - [Iterate through the keys of object with for statement](#iterate-through-the-keys-of-object-with-for-statement)
    - [Modify an Array Stored in an Object](#modify-an-array-stored-in-an-object)
- [Basic Algorithm Scripting](#basic-algorithm-scripting)
    - [reverse a string](#reverse-a-string)
    - [recursive](#recursive)
    - [find the longest word in string](#find-the-longest-word-in-string)
    - [Return Largest Numbers in Arrays](#return-largest-numbers-in-arrays)
    - [truncate a string](#truncate-a-string)
      - [String.slice() vs String.substring()](#stringslice-vs-stringsubstring)
    - [finders keepers (arr, function())](#finders-keepers-arr-function)
    - [boolean primitive](#boolean-primitive)
    - [Capitalize first letter of string.](#capitalize-first-letter-of-string)
    - [slice and splice special cake thingy](#slice-and-splice-special-cake-thingy)
    - [javascript falsy values](#javascript-falsy-values)
    - [where do I belong](#where-do-i-belong)
    - [string mutations](#string-mutations)
    - [chunky monkey](#chunky-monkey)
- [Objected Oriented Programming](#objected-oriented-programming)
    - [javascript object method](#javascript-object-method)
    - [Constructor Function](#constructor-function)
    - [Constructor creation of Objects](#constructor-creation-of-objects)
    - [instanceof instance of](#instanceof-instance-of)
    - [Understanding own property](#understanding-own-property)
    - [Prototype Properties to reduce duplicated code](#prototype-properties-to-reduce-duplicated-code)
    - [mixin?](#mixin)
    - [yo map function actually really fucking hard bro wtf](#yo-map-function-actually-really-fucking-hard-bro-wtf)
    - [reduce function](#reduce-function)
    - [currying + partial + arity](#currying--partial--arity)
    - [Intermediate Algorithmic Scripting](#intermediate-algorithmic-scripting)



# Javascript Basics

I thought I'd take the freecodecamp 300 hours of training first and right away, it' is like a whole ass game.

[javascript algorithms and data structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
[gitbook // learn-javascript](https://gitbook.gitbook.io/learn-javascript/)

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
```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);
console.log(result)
```
this enables `?` lazy matching, so instead of matching the entire h1 including closing it just matches the tag

it's very similar to vim with the caret (^) and $ end of line matching.

equivalent shortcuts
`\w` => `[A-Za-z0-9_]`

adding g matches it more than once.
`\w` => `[^A-Za-z0-9_]`


had a sorta complex case I was working on
`/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i`
that basically does some sorta username match condition.


more than this js course why am I not putting this in the regex vscode project that I have?


`{}` - quantity specifiers

`?` - check for all or none outside the damn thing, not lazy matching.
british / us words
`colou?r`
`favou?rite`

### positive and negative lookahead
positive - `(?=...)` ... required part not matched
negative - `(?!...)` ... that you do not want to be there.


so here's an example.

```js
let sampleWord = 
`
astr1on11aut
astronaut
a11onaut
11onaut
aa11on1anout
a1a1a11onaout
lookaheads
12345
`;
let pwRegex = /(?=\w{6})(?=\w*\d{2})\w+/g; // Change this line
let result = sampleWord.match(pwRegex);
console.log(result);
```

you'll notice that the lookahead's don't actuall contribute to the results, simple a pre-filter. and a `w+` right after is what finally gets the capture not to mention g because we need all those results.

an for similar reasons
```js
let pwRegex = /(?=\w{6})(?=\w*\d{2}\w*)\w+/g; // Change this line
```
this also works because of the same reasons tbh

I should be weary of this particular example lol
so even if you shuffle those lookahead bracket groups you should theoretically get the same result lmao.


### re-use using capture groups

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

if you got a second capture group you could also use `\2` but beware the \s shits scary combined with $- end of string kinda thing.

yeah be sure to revisit this damn thing


### capture groups to search and replace

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```
access capture groups in the replacement string with dollar signs.


```js
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```
follows the same format ig

apparently the method i had was genius
```js
let hello = "   Hello, World!  ";
let wsRegex = /(\s+\W)/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line
console.log(result)
```
over at [regex101.com](https://regex101.com/) I found out that 
if you combo `\s+\w` / `(\s+\W+)` you can basically conquer any **trailing** space 

just got done with regular expressions as well? crazy bruh. 


# Debugging.
don't be afraid to use `typeof`

it will recognize
- Boolean
- Null
- Undefined
- Number
- String
- Symbol (ES6)
- BigInt (ES2020)

make sure you highlight the variables to make sure you don't have any typos

#### mixed usage of single and double quotes
you have to escape the quotes using `\` in case there's all of them mixed

```js
console.log("sample test \n hiy'`a")
console.log(`sample test \n hiy'"\`a`)
```

I think i'm gonna stick with `backticks` because you can do character swap as well.


#### asignment instead of equality operator
```js
x=7;
y=9;

console.log(x=y);
console.log(x, y)

```
i've been victim to this, idk why js lets it do that, but always gotta be careful. it re-writes both the values to be the same value, so it's really hard to catch. Always use `===`


#### Re-initializing Variables Inside Loop
Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. A potential issue is when variables either should be reinitialized, and aren't, or vice versa. This is particularly dangerous if you accidentally reset the variable being used for the terminal condition, causing an infinite loop.

use `console.log()` to uncover such behavior.


```js
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    row = []; // added line to reset row variable.

  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);

```
like this behavior

because of the let in each line it keeps coming back?
this took me a while to understand but basically I wasn't realizing that the array `row` variable wasn't resetting at all.

damn that's pathetic.

### links
[art of debugging with chrome devtools](https://medium.com/frontmen/art-of-debugging-with-chrome-devtools-ab7b5fd8e0b4#a4f3)


# basic data structures.


### arrays
javascript array types can contain all datatypes
```js
let simpleArray = ['one', 2, 'three', true, false, undefined, null];
```
complex arrays are also a thing.

```js
let complexArray = [
  [
    {
      one: 1,
      two: 2
    },
    {
      three: 3,
      four: 4
    }
  ],
  [
    {
      a: "a",
      b: "b"
    },
    {
      c: "c",
      d: "d"
    }
  ]
];
```
we can also easily overwrite the arrays using bracket notation assignment.

arrays are *mutable*
`Object.freeze()` notation works on arrays.

```js
arr.push(7, 'VIII', 9)
  arr.unshift('I', 2, 'three')
```
you can do that straight to arrays.

`pop()` and `shift()` unlike their cousins don't take in any arguments, they only modify one element at a time.

only one element is removed at a time.


if we want to remove items however, `splice()` comes in.
*remove any number of consecutive elements*

can take 3 parameters
one is position one is offset.

```js
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
console.log(numbers);
```

3rd parameter just add the rest in.


### copy array items using slice()
i guess there's a `splice()` and a `splice()`
rather tan modifying array, it copies / extracts a given number of elements to a new array.

give it its positions.

### spread operator ES6
apparently you can keep updating an array with the spread operator.

```js
newArr.push([...arr]);
```

### combine arrays with Spread Operator

```js
let thisArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thatArray = ['basil', 'cilantro', ...thisArray, 'coriander'];
```
interesting.

### check presence of element in Array using `indexOf()`

returns the position / index of the element given as its function parameter, but returns -1 if the element does not exist in the array.

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
```

iterate methods include => `every()` `forEach()` `map()`


### Iterate through All an Array's items Using For Loop
required file

that's so cool I actually completed this. 

[source file](../iterate-array-loop-delete.js)
basically solved it using indexOf and splice together to determine the location of the sub element of the array.


### complex multi-dimensional arrays

```js
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];

// access "deepest-est?"
console.log(nestedArray[2][1][0][0][0]);

```
this is just example

array has level to depth


we used a semi complex function to determine the depth of basically any array.

### Javascript Objects Key Value Pairs

```js
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};
```
in order to add additional `properties`
```js
tekkenCharacter.origin = 'South Korea';
```
alternative way to add
depending on how you want it.
you can also replace 'hair' with a `variable`
```js
tekkenCharacter['hair'] = 'Dyed Orange';
```
3 ways


### modify Object Nested within Object
this is how you modify nested objects

[nested Object internal array access](../objectNestedObject.js)
this is interesting because I find a way to store the value path

```js
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

let keyObj = ['data', 'online']
  
userActivity[keyObj[0]][keyObj[1]] = 35
console.log(userActivity[keyObj[0]][keyObj[1]])
```

### delete object property
```js
delete food.apples
```

how to delete multiple? probably an array
ez


### check if object hasOwnProperty()
```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
    userObj.hasOwnProperty(name)
  );
}
```
I initially used a switch statement but that was naive
this is clearly a better method

the `every()` method executes for each array element.
it returns `true` if the function returns true for **all elements**
it returns `false` if the function returns false for **one elements**
I see. this is built for this shit.

oh yeah if you take out the brackets you have to include your return statement so that's that.
man I always take time to understand these

[object has property](./../object-has-property.js)

### Iterate through the keys of object with for statement

if you want keys you have to 
```js
Object.keys(<object>)
```
damn


### Modify an Array Stored in an Object
```js
userObj.data.friends.push(friend);
```
this wasn't necessarily tough, just unconventional if you will.
[modify an array stored in an object](../modify-array-object.js)
you didn't even have to do al that apparently.
you can push directly.



# Basic Algorithm Scripting
### reverse a string
```js
  str = str.split("")
  str.reverse()
  str = str.join("")
```

### recursive
first time wrote recursive without any guidance lol

### find the longest word in string

[longest word in a string](../longest-word-string.js)

it's only natural that I build up confusion regarding what I want from javascripts functions


> The difference is in the return values.

> `.map()` returns a new Array of objects created by taking some action on the original item.

> `.every()` returns a boolean - true if every element in this array satisfies the provided testing function. An important difference with .every() is that the test function may not always be called for every element in the array. Once the testing function returns false for any element, no more array elements are iterated. Therefore, the testing function should usually have no side effects.

> `.forEach()` returns nothing - It iterates the Array performing a given action for each item in the Array.


### Return Largest Numbers in Arrays
[largest-number-subarray.js](../largest-number-subarray.js)

to find the max in an array please use the spread operator because you need an iterable
```js
min = Math.min(...arr)
```

apparently the max operator takes a bunch of values expanded, and only the ... operator can do that.

```js
function largestOfFour(arr) {
  
  return arr.map(element => {
    return Math.max(...element)
  })
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
```
this is how you do it longer tho lmao
the spread operator becomes a list of arguments themselves, only to be used in place of arguments or to copy arrays. no other way.


### truncate a string
apparently the behavior of 
```js
Syntax: string.slice(start, stop);
Syntax: string.substring(start, stop);
```
is basically the same.

but this is apparently poor design from the javascript team.

they do have differences however

#### String.slice() vs String.substring()
**common**: 
- If `start` equals `stop`: returns an empty string
- If `stop` is omitted: extracts characters to the end of the string
- If either argument is greater than the string's length, the string's length will be used instead.

**uncommon of substring()**:
- If start > stop, then substring will swap those 2 arguments.
- If either argument is negative or is NaN, it is treated as if it were 0.

**uncommon of slice()**
- If start > stop, slice() will return the empty string. ("")
- If stop is negative: sets stop to: string.length – Math.abs(stop) (original value), except bounded at 0 (thus, Math.max(0, string.length + stop)) as covered in the ECMA specification.
- weird behavior on Firefox and IE i think


there's also 
`substr()` -> start, length
`substring()` -> start, end


### finders keepers (arr, function())
interesting question and interesting behavior I really can't explain

[finders-keepers](../finders-keepers.js)
no vnm nvm that's just the tests running I suppose.


so I found a cute method to attach debuggers only when using a `--inspect flag`
the code runs far cleaner and now I don't have to open up a separate javascript terminal, the debugger attaches itself to the node process.

`node --inspect finders-keepers.js` as long as there's a breakpoint it'll catch it.

also logpoints are from chrome not vscode so I tried to look up its documentation on vscode lol.

I also never realized that there's a far more useful way to debug using `console.table()` which neatly displays objects that I need to know about.

```js
console.table({
    name: "jua",
    age: "eternal",
    sex: "prefer not to say",
    "okay": { value1: "okay", value3: "okay", value4:"okay" },
  });
```
and the output was awesome
```js
┌─────────┬────────┬────────┬────────┬─────────────────────┐
│ (index) │ value1 │ value3 │ value4 │       Values        │
├─────────┼────────┼────────┼────────┼─────────────────────┤
│  name   │        │        │        │        'jua'        │
│   age   │        │        │        │      'eternal'      │
│   sex   │        │        │        │ 'prefer not to say' │
│  okay   │ 'okay' │ 'okay' │ 'okay' │                     │
└─────────┴────────┴────────┴────────┴─────────────────────┘
```
this was a fairly complex js object but the table still managed to tell me what it was about.
not the best idea for deeper than 3 levels of json but still pretty good regardless.

this was definitely intense because I was messing around with a couple functions

first approach
```js
function findElement(arr, func) {
  let result = arr.map(func)
  let index = result.indexOf(true)
  if (index > -1) {
    return arr[index];
  }
  return undefined
}

findElement([1, 2, 3, 4], (num) => num % 2 === 0);


```
made a map array and pulled the index out of the first true result made a basic checking and outputted it, without using a single `console.log()` which can be dangerous in production environments.

way cleaner one
```js
function findElement(arr, func) {
  return arr.find(func);
}
```
bro wth

> `.find()` returns value of first element that passes test / function
> iteratively executes for each array element

anyways that was fun I think
```js
return arr[arr.map(func).indexOf(true)]
```
this is probably what I would've simplified it to.
I'm surprised it returns not -1
accessing `arr[-1]` returns undefined whether I like it or not.

### boolean primitive
if you know it is a certain datatype use `typeof`
```js
return typeof bool === "boolean"
```

### Capitalize first letter of string.
```js
function titleCase(str) {
  let result = str.split(" ")
  result = result.map(char => {
    char = char[0].toUpperCase() + char.slice(1)
    return char
  })
  result = result.join(' ')
  return result
  
}

console.log(titleCase("I'm a little tea pot"));
```

did this on the browser but I need to get better.
optimized
```js
function titleCase(str) {
  return str.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1)
  }).join(" ")
  
}

console.log(titleCase("I'm a little tea pot"));
```
apparently this was the correct one what the hell.
```js
function titleCase(str) {
  return str.split(" ").map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
  }).join(" ")
  
}

titleCase("I'm a little tea pot")
```
[title case a sentence](../title-case-sentence.js)
to lower case functions convert the entire array so that works.


### slice and splice special cake thingy
[frankenSplice.js](../frankenSplice.js)

I have to trigger **parameter hints** -> Ctrl + Shift + Space

```js
function frankenSplice(arr1, arr2, n) {
  let result = arr2.slice(0,n)
  result.push(...arr1)
  result.push(...arr2.slice(n))
  console.log(result)
  return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1)
```

huge trouble trying to determine the exact value for slice.
also splice changes the array itself.

```js
function frankenSplice2(arr1, arr2, n) {
  let localArr = arr2.slice();
  localArr.splice(n, 0, ...arr1);
  console.log(localArr)
  return localArr;
}
```
I think I understand why its called slice and splice
it apparently adds a slice marker or something right there.
slice is blank and the rest has this spread operator as well.

```js
return [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];
```
technically this is all we needed.

### javascript falsy values
> false, null, 0, "", undefined, and NaN.
anything other than these equate out to be a true.

```js
arr.filter(Boolean)
```
this is all I had to do damn.


### where do I belong
this took some while lmao
```js
function getIndexToIns(arr, num) {
  arr.sort((a,b) => a - b)
  let result = arr.map(element => element >= num)
  return result.indexOf(true) !== -1? result.indexOf(true): result.length;  
}
```

basically I didn't expect the sort function to be random and that you had to do a function had I not tried to debug the sort function that would've resulted in an L.
`sort(function())` it only sorted based on that criteria give. so that's that. and in the end if index not found i just had to do it.

solution 2
```js
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}
```
count number of entries smaller than new value num.
new value inserted after this value.

`filter()` creates a new array based on the pass criteria
so just count it up.
i basically did one of their solutions lmao.
[getIndexToIns.js](../getIndexToIns.js)

### string mutations

[string-mutation.js](../string-mutation.js)
`
```js
function mutation(arr) {
  
  return arr[1].toLowerCase().split("").every(val => arr[0].toLowerCase().split("").indexOf(val) >= 0)
}

mutation(["hello", "hey"]);
```
basically I just had to do this.
got help however, I couldn't come up with this myself.


### chunky monkey
give array group and return 2D array.

```js
function chunkArrayInGroups(arr, size) {
  let newArr = []
  while(arr.length > 0) {
    newArr.push(arr.splice(0, size))
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
```
we're able to comfortably use this because if splice takes an argument bigger than the size of the array, it just defaults to the end of the array.



# Objected Oriented Programming
we can have function now in objects

### javascript object method
```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```
this one has advantages since it uses `this` keyword

Object can have a special type of property called `method`
so this is basically a method

### Constructor Function

```js
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

### Constructor creation of Objects
```js
unction Bird() {
  this.name = "Albert";
  this.color  = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```
this is that.

you can also parametrise the above

### instanceof instance of
```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4)

myHouse instanceof House;
```

### Understanding own property
```js
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for(let property in canary){
  if(canary.hasOwnProperty(property)){
    ownProps.push(property);
  }
}
```
OUTPUT
```
["name", "numLegs"]
```

### Prototype Properties to reduce duplicated code

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 3;


// Only change code above this line
let beagle = new Dog("Snoopy");
```

beagle now will have property `beagle.numLegs` equal to some value.


### mixin?


### yo map function actually really fucking hard bro wtf

[freecodecamp // maps](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)


### reduce function
The reduce method allows for more general forms of array processing, and it's possible to show that both `filter` and `map` can be derived as special applications of reduce


### currying + partial + arity


### Intermediate Algorithmic Scripting