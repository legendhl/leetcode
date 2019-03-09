/**
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

Example 1:
Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]

Example 2:
Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]

Note:

1 <= A.length <= 1000
1 <= A[0].length <= 1000
 */
/**
 * @param {number[][]} A
 * @return {number[][]}
 * Runtime: 76 ms, faster than 67.87%
 * Memory Usage: 37.2 MB, less than 60.00%
 */
var transpose = function (A) {
    let result = [];
    let row = A.length;
    let column = A[0].length;
    for (let j = 0; j < column; j++) {
        let arr = [];
        for (let i = 0; i < row; i++) {
            arr.push(A[i][j]);
        }
        result.push(arr);
    }
    return result;
};