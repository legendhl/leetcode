// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
// 3
// / \
// 9  20
// /  \
// 15   7
// return its bottom-up level order traversal as:
// [
//     [15,7],
//     [9,20],
//     [3]
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
 * Beats: 54.29%
 */
var levelOrderBottom = function(root) {
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
            res.unshift(cur);
            cur = [];
            curCount = queue.length;
        }
    }
    return res;
};
