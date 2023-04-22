
// task queue
setTimeout(() => {
  console.log("setTimeout");
}, 0);

// microtask queue
let promise = Promise.resolve().then((v) => {
  console.log("promise resolved then");
});

// synchronous queue
console.log("let there be Javascript");

/*
Priority for each round of Event Loop
1. sync code
2. Promise / microtask callback
3. async task callbacks
*/