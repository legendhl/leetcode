// Given n, how many structurally unique BST's (binary search trees) that store values 1...n?
//
// For example,
// Given n = 3, there are a total of 5 unique BST's.
//
// 1         3     3      2      1
// \       /     /      / \      \
// 3     2     1      1   3      2
// /     /       \                 \
// 2     1         2                 3

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    // 0=>1
    // 1=>1
    // 2=>2 s[0]*s[1]+s[0]*s[1]
    // 3=>5 s[0]*s[2]+s[1]*s[1]+s[2]*s[0]
    // 4=>14 s[0]*s[3]+s[1]*s[2]+s[1]*s[2]+s[0]*s[3]
    // 5=>42 s[0]*s[4]+s[1]*s[3]+s[2]*s[2]+s[1]*s[3]+s[0]*s[4]
    let s = new Array(n+1).fill(0);
    s[0] = s[1] = 1;
    for (let i=2; i<=n; i++) {
        for (let j=0; j<i; j++) {
            s[i] += s[j]*s[i-1-j];
        }
    }
    return s[n];
};
