/**
A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

Example 1:
Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.

Note:
S will have length in range [1, 500].
S will consist of lowercase letters ('a' to 'z') only.
 */
/**
 * @param {string} S
 * @return {number[]}
 * Runtime: 60 ms, faster than 94.41%
 * Memory Usage: 35.7 MB, less than 72.15%
 */
var partitionLabels = function (S) {
    let i = 0;
    let len = S.length;
    let sizes = [];
    while (i < len) {
        let dict = {};
        let left = i;
        let right = i;
        while (i <= right) {
            let char = S[i];
            if (!dict[char]) {
                dict[char] = true;
                right = Math.max(S.lastIndexOf(char), right);
                if (right === len - 1) {
                    sizes.push(right - left + 1);
                    return sizes;
                }
            }
            i++;
        }
        sizes.push(right - left + 1);
    }
    return sizes;
};