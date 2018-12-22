/**
 * @param {number} n
 * @return {string}
 * Runtime: 48 ms
 * Beats: 100%
 */
var convertToTitle = function (n) {
    let s = ''
    while (n) {
        let m = n % 26;
        let c = '';
        n = Math.floor(n / 26);
        if (m === 0) {
            c = 'Z';
            n--;
        } else {
            c = String.fromCharCode(64 + m);
        }
        s = c + s;
    }
    return s;
};
