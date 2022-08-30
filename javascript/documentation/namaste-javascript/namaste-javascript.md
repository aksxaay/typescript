- [namaste javascript](#namaste-javascript)
    - [Overview](#overview)
    - [1. Execution Context](#1-execution-context)
    - [2. Call Stack](#2-call-stack)
    - [Hoisting](#hoisting)
    - [Functions](#functions)
    - [window and this keyword](#window-and-this-keyword)
      - [Global Object - window](#global-object---window)
    - [undefined](#undefined)
    - [scope-chain (interview) scope, Lexical Environment](#scope-chain-interview-scope-lexical-environment)
    - [let + const behaviour hoisting and functions](#let--const-behaviour-hoisting-and-functions)
    - [scope of let / const](#scope-of-let--const)
      - [shadowing](#shadowing)
    - [closures](#closures)
      - [corner cases](#corner-cases)
      - [uses of closures](#uses-of-closures)

# namaste javascript
[video source // youtube](https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=2)

### Overview
- synchronous / asynchronous
- single / multi threaded


### 1. Execution Context
box / container where all the code is executed
big box 2 components

Memory component => variable environment
Code component => one line at a time

- Thread of Execution / Code
- whole code executed
- synchronous + single threaded language.

sync => one command at a time
single thread => in specific order

AJAX - asynchronous
Execution context is what makes javascript beautiful

---

### 2. Call Stack
Javascript Engine
run
- execution context is created
- global execution context is created
- Memory | Code
- CRE -> creation phase / memory creation phase
- allocates all memory to `n: undefined` every function is also auto allocated
- skims through the whole program and allocates all variables and functions
- undefined deserves a separate video altogether
- whole function code is copied over
- function invocation

when function is run **brand new execution context** created, basically like nested objects and things.


Phase2 -> Code Execution Phase
return goes back to the original execution context
- program over = execution context is deleted

the entire thing is knows as the call stack
bottom of stack is where global execution context
whenever a function.
they all keep getting popped in the stack
GEC -> global execution context

> "Call stack maintains the order of execution of execution contexts"
- Call Stack
- ECS - Execution Context STack
- Program Stack
- Control Stack
- Runtime Stack
- Machine Stack

---

### Hoisting

`undefined` vs not defined
`var` all happens because of hoisting.

reason for [hoisting example javascript](./hoisting.js)
is very simple

memory is allocated to each and every variable, before the code even starts

bro put debugger even before the line executes
very 
weird ass behavior

apparently there's also a shortest javascript program is an empty file lmao.

### Functions 
[functions javascript file](../functions.js)

function invocation

i'm going to test out the debugger as much as I can. we'll see, it is not similar to the browser whatsoever
using the debugger was a beautiful experience I can't recommend enough, helped me totally understand the difference in
Global Execution Context + Call Stack which gets pushed and de-initialized.


### window and this keyword
javascript engine does a lot of things even in the empty file.

although theres nothing to setup
it still sets up GCE
there a `window` object auto object. this is a huge object with functions and methods, created by javascript engines
`this` keyword also works, and at global it points with the `window` object
created along with the GCE, Globabl Object, this variable is created

#### Global Object - window
- chrome - js V8 engine
- mozilla separate
- safar separate

```js
this === window // true
```
only in global execution context

Samir had told me about the webapi and things, and that it is not *quite* natively javascript and that, `setTimeout`, `setImmediate`, things like that also exist, you can find them out on empty javascript file. 

> global space is anything that is written outside a function
ahh

you can do `window.a` on browser not sure on node js
since `window` doesn't exist on node.js we have to use
```js
console.log(global.<variable>)
```
```js
this === global
```
this doesn't work on NodeJS


### undefined

even tho a variable hasn't been executed it already allocates memory to a

on nodeJS it probably doesn't work this way, but for some reason in browser `a` is already given allocation

upon checking the debug console, a is simply not define even with var.
nvm  i'm just dumb as fuck

```js
// breakpoint
var a = 10;
let b = 10;
```

bot a and b are `undefined`

**not defined** vs **undefined**
not defined is not memory allocated
undefined is memory allocated but not initialized to a value.

`undefined` is a variable placeholder

javascript is a loosely typed language
does not attach its variable to any specific data type
very flexible
- strict typed


never do 
```js
a = undefined
```
not permitted
usually only meant for undefined, show that variable was even assigned anything.


### scope-chain (interview) scope, Lexical Environment
- lexical environment
- understanding closures as well.

[scope-chain.js](./scope-chain.js)

```js
function a() {
    console.log(b)
}

var b = 10;
a();
```
this is where scope is checked.
it prints 10

holy shit I guess this is related to closure
while I was trying to watch the variable to listen to state changes,
a basically become an entire function and just when b ran, it also auto updated

so function can access var inside other functions but  can't do the same outside

- is b inside scope of function c
- can I access b inside the function c
both are the same.

LE - lexical environment created along with GEC
> **Lexical Environment** => local memory + LE of its parent
lecxical -> hierarchy / in sequence
`c()` is lexically inside `a()`


> whenever EC -> you get reference to LE of its lexical parent + Memory and Code
lexical parent of a() is c()
this orange diagram or something lmao

GCE's LE -> null

this whole process of looking for parent of parent of parent LE is known as scope-chain

Scope-chain -> Chain of LE and Parent references
if JS does not reference in local memory goes up one level of LE

apparently the call stack gives the scope chaining all away

c has access to all the variables and function, -> that this is about closure

C has enclosed a. this is what closure is. 


### let + const behaviour hoisting and functions
introduced in ES6 behaves very differently in scope and things like that.
`let` + `const` came way after so you have to understand

- temporal deadzone?
- let + const hoisted?
- syntax, referece, type Errors

let & const **are** hoisted, just in a different way.
they are in the **temporal deadzone** for the time being.

hoisting is just that the memory is allocated even before the actual assignment has begun

a cannot be run because it gives us error

we're going to view the DevTools
`a` is allocated memory
`b` is also allocated

they are however stored in a separate memory space, but cannot be accessed until we set a value

> **temporal deadzone** time since let/const is hoisted and till it is initialized

until it goes to the line which actually gives it value, we say it is in a temporal deadzone

if trying to access in this meanwhile, it'll give you a `Reference Error`

trying to access variable in temporal deadzone you get `ReferenceError` there is a difference in the error.

let variables also cannot be accessed in the window variable.

`this.a` also doesn't work.

re-declaration of `let` the js engine will not tolerate
wont even do syntax error can't be fucked around with.

you can declare var multiple times.

you cannot do 

```js
let a;
const b; // syntaxError
a = 10;
```
> missing initializer in const declaration

TypeError when you try to re-initialize/assignment a `const` variable

we try to shrink the temporal deadzone window to zero
very important in the interview they always fucking ask this.


### scope of let / const
very important that's why they have a separate video 

outside the block the let get deallocated meanwhile the var remains or something


#### shadowing
same named variable outside the block

shadowing is specific
also modifies the value, while getting shadowed
both are pointing to same memory location

```js
var a = 100;
{
console.log(a)

  var a = 10;
}
console.log(a)
```

both are referring to the global space

there's 3 types of scopes
- Block
- Script 
- Global

Illegal shadowing?
you can shadow let using let


### closures
finally reached here bruh
this lexical parent searching is literally just closure

> Closure: function bundled with its **lexical env** is known as closure whenever is returned, even if its vanished in execution context but still it remembers the reference it was pointing to. Its not just that function alone it returns but the entire closure 

there is a closure scope?
> function along with its lexical scope forms a closure

```js
function x(){
  a=7;
  function y(){
    console.log(a);
  }
  y();
}
x();
```

there's a difference in using var and not using anything.
idk why bruh the closure thing also doesn't appear in that case.

yeah this is weird behavior I just have to get used to.



wait you can return a function?

[closure-function-return.js](./closure-function-return.js)
and it returns `function y`


there a 'catch' with closure however, there comes a lot of output questions and things with closure, so that's that.s
it does happen
- corner cases

#### corner cases
oh these memories would not have been garbage collected?

bro I don't even get my own closure code bruh

[advanced closure?](./closure.js)

#### uses of closures
- module design patterns
- currying - only closures
- functions like once, can only run once, like state
- memoization
- state in `async` world async programming
- setTimeouts
- Iterators

basically closures are everywhere


Very famous setTimeout + closures implementation question that people can't answer