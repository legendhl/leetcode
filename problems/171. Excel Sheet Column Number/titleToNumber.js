/**
Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701
 */
/**
 * @param {string} s
 * @return {number}
 * Runtime: 68 ms
 * Beats: 100%
 */
var titleToNumber = function (s) {
    let base = 1;
    let n = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        n += (s.charCodeAt(i) - 64) * base;
        base *= 26;
    }
    return n;
};