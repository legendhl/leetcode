/**
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.

For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2

return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
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
 * Runtime: 76 ms, faster than 88.79%
 * Memory Usage: 40.7 MB, less than 96.43%
 */
var findMode = function (root) {
    let res = [];
    let max = 0;
    let last = null;
    let cur = 0;
    if (!root) return res;
    dfs(root);
    return res;

    function dfs(node) {
        if (node.left) {
            dfs(node.left);
        }
        if (node.val !== last) {
            cur = 1;
            last = node.val;
        } else {
            cur++;
        }
        if (cur > max) {
            max = cur;
            res = [node.val];
        } else if (cur === max) {
            res.push(node.val);
        }
        if (node.right) {
            dfs(node.right);
        }
    }
};