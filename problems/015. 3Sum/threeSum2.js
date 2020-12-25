// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
// Note: The solution set must not contain duplicate triplets.
//
// For example, given array S = [-1, 0, 1, 2, -1, -4],
//
// A solution set is:
// [
//     [-1, 0, 1],
//     [-1, -1, 2]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 432 ms
 * Beats: 33.33%
 */
var threeSum = function(nums) {
  let n = nums.length;
  nums.sort((a, b) => {
    return a - b;
  });
  let ans = [];
  for (let first = 0; first < n; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue;
    }
    let second = first + 1;
    let third = n - 1;
    let target = -nums[first];
    while (second < third) {
      while (second > first + 1 && nums[second] === nums[second - 1]) {
        second++;
      }
      while (third < n - 1 && nums[third] === nums[third + 1]) {
        third--;
      }
      if (second >= third) break;
      let sum = nums[second] + nums[third];
      if (sum === target) {
        ans.push([nums[first], nums[second], nums[third]]);
        second++;
        third--;
      } else if (sum > target) {
        third--;
      } else {
        second++;
      }
    }
  }
  return ans;
};
