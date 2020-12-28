/**
 * @param {string[]} tokens
 * @return {number}
 * 执行用时： 116 ms , 在所有 JavaScript 提交中击败了 21.45% 的用户
 */
var evalRPN = function(tokens) {
  let stack = [];
  for (let token of tokens) {
    if (['+', '-', '*', '/'].indexOf(token) >= 0) {
      let a = stack.pop();
      let b = stack.pop();
      if (token === '+') {
        stack.push(a + b);
      } else if (token === '-') {
        stack.push(b - a);
      } else if (token === '*') {
        stack.push(a * b);
      } else if (token === '/') {
        stack.push(parseInt(b / a));
      }
    } else {
      stack.push(+token);
    }
  }
  return stack.pop();
};
