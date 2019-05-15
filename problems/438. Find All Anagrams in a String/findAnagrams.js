/**
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:
Input:
s: "cbaebabacd" p: "abc"
Output:
[0, 6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input:
s: "abab" p: "ab"
Output:
[0, 1, 2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 * Runtime: 80 ms, faster than 99.57%
 * Memory Usage: 37.9 MB, less than 72.88%
 */
var findAnagrams = function (s, p) {
    let len = p.length;
    let res = [];
    if (s.length < len) return res;
    let sArray = new Array(26).fill(0);
    let pArray = new Array(26).fill(0);
    for (let ch of p) {
        pArray[char2Index(ch)]++;
    }
    for (let i = 0; i < len; i++) {
        sArray[char2Index(s[i])]++;
    }
    if (isAnagram(sArray, pArray)) {
        res.push(0);
    }
    for (let i = len; i < s.length; i++) {
        sArray[char2Index(s[i])]++;
        sArray[char2Index(s[i - len])]--;
        if (isAnagram(sArray, pArray)) {
            res.push(i - len + 1);
        }
    }
    return res;

    function char2Index(char) {
        return char.charCodeAt(0) - 97;
    }
    function isAnagram(sArray, pArray) {
        for (let i = 0; i < 26; i++) {
            if (sArray[i] !== pArray[i]) {
                return false;
            }
        }
        return true;
    }
};