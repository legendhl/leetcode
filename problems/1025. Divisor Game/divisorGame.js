/**
Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number N on the chalkboard.  On each player's turn, that player makes a move consisting of:

Choosing any x with 0 < x < N and N % x == 0.
Replacing the number N on the chalkboard with N - x.
Also, if a player cannot make a move, they lose the game.

Return True if and only if Alice wins the game, assuming both players play optimally.

Example 1:
Input: 2
Output: true
Explanation: Alice chooses 1, and Bob has no more moves.

Example 2:
Input: 3
Output: false
Explanation: Alice chooses 1, Bob chooses 1, and Alice has no more moves.

Note:

1 <= N <= 1000
 */
/**
 * @param {number} N
 * @return {boolean}
 * Runtime: 64 ms, faster than 25.71%
 * Memory Usage: 34.6 MB, less than 100.00%
 */
var divisorGame = function (N) {
    let res = [false];
    for (let i = 2; i <= N; i++) {
        let idx = i - 1;
        if (res[idx - 1] === false) {
            res[idx] = true;
        } else {
            for (let x = 1; x < i; x++) {
                if (i % x === 0 && res[i - 1 - x] === false) {
                    res[idx] = true;
                    break;
                }
            }
            res[idx] = res[idx] || false;
        }
    }
    return res[N - 1];
};