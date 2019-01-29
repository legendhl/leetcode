/**
Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself. If a cell has less than 8 surrounding cells, then use as many as you can.

Example 1:
Input:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
Output:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
Explanation:
For the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
For the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
For the point (1,1): floor(8/9) = floor(0.88888889) = 0
Note:
The value in the given matrix is in the range of [0, 255].
The length and width of the given matrix are in the range of [1, 150].
 */
/**
 * @param {number[][]} M
 * @return {number[][]}
 * Runtime: 192 ms
 * Beats: 22.22%
 */
var imageSmoother = function (M) {
    let matrix = [];
    let row = M.length;
    let column = M[0].length;
    let pos = [[-1, -1], [-1, 0], [-1, 1],
            [0, -1], [0, 0], [0, 1],
            [1, -1], [1, 0], [1, 1]];
    for (let i = 0; i < row; i++) {
        matrix[i] = [];
        for (let j = 0; j < column; j++) {
            let count = 0;
            let sum = 0;
            [count, sum] = pos.reduce((acc, cur) => {
                let x = cur[0] + i;
                let y = cur[1] + j;
                if (x < row && x >= 0 && y < column && y >= 0) {
                    acc[0]++;
                    acc[1] += M[x][y];
                }
                return acc;
            }, [count, sum]);
            matrix[i][j] = Math.floor(sum / count);
        }
    }
    return matrix;
};