/**
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:
 */
/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 244 ms
 * Beats: 20.55%
 */
var islandPerimeter = function (grid) {
    let perimeter = 0;
    let row = grid.length;
    let column = grid[0].length;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            perimeter += getPerimeter(i, j, grid, row, column);
        }
    }
    return perimeter;

    function getPerimeter(i, j, grid, row, column) {
        let perimeter = 0;
        if (grid[i][j] === 0) return perimeter;
        if (i === 0 || grid[i - 1][j] === 0) perimeter++;
        if (i === row - 1 || grid[i + 1][j] === 0) perimeter++;
        if (j === 0 || grid[i][j - 1] === 0) perimeter++;
        if (j === column - 1 || grid[i][j + 1] === 0) perimeter++;
        return perimeter;
    }
};