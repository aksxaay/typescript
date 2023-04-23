# async - await

```js
const tick = Date.now();
const log = (v) => {
  return console.log(`${v} \n Elapsed: ${Date.now() - tick} ms`);
};

const codeBlocker = () => {
  let i = 0;
  while (i < 1000000000) i++;

  return "billi loops done";
};

log("Synchro 1");

log(codeBlocker());

log("Synchro 2");
```

the above code runs

```
Synchro 1
 Elapsed: 0 ms
billi loops done
 Elapsed: 829 ms
Synchro 2
 Elapsed: 829 ms
```

we can see that it has blocked the main thread.

If we want to avoid this behavior, we need to get off the main thread the task to the microtask queue.

the file 3 is misleading

because the code region inside

file 4 is the fixed version offloaded successfully.

```js
tick = Date.now();

const log = (v) => console.log(`${v} Elapsed: ${Date.now() - tick}`);

const codeBlocker = () => {
  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000000) i++;
    return "billi loops done";
  });
};

log("Synchro 1");
log(codeBlocker().then((res) => log(res)));
log("Synchro 2");
```

the out put is as follows

```
Synchro 1 Elapsed: 0
[object Promise] Elapsed: 3
Synchro 2 Elapsed: 3
billi loops done Elapsed: 834
```

still finding out about `.then()` chains even now.

Promises are really hard to follow and things.
async await is syntax sugar to give your promises a synchronous feel.

```js
const a = await getFruit("pineapple");
const b = await getFruit("strawberry");
```

the above code is a failure, because it doesn't run concurrently.

Only do the above if the data is related, the first one fetches an id to be used in the second one for example.

the above is blocking
to avoid the above behavior, we can do
`Promise.all([a,b])`

which waits for both of them.

```js
const a = getFruit("pineapple");
const b = getFruit("strawberry");
return Promise.all([a, b]);
```


we can also use this in a `try catch` block ez.