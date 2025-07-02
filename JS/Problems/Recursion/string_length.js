function string_length(str) {
  let length = 0;
  while (true) {
    if (str[length]) {
      length++;
    } else {
      return length;
    }
  }
}
function string_length_rec(str) {
  if (str === "") {
    return 0;
  }
  return 1 + string_length_rec(str.slice(1));
}
// console.log(string_length_rec("prince"));
