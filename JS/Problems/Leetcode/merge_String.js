// function mergeAlternativeString(word1, word2) {
//   let res = "";
//   if (word1.length >= word2.length) {
//     for (let index = 0; index < word1.length; index++) {
//       if (word1[index] && word2[index]) {
//         res = res + word1[index] + word2[index];
//       } else {
//         res = res + word1[index];
//       }
//     }
//   } else {
//     for (let index = 0; index < word2.length; index++) {
//       if (word1[index] && word2[index]) {
//         res = res + word1[index] + word2[index];
//       } else {
//         res = res + word2[index];
//       }
//     }
//   }
//   return res;
// }

function mergeAlternativeString(word1, word2) {
  let res = "";
  let length = Math.max(word1.length, word2.length);
  for (let i = 0; i < length; i++) {
    if (word1[i]) res += word1[i];
    if (word2[i]) res += word2[i];
  }
  return res;
}

console.log(mergeAlternativeString("abc", "pqr"));
