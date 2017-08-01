// Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
// 3
// / \
// 9  20
// /  \
// 15   7
// return its level order traversal as:
// [
//     [3],
//     [9,20],
//     [15,7]
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
 * Runtime: 126 ms
 * Beats: 47.01%
 */
var levelOrder = function(root) {
    let queue = [root], curCount = 1, cur = [], res = [], p = null;
    while (p || queue.length) {
        p = queue.shift();
        if (p) {
            cur.push(p.val);
            if (p.left) {
                queue.push(p.left);
            }
            if (p.right) {
                queue.push(p.right);
            }
        }

        if (--curCount === 0 && cur.length) {
            res.push(cur);
            cur = [];
            curCount = queue.length;
        }
    }
    return res;
};
