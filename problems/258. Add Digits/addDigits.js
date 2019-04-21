/**
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

Example:
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
Follow up:
Could you do it without any loop/recursion in O(1) runtime?
 */
/**
 * @param {number} num
 * @return {number}
 * Runtime: 80 ms, faster than 100.00%
 * Memory Usage: 35.5 MB, less than 86.11%
 */
var addDigits = function (num) {
    if (num === 0) {
        return 0;
    } else {
        return num % 9 || 9;
    }
};