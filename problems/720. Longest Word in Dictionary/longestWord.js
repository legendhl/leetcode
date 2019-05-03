/**
Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.
Example 1:
Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:
Input: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation: 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
Note:

All the strings in the input will only contain lowercase letters.
The length of words will be in the range [1, 1000].
The length of words[i] will be in the range [1, 30].
 */
/**
 * @param {string[]} words
 * @return {string}
 * Runtime: 88 ms, faster than 81.54%
 * Memory Usage: 40.2 MB, less than 50.00%
 */
var longestWord = function (words) {
    let map = {};
    let longest = 0;
    let validMap = {};
    words.sort();
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let len = word.length;
        let prefix = word.slice(0, -1);
        let valid = len === 1 || validMap[prefix];
        if (valid) {
            validMap[word] = true;
            if (longest < len) {
                longest = len;
                map[longest] = word;
            }
        }
    }
    return map[longest];
};