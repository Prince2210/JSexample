let names = "prince";

let vowels = ["a", "e", "i", "o", "u"];

function vowelsCount(str) {
  let count = 0;
  for (char of str) {
    vowels.includes(char) ? count++ : count;
  }
  return count;
}

function vowelsCountRecursive(str) {}

console.log(vowelsCount(names));
