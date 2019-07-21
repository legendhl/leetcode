/**
Given two strings representing two complex numbers.

You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

Example 1:
Input: "1+1i", "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.

Example 2:
Input: "1+-1i", "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.

Note:
The input strings will not have extra blank.
The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 * Runtime: 52 ms, faster than 78.79%
 * Memory Usage: 33.7 MB, less than 100.00%
 */
var complexNumberMultiply = function (a, b) {
    let numA = parseNum(a);
    let numB = parseNum(b);
    let real = numA[0] * numB[0] - numA[1] * numB[1];
    let i = numA[0] * numB[1] + numA[1] * numB[0];
    return `${real}+${i}i`;

    function parseNum(str) {
        let arr = str.split('+');
        let real = Number.parseInt(arr[0]);
        let i = Number.parseInt(arr[1].slice(0, -1));
        return [real, i];
    }
};