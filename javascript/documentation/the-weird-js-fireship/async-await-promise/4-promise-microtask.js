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
