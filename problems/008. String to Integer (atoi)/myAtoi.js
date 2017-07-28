/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num = parseInt(str) || 0;
    if (num > 2147483647) num = 2147483647;
    if (num < -2147483648) num = -2147483648;
    return num;
};