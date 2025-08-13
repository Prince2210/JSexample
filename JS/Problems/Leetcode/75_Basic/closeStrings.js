var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) return false;
  let map1 = new Map();
  let map2 = new Map();
  for (const element of word1) {
    map1.set(element, (map1.get(element) || 0) + 1);
  }
  for (const element of word2) {
    map2.set(element, (map2.get(element) || 0) + 1);
  }

  let key1 = new Set(map1.keys());
  let key2 = new Set(map2.keys());
  for (const key of key1) {
    if (!key2.has(key)) return false;
  }

  for (const key of key2) {
    if (!key1.has(key)) return false;
  }

  const freq1 = Array.from(map1.values()).sort((a, b) => a - b);
  const freq2 = Array.from(map2.values()).sort((a, b) => a - b);

  for (let i = 0; i < freq1.length; i++) {
    if (freq1[i] !== freq2[i]) return false;
  }
  return true;
};

let word1 = "aaabbbbccddeeeeefffff";
let word2 = "aaaaabbcccdddeeeeffff";

console.log(closeStrings(word1, word2));
