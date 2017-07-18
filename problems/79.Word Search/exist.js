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
 * Runtime: 182 ms
 * Beats: 12.28%
 */
var exist = function(board, word) {
    if (!Array.isArray(board)) return false;
    let m = board.length, n = (board[0]||'').length, path = [];
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (board[i][j] === word[0]) {
                let res = _find(i, j, 0);
                if (res) return true;
            }
        }
    }
    return false;

    function _find(x, y, idx) {
        if (idx >= word.length) return true;
        for (let i=0; i<path.length; i++) {
            if (path[i][0] === x && path[i][1] === y)
                return false;
        }
        if (x < 0 || y < 0 || x >= m || y >= n) {
            return false;
        }
        if (board[x][y] === word[idx]) {
            path.push([x,y]);
            let res = _find(x-1, y, idx+1) || _find(x, y+1, idx+1) || _find(x+1, y, idx+1) || _find(x, y-1, idx+1);
            path.pop();
            return res;
        }
        return false;
    }
};
