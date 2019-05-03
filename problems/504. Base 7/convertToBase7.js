/**
Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].
 */
/**
 * @param {number} num
 * @return {string}
 * Runtime: 76 ms, faster than 26.06%
 * Memory Usage: 33.8 MB, less than 50.00%
 */
var convertToBase7 = function (num) {
    let minus = num < 0;
    let n = Math.abs(num);
    let res = n === 0 ? '0' : '';
    while (n) {
        let m = n % 7;
        n = (n - m) / 7;
        res = m + res;
    }
    return (minus ? '-' : '') + res;
};