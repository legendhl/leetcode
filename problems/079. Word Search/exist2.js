// Given a 2D board and a word, find if the word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
// For example,
// Given board =
//
// [
//     ['A','B','C','E'],
//     ['S','F','C','S'],
//     ['A','D','E','E']
// ]
// word = "ABCCED", -> returns true,
// word = "SEE", -> returns true,
// word = "ABCB", -> returns false.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 * 执行用时： 104 ms , 在所有 JavaScript 提交中击败了 92.54% 的用户
 */
var exist = function(board, word) {
  if (!Array.isArray(board)) return false;
  let m = board.length,
    n = board[0].length;
  let vis = Array.from(new Array(m), () => new Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let res = dfs(i, j, 0);
      if (res) return true;
    }
  }
  return false;

  function dfs(x, y, idx) {
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return false;
    }
    if (vis[x][y]) return false;
    if (board[x][y] !== word[idx]) return false;
    if (idx === word.length - 1) return true;
    vis[x][y] = true;
    let flag =
      dfs(x + 1, y, idx + 1) ||
      dfs(x, y + 1, idx + 1) ||
      dfs(x - 1, y, idx + 1) ||
      dfs(x, y - 1, idx + 1);
    vis[x][y] = false;
    return flag;
  }
};
