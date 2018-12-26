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