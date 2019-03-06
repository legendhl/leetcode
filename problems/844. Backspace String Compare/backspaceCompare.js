/**
Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Example 1:
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".

Example 2:
Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".

Example 3:
Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".

Example 4:
Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".

Note:
1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.

Follow up:
Can you solve it in O(N) time and O(1) space?
 */
/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 * Runtime: 64 ms, faster than 70.79%
 * Memory Usage: 35.5 MB, less than 24.24%
 */
var backspaceCompare = function (S, T) {
    let strs = [S, T];
    let stacks = [[], []];
    for (let i = 0; i < 2; i++) {
        let str = strs[i];
        let stack = stacks[i];
        for (let ch of str) {
            if (ch === '#') {
                stack.pop();
            } else {
                stack.push(ch);
            }
        }
    }
    if (stacks[0].length !== stacks[1].length) {
        return false;
    }
    for (let i = 0; i < stacks[0].length; i++) {
        if (stacks[0][i] !== stacks[1][i]) {
            return false;
        }
    }
    return true;
};