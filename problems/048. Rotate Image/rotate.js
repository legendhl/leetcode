// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Follow up:
// Could you do this in-place?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * Runtime: 98 ms
 * Beats: 100.00%
 */
var rotate = function(matrix) {
    let n = matrix.length, len = n - 1;
    for (let i=0; i<len; i++) {
        for (let j=0; j<len-i; j++) {
            swap(matrix, i, j, len-j, len-i);
        }
    }
    for (let j=0; j<n; j++) {
        for (let i=0; i<Math.floor(n/2); i++) {
            swap(matrix, i, j, len-i, j);
        }
    }

    function swap(matrix, x1, y1, x2, y2) {
        matrix[x1][y1] ^= matrix[x2][y2];
        matrix[x2][y2] ^= matrix[x1][y1];
        matrix[x1][y1] ^= matrix[x2][y2];
    }
};
