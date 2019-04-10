/**
On a N * N grid, we place some 1 * 1 * 1 cubes that are axis-aligned with the x, y, and z axes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).

Now we view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3 dimensional figure to a 2 dimensional plane. 

Here, we are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

Return the total area of all three projections.

Example 1:
Input: [[2]]
Output: 5

Example 2:
Input: [[1,2],[3,4]]
Output: 17
Explanation: 
Here are the three projections ("shadows") of the shape made with each axis-aligned plane.

Example 3:
Input: [[1,0],[0,2]]
Output: 8

Example 4:
Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: 14

Example 5:
Input: [[2,2,2],[2,1,2],[2,2,2]]
Output: 21

Note:

1 <= grid.length = grid[0].length <= 50
0 <= grid[i][j] <= 50
1,1,1
1,0,1
1,1,1
 */
/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 64 ms, faster than 79.61%
 * Memory Usage: 34.8 MB, less than 55.56%
 */
var projectionArea = function (grid) {
    let xArea = 0;
    let yArea = 0;
    let zArea = 0;
    let x = grid.length;
    let y = grid[0].length; x
    for (let j = 0; j < y; j++) {
        let max = 0;
        for (let i = 0; i < x; i++) {
            if (grid[i][j] > max) {
                max = grid[i][j];
            }
        }
        xArea += max;
    }
    for (let i = 0; i < x; i++) {
        let max = 0;
        for (let j = 0; j < y; j++) {
            let val = grid[i][j];
            zArea += val ? 1 : 0;
            if (val > max) {
                max = val;
            }
        }
        yArea += max;
    }
    return xArea + yArea + zArea;
};