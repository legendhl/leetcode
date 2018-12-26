/**Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 * Runtime: 80 ms
 * Beats: 45.93%
 */
var containsNearbyDuplicate = function (nums, k) {
    if (k === 0) return false;
    let hash = {};
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let n = nums[i];
        if (i > k) {
            hash[nums[i - k - 1]] = false;
        }
        if (hash[n]) {
            return true;
        }
        hash[n] = true;
    }
    return false;
};