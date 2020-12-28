/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 * 执行用时： 80 ms , 在所有 JavaScript 提交中击败了 97.36% 的用户
 * 内存消耗： 39.7 MB , 在所有 JavaScript 提交中击败了 73.09% 的用户
 */
var removeKdigits = function(num, k) {
  let stack = [];
  let remain = num.length - k;
  for (let ch of num) {
    while (k && stack.length && stack[stack.length - 1] > ch) {
      stack.pop();
      k--;
    }
    stack.push(ch);
  }
  let leftIndex = 0;
  while (leftIndex < stack.length && stack[leftIndex] === '0') {
    leftIndex++;
  }
  return stack.slice(leftIndex, remain).join('') || '0';
};
