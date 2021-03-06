// Given a set of distinct integers, nums, return all possible subsets.
//
// Note: The solution set must not contain duplicate subsets.
//
// For example,
// If nums = [1,2,3], a solution is:
//
// [
//     [3],
//     [1],
//     [2],
//     [1,2,3],
//     [1,3],
//     [2,3],
//     [1,2],
//     []
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 132 ms
 * beats: 22.31%
 */
var subsets = function(nums) {
    let arr = [];
    _subsets([], 0);
    return arr;
    function _subsets(list, idx) {
        let l = Array.from(list);
        arr.push(l);
        for (let i=idx; i<nums.length; i++) {
            list.push(nums[i]);
            _subsets(list, i+1);
            list.pop();
        }
    }
};
