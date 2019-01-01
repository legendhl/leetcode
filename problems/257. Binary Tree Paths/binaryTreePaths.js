/**
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 * Runtime: 56 ms
 * Beats: 100%
 */
var binaryTreePaths = function (root) {
    if (!root) return [];
    let path = [];
    let res = [];
    _traverse(root);
    return res;

    function _traverse(root) {
        path.push(root);
        if (root.left) {
            _traverse(root.left);
        }
        if (root.right) {
            _traverse(root.right);
        }
        if (!root.left && !root.right) {
            _print();
        }
        path.pop();
    }
    function _print() {
        let str = path.map(node => node.val).join('->');
        res.push(str);
    }
};