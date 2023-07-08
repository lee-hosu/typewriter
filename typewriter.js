const sentence = "hello there from lighthouse labs";
let delay = 0;

const animated = function () {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 50;
  }
  setTimeout(() => {
    console.log("\n");
  }, delay);
};

animated();
animated();
