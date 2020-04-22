/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0, j = 0, sLen = s.length, tLen = t.length;
  while (i < sLen && j < tLen) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i >= sLen;
};