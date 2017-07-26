// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// For example,
// If n = 4 and k = 2, a solution is:

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 * Runtime: 259 ms
 * Beats: 50.00%
 */
var combine = function(n, k) {
    let m = [];
    if (k <= n) {
        _combine(1, new Array());
    }
    return m;
    function _combine(idx, l) {
        if (l.length === k) {
            m.push(Array.from(l));
            return;
        }
        for (let i=idx; i<=n; i++) {
            l.push(i);
            _combine(i+1, l);
            l.pop();
        }
    }
};
