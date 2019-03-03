/**
Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
 
Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.
 */
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 * Runtime: 72 ms, faster than 65.74%
 * Memory Usage: 35 MB, less than 100.00%
 */
var shortestToChar = function (S, C) {
    let len = S.length;
    let distances = new Array(len);
    let lastIndex = -1;
    for (let index = 0; index < len; index++) {
        if (S[index] === C) {
            for (let i = lastIndex + 1; i <= index; i++) {
                distances[i] = lastIndex < 0 ? index - i : Math.min(i - lastIndex, index - i);
            }
            lastIndex = index;
        }
    }
    for (let i = lastIndex + 1; i < len; i++) {
        distances[i] = i - lastIndex;
    }
    return distances;
};
