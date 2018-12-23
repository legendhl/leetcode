/**
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: [-1,-100,3,99] and k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
Note:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * Runtime: 64 ms
 * Beats: 96.25%
 */
var rotate = function (nums, k) {
    let count = 0;
    let i = 0;
    let len = nums.length;
    while (count < len) {
        let tmpIdx = i;
        let tmpValue = nums[tmpIdx];
        do {
            let idx = (tmpIdx + k) % len;
            let tmp = nums[idx];
            nums[idx] = tmpValue;
            tmpValue = tmp;
            tmpIdx = idx;
            count++;
        } while (tmpIdx != i)
        i++;
    }
};