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
