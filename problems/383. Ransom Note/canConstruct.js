/**
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
 */
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * Runtime: 96 ms
 * Beats: 23.56%
 */
var canConstruct = function (ransomNote, magazine) {
    let hash = {};
    for (let ch of magazine) {
        hash[ch] = hash[ch] ? hash[ch] + 1 : 1;
    }
    for (let ch of ransomNote) {
        if (!hash[ch]) {
            return false;
        } else {
            hash[ch]--;
        }
    }
    return true;
};