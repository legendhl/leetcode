/**
Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Restrictions:
The string consists of lower English letters only.
Length of the given string and k will in the range [1, 10000]
 */
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * Runtime: 84 ms
 * Beats: 36.84%
 */
var reverseStr = function (s, k) {
    let len = s.length;
    let step = Math.ceil(len / (2 * k));
    let str = [];
    for (let i = 0; i < step; i++) {
        str.push(_reverse(s, i * k * 2, i * k * 2 + k - 1, k));
        str.push(s.slice(i * k * 2 + k, i * k * 2 + k * 2));
    }
    return str.join('');

    function _reverse(s, begin, end, len) {
        let i = begin;
        let j = end;
        let str = [];
        while (i <= j) {
            str[i - begin] = s[j];
            str[j - begin] = s[i];
            i++;
            j--;
        }
        return str.join('');
    }
};