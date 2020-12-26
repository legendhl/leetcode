/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  let result = nums[0] + nums[1] + nums[2];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let first = 0; first < len; first++) {
    let second = first + 1;
    let third = len - 1;
    while (second < third) {
      let sum = nums[first] + nums[second] + nums[third];
      if (Math.abs(sum - target) <= Math.abs(result - target)) {
        result = sum;
      }
      if (sum === target) {
        return sum;
      } else if (sum < target) {
        second++;
      } else {
        third--;
      }
    }
  }
  return result;
};
