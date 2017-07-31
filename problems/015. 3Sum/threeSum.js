// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note: The solution set must not contain duplicate triplets.
//
// For example, given array S = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//     [-1, 0, 1],
//     [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 432 ms
 * Beats: 33.33%
 */
var threeSum = function(nums) {
    let res = [], map = {};
    if (nums.length < 3) return res;
    nums.sort((a,b) => {return a-b;});
    for (let i=0; i<nums.length; i++) {
        let l = twoSum(nums, i, -nums[i]);
        for (let j=0; j<l.length; j++) {
            let key = l[j].join('');
            if (!map[key]) {
                map[key] = true;
                res.push(l[j]);
            }
        }
    }
    return res;

    function twoSum(nums, except, target) {
        let l = [], len = nums.length;
        for (let i=except+1, j=len-1; i<j; ) {
            if (target === nums[i] + nums[j]) {
                l.push([nums[except], nums[i], nums[j]]);
                i++;
                while(i<j && nums[i] === nums[i-1]) {
                    i++;
                }
                j--;
                while(i<j && nums[j] === nums[j+1]) {
                    j--;
                }
            } else if (target < nums[i] + nums[j]) {
                j--;
                while(i<j && nums[j] === nums[j+1]) {
                    j--;
                }
            } else {
                i++;
                while(i<j && nums[i] === nums[i-1]) {
                    i++;
                }
            }
        }
        return l;
    }
};
