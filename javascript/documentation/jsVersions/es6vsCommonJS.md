## ES6 vs Common JS


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
