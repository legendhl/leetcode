// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:
//
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// For example,
//
// Consider the following matrix:
//
// [
//     [1,   3,  5,  7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ]
// Given target = 3, return true.
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 * Runtime: 142 ms
 * beats: 9.09%
 */
var searchMatrix = function(matrix, target) {
    if (!Array.isArray(matrix) || !Array.isArray(matrix[0])) return false;
    let m = matrix.length, n = matrix[0].length, i = 0, j = m*n-1;
    while (i <= j) {
        let mid = Math.floor((i+j)/2), val = matrix[Math.floor(mid/n)][mid%n];
        if (val === target) {
            return true;
        } else if (val < target) {
            i = mid + 1;
        } else {
            j = mid - 1;
        }
    }
    return false;
};
