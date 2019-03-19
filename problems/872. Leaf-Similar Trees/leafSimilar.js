/**
Consider all the leaves of a binary tree.  From left to right order, the values of those leaves form a leaf value sequence.

For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar if their leaf value sequence is the same.

Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.

Note:

Both of the given trees will have between 1 and 100 nodes.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 * Runtime: 60 ms, faster than 89.46%
 * Memory Usage: 34.9 MB, less than 25.00%
 */
var leafSimilar = function (root1, root2) {
    let leaves1 = [];
    let leaves2 = [];
    traverse(root1, leaves1);
    traverse(root2, leaves2);
    if (leaves1.length !== leaves2.length) return false;
    for (let i = 0; i < leaves1.length; i++) {
        if (leaves1[i] !== leaves2[i]) return false;
    }
    return true;

    function traverse(root, arr) {
        if (!root) return;
        if (root.left) traverse(root.left, arr);
        if (!root.left && !root.right) {
            arr.push(root.val);
        }
        if (root.right) traverse(root.right, arr);
    }
};