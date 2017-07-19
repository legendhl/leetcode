// Given a collection of numbers that might contain duplicates, return all possible unique permutations.
//
// For example,
// [1,1,2] have the following unique permutations:
// [
//     [1,1,2],
//     [1,2,1],
//     [2,1,1]
// ]
/**
 * @param {number[]} nums
 * @return {number[][]}
 * Runtime: 179 ms
 * Beats: 34.43%
 */
var permuteUnique = function(nums) {
    function swap(l, i, j) {
        let t = l[i];
        l[i] = l[j];
        l[j] = t;
    }

    if (!nums || !nums.length) return [[]];
    let arr = [], n = nums.length, p = n-1;
    nums.sort();
    addArray(arr, nums);

    while (p !== 0) {
        let k;
        for (p=n-1; p>0 && nums[p]<=nums[p-1]; p--) {
        }
        if (p === 0) break;
        for (k=p; k<n && nums[k]>nums[p-1]; k++) {
        }
        k--;
        swap(nums, p-1, k);
        for (let i=p, j=n-1; i<j; i++, j--) {
            swap(nums, i, j);
        }
        addArray(arr, nums);
    }

    return arr;

    function addArray(arr, list) {
        arr.push(Array.from(list));
    }
};
