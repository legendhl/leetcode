/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 执行用时： 124 ms , 在所有 JavaScript 提交中击败了 6.78% 的用户
 * 内存消耗： 40 MB , 在所有 JavaScript 提交中击败了 26.43% 的用户
 */
var wordBreak = function(s, wordDict) {
  let len = s.length;
  let dp = new Array(len + 1).fill(false);
  dp[0] = true;
  let dict = new Set();
  wordDict.forEach(word => dict.add(word));
  for (let i = 1; i <= len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      let word = s.slice(j, i);
      dp[i] = dict.has(word) && dp[j];
      if (dp[i]) {
        break;
      }
    }
  }
  return dp[len];
};
