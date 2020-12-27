// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let ans = [];
  let per = nums.slice();
  let n = nums.length;
  backtrack(0);
  function backtrack(index) {
    if (index === n) {
      ans.push(per.slice());
    }
    for (let i = index; i < n; i++) {
      [per[i], per[index]] = [per[index], per[i]];
      backtrack(index + 1);
      [per[i], per[index]] = [per[index], per[i]];
    }
  }
  return ans;
};
