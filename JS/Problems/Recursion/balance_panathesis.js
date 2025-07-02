//
let arr = ["(", "(", ")", ")", "(", ")"];
function balanceParenthesis(parenthesis) {
  let balance = 0;
  for (let index = 0; index < parenthesis.length; index++) {
    const element = parenthesis[index];
    if (element === "(") {
      balance++;
    } else {
      balance--;
    }
  }
  return balance == 0;
}
function balanceParenthesis_rec(parenthesis, index = 0, balance = 0) {
  if (index == parenthesis.length) {
    return balance === 0;
  }
  if (balance < 0) {
    return false;
  }
  if (parenthesis[index] === "(") {
    return balanceParenthesis_rec(parenthesis, index + 1, balance + 1);
  } else if (parenthesis[index] === ")") {
    return balanceParenthesis_rec(parenthesis, index + 1, balance - 1);
  } else {
    return false;
  }
}

// console.log(balanceParenthesis_rec(arr));
let arr1 = ["(", "{", "[", "}", "]", ")"];
function balanceDiffParenthesis(parenthesis) {
  let stack = [];
  let open = ["(", "{", "["];
  let close = [")", "}", "]"];
  for (let index = 0; index < parenthesis.length; index++) {
    let element = parenthesis[index];
    if (open.includes(element)) {
      stack.push(element);
    } else {
      let matchIndex = close.indexOf(element);
      if (stack.length == 0 || stack[stack.length - 1] !== open[matchIndex]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length == 0;
}
console.log(balanceDiffParenthesis(arr1));
