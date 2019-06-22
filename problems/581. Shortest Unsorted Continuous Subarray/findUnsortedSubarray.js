/**
Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length.

Example 1:
Input: [2, 6, 4, 8, 10, 9, 15]
Output: 5
Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
Note:
Then length of the input array is in range [1, 10,000].
The input array may contain duplicates, so ascending order here means <=.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 120 ms, faster than 23.77%
 * Memory Usage: 38.9 MB, less than 24.89%
 */
var findUnsortedSubarray = function (nums) {
    let sorted = nums.map(val => val).sort((a, b) => a - b);
    let len = nums.length;
    let i = 0;
    let j = len - 1;
    while (i < len && nums[i] === sorted[i]) {
        i++;
    }
    while (j > i && nums[j] === sorted[j]) {
        j--;
    }
    return j - i + 1;
};