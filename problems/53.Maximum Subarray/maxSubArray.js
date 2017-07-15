/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let n = nums.length, s = new Array(n), max = nums[0];
    s[0] = nums[0];
    for (let i=0; i<n; i++) {
        s[i] = s[i-1] > 0 ? s[i-1] + nums[i] : nums[i];
        max = s[i] > max ? s[i] : max; 
    }
    return max;
};