/**
A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

Given an grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).

Example 1:

Input: [[4,3,8,4],
        [9,5,1,9],
        [2,7,6,2]]
Output: 1
Explanation: 
The following subgrid is a 3 x 3 magic square:
438
951
276

while this one is not:
384
519
762

In total, there is only one magic square inside the given grid.
Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
0 <= grid[i][j] <= 15
 */
/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 60 ms, faster than 92.77%
 * Memory Usage: 36.1 MB, less than 33.93%
 */
var numMagicSquaresInside = function (grid) {
    let row = grid.length;//3
    let column = grid[0].length;//4
    let count = 0;
    if (row < 3 || column < 3) return 0;
    for (let i = 0; i < row - 2; i++) {
        for (let j = 0; j < column - 2; j++) {
            if (isMagicSquare(grid, i, j)) {
                count++;
            }
        }
    }
    return count;

    function isMagicSquare(grid, i, j) {
        let numArr = new Array(9).fill(0);
        for (let x = i; x < i + 3; x++) {
            for (let y = j; y < j + 3; y++) {
                numArr[grid[x][y] - 1]++;
            }
        }
        for (let k = 0; k < numArr.length; k++) {
            if (numArr[k] !== 1) {
                return false;
            }
        }
        return grid[i][j] + grid[i][j + 1] + grid[i][j + 2] === 15 &&
            grid[i + 1][j] + grid[i + 1][j + 1] + grid[i + 1][j + 2] === 15 &&
            grid[i + 2][j] + grid[i + 2][j + 1] + grid[i + 2][j + 2] === 15 &&
            grid[i][j] + grid[i + 1][j] + grid[i + 2][j] === 15 &&
            grid[i][j + 1] + grid[i + 1][j + 1] + grid[i + 2][j + 1] === 15 &&
            grid[i][j + 2] + grid[i + 1][j + 2] + grid[i + 2][j + 2] === 15 &&
            grid[i][j] + grid[i + 1][j + 1] + grid[i + 2][j + 2] === 15 &&
            grid[i][j + 2] + grid[i + 1][j + 1] + grid[i + 2][j] === 15;
    }
};