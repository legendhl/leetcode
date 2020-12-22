/**
 * @param {string} s
 * @return {number}
 * 172 ms
 */
var lengthOfLongestSubstring = function(s) {
  if (!s) return 0;
  let arr = [1];
  for (let i = 1; i < s.length; i++) {
    let n = arr[i - 1];
    let sub = s.substr(i - n, n);
    let index = sub.indexOf(s.charAt(i));
    if (index === -1) {
      arr[i] = n + 1;
    } else {
      arr[i] = sub.length - index;
    }
  }
  return Math.max.apply(null, arr);
};
