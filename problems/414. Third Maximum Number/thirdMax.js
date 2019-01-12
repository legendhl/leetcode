/**
Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 88 ms
 * Beats: 23.64%
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => b - a);
    let idx = 2;
    let len = nums.length;
    for (let i = 1; i < len && i <= idx; i++) {
        if (nums[i] === nums[i - 1]) {
            idx++;
        }
    }
    return idx >= len ? nums[0] : nums[idx];
};