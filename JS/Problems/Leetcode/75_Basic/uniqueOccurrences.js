var uniqueOccurrences = function (arr) {
  let map = new Map();

  for (const element of arr) {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }
  const valueArray = Array.from(map.values());
  const setValues = new Set(valueArray);
  if (valueArray.length === [...setValues].length) {
    return true;
  }
  return false;
};

let arr = [1, 2, 2, 1, 1, 3];
console.log(uniqueOccurrences(arr));
