/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    let n = 0, t = x, p;
    while(t) {
        n++;
        t = Math.floor(t/10);
    }
    p = Math.pow(10, n-1);
    while (p > 1) {
        if (Math.floor(x/p) !== x%10) return false;
        x = Math.floor(x % p / 10);
        p /= 100;
    }
    return true;
};