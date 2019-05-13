/* The guess API is defined in the parent class GuessGame.
   @param num, your guess
   @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
      int guess(int num); */
/**
 * @param n
 * @return
 * Runtime: 0 ms, faster than 100.00%
 * Memory Usage: 32 MB, less than 100.00%
 */

public class Solution extends GuessGame {
    private int _guessNumber(int begin, int end) {
        int p = begin + (end - begin) / 2;
        int res = guess(p);
        if (res == 0) {
            return p;
        } else if (res == 1) {
            return this._guessNumber(p + 1, end);
        } else {
            return this._guessNumber(begin, p - 1);
        }
    }
    public int guessNumber(int n) {
        return this._guessNumber(1, n);
    }
}