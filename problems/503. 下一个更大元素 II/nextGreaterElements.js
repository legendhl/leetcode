/**
 * @param {number[]} nums
 * @return {number[]}
 * 执行用时： 188 ms , 在所有 JavaScript 提交中击败了 24.48% 的用户
 */
var nextGreaterElements = function(nums) {
  let stack = [];
  let ans = [];
  let map = new Map();
  let n = nums.length;
  for (let i = 0; i < n * 2; i++) {
    let len = stack.length;
    let num = nums[i % n];
    while (len && num > nums[stack[len - 1]]) {
      map.set(stack.pop(), num);
      len--;
    }
    stack.push(i % n);
  }
  for (let i = 0; i < n; i++) {
    ans[i] = map.has(i) ? map.get(i) : -1;
  }
  return ans;
};
