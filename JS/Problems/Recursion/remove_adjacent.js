// input aabcc --> return abc
function removeAdjacent(str) {
  let res = "";
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== str[index + 1]) {
      res = res + str[index];
    }
  }
  return res;
}
function removeAdjacentV1(str) {
  let res = [];
  for (let index = 0; index < str.length; index++) {
    if (str[index] === res[res.length - 1]) {
      res.pop();
    } else {
      res.push(str[index]);
    }
  }
  return res.join("");
}

function removeAdjacent_rec(str) {
  if (str.length == 0) {
    return "";
  }
  let firstChar = str[0];
  let remStr = str.slice(1);
  if (firstChar == remStr[0]) {
    return removeAdjacent_rec(remStr);
  }
  return firstChar + removeAdjacent_rec(remStr);
}
// console.log(removeAdjacent_rec("aaabbcddde"));
