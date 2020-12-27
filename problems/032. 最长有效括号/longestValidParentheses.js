/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let stack = [-1];
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (!stack.length) {
        stack.push(i);
      }
      max = Math.max(max, i - stack[stack.length - 1]);
    }
  }
  return max;
};
