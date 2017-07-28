// Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 105 ms
 * Beats: 83.56%
 */
var minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length;
    for (let i=m-2; i>=0; i--) {
        grid[i][n-1] += grid[i+1][n-1];
    }
    for (let j=n-2; j>=0; j--) {
        grid[m-1][j] += grid[m-1][j+1];
    }
    for (let i=m-2; i>=0; i--) {
        for (let j=n-2; j>=0; j--) {
            grid[i][j] += Math.min(grid[i+1][j], grid[i][j+1]);
        }
    }
    return grid[0][0];
};
