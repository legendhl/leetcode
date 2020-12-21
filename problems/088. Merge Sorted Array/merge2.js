// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 说明：

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Runtime: 76 ms
 * Beats: 92.15%
 */
var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let pos = m + n - 1;
  while (j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[pos--] = nums1[i];
      nums1[i--] = 0;
    } else {
      nums1[pos--] = nums2[j--];
    }
  }
};
