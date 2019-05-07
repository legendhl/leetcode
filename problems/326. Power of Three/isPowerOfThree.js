/**
Given an integer, write a function to determine if it is a power of three.

Example 1:
Input: 27
Output: true

Example 2:
Input: 0
Output: false

Example 3:
Input: 9
Output: true

Example 4:
Input: 45
Output: false

Follow up:
Could you do it without using any loop / recursion?
 */
/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 220 ms, faster than 100.00%
 * Memory Usage: 47.9 MB, less than 51.51%
 */
var isPowerOfThree = function (n) {
    let num = n;
    while (num !== 1) {
        num /= 3;
        if (num === 0 || num % 1 !== 0) {
            return false;
        }
    }
    return true;
};