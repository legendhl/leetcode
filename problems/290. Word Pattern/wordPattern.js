/**
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
 */
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 * Runtime: 52 ms
 * Beats: 61.87%
 */
var wordPattern = function (pattern, str) {
    if (!pattern || !str) {
        return false;
    }
    let strArr = str.split(/\s+/);
    let len = pattern.length;
    if (len === 0 || !strArr.length === 0 || len !== strArr.length) {
        return false;
    }
    let charHash = {};
    let wordHash = {};
    for (let i = 0; i < len; i++) {
        let char = pattern[i];
        let word = strArr[i];
        if (!charHash[char]) {
            charHash[char] = word;
        }
        if (!wordHash[word]) {
            wordHash[word] = char;
        }
        if (charHash[char] !== word || wordHash[word] !== char) {
            return false;
        }
    }
    return true;
};