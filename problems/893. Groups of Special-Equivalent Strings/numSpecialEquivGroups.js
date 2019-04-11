/**
You are given an array A of strings.

Two strings S and T are special-equivalent if after any number of moves, S == T.

A move consists of choosing two indices i and j with i % 2 == j % 2, and swapping S[i] with S[j].

Now, a group of special-equivalent strings from A is a non-empty subset S of A such that any string not in S is not special-equivalent with any string in S.

Return the number of groups of special-equivalent strings from A.

Example 1:
Input: ["a","b","c","a","c","c"]
Output: 3
Explanation: 3 groups ["a","a"], ["b"], ["c","c","c"]

Example 2:
Input: ["aa","bb","ab","ba"]
Output: 4
Explanation: 4 groups ["aa"], ["bb"], ["ab"], ["ba"]

Example 3:
Input: ["abc","acb","bac","bca","cab","cba"]
Output: 3
Explanation: 3 groups ["abc","cba"], ["acb","bca"], ["bac","cab"]

Example 4:
Input: ["abcd","cdab","adcb","cbad"]
Output: 1
Explanation: 1 group ["abcd","cdab","adcb","cbad"]

Note:

1 <= A.length <= 1000
1 <= A[i].length <= 20
All A[i] have the same length.
All A[i] consist of only lowercase letters.
 */
/**
 * @param {string[]} A
 * @return {number}
 * Runtime: 80 ms, faster than 95.65%
 * Memory Usage: 37.9 MB, less than 33.33%
 */
var numSpecialEquivGroups = function (A) {
    let hash = {};
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        let str = A[i];
        let tag = getStringTag(str);
        hash[tag] = hash[tag] ? hash[tag] + 1 : 1;
    }
    for (let value of Object.values(hash)) {
        if (value >= 1) {
            count++;
        }
    }
    return count;

    function getStringTag(str) {
        let even = [];
        let odd = [];
        for (let i = 0; i < str.length; i++) {
            if (i % 2 === 0) {
                even.push(str[i]);
            } else {
                odd.push(str[i]);
            }
        }
        return even.sort().join('') + odd.sort().join('');
    }
};