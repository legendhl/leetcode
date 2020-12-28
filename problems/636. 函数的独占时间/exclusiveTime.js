/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 * 执行用时： 112 ms , 在所有 JavaScript 提交中击败了 64.10% 的用户
 * 内存消耗： 42.6 MB , 在所有 JavaScript 提交中击败了 79.49% 的用户
 */
var exclusiveTime = function(n, logs) {
  let ans = new Array(n).fill(0);
  let stack = [];
  for (let log of logs) {
    let parsed = log.split(':');
    if (parsed[1] === 'start') {
      stack.push([parsed[0], parsed[2]]);
    } else {
      let [fid, begin] = stack.pop();
      let time = parsed[2] - begin + 1;
      ans[fid] += time;
      if (stack.length) {
        ans[stack[stack.length - 1][0]] -= time;
      }
    }
  }
  return ans;
};
