async function x() {
  for (let i = 0; i <= 3; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, i * 1000);
    });
  }
}

async function y() {
  for (let i = 0; i <= 3; i++) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(i);
        resolve();
      }, i * 1000);
    });
  }
}

(async function run() {
  await x();
  await y();
})();

// even this has limitations
/*
right after the 1st loop's last setTimeout() the next setTimeout is immediately called which means, it prints right away which is fucking interesting.
*/
