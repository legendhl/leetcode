// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 115 ms
 * Beats: 99.48%
 */
var permute = function(nums) {
    function swap(l, i, j) {
        let t = l[i];
        l[i] = l[j];
        l[j] = t;
    }

    if (!nums || !nums.length) return [[]];
    let arr = [], n = nums.length, p = n-1, l = [], m = [];
    for (let i=0; i<nums.length; i++) {
        l.push(i);
        m.push(nums[i]);
    }
    arr.push(m);
    while (p !== 0) {
        let k;
        m = [];
        for (p=n-1; p>0 && l[p]<=l[p-1]; p--) {
        }
        if (p === 0) break;
        for (k=p; k<n && l[k]>l[p-1]; k++) {
        }
        k--;
        swap(l, p-1, k);
        for (let i=p, j=n-1; i<j; i++, j--) {
            swap(l, i, j);
        }
        for (let i=0; i<n; i++) {
            m.push(nums[l[i]]);
        }
        arr.push(m)
    }
    
    return arr;
};
