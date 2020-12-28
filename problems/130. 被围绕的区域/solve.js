/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 执行用时： 96 ms , 在所有 JavaScript 提交中击败了 96.97% 的用户
 */
var solve = function(board) {
  let m = board.length;
  let n = (board[0] || []).length;
  for (let i = 0; i < n; i++) {
    dfs(0, i);
    dfs(m - 1, i);
  }
  for (let i = 1; i < m - 1; i++) {
    dfs(i, 0);
    dfs(i, n - 1);
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === 'o') {
        board[i][j] = 'O';
      }
    }
  }
  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return;
    }
    if (board[x][y] !== 'O') {
      return;
    }
    board[x][y] = 'o';
    dfs(x + 1, y);
    dfs(x, y + 1);
    dfs(x - 1, y);
    dfs(x, y - 1);
  }
};
