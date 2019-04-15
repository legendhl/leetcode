/**
Given an array A of positive lengths, return the largest perimeter of a triangle with non-zero area, formed from 3 of these lengths.

If it is impossible to form any triangle of non-zero area, return 0.

Example 1:
Input: [2,1,2]
Output: 5

Example 2:
Input: [1,2,1]
Output: 0

Example 3:
Input: [3,2,3,4]
Output: 10

Example 4:
Input: [3,6,2,3]
Output: 8

Note:

3 <= A.length <= 10000
1 <= A[i] <= 10^6
 */
/**
 * @param {number[]} A
 * @return {number}
 * Runtime: 100 ms, faster than 98.18%
 * Memory Usage: 38.4 MB, less than 40.91%
 */
var largestPerimeter = function (A) {
    let lengths = A.sort((a, b) => a - b);
    let len = lengths.length;
    for (let i = len - 3; i >= 0; i--) {
        if (lengths[i] + lengths[i + 1] > lengths[i + 2]) {
            return lengths[i] + lengths[i + 1] + lengths[i + 2];
        }
    }
    return 0;
};