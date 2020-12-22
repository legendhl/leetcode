// 给你一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

// 返回滑动窗口中的最大值。

// 示例 1：
// 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
// 输出：[3,3,5,5,6,7]
// 解释：
// 滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let deque = [];
  let res = [];
  let len = nums.length;
  for (let i = 0; i < k; i++) {
    while (deque.length !== 0 && nums[i] > deque[deque.length - 1]) {
      deque.pop();
    }
    deque.push(nums[i]);
  }
  res.push(deque[0]);
  for (let i = 0; i < len - k; i++) {
    let numIndex = i + k;
    if (res[i] === nums[i]) {
      deque.shift();
    }
    while (deque.length !== 0 && nums[numIndex] > deque[deque.length - 1]) {
      deque.pop();
    }
    deque.push(nums[numIndex]);
    res.push(deque[0]);
  }
  return res;
};
