/**
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

Example 1:
Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:
Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:
Input: "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".

Note:

S.length <= 10000
S[i] is "(" or ")"
S is a valid parentheses string
 */
/**
 * @param {string} S
 * @return {string}
 * Runtime: 64 ms, faster than 78.13%
 * Memory Usage: 36.1 MB, less than 100.00%
 */
var removeOuterParentheses = function (S) {
    let stack = 0;
    let output = '';
    let str = '';
    for (let i = 0; i < S.length; i++) {
        let c = S[i];
        str += c;
        if (c === '(') {
            stack++;
        } else {
            stack--;
            if (stack === 0) {
                output += str.slice(1, -1);
                str = '';
            }
        }
    }
    return output;
};