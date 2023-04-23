const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

promise
  .then((res) => {
    throw new Error("Error Thrown");
    return res.json();
  })
  .then((user) => console.log("user", user.title))
  .catch((err) => console.error(err));

console.log("synchronous");
