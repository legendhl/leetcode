// Given an index k, return the kth row of the Pascal's triangle.

// For example, given k = 3,
// Return [1,3,3,1].

// Note:
// Could you optimize your algorithm to use only O(k) extra space?

/**
 * @param {number} rowIndex
 * @return {number[]}
 * Runtime: 122 ms
 * Beats: 15.38%
 */
var getRow = function(rowIndex) {
    if (rowIndex < 0) {
        return [];
    }
    let res = new Array(2);
    res[0] = new Array(rowIndex+1).fill(0);
    res[1] = new Array(rowIndex+1).fill(0);
    res[0][0] = 1;
    for (let i=1; i<=rowIndex; i++) {
        let cur = res[i%2], last = res[(i-1)%2];
        cur[0] = 1;
        cur[i] = 1;
        for (let k=1; k<i; k++) {
            cur[k] = last[k-1] + last[k];
        }
    }
    return res[rowIndex%2];
};
