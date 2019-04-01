/**
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:
Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:
Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]

Note:

1 <= A.length <= 10000
-10000 <= A[i] <= 10000
A is sorted in non-decreasing order.
 */
/**
 * @param {number[]} A
 * @return {number[]}
 * Runtime: 120 ms, faster than 95.79%
 * Memory Usage: 42.5 MB, less than 87.01%
 */
var sortedSquares = function (A) {
    let len = A.length;
    let i = 0;
    let j = len - 1;
    let result = [];
    let idx = j;
    while (i <= j) {
        if (A[i] * A[i] >= A[j] * A[j]) {
            result[idx--] = A[i] * A[i];
            i++;
        } else {
            result[idx--] = A[j] * A[j];
            j--;
        }
    }
    return result;
};