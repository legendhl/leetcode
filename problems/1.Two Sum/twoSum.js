/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time O(n2)
 * Space O(1)
 */
var twoSum = function(nums, target) {
    let len = nums.length;
    for (let i=0; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};