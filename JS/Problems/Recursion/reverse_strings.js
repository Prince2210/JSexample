let names = "hello world";

function reverseString(str) {
  let reverseStr = "";
  for (char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr;
}
reverseString(names);

function reverseStringRecursive(str) {
  if (str.length == 1) {
    return str;
  }
  return reverseStringRecursive(str.slice(1)) + str[0];
}
reverseStringRecursive(names);
