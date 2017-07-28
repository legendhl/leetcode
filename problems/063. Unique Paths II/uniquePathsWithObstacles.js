// Follow up for "Unique Paths":
//
// Now consider if some obstacles are added to the grids. How many unique paths would there be?
//
// An obstacle and empty space is marked as 1 and 0 respectively in the grid.
//
// For example,
// There is one obstacle in the middle of a 3x3 grid as illustrated below.
//
// [
//     [0,0,0],
//     [0,1,0],
//     [0,0,0]
// ]
// The total number of unique paths is 2.
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 * Runtime: 112 ms
 * Beats: 28.00%
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length, s = new Array(m);
    for (let i=0; i<m; i++) {
        s[i] = new Array(n).fill(0);
    }
    s[m-1][n-1] = 1-obstacleGrid[m-1][n-1];
    for (let i=m-2; i>=0; i--) {
        s[i][n-1] = (obstacleGrid[i][n-1] === 1 || s[i+1][n-1] === 0) ? 0 : 1;
    }
    for (let j=n-2; j>=0; j--) {
        s[m-1][j] = (obstacleGrid[m-1][j] === 1 || s[m-1][j+1] === 0) ? 0 : 1;
    }
    for (let i=m-2; i>=0; i--) {
        for (let j=n-2; j>=0; j--) {
            s[i][j] = obstacleGrid[i][j] === 1 ? 0 : s[i+1][j] + s[i][j+1];
        }
    }
    return s[0][0];
};
