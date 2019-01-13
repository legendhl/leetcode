/**
Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:
Input:
3
Output:
3

Example 2:
Input:
11
Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
 */
/**
 * @param {number} n
 * @return {number}
 * Runtime: 68 ms
 * Beats: 20.00%
 */
var findNthDigit = function (n) {
    let base = 1;
    let ratio = 9;
    let multiple = 1;
    let idx = n;
    while (idx > ratio * base * multiple) {
        idx -= ratio * base * multiple;
        base *= 10;
        multiple++;
    }
    let seq = Math.floor((idx - 1) / multiple) + base + '';
    idx = (idx - 1) % multiple;
    return +seq[idx];
};