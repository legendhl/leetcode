// Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
//
// For example,
// Given n = 3,
//
// You should return the following matrix:
// [
//     [ 1, 2, 3 ],
//     [ 8, 9, 4 ],
//     [ 7, 6, 5 ]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 * Runtime: 136 ms
 * Beats: 10.00%
 */
var generateMatrix = function(n) {
    if (n <= 0) {
        return [];
    }
    let idx = 1, matrix = new Array(n);
    for (let k=0; k<n; k++) {
        matrix[k] = new Array(n);
    }
    _generate(0, 0, n);
    return matrix;

    function _generate(i, j, len) {
        if (len <= 0) return;
        if (len === 1) {
            matrix[i][j] = idx++;
            return;
        }
        let x = i, y = j;
        for (; j<y+len-1; j++) {
            matrix[i][j] = idx++;
        }
        for (; i<x+len-1; i++) {
            matrix[i][j] = idx++;
        }
        for (; j>y; j--) {
            matrix[i][j] = idx++;
        }
        for (; i>x; i--) {
            matrix[i][j] = idx++;
        }
        _generate(i+1, j+1, len-2);
    }
};
