let names = "prince";

let vowels = ["a", "e", "i", "o", "u"];

function vowelsCount(str) {
  let count = 0;
  for (char of str) {
    vowels.includes(char) ? count++ : count;
  }
  return count;
}

function vowelsCountRecursive(str) {
  if (str == "") {
    return 0;
  }
  let isVowel = vowels.includes(str[0]) ? 1 : 0;
  return isVowel + vowelsCountRecursive(str.slice(1));
}

console.log(vowelsCountRecursive("recursion"));
