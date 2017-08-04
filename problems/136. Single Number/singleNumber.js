// Given an array of integers, every element appears twice except for one. Find that single one.

// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 116 ms
 * Beats: 41.62%
 */
var singleNumber = function(nums) {
    let num = 0;
    for (let i=0; i<nums.length; i++) {
        num ^= nums[i];
    }
    return num;
};
