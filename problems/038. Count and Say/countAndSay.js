/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = '1';
    for (let i=1; i<n; i++) {
        let s = '', last = str[0], count = 1;
        for (let j=1; j<str.length; j++) {
            if (str[j] === last) {
                count++;
            } else {
                s += count + '' + last;
                last = str[j];
                count = 1;
            }
        }
        s += count + '' + last;
        str = s;
    }
    return str;
};