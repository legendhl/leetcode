/**
Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 76 ms
 * Beats: 58.07%
 */
var isAnagram = function (s, t) {
    let hash = {};
    for (let c of s) {
        hash[c] = hash[c] ? hash[c] + 1 : 1;
    }
    for (let c of t) {
        if (!hash[c]) return false;
        hash[c]--;
    }
    for (let key of Object.keys(hash)) {
        if (hash[key]) return false;
    }
    return true;
};