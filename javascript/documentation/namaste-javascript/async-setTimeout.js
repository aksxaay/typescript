const x = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("x");
      resolve();
    }, 1000);
  });
};

const y = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("y");
      resolve();
    }, 1000);
  });
};

(async function run() {
  await x();
  await y();
})();
