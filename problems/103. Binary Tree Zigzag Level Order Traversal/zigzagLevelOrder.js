// Given a binary tree, return the zigzag level order traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).

// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its zigzag level order traversal as:
// [
//   [3],
//   [20,9],
//   [15,7]
// ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * Runtime: 119 ms
 * Beats:45.00%
 */
var zigzagLevelOrder = function(root) {
    let dir = 1, queue = [root], p = null, line = [], numOfThisLevel = 1, res = [];
    while (queue.length) {
        p = queue.shift();
        if (p) {
            line.push(p.val);
            if (p.left) {
                queue.push(p.left);
            }
            if (p.right) {
                queue.push(p.right);
            }
        }        
        if (--numOfThisLevel === 0 && line.length) {
            res.push(dir === 1 ? line : line.reverse());
            dir = 1 - dir;
            line = [];
            numOfThisLevel = queue.length;
        }
    }
    return res;
};
