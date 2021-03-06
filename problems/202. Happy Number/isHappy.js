/**
Write an algorithm to determine if a number is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Example: 

Input: 19
Output: true
Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
 */
/**
 * @param {number} n
 * @return {boolean}
 * Runtime: 76 ms
 * Beats: 25.30%
 */
var isHappy = function (n) {
    let loop = [n];
    while (n != 1) {
        n = squareSum(n);
        if (loop.indexOf(n) >= 0) {
            return false;
        }
        loop.push(n);
    }
    return true;

    function squareSum(n) {
        let sum = 0;
        while (n) {
            let m = n % 10;
            sum += m * m;
            n = (n - m) / 10;
        }
        return sum;
    }
};