/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time O(n)
 * Space O(1)
 */
var twoSum = function(nums, target) {
    let map = {}, len = nums.length;
    for (let i=0; i<len; i++) {
        if (map[nums[i]]) {
            map[nums[i]].push(i);
        } else {
            map[nums[i]] = [i];
        }
    }
    for (let i=0; i<len; i++) {
        let n = target - nums[i];
        if (map[n]) {
            for (let j=0; j<map[n].length; j++) {
                if (map[n][j] !== i) {
                    return [i, map[n][j]];
                }
            }
        }
    }
};