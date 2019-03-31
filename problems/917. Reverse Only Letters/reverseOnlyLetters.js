/**
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

Example 1:
Input: "ab-cd"
Output: "dc-ba"

Example 2:
Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"

Note:

S.length <= 100
33 <= S[i].ASCIIcode <= 122 
S doesn't contain \ or "
 */
/**
 * @param {string} S
 * @return {string}
 * Runtime: 60 ms, faster than 89.88%
 * Memory Usage: 33.8 MB, less than 80.77%
 */
var reverseOnlyLetters = function (S) {
    let len = S.length;
    let arr = [];
    let begin = 0;
    let end = len - 1;
    while (begin <= end) {
        while (begin <= end && !isLetter(S[begin])) {
            arr[begin] = S[begin];
            begin++;
        }
        while (begin <= end && !isLetter(S[end])) {
            arr[end] = S[end];
            end--;
        }
        if (begin <= end) {
            arr[begin] = S[end];
            arr[end] = S[begin];
            begin++;
            end--;
        }
    }
    return arr.join('');

    function isLetter(c) {
        let charCode = c.charCodeAt(0);
        return (charCode >= 97 && charCode <= 122) || (charCode >= 65 && charCode <= 90);
    }
};