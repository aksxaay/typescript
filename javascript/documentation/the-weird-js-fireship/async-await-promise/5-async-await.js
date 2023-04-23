tick = Date.now();

const log = (v) => console.log(v, `Elapsed: ${Date.now() - tick}`);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const getFruit = async (name) => {
  const fruits = {
    pineapple: "PINEAPPLE",
    peach: "PEACH",
    strawberry: "STRAWBERRY",
  };

  await delay(1000);

  return fruits[name];
};

// pass in the callback fn
getFruit("peach").then(console.log);

const makeSmoothie = async () => {
  const a = getFruit("pineapple");
  console.log("between 2 awaits");
  const b = getFruit("strawberry");
  const smoothieArray = await Promise.all([a, b]);
  return smoothieArray;
};

makeSmoothie().then((res) => {
  log(res);
});
