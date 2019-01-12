/**
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
Example 2:

Input: a = -2, b = 3
Output: 1
 */
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * Runtime: 72 ms
 * Beats: 3.33%
 */
var getSum = function (a, b) {
    while (b) {
        let _a = a ^ b;
        let _b = (a & b) << 1;
        a = _a;
        b = _b;
    }
    return a;
};