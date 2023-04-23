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

const fruits = ["peach", "pineapple", "strawberry"];
// don't use map

const fruitLoop = async () => {
  for (const f of fruits) {
    const emoji = await getFruit(f);
    log(emoji);
  }
};

fruitLoop();
