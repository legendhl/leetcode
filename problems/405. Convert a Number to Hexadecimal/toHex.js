/**
Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

Note:

All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.

Example 1:
Input:
26
Output:
"1a"

Example 2:
Input:
-1
Output:
"ffffffff"
 */
/**
 * @param {number} num
 * @return {string}
 * Runtime: 52 ms, faster than 100.00%
 * Memory Usage: 33.9 MB, less than 11.11%
 */
var toHex = function (num) {
    if (num === 0) return '0';
    let digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let minus = false;
    let n = num;
    if (num < 0) {
        n = ~num;
        minus = true;
    }
    let h = '';
    while (n) {
        let m = n & 15;
        h = digits[minus ? 15 - m : m] + h;
        n = (n - m) / 16;
    }
    return minus ? h.padStart(8, 'f') : h;
};