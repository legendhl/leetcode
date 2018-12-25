/**Given two strings s and t, determine if they are isomorphic.

Two strings are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
Note:
You may assume both s and t have the same length.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Runtime: 60 ms
 * Beats: 90.28%
 */
var isIsomorphic = function (s, t) {
    let hash1 = {};
    let hash2 = {};
    let len = s.length;
    for (let i = 0; i < len; i++) {
        let c1 = s[i];
        let c2 = t[i];
        if (hash1[c1] && hash1[c1] !== c2) {
            return false;
        }
        if (hash2[c2] && hash2[c2] !== c1) {
            return false;
        }
        hash1[c1] = c2;
        hash2[c2] = c1;
    }
    return true;
};