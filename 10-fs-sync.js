const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const path = require("path");

const first = readFileSync(
  path.join(__dirname, "content", "first.txt"),
  "utf8"
);

const second = readFileSync(
  path.join(__dirname, "content", "second.txt"),
  "utf8"
);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done");
