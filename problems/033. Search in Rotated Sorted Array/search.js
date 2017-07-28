// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.
// 4 5 6 7 0 1 2
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return _search(0, nums.length-1);

    function _search(l, r) {
        if (l > r) return -1;
        let m = Math.floor((l+r)/2), idx1, idx2;
        if (nums[l] <= nums[r]) {   //left 
            return _bisearch(l, r);
        }
        if (nums[l] <= nums[m]) {   //left part sorted
            idx1 = _bisearch(l, m);
            idx2 = _search(m+1, r);
        } else {
            idx1 = _bisearch(m+1, r);
            idx2 = _search(l, m);
        }
        if (idx1 !== -1) return idx1;
        return idx2;
    }

    function _bisearch(l, r) {
        while (l <= r) {
            let m = Math.floor((l+r)/2);
            if (nums[m] === target) return m;
            else if (nums[m] < target) l = m+1;
            else r = m-1;
        }
        return -1;
    }
};