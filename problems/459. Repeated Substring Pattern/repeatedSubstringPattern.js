/**
Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

Example 1:
Input: "abab"
Output: True
Explanation: It's the substring "ab" twice.

Example 2:
Input: "aba"
Output: False

Example 3:
Input: "abcabcabcabc"
Output: True
Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)
 */
/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 68 ms, faster than 87.19%
 * Memory Usage: 38.4 MB, less than 34.61%
 */
var repeatedSubstringPattern = function (s) {
    let len = s.length;
    for (let times = 2; times <= len; times++) {
        let subLen = len / times;
        if (subLen % 1 !== 0) {
            continue;
        }
        let i;
        let pattern = s.slice(0, subLen);
        for (i = 1; i < times; i++) {
            if (s.slice(subLen * i, subLen * (i + 1)) !== pattern) {
                break;
            }
        }
        if (i >= times) {
            return true;
        }
    }
    return false;
};