/**
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example 1:
Input: 16
Output: true

Example 2:
Input: 5
Output: false

Follow up: Could you solve it without loops/recursion?
 */
/**
 * @param {number} num
 * @return {boolean}
 * Runtime: 68 ms, faster than 99.74%
 * Memory Usage: 35.6 MB, less than 26.67%
 */
var isPowerOfFour = function (num) {
    return (num & (num - 1)) === 0 && (num & 0x55555555) !== 0;
};