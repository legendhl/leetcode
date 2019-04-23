/**
Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

Example:

Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
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
 * @return {TreeNode}
 * Runtime: 92 ms, faster than 99.72%
 * Memory Usage: 40.1 MB, less than 51.72%
 */
var convertBST = function (root) {
    let sum = 0;
    traverse(root);
    return root;

    function traverse(node) {
        if (!node) return;
        if (node.right) traverse(node.right);
        sum += node.val;
        node.val = sum;
        if (node.left) traverse(node.left);
    }
};