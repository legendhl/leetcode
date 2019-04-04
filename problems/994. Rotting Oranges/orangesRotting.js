/**
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example 1:
Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

Note:

1 <= grid.length <= 10
1 <= grid[0].length <= 10
grid[i][j] is only 0, 1, or 2.
 */
/**
 * @param {number[][]} grid
 * @return {number}
 * Runtime: 72 ms, faster than 96.15%
 * Memory Usage: 38 MB, less than 19.72%
 */
var orangesRotting = function (grid) {
    let steps = 0;
    let row = grid.length;
    let column = grid[0].length;
    let rotten = [];
    let freshCount = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === 2) {
                rotten.push([i, j])
            } else if (grid[i][j] === 1) {
                freshCount++;
            }
        }
    }
    while (rotten.length) {
        let times = rotten.length;
        while (times--) {
            let orange = rotten.shift();
            let i = orange[0];
            let j = orange[1];
            for (let pos of [[i - 1, j], [i, j - 1], [i + 1, j], [i, j + 1]]) {
                if (pos[0] >= 0 && pos[0] < row && pos[1] >= 0 && pos[1] < column && grid[pos[0]][pos[1]] === 1) {
                    grid[pos[0]][pos[1]] = 2;
                    freshCount--;
                    rotten.push(pos);
                }
            }
        }
        if (rotten.length) {
            steps++;
        }
    }
    return freshCount > 0 ? -1 : steps;
};