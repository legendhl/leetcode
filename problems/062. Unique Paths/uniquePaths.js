// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
//
// How many possible unique paths are there?

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 * Runtime: 112 ms
 * Beats: 25.78%
 */
var uniquePaths = function(m, n) {
    let s = new Array(m);
    for (let i=0; i<m; i++) {
        s[i] = new Array(n).fill(0);
    }
    for (let i=0; i<m; i++) {
        s[i][n-1] = 1;
    }
    for (let j=0; j<n; j++) {
        s[m-1][j] = 1;
    }
    s[m-1][n-1] = 0;
    for (let i=m-2; i>=0; i--) {
        for (let j=n-2; j>=0; j--) {
            s[i][j] = s[i+1][j] + s[i][j+1];
        }
    }
    return s[0][0] || 1;
};
