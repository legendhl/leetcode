/**
Given a string S, we can transform every letter individually to be lowercase or uppercase to create another string.  Return a list of all possible strings we could create.

Examples:
Input: S = "a1b2"
Output: ["a1b2", "a1B2", "A1b2", "A1B2"]

Input: S = "3z4"
Output: ["3z4", "3Z4"]

Input: S = "12345"
Output: ["12345"]
Note:

S will be a string with length between 1 and 12.
S will consist only of letters or digits.
 */
/**
 * @param {string} S
 * @return {string[]}
 * Runtime: 92 ms, faster than 51.00%
 * Memory Usage: 37.8 MB, less than 60.87%
 */
var letterCasePermutation = function (S) {
    let res = [];
    let len = S.length;
    permutation('');
    return res;

    function permutation(s) {
        let i = s.length;
        if (i === len) {
            res.push(s);
        }
        if (i >= len) {
            return
        }
        let c = S[i];
        let changedChar = changeAlpha(c);
        permutation(s + c);
        if (changedChar) {
            permutation(s + changedChar);
        }
    }

    function changeAlpha(c) {
        let code = c.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            return String.fromCharCode(code + 32);
        } else if (code >= 97 && code <= 122) {
            return String.fromCharCode(code - 32);
        } else {
            return '';
        }
    }
};