// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Runtime: 122 ms
 * Beats: 32.11%
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0, j = 0;
    nums1.splice(m, nums1.length-m);
    while (i < m+j && j < n) {
        if (nums1[i] >= nums2[j]) {
            nums1.splice(i, 0, nums2[j]);
            j++;
        }
        i++;
    }
    for (; j<n; j++) {
        nums1.push(nums2[j]);
    }
};
