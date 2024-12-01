function findFrequency(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      count++;
    }
  }
  return count;
}
const fs = require("fs");

fs.readFile("dec1.txt", "utf-8", (err, inputData) => {
  if (err) {
    throw err;
  }
  const numbers = inputData.match(/\d+(\.\d+)?/g);
  let arr1 = [];
  let arr2 = [];
  if (numbers) {
    //console.log(numbers);
    for (let i = 0; i < numbers.length; i++) {
      if (i % 2 == 0) {
        arr1.push(numbers[i]);
      } else {
        arr2.push(numbers[i]);
      }
    }
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let exists = arr.includes(num);

    let sum = 0;
    let sumOfFreq = 0;
    for (let i = 0; i < arr1.length; i++) {
      sum += Math.abs(arr1[i] - arr2[i]);
      //console.log(sum);
      let x = findFrequency(arr2, arr1[i]);
      console.log(arr1[i], x);
      if (x > 0) {
        sumOfFreq += arr1[i] * x;
      }
    }
    console.log(sumOfFreq);
  } else {
    console.log("No Numbers");
  }
});
