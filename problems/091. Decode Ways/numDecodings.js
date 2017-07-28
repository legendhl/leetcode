// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given an encoded message containing digits, determine the total number of ways to decode it.

// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

// The number of ways decoding "12" is 2.
/**
 * @param {string} s
 * @return {number}
 * Runtime: 128 ms
 * Beats: 48.94%
 */
var numDecodings = function(s) {
    if (!s || s[0] === '0') return 0;
    let count = [1];
    for (let i=1; i<s.length; i++) {
        if (s[i] === '0' && (s[i-1] !== '1' && s[i-1] !== '2')) {
            return 0;
        }
        count[i] = s[i] === '0' ? 0 : count[i-1];
        if (s[i-1] === '1' || s[i-1] === '2' && +s[i] <= 6) {
            count[i] += (i-2 >= 0 ? count[i-2] : 1);
        }
    }
    return count[s.length-1];
};
