/**
Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

Example 1:
Input: 5
Output: True
Explanation:
The binary representation of 5 is: 101
Example 2:
Input: 7
Output: False
Explanation:
The binary representation of 7 is: 111.
Example 3:
Input: 11
Output: False
Explanation:
The binary representation of 11 is: 1011.
Example 4:
Input: 10
Output: True
Explanation:
The binary representation of 10 is: 1010.
 */
/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 72 ms, faster than 100.00%
 * Memory Usage: 14.7 MB, less than 41.67%
 */
var hasAlternatingBits = function (n) {
    let bit = n & 1;
    n >>= 1;
    while (n) {
        let newBit = n & 1;
        if (bit ^ newBit === 0) {
            return false;
        }
        bit = newBit;
        n >>= 1;
    }
    return true;
};