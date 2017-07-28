// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Space: O(m + n)
 * Runtime: 195 ms
 * Beats: 65.43%
 */
var setZeroes = function(matrix) {
    let m = matrix.length, n = matrix[0].length, rows = new Array(m).fill(1), columns = new Array(n).fill(1);
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (matrix[i][j] === 0) {
                rows[i] = 0;
                columns[j] = 0;
            }
        }
    }
    for (let i=0; i<m; i++) {
        if (rows[i] === 0) {
            matrix[i].fill(0);
        }
    }
    for (let j=0; j<n; j++) {
        if (columns[j] === 0) {
            for (let i=0; i<m; i++) {
                matrix[i][j] = 0;
            }
        }
    }
};
