/**
 * @param {number[][]} intervals
 * @return {number}
 * 执行用时： 84 ms , 在所有 JavaScript 提交中击败了 77.67% 的用户
 * 内存消耗： 39.3 MB , 在所有 JavaScript 提交中击败了 81.59% 的用户
 */
var eraseOverlapIntervals = function(intervals) {
  let n = intervals.length;
  let count = 0;
  if (n === 0 || n === 1) {
    return count;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let prev = intervals[0];
  for (let i = 1; i < n; i++) {
    let cur = intervals[i];
    if (cur[0] >= prev[1]) {
      prev = cur;
    } else if (cur[0] >= prev[0] && cur[1] <= prev[1]) {
      prev = cur;
      count++;
    } else {
      count++;
    }
  }
  return count;
};
