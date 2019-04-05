/**
On an 8 x 8 chessboard, there is one white rook.  There also may be empty squares, white bishops, and black pawns.  These are given as characters 'R', '.', 'B', and 'p' respectively. Uppercase characters represent white pieces, and lowercase characters represent black pieces.

The rook moves as in the rules of Chess: it chooses one of four cardinal directions (north, east, west, and south), then moves in that direction until it chooses to stop, reaches the edge of the board, or captures an opposite colored pawn by moving to the same square it occupies.  Also, rooks cannot move into the same square as other friendly bishops.

Return the number of pawns the rook can capture in one move.

Example 1:
Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
In this example the rook is able to capture all the pawns.

Example 2:
Input: [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 0
Explanation: 
Bishops are blocking the rook to capture any pawn.

Example 3:
Input: [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
Output: 3
Explanation: 
The rook can capture the pawns at positions b5, d6 and f5.

Note:

board.length == board[i].length == 8
board[i][j] is either 'R', '.', 'B', or 'p'
There is exactly one cell with board[i][j] == 'R'
 */
/**
 * @param {character[][]} board
 * @return {number}
 * Runtime: 64 ms, faster than 24.36%
 * Memory Usage: 33.8 MB, less than 100.00%
 */
var numRookCaptures = function (board) {
    let pos = findRook(board);
    let row = board.length;
    let column = board[0].length;
    let count = 0;
    for (let dir of [[-1, 0], [0, -1], [1, 0], [0, 1]]) {
        let newPos = [pos[0] + dir[0], pos[1] + dir[1]];
        while (newPos[0] >= 0 && newPos[0] < row && newPos[1] >= 0 && newPos[1] < column) {
            let chess = board[newPos[0]][newPos[1]];
            if (chess === 'B') {
                break;
            } else if (chess === 'p') {
                count++;
                break;
            }
            newPos[0] += dir[0];
            newPos[1] += dir[1];
        }
    }
    return count;

    function findRook(board) {
        let pos = null;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[0].length; j++) {
                if (board[i][j] === 'R') {
                    pos = [i, j];
                    return pos;
                }
            }
        }
    }
};