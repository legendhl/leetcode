/**
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.

Example 1:
Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.

Example 2:
Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.

Example 3:
Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).

Note:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are english lowercase letters.
 */
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 * Runtime: 60 ms, faster than 97.06%
 * Memory Usage: 34.8 MB, less than 50.00%
 */
var isAlienSorted = function (words, order) {
    let orderHash = {};
    for (let i = 0; i < order.length; i++) {
        orderHash[order[i]] = i;
    }
    for (let i = 1; i < words.length; i++) {
        let prev = words[i - 1];
        let cur = words[i];
        if (!inOrder(prev, cur, orderHash)) {
            return false;
        }
    }
    return true;

    function inOrder(word1, word2, order) {
        let len1 = word1.length;
        let len2 = word2.length;
        for (let i = 0; i < len1 && i < len2; i++) {
            let letter1 = word1[i];
            let letter2 = word2[i];
            if (order[letter1] > order[letter2]) {
                return false;
            } else if (order[letter1] < order[letter2]) {
                return true;
            }
        }
        return len1 <= len2;
    }
};