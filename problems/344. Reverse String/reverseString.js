/**
Write a function that takes a string as input and returns the string reversed.

Example 1:

Input: "hello"
Output: "olleh"
Example 2:

Input: "A man, a plan, a canal: Panama"
Output: "amanaP :lanac a ,nalp a ,nam A"
 */
/**
 * @param {string} s
 * @return {string}
 * Runtime: 80 ms
 * Beats: 32.19%
 */
var reverseString = function (s) {
    return s.split('').reverse().join('');
};