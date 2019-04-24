/**
Given an array A of integers, we must modify the array in the following way: we choose an i and replace A[i] with -A[i], and we repeat this process K times in total.  (We may choose the same index i multiple times.)

Return the largest possible sum of the array after modifying it in this way.

Example 1:
Input: A = [4,2,3], K = 1
Output: 5
Explanation: Choose indices (1,) and A becomes [4,-2,3].

Example 2:
Input: A = [3,-1,0,2], K = 3
Output: 6
Explanation: Choose indices (1, 2, 2) and A becomes [3,1,0,2].

Example 3:
Input: A = [2,-3,-1,5,-4], K = 2
Output: 13
Explanation: Choose indices (1, 4) and A becomes [2,3,-1,5,4].

Note:

1 <= A.length <= 10000
1 <= K <= 10000
-100 <= A[i] <= 100
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * Runtime: 68 ms, faster than 83.79%
 * Memory Usage: 35.3 MB, less than 100.00%
 */
var largestSumAfterKNegations = function (A, K) {
    A.sort((a, b) => a - b);
    let len = A.length;
    let negativeCount = 0;
    let sum = 0;
    for (let i = 0; i < len; i++) {
        if (A[i] < 0) {
            negativeCount++;
        }
        sum += A[i];
    }
    for (let i = 0; i < K && i < negativeCount; i++) {
        sum -= A[i] * 2;
    }
    if (K > negativeCount && (K - negativeCount) % 2 === 1) {
        A[negativeCount - 1], A[negativeCount]
        if (negativeCount === len) {
            sum -= A[negativeCount - 1] * 2;
        } else if (negativeCount === 0) {
            sum -= A[0] * 2;
        } else {
            sum -= Math.min(-A[negativeCount - 1], A[negativeCount]) * 2;
        }
    }
    return sum;
};