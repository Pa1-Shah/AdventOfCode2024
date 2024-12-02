function checkForSorted(arr) {
  let inc = false;
  let dec = false;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      dec = true;
      let x = Math.abs(arr[i] - arr[i + 1]);
      if (x > 3) {
        return false;
      }
    } else {
      inc = true;
      let y = Math.abs(arr[i] - arr[i + 1]);
      if (y > 3 || y == 0) {
        return false;
      }
    }
  }
  if (inc == true && dec == true) {
    return false;
  }
  return true;
}

const fs = require("fs");
let count = 0;

function fileReadfromText() {
  fs.readFile("dec2.txt", "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    const lines = data.split("\n");
    for (let line of lines) {
      let number = [];
      const lineNumbers = line.trim().split(/\s+/).map(Number);
      number.push(...lineNumbers);
      if (checkForSorted(number)) {
        count++;
      } else {
        for (let i = 0; i < number.length; i++) {
          let newNumber = [...number];
          newNumber.splice(i, 1);
          if (checkForSorted(newNumber)) {
            count++;
            break;
          }
        }
      }
    }
    console.log(count);
  });
}
fileReadfromText();
