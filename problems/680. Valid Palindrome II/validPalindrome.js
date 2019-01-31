/**
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.
 */
/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 112 ms
 * Beats: 96.55%
 */
var validPalindrome = function (s) {
    let len = s.length;
    if (len <= 2) return true;
    return _validPalindrome(s, 0, len - 1);

    function _validPalindrome(str, begin, end) {
        while (begin < end) {
            if (str[begin] === str[end]) {
                begin++;
                end--;
            } else {
                return _isPalindrome(str, begin + 1, end) || _isPalindrome(str, begin, end - 1);
            }
        }
        return true;
    }
    function _isPalindrome(str, begin, end) {
        while (begin < end) {
            if (str[begin] === str[end]) {
                begin++;
                end--;
            } else {
                return false;
            }
        }
        return true;
    }
};