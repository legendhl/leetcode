/**
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false
Note:

A and B will have length at most 100.
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 * Runtime: 68 ms, faster than 42.71%
 * Memory Usage: 33.8 MB, less than 40.00%
 */
var rotateString = function (A, B) {
    if (A.length !== B.length) return false;
    let str = A + A;
    return str.includes(B);
};