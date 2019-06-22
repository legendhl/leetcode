/**
Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

Example 1:
Input: A = "ab", B = "ba"
Output: true

Example 2:
Input: A = "ab", B = "ab"
Output: false

Example 3:
Input: A = "aa", B = "aa"
Output: true

Example 4:
Input: A = "aaaaaaabc", B = "aaaaaaacb"
Output: true

Example 5:
Input: A = "", B = "aa"
Output: false

Note:

0 <= A.length <= 20000
0 <= B.length <= 20000
A and B consist only of lowercase letters.
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 * Runtime: 80 ms, faster than 14.29%
 * Memory Usage: 35.6 MB, less than 76.85%
 */
var buddyStrings = function (A, B) {
    if (A.length !== B.length || !A) {
        return false;
    }
    let diff = [];
    let map = {};
    let repeat = false;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            diff.push(i);
        }
        if (!repeat) {
            map[A[i]] = (map[A[i]] || 0) + 1;
            if (map[A[i]] >= 2) {
                repeat = true;
            }
        }
    }
    if (diff.length === 0) {
        return repeat;
    }
    if (diff.length !== 2) {
        return false;
    }
    let i = diff[0];
    let j = diff[1];
    return A[i] === B[j] && A[j] === B[i];
};