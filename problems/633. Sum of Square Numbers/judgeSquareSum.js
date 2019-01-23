/**
Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

Example 1:
Input: 5
Output: True
Explanation: 1 * 1 + 2 * 2 = 5
Example 2:
Input: 3
Output: False
 */
/**
 * @param {number} c
 * @return {boolean}
 * Runtime: 76 ms
 * Beats: 26.61%
 */
var judgeSquareSum = function (c) {
    for (let i = 0; i * i <= c; i++) {
        let rest = c - i * i;
        let root = Math.floor(Math.sqrt(rest));
        if (root * root === rest) {
            return true;
        }
    }
    return false;
};