// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// For example:
// A = [2,3,1,1,4], return true.

// A = [3,2,1,0,4], return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 * Runtime: 112 ms
 * Beats: 63.81%
 */
var canJump = function(nums) {
    if (!nums || !nums.length) return false;
    let reaches = new Array(nums.length).fill(false), lastCan = nums.length-1;
    reaches[lastCan] = true;
    for (let i=nums.length-2; i>=0; i--) {
        if (i+nums[i] >= lastCan) {
            lastCan = i;
            reaches[lastCan] = true;
        }
    }
    return reaches[0];
};
