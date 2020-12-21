/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time O(n)
 * Space O(1)
 */
var twoSum = function(nums, target) {
  let map = new Map();
  for (let [i, v] of nums.entries()) {
    if (map.has(target - v)) {
      return [map.get(target - v), i];
    }
    map.set(v, i);
  }
};
