/**
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Note:

Each element in the result must be unique.
The result can be in any order.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 64 ms
 * Beats: 43.26%
 */
var intersection = function (nums1, nums2) {
    let hash = {};
    let num = [];
    for (let n of nums1) {
        hash[n] = true;
    }
    for (let n of nums2) {
        if (hash[n]) {
            num.push(n);
            hash[n] = false;
        }
    }
    return num;
};