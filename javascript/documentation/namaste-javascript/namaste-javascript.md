- [namaste javascript](#namaste-javascript)
    - [Overview](#overview)
    - [History](#history)
    - [1. Execution Context](#1-execution-context)
    - [2. Call Stack](#2-call-stack)
    - [Hoisting](#hoisting)
    - [Functions](#functions)
    - [window and this keyword](#window-and-this-keyword)
      - [Global Object - window](#global-object---window)
    - [undefined](#undefined)
    - [scope-chain (interview) scope, Lexical Environment and closures](#scope-chain-interview-scope-lexical-environment-and-closures)
    - [let + const behaviour hoisting and functions](#let--const-behaviour-hoisting-and-functions)
    - [scope of let / const](#scope-of-let--const)
      - [shadowing](#shadowing)
    - [closures](#closures)
      - [corner cases](#corner-cases)
      - [uses of closures](#uses-of-closures)
    - [disadvantages of closures](#disadvantages-of-closures)
    - [relation garbage collection, memory leaks and closures](#relation-garbage-collection-memory-leaks-and-closures)
    - [First Class Functions w/ anonymous](#first-class-functions-w-anonymous)
    - [callback functions](#callback-functions)
    - [Event Loop (archibald)](#event-loop-archibald)
    - [Javascript Engine](#javascript-engine)
    - [Higher Order Functions](#higher-order-functions)

# namaste javascript

[video source // youtube](https://www.youtube.com/watch?v=ZvbzSrg0afE&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=2)

### Overview

- synchronous / asynchronous
- single / multi threaded

js is interpreted language, can be run line by line
javascript is
(ECMA defined)

- High-Level
- Dynamic Weak Typed
- Multi-Paradigm
  - Imperative - OO - procedural
  - Declarative - Functional - logical
- Prototype-based
  (Browser Defined)
- single-threaded
- garbage-collected
- non-blocking
- JIT - Just In Time Compiled
- event loop

### History

Javascript - Mocha - First Class Functions, Dynamic Type, and things.
ECMAScript came because Microsoft was leading their own Javascript as well.
ES3 - came about

2008 - V8 engine
NodeJS - serverside js runtime - Event Loop - let you write Event Driven non-blocking code

js everywhere paradigm.
ES6 (ES2015)

- spread syntax
- arrow functions
- `let` and `const`
- destructuring

### 1. Execution Context

Execution context created when you run javascript program
box / container where all the code is executed
big box 2 components

- memory component (variable and function environment)
- code component (thread of execution)

Memory component => variable environment
Code component => one line at a time

- Thread of Execution / Code
- whole code executed
- synchronous + single threaded language.

javascript is
synchronous => one command at a time
single thread => in specific order

AJAX - Asynchronous Javascript and XML.
Jquery - js library (interacts directly with the DOM)
React - interacts the "virtual DOM"
Execution context is what makes javascript beautiful.

jQuery - interactive without the need for low-level DOM manipulation. Had extensions and plugins as well.

Ajax - creating dynamic and responsive we applications. Technique used to send and receive data from a server without having to refresh the entire web page. Basically partial updates.

Basically three things that had to be taken care of

- DOM Manipulation
- Data fetching
- Event handling

The things from react that helped "replace" sorta was,

- create reusable and modular components that handle their own rendering and state management.
- you didn't have to manually manipulate the DOM as much, and let React take care of it.
- `fetch()` and `axios` makes async calls to server and API.
- JQuery made it easier to handle clicks, keypresses and form submissions. React has its own event handling system.

---

### 2. Call Stack

It is the mechanism present in V8 browser engine / Node js runtime, which manages Execution Contexts

Javascript Engine
run

- execution context is created
- global execution context is created
- Memory Allocation Phase | Code Execution Phase
- CRE -> creation phase / memory creation phase
- allocates all memory to `n: undefined` every function is also auto allocated
- skims through the whole program and allocates all variables and functions
- undefined deserves a separate video altogether
- whole function code is stored at the execution context
- function invocation
- function invocation creates a new [execution context](./execution-context.js)

when function is run **brand new execution context** created, basically like nested objects and things.

Phase2 -> Code Execution Phase
return goes back to the original execution context
pops the context from the callstack

- program over = execution context is deleted

the entire thing is knows as the call stack
bottom of stack is where global execution context
whenever a function.
they all keep getting popped in the stack
GEC -> global execution context

> "Call stack maintains the order of execution of execution contexts"

Alternate Names of Call Stack

- ECS - Execution Context STack
- Program Stack
- Control Stack
- Runtime Stack
- Machine Stack

Call Stack is a stack of (GEC) Global Execution Contexts.

---

### Hoisting

Hoisting - mechanism in Javascript where the all variable declarations are moved to the top of the scope before execution. Therefore it is possible to call a function before initializing it.

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
created along with the GCE, Global Object, this variable is created

window.a = this.a = a

#### Global Object - window

- chrome - js V8 engine
- mozilla separate
- safar separate

```js
this === window; // true
```

only in global execution context

Samir had told me about the webapi and things, and that it is not _quite_ natively javascript and that, `setTimeout`, `setImmediate`, things like that also exist, you can find them out on empty javascript file.

> global space is anything that is written outside a function
> ahh

you can do `window.a` on browser not sure on node js
since `window` doesn't exist on node.js we have to use

```js
console.log(global.<variable>)
```

```js
this === global;
```

this doesn't work on NodeJS

### undefined

even tho a variable hasn't been executed it already allocates memory to a

on nodeJS it probably doesn't work this way, but for some reason in browser `a` is already given allocation

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

- weakly typed language

does not attach its variable to any specific data type
very flexible

- strict typed

never do, because `undefined` is just meant for the interpreter and compiler

```js
a = undefined;
```

not permitted
usually only meant for undefined, show that variable was even assigned anything.

### scope-chain (interview) scope, Lexical Environment and closures

- lexical environment
- understanding closures as well.

[scope-chain.js](./scope-chain.js)

```js
function a() {
  console.log(b);
}

var b = 10;
a();
```

this is where scope is checked.
it prints 10

holy shit I guess this is related to closure
while I was trying to watch the variable to listen to state changes,
a basically become an entire function and just when b ran, it also auto updated

so function can access var inside other functions but can't do the same outside

- is b inside scope of function c
- can I access b inside the function c
  both are the same.

LE - lexical environment created along with GEC

> **Lexical Environment** => local memory + LE of its parent
> lecxical -> hierarchy / in sequence
> `c()` is lexically inside `a()`

> whenever EC -> you get reference to LE of its lexical parent + Memory and Code
> lexical parent of a() is c()
> this orange thing - lexical env of parent

There's apparently this `[[Scopes]]` in the debugger that reveals other variables.

GCE's LE -> null

> this whole process of looking for parent of parent of parent LE is known as scope-chain

**Scope-chain** -> Chain of LE and Parent references
if JS does not reference in local memory goes up one level of LE
this is due to scope-chain, it just traverses it

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

Script (in chrome debugger, node doesn't have this Script separation)
`a: undefined`

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
var is accessible through `this` and `global`

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

[check](./block-scope.js)
`let` and `const` are block scoped
`{}` definition is called block / compound statement
used to combine multiple javascript statements

shadowing

- illegal shadowing
-

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
  console.log(a);

  var a = 10;
}
console.log(a);
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

I put a debugger inside and all of a sudden there's closure?
before we were only dealing with `block` now we have functions

also when you return these functions is when closures become more complex, now they need to have their lexical env right?

```js
function x() {
  a = 7;
  function y() {
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

### disadvantages of closures

- overconsumption of memory
- closed over variables aren't garbage collected till the program expires.
- memory leaks, will overgrow the stack segment and into other parts of the memory.

### relation garbage collection, memory leaks and closures

Very famous setTimeout + closures implementation question that people can't answer
Chrome automatically collects garbage in closures if that variable hadn't been used inside it.

### First Class Functions w/ anonymous

First Class Function - function that you return.
difference between

- statement
- expression
- declaration

Things learned:

1.  What is Function Statement ?
    A. A normal function that we create using Naming convention. & By this we can do the Hoisting.
    For Ex -

```js
function xyz() {
  console.log("Function Statement");
}
```

2.  What is Function Expression ?
    A. When we assign a function into a variable that is Function Expression. & We can not do Hoisting by this becz it acts like variable.
    For Ex -

```js
var a = function () {
  console.log("Function Expression");
};
```

3.  What is Anonymous Function ?
    A. A Function without the name is known as Anonymous Function. & It is used in a place where function are treated as value.

4.  What is Named Function Expression ?
    A. A function with a name is known as Named Function Expression.

```js
var a = function xyx() {
  console.log("Names Function Expression");
};
```

5.  Difference b/w Parameters and Arguments ?
    A. When we creating a function & put some variabels in this ( ) that is our Parameters.
    For Ex - function ab( param1, param2 ){
    console.log("
    }
    & When we call this function & pass a variabel in this ( ) that is our Arguments
    For Ex - ab( 4, 5 );

6.  What is First Class Function Or First class citizens?
    A. The Ability of use function as value,

-     Can be passed as an Argument,
-     Can be executed inside a closured function &
-     Can be taken as return form.
       For Ex - 

```js
var b = function(param){
  return function xyz(){
    console.log(" F C F ");
  }
}
```

7. Function are heart of JS. They are called first class citizens or first class functions because they have the ability to be stored in the variables, passed as parameters and arguments. They can also be returned in the function.


### callback functions

call stack = main thread
anything consuming in the call stack is **blocking the main thread**

Event Listeners

basically, when the event concerning it is triggered (Event Listeners)
or setTimeout, it pushes the cb function back onto the callstack

so after the 5000 ms timeout, `setTimeout` pushes the `cb` fn into the main thread so it can run.


Garbage Collection and Remove Event Listeners
Event Listeners are heavy.
We have to remove certain Event Listeners on certain events.


### Event Loop (archibald)

The Event Loop - Call Stack - Main Thread
- rendering

sneezing is single-threaded lmao, no control over this.
in parallel - get off the main thread.
queue a task to get on to the main thread.

1. Run the following steps in parallel:
   1. Wait `ms` milliseconds
   2. Queue a task to run the following steps
      1. Invoke `callback`

Task Queues

Visualize the **Event Loop**

Event Loop
- Microtask (before the next start)
- Macrotask (after the next start)
- Event Loop second round.

callback queue - macro task queue - Task Queue

task queue waits until the call stack clears

Concurrency & the Event Loop
WebAPIs - is where concurrency kicks in
- DOM API (document)
- ajax (XMLHttpRequest)
- setTimeout
- console
- fetch()

except for the backend instead of WebAPI's we have C++ Apis

> setTimeout isn't guaranteed time to execution, it is minimum time to execution

starvation of callback queue, microtask queue is always filled and event loop keeps sending it to callstack


### Javascript Engine

- parsing
  - AST
- compilation
- execution


interpreter - compiler
interpreter or compiler - or JIT

JIT Compilation - best of both worlds
it behaves both like interpreter and compiler language

Garbage Collector - Mark and Sweep Algorithm
- inlining
- copy elision
- copy caching

V8 - interpreter called Ignition (Interpreter) and Turbofan (optimizing compiler)

Ignition + Turbofan -> JIT Compilation

GC - Orinoco, Oil Pan


### Higher Order Functions

A function that can take other functions as argument, and return other functions is called HOF

Beauty of Functional Programming

the interviewer expects DRY principle to be used
DO NOT REPEAT YOURSELF - DRY

Add Functions in the end:
Pure
Composition
Reusability
Modularity

Array.prototype.calculate = function() {}

this is how you enable calculate function to all the arrays in js


HigherOrder Functions
- Map - [].map(cb)
- Filter - [].filter(cb)
- Reduce