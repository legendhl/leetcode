// Time Limit Exceeded

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) return 0;
    let p = new Array(s.length), str = s[0], len = 1;
    for (let i = 0; i < s.length; i++) {
        p[i] = new Array(s.length).fill(0);
        p[i][i] = 1;
    }
    for (let l = 1; l < s.length; l++) {
        for (let i = 0; i < s.length-l; i++) {
            let j = i + l;
            if ((j-i)%2 === 1) {
                if (j === i+1) {
                    p[i][j] = s[i] === s[j] ? 1 : 0;
                } else {
                    p[i][j] = (s[i] === s[j] && p[i+1][j-1] === 1) ? 1 : 0;
                }
            } else {
                p[i][j] = (s[i] === s[j] && p[i+1][j-1] === 1) ? 1 : 0;
            }
            if (p[i][j] && l+1 > len) {
                str = s.substring(i, j+1);
                len = l+1;
            }
        }
    }
    return str;
};