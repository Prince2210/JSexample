// WORK FINE BUT SPACE IS NOT CONSTANT
// var compress = function (chars) {
//   if (chars.length === 1) return 1;
//   let res = [];

//   for (let i = 0; i < chars.length; i++) {
//     let index = res.indexOf(chars[i]);
//     if (index == -1) {
//       res.push(chars[i]);
//     } else {
//       let val = res[index + 1] ? res[index + 1] : 1;
//       res[index + 1] = val + 1;
//     }
//   }
//   return res.join("").split("").length;
// };

var compress = function (chars) {
  let index = 0;
  let i = 0;
  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[j] == chars[i]) {
      j++;
    }
    let count = j - i;
    chars[index++] = chars[i];
    if (count > 1) {
      for (const str of count.toString()) {
        chars[index++] = str;
      }
    }
    i = j;
  }
  return index;
};

let chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars));
