tick = Date.now();

const log = (v) => console.log(`${v} Elapsed: ${Date.now() - tick}`);

const codeBlocker = () => {
  return new Promise((resolve, reject) => {
    // synchronous
    let i = 0;
    while (i < 1000000000) i++;
    return "billi loops done";
    // synchronous

    // only the resolving is async
    resolve("resolved");
  });
};

log("Synchro 1");
log(codeBlocker());
log("Synchro 2");
