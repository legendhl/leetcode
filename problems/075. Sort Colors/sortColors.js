// Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

// Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

// Note:
// You are not suppose to use the library's sort function for this problem.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 102 ms
 * Beats: 97.76%
 */
var sortColors = function(nums) {
    let l = 0, r, len = nums.length;
    for (let i=0; i<len; i++) {
        if (nums[i] < 1) {
            swap(nums, i, l++);
        }
    }
    r = l;
    for (let i=r; i<len; i++) {
        if (nums[i] === 1) {
            swap(nums, i, r++);
        }
    }
    
    function swap(l, i, j) {
        let t = l[i];
        l[i] = l[j];
        l[j] = t;
    }
};
