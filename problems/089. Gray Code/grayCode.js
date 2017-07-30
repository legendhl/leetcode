// The gray code is a binary numeral system where two successive values differ in only one bit.

// Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

// For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:

// 00 - 0
// 01 - 1
// 11 - 3
// 10 - 2
// Note:
// For a given n, a gray code sequence is not uniquely defined.

// For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.

// For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.

/**
 * @param {number} n
 * @return {number[]}
 * Runtime: 118 ms
 * Beats: 29.41%
 */
var grayCode = function(n) {
    let res = [0], count = 1<<n, idx=1;
    for (let i=1; i<=n; i++) {
        let p = (1<<i), size = p>>1;
        for (; idx<p; idx++) {
            res[idx] = res[p-idx-1] + size;
        }
    }
    return res;
};
