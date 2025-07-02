//madam
function palindrome(str) {
  for (let index = 0; index < str.length; index++) {
    if (str[index] !== str[str.length - 1 - index]) {
      return false;
    }
  }
  return true;
}

function palindrome_rec(str) {
  if (str.length <= 1) {
    return true;
  }
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return palindrome_rec(str.slice(1, -1));
}

// console.log(palindrome_rec("redder"));
