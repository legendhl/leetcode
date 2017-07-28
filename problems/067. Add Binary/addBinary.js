/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    if (!a && !b) return '0';
    if (!a) return b;
    if (!b) return a;
    let s = '', i=a.length-1, j=b.length-1, carry = 0, n;
    for (let i=a.length-1, j=b.length-1; i>=0 || j>=0; i--, j--) {
        n = (i >= 0 ? +a[i] : 0) + (j >= 0 ? +b[j] : 0) + carry;
        s += n%2;
        carry = Math.floor(n/2);
    }
    if (carry) {
        s += carry + '';
    }
    s = s.split('').reverse().join('');
    return s;
};