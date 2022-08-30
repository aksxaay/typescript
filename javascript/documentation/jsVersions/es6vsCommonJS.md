## ES6 vs Common JS
[monsterlessons academy // youtube](https://www.youtube.com/watch?v=mK54Cn4ceac)

- every file we are writing is a module.


### commonJS syntax
```js
const getFullName = (name, surname) =>{
  return name + ' ' +surname
}

module.exports = getFullName;
```

- NodeJS modular system i CommonJS (popular)
- CommonJS doesn't exist in browser, if seen there is something that emulates its usage.

if module.exports is not written the it is completely isolated.

now we can have other ways
Method 2

bar.js
```js
exports.getFullName = (name, surname) => {
  return name + " " + surname;
};

exports.getSurname = (name, surname) => {
  return surname;
};

```

this also works. Just give them to 

another cool thing is that you can run the require functinos inside of if conditionals

bar.js
```js
if(1==1){
  const foo = require("./foo)
  console.log(
  "getFullName",
  foo.getFullName("monster", "lessons"),
  foo.getSurname("foo", "bar")
);
}
```

### de-structuring
bar.js
```js
const {getFullName, getSurname} = require("./foo");

console.log(
  "getFullName",
  getSurname("foo", "bar")
  getFullName("monster", "lessons"),
);
```

### ES6 Modules
ECMAScript 6 Modules.

always used inside browsers and not that often inside node js

we also can export and things
instead of module.exports,
we export default.

like how i use it in react / nextJS


after doing bare minimum changes in es6foo.js and es6bar.js it is evident that I can't use node because it doesn't support. however if I can set module type and load an ES Module it is easier I think.

> Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

changed `es6bar.js` -> `es6bar.mjs` lets ES6 Modules run in Node JS


just one of them is enough then.

when both of them converted to es6 synatx then it works, one can't be named wrong, and vice versa.

you have to maintain one code structure

### export several things from the module
es6bar.js
```js
destructure vs non destructure
```

es6 cannot use import functions inside if conditions and things, can't nest them either.

require is simply just a function, simple called in runtime.

es6 however is static and we can check it in check time, and there's also static analyzing tools. that only works for es6

- all our imports are being hoisted
- javascript pareses them and moves all the imports to the top.
- always be in the beginning
- require however will be executed wherever we wrote it.
- imports are truly static
- forbidden risk inputs and things.

- why we still have commonJS, super difficult to get rid of commonJS because we have a huge codebase and it is difficult to get started using as a core module.
- imports and exports from es6 are all static.

### block scope & shadowing

what is a block?
`let` & `const` are **block scoped**
that they are separate things

block, scope and shadowing

> block -> { } perfectly valid javascript code
> block also called compound statement
> combines multiple statements into a group 

why do we needs this? so that we can use **multiple statements** in a place where javascript only expects a **single statement**

for example an `if` condition

```js
var a;
let b;
const c;
```
these are block scoped, while var is fucking global scoped
i knew this.

