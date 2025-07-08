function reverseWords(s) {
  let words = s.split(" ").filter((word) => word !== "");
  let i = 0;
  let j = words.length - 1;
  while (i < j) {
    [words[i], words[j]] = [words[j], words[i]];
    i++;
    j--;
  }
  return words.join(" ");
}
let s = "a good   example";

// console.log(reverseWords(s));
function reverseWords2(s) {
  let str = s.split(" ");
  let output = "";
  for (let i = str.length - 1; i >= 0; i--)
    if (str[i]) output += (output ? " " : "") + str[i];
  return output;
}

console.log(reverseWords2(s));
