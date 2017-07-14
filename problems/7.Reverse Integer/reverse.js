/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = x, target = 0;
    while (num) {
        let n = num%10;
        target = target*10+n;
        num = (num-n)/10;
    }
    return (target > 2147483647 || target < -2147483647) ? 0 : target;
};