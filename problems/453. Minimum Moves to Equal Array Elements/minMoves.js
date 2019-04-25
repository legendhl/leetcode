/**
Given a non-empty integer array of size n, find the minimum number of moves required to make all array elements equal, where a move is incrementing n - 1 elements by 1.

Example:

Input:
[1,2,3]

Output:
3

Explanation:
Only three moves are needed (remember each move increments two elements):

[1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 */
/**
 * @param {number[]} nums
 * @return {number}
 * Runtime: 84 ms, faster than 56.93%
 * Memory Usage: 37.3 MB, less than 60.00%
 */
var minMoves = function (nums) {
    let moves = 0;
    let len = nums.length;
    if (len === 0) return moves;
    let min = nums[0];
    for (let i = 1; i < len; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    for (let i = 0; i < len; i++) {
        moves += nums[i] - min;
    }
    return moves;
};