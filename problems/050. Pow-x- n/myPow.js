// Implement pow(x, n).
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 * Runtime: 132 ms
 * Beats: 32.39%
 */
var myPow = function(x, n) {
    if (n < 0) {
        return 1/myPow(x, -n);
    }
    let base = x, res = 1;
    while (n) {
        if (n % 2 === 1) {
            res *= base;
        }
        n = Math.floor(n/2);
        base *= base;
    }
    return res;
};
