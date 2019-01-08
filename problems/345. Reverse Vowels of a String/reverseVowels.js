/**
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".
 */
/**
 * @param {string} s
 * @return {string}
 * Runtime: 96 ms
 * Beats: 32.58%
 */
var reverseVowels = function (s) {
    let vowels = {
        'a': true, 'e': true, 'o': true, 'i': true, 'u': true,
        'A': true, 'E': true, 'O': true, 'I': true, 'U': true
    };
    let len = s.length;
    let i = 0;
    let j = len - 1;
    let str = [];
    for (; i <= j;) {
        while (!vowels[s[i]] && i <= j) {
            str[i] = s[i];
            i++;
        }
        while (!vowels[s[j]] && i <= j) {
            str[j] = s[j];
            j--;
        }
        if (vowels[s[i]] && vowels[s[j]] && i <= j) {
            str[i] = s[j];
            str[j] = s[i];
            i++;
            j--;
        }
    }
    return str.join('');
};