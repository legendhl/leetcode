/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let arr = [];
    n *= 2;
    function gen (i, val, leftN, str) {
        if (i < n) {
            if (val === 0) {
                gen(i+1, val+1, leftN+1, str+'(');
            } else if (leftN === n/2) {
                gen(i+1, val-1, leftN, str+')');
            } else {
                gen(i+1, val+1, leftN+1, str+'(');
                gen(i+1, val-1, leftN, str+')');
            }
        } else if (val === 0) {
            arr.push(str);
        }
    }
    gen(1, 1, 1, '(');
    return arr;
};