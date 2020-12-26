/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let ans = [];
  let len = n * 2;
  function gen(open, close, str) {
    if (str.length === len) {
      ans.push(str);
      return;
    }
    if (open < n) {
      gen(open + 1, close, str + '(');
    }
    if (open > close) {
      gen(open, close + 1, str + ')');
    }
  }
  gen(0, 0, '');
  return ans;
};
