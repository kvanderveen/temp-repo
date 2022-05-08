const { readFile, writeFile } = require("fs");
const fs = require("fs").promises;

console.log("start");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) return;
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) return;
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) return;
        console.log("done with this task");
      }
    );
  });
});

const myRead = async () => {
  const first = await fs.readFile("./content/first.txt", "utf8");
  const second = await fs.readFile("./content/second.txt", "utf8");
  await fs.writeFile(
    "./content/result-async-2.txt",
    `Here is the result : ${first}, ${second}`
  );
  console.log("done with myRead");
};

myRead();

console.log("done with everything");
