// Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    function _search(l, r) {
        if (l > r) return [-1, -1];
        let p = Math.floor((l+r)/2);
        if (nums[p] < target) {
            return _search(p+1, r);
        } else if (nums[p] > target) {
            return _search(l, p-1);
        } else {
            return union([_search(l, p-1), [p, p], _search(p+1, r)]);
        }
    }
    function union(arr) {
        let l = arr[0];
        for (let i=1; i<arr.length; i++) {
            let m = arr[i];
            if (m[0] !== -1) {
                l[0] = l[0] === -1 ? m[0] : l[0];
                l[1] = m[1];
            }
        }
        return l;
    }
    return _search(0, nums.length-1);
};