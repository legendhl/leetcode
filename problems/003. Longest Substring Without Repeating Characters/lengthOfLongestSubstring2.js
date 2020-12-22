/**
 * @param {string} s
 * @return {number}
 * 执行用时：116 ms, 在所有 JavaScript 提交中击败了61.93%的用户
 */
var lengthOfLongestSubstring = function(s) {
  let charMap = new Map();
  let maxLen = 0;
  let beginIndex = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (charMap.get(char)) {
      while (beginIndex < i) {
        let c = s[beginIndex++];
        if (c === char) break;
        charMap.set(c, charMap.get(c) - 1);
      }
      maxLen = Math.max(i - beginIndex + 1, maxLen);
    } else {
      charMap.set(char, 1);
    }
  }
  maxLen = Math.max(s.length - beginIndex, maxLen);
  return maxLen;
};
