// var removeStars = function (s) {
//   let strArr = s.split("");
//   for (let index = 0; index < strArr.length; index++) {
//     if (strArr[index] === "*") {
//       strArr.splice(index - 1, 2);
//       index = index - 2;
//     }
//   }
//   return strArr.join("");
// };
let s = "leet**cod*e";
console.log(removeStars(s));
function removeStars(s) {
  const stack = [];

  for (let char of s) {
    if (char === "*") {
      if (stack.length) stack.pop(); // remove previous character
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
