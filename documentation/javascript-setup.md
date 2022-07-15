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