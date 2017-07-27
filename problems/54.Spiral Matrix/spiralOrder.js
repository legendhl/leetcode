// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.
//
//     For example,
//     Given the following matrix:
//
//     [
//         [ 1, 2, 3 ],
//         [ 4, 5, 6 ],
//         [ 7, 8, 9 ]
//     ]
// You should return [1,2,3,6,9,8,7,4,5]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 * Runtime: 92 ms
 * Beats: 95.61%
 */
var spiralOrder = function(matrix) {
    if (!matrix || !matrix[0]) return [];
    let arr = [], m = matrix.length, n = matrix[0].length;
    _spiralOrder(matrix);
    return arr;

    function _spiralOrder(matrix) {
        if (!matrix || !matrix[0]) return;
        arr = arr.concat(matrix[0]);
        matrix.shift();
        for (let i=0; i<matrix.length-1; i++) {
            if (matrix[i].length) {
                arr.push(matrix[i][matrix[i].length-1]);
                matrix[i].pop();
            }
        }
        if(!matrix.length) return;
        arr = arr.concat(matrix[matrix.length-1].reverse());
        matrix.pop();
        for (let i=matrix.length-1; i>=0; i--) {
            if (matrix[i].length) {
                arr.push(matrix[i][0]);
                matrix[i].shift();
            }
        }
        _spiralOrder(matrix);
    }
};
