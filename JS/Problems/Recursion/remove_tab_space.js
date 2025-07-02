function removeTabSpace(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " || str[i] == "\t") {
    } else {
      res = res + str[i];
    }
  }
  return res;
}
// console.log(removeTabSpace("hello world"));

function removeTabSpace_rec(str) {
  if (str.length === 0) {
    return "";
  }
  const firstChar = str[0];
  const restStr = str.slice(1);
  if (firstChar == " " || firstChar == "\t") {
    return removeTabSpace_rec(restStr);
  }
  return firstChar + removeTabSpace_rec(restStr);
}
