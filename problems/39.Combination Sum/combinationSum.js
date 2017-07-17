// Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.
//
// The same repeated number may be chosen from C unlimited number of times.
//
// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is:
// [
//     [7],
//     [2, 2, 3]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let arr = [];
    _combinationSum([], candidates, target);
    function _combinationSum(list, candidates, target) {
        if (target === 0) {
            let l = Array.from(list);
            arr.push(l);
            return;
        }
        for (let i=0; i<candidates.length; i++) {
            if (candidates[i] > target) continue;
            if (list.length && candidates[i] < list[list.length-1]) continue;
            list.push(candidates[i]);
            _combinationSum(list, candidates, target-candidates[i]);
            list.pop();
        }
    }
    return arr;
};
