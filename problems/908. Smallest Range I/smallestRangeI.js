/**
Given an array A of integers, for each integer A[i] we may choose any x with -K <= x <= K, and add x to A[i].

After this process, we have some array B.

Return the smallest possible difference between the maximum value of B and the minimum value of B.

Example 1:
Input: A = [1], K = 0
Output: 0
Explanation: B = [1]

Example 2:
Input: A = [0,10], K = 2
Output: 6
Explanation: B = [2,8]

Example 3:
Input: A = [1,3,6], K = 3
Output: 0
Explanation: B = [3,3,3] or B = [4,4,4]

Note:

1 <= A.length <= 10000
0 <= A[i] <= 10000
0 <= K <= 10000
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * Runtime: 64 ms, faster than 78.89%
 * Memory Usage: 35.9 MB, less than 63.33%
 */
var smallestRangeI = function (A, K) {
    let max = A[0];
    let min = A[0];
    for (let i = 1; i < A.length; i++) {
        if (A[i] > max) {
            max = A[i];
        } else if (A[i] < min) {
            min = A[i];
        }
    }
    let diff = max - min - K * 2;
    return diff > 0 ? diff : 0;
};