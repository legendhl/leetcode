/**
Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:
Input: [1,2,3]
Output: 6
Example 2:
Input: [1,2,3,4]
Output: 24
Note:
The length of the given array will be in range [3,104] and all elements are in the range [-1000, 1000].
Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.
 */
/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 128 ms
 * Beats: 17.82%
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let maximum = nums[len - 1];
    let p1 = nums[0] * nums[1];
    let p2 = nums[len - 3] * nums[len - 2];
    maximum *= Math.max(p1, p2);
    return maximum;
};