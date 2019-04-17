/**
On a N * N grid, we place some 1 * 1 * 1 cubes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Return the total surface area of the resulting shapes.

Example 1:
Input: [[2]]
Output: 10

Example 2:
Input: [[1,2],[3,4]]
Output: 34

Example 3:
Input: [[1,0],[0,2]]
Output: 16

Example 4:
Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: 32

Example 5:
Input: [[2,2,2],[2,1,2],[2,2,2]]
Output: 46

Note:

1 <= N <= 50
0 <= grid[i][j] <= 50
 */
/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 76 ms, faster than 54.43%
 * Memory Usage: 34.9 MB, less than 100.00%
 */
var surfaceArea = function (grid) {
    let area = 0;
    let len = grid.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            area += grid[i][j] ? (grid[i][j] * 4 + 2) : 0;
            if (j + 1 < len) {
                area -= Math.min(grid[i][j], grid[i][j + 1]) * 2;
            }
            if (i + 1 < len) {
                area -= Math.min(grid[i][j], grid[i + 1][j]) * 2;
            }
        }
    }
    return area;
};