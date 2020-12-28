/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 执行用时： 84 ms , 在所有 JavaScript 提交中击败了 78.01% 的用户
 * 内存消耗： 39.1 MB , 在所有 JavaScript 提交中击败了 22.08% 的用户
 */
var canCompleteCircuit = function(gas, cost) {
  let n = gas.length;
  let surplus = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    surplus[i] = gas[i] - cost[i];
    sum += surplus[i];
  }
  if (sum < 0) {
    return -1;
  }
  sum = 0;
  let start = -1;
  for (let i = 0; i < n; i++) {
    sum += surplus[i];
    if (sum < 0) {
      start = -1;
      sum = 0;
      continue;
    } else if (start === -1) {
      start = i;
    }
  }
  return start;
};
