/**
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 72 ms
 * Beats: 27.56%
 */
var moveZeroes = function (nums) {
    let len = nums.length;
    if (len <= 0) {
        return;
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] !== 0) {
            continue;
        }
        let j = i;
        for (; j < len; j++) {
            if (nums[j] === 0) {
                continue;
            } else {
                break;
            }
        }
        if (j > i && j < len) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
        } else {
            break;
        }
    }
};