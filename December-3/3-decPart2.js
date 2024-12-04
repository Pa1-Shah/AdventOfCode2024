function checkForCorrectMulPart2(s) {
  const mulRegex = /mul\((-?\d+(\.\+d)?),(-?\d+(\.\d+)?)\)/g;
  const doDontRegex = /do\(\)|don't\(\)/g;
  let enabled = true;
  let sum = 0;

  const tokens = [...s.matchAll(doDontRegex), ...s.matchAll(mulRegex)].sort(
    (a, b) => a.index - b.index
  );
  for (token of tokens) {
    if (token[0] == "do()") {
      enabled = true;
    } else if (token[0] == "don't()") {
      enabled = false;
    } else if (token[0].startsWith("mul(") && enabled) {
      const firstNum = parseFloat(token[1]);
      const secNum = parseFloat(token[3]);
      let product = firstNum * secNum;
      sum += product;
    }
  }
  return sum;
}
module.exports = checkForCorrectMulPart2;
