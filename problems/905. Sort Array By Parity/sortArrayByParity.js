/**
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

Example 1:
Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

Note:
1 <= A.length <= 5000
0 <= A[i] <= 5000
 */
/**
 * @param {number[]} A
 * @return {number[]}
 * Runtime: 84 ms, faster than 87.79%
 * Memory Usage: 37.1 MB, less than 59.09%
 */
var sortArrayByParity = function (A) {
    let arr = [];
    let len = A.length;
    let begin = 0;
    let end = len - 1;
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) {
            arr[begin++] = A[i];
        } else {
            arr[end--] = A[i];
        }
    }
    return arr;
};