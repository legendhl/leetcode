/**
 * @param {string} s
 * @return {string}
 * 执行用时： 88 ms , 在所有 JavaScript 提交中击败了 93.95% 的用户
 * 内存消耗： 40.2 MB , 在所有 JavaScript 提交中击败了 36.55% 的用户
 */
var removeDuplicateLetters = function(s) {
  let nums = {};
  let vis = {};
  for (let c of s) {
    nums[c] = (nums[c] || 0) + 1;
    vis[c] = false;
  }
  let stack = [];
  for (let c of s) {
    if (!vis[c]) {
      while (
        stack.length &&
        nums[stack[stack.length - 1]] > 0 &&
        stack[stack.length - 1] > c
      ) {
        vis[stack.pop()] = false;
      }
      stack.push(c);
      vis[c] = true;
    }
    nums[c]--;
  }
  return stack.join('');
};
