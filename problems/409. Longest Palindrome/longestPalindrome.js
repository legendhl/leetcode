/**
Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.
 */
/**
 * @param {string} s
 * @return {number}
 * Runtime: 84 ms
 * Beats: 12.96%
 */
var longestPalindrome = function (s) {
    let hash = {};
    for (let ch of s) {
        hash[ch] = hash[ch] ? hash[ch] + 1 : 1;
    }
    let len = 0;
    let hasSingle = false;
    for (let [k, v] of Object.entries(hash)) {
        if (v % 2 === 0) {
            len += v;
        } else {
            len += v - 1;
            hasSingle = true;
        }
    }
    return hasSingle ? len + 1 : len;
};