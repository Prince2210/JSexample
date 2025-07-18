var decodeString = function (s) {
  let stack = [];
  let currentNum = 0;
  let currentStr = "";
  for (const char of s) {
    if (!isNaN(char)) {
      currentNum = currentNum * 10 + Number(char);
    } else if (char == "[") {
      stack.push([currentStr, currentNum]);
      currentStr = "";
      currentNum = 0;
    } else if (char == "]") {
      let [prevStr, num] = stack.pop();
      currentStr = prevStr + currentStr.repeat(num);
    } else {
      currentStr += char;
    }
  }
  return currentStr;
};

let s = "3[a2[c]]";

console.log(decodeString(s));
