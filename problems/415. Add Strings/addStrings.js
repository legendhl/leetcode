/**
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:

The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * Runtime: 92 ms
 * Beats: 9.68%
 */
var addStrings = function (num1, num2) {
    let sum = [];
    let carry = 0;
    let len1 = num1.length;
    let len2 = num2.length;
    let i = len1 - 1;
    let j = len2 - 1;
    for (; i >= 0 || j >= 0; i-- , j--) {
        let n = (+num1[i] || 0) + (+num2[j] || 0) + carry;
        carry = Math.floor(n / 10);
        sum.push(n >= 10 ? n % 10 : n);
    }
    if (carry) {
        sum.push(carry);
    }
    return sum.reverse().join('');
};