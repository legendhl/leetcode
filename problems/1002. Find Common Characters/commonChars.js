/**
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

Example 1:
Input: ["bella","label","roller"]
Output: ["e","l","l"]

Example 2:
Input: ["cool","lock","cook"]
Output: ["c","o"]

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter
 */
/**
 * @param {string[]} A
 * @return {string[]}
 * Runtime: 104 ms, faster than 38.81%
 * Memory Usage: 44.7 MB, less than 100.00%
 */
var commonChars = function (A) {
    let count = countLetters(A[0]);
    for (let i = 1; i < A.length; i++) {
        count = joinCount(count, countLetters(A[i]));
    }
    return count2Array(count);

    function countLetters(str) {
        let count = {};
        for (let ch of str) {
            count[ch] = (count[ch] || 0) + 1;
        }
        return count;
    }
    function joinCount(count1, count2) {
        let count = {};
        for (let [key, value] of Object.entries(count1)) {
            if (count2[key]) {
                count[key] = Math.min(value, count2[key]);
            }
        }
        return count;
    }
    function count2Array(count) {
        let arr = [];
        for (let [key, value] of Object.entries(count)) {
            while (value--) {
                arr.push(key);
            }
        }
        return arr;
    }
};