/**
 * @param {number[][]} people
 * @return {number[][]}
 * 执行用时： 140 ms , 在所有 JavaScript 提交中击败了 20.00% 的用户
 * 内存消耗： 43.1 MB , 在所有 JavaScript 提交中击败了 21.93% 的用户
 */
var reconstructQueue = function(people) {
  let p = people.slice().sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  let n = people.length;
  let ans = new Array(n);
  for (let person of p) {
    let [height, num] = person;
    let cnt = 0;
    let i = 0;
    for (; i < n && cnt < num; i++) {
      if (!ans[i] || ans[i][0] === person[0]) {
        cnt++;
      }
    }
    while (i < n && ans[i]) {
      i++;
    }
    ans[i] = person;
  }
  return ans;
};
