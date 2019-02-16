/**
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

Example 1:
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
Example 2:
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
Note:
cost will have a length in the range [2, 1000].
Every cost[i] will be an integer in the range [0, 999].
 */
/**
 * @param {number[]} cost
 * @return {number}
 * Runtime: 80 ms, faster than 36.18%
 * Memory Usage: 35.5 MB, less than 100.00%
 */
var minCostClimbingStairs = function (cost) {
    let len = cost.length;
    let min = Array(len);
    min[len - 1] = cost[len - 1];
    min[len - 2] = cost[len - 2];
    for (let i = len - 3; i >= 0; i--) {
        min[i] = Math.min(min[i + 1], min[i + 2]) + cost[i];
    }
    return Math.min(min[0], min[1]);
};