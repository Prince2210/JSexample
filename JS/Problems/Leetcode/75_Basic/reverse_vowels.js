function reverseVowels(str) {
  let vowels = "aeiouAEIOU";
  let res = str.split("");
  let left = 0;
  let right = res.length - 1;
  while (left < right) {
    while (left < right && !vowels.includes(res[left])) {
      left++;
    }
    while (left < right && !vowels.includes(res[right])) {
      right--;
    }
    [res[left], res[right]] = [res[right], res[left]];
    left++;
    right--;
  }
  return res.join("");
}
let s = "IceCreAm";

console.log(reverseVowels(s));
