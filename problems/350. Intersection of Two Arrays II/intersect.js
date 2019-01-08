/**
Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Runtime: 60 ms
 * Beats: 62.67%
 */
var intersect = function (nums1, nums2) {
    let hash = {};
    let num = [];
    let len1 = nums1.length;
    let len2 = nums2.length;
    if (len1 === 0 || len2 === 0) {
        return num;
    }
    let longNums = len1 >= len2 ? nums1 : nums2;
    let shortNums = len1 >= len2 ? nums2 : nums1;
    for (let n of shortNums) {
        hash[n] = hash[n] ? hash[n] + 1 : 1;
    }
    for (let n of longNums) {
        if (hash[n]) {
            num.push(n);
            hash[n]--;
        }
    }
    return num;
};