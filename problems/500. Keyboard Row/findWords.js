/**
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

Example:

Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]

Note:

You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
 */
/**
 * @param {string[]} words
 * @return {string[]}
 * Runtime: 68 ms
 * Beats: 47.06%
 */
var findWords = function (words) {
    let keyboards = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    let hash = {};
    keyboards.forEach((s, index) => {
        for (let ch of s) {
            hash[ch] = hash[ch.toUpperCase()] = index;
        }
    });
    return words.filter(word => {
        let row = hash[word[0]];
        for (let i = 1; i < word.length; i++) {
            if (hash[word[i]] !== row) {
                return false;
            }
        }
        return row >= 0 && row <= 2;
    })
};