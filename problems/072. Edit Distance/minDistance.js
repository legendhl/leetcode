// Given two words word1 and word2, find the minimum number of steps required to convert word1 to word2. (each operation is counted as 1 step.)
//
// You have the following 3 operations permitted on a word:
//
// a) Insert a character
// b) Delete a character
// c) Replace a character

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * Time: O(mn)
 * Space: O(mn)
 * Runtime: 149 ms
 * Beats: 80.49%
 */
var minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length, d = new Array(m);
    if (m === 0 || n === 0) return Math.max(m, n);
    for (let i=0; i<m; i++) {
        d[i] = new Array(n).fill(m+n);
    }
    d[0][0] = diff(word1[0], word2[0]);
    for (let i=1; i<m; i++) {
        d[i][0] = Math.min(d[i-1][0]+1, diff(word1[i], word2[0])+i);
    }
    for (let j=1; j<n; j++) {
        d[0][j] = Math.min(d[0][j-1]+1, diff(word1[0], word2[j])+j);;
    }
    for (let i=1; i<m; i++) {
        for (let j=1; j<n; j++) {
            d[i][j] = Math.min(d[i-1][j]+1, d[i][j-1]+1, diff(word1[i], word2[j])+d[i-1][j-1]);
        }
    }
    return d[m-1][n-1];

    function diff(char1, char2) {
        return char1 === char2 ? 0 : 1;
    }
};
