const checkForCorrectMulPart2 = require("./3-decPart2");
function checkForCorrectMul(s) {
  const regex = /mul\((-?\d+(\.\d+)?),(-?\d+(\.\d+)?)\)/g;
  let i = 0;
  let sum = 0;
  const matches = s.matchAll(regex);
  for (let match of matches) {
    const firstNum = parseFloat(match[1]);
    const secNum = parseFloat(match[3]);
    const product = firstNum * secNum;
    sum += product;
  }
  return sum;
}

const fs = require("fs");

function fileReadfromText() {
  fs.readFile("dec3.txt", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    let fileContent = data;
    console.log(checkForCorrectMul(fileContent));
    console.log(checkForCorrectMulPart2(fileContent));
  });
}
fileReadfromText();
