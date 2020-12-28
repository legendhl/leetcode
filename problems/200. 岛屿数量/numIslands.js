/**
 * @param {character[][]} grid
 * @return {number}
 * 执行用时： 112 ms , 在所有 JavaScript 提交中击败了 24.13% 的用户
 */
var numIslands = function(grid) {
  let count = 0;
  let m = grid.length;
  let n = grid[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++;
        dfs(i, j);
      }
    }
  }
  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return;
    }
    if (grid[x][y] !== '1') {
      return;
    }
    grid[x][y] = 'X';
    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x - 1, y);
    dfs(x, y - 1);
  }
  return count;
};
