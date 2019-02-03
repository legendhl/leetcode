/**
Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.

For example, with A = "abcd" and B = "cdabcdab".
abcd    bcdabc    2
Return 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").

Note:
The length of A and B will be between 1 and 10000.
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 * Runtime: 72 ms
 * Beat: 86.30%
 * Memory Usage: 15.4 MB
 * Beat: 79.17%
 */
var repeatedStringMatch = function (A, B) {
    if (A.length >= B.length && A.indexOf(B) >= 0) return 1;
    let lIndex = B.indexOf(A);
    let lenA = A.length;
    let lenB = B.length;
    if (lIndex >= 0) {
        let count = 0;
        let i = lIndex;
        if (lIndex > 0) {
            if (A.lastIndexOf(B.slice(0, lIndex)) + lIndex === lenA) {
                count++;
            } else {
                return -1;
            }
        }
        for (; i < lenB; i += lenA) {
            if (B.slice(i, i + lenA) === A) {
                count++;
            } else {
                break;
            }
        }
        if (i < lenB) {
            if (A.indexOf(B.slice(i)) === 0) {
                count++;
            } else {
                return -1;
            }
        }
        return count;
    }
    let a = A + A;
    if (a.indexOf(B) >= 0) {
        return 2;
    }
    return -1;
};