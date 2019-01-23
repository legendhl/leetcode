/**
Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.
Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7
Output: [3, 14.5, 11]
Explanation:
The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
Note:
The range of node's value is in the range of 32-bit signed integer.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * Runtime: 92 ms
 * Beats: 20.81%
 */
var averageOfLevels = function (root) {
    let averages = [];
    if (!root) {
        return averages;
    }
    let level = [root];
    while (level.length) {
        let temp = [];
        let average = level.reduce((total, cur) => total + cur.val, 0) / level.length;
        averages.push(average);
        while (level.length) {
            let node = level.shift();
            if (node.left) {
                temp.push(node.left);
            }
            if (node.right) {
                temp.push(node.right);
            }
        }
        level = temp;
    }
    return averages;
};