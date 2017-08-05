// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.
// pre: a b d c e f
// in: d b a e c f

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * Runtime: 185 ms
 * Beats: 46.67%
 */
var buildTree = function(preorder, inorder) {
    let idx = 0, len = preorder.length;
    return _buildTree(0, len-1);
    
    function _buildTree(l, r) {
        if (idx >= len || l > r) {
            return null;
        }
        let val = preorder[idx++];
        let node = new TreeNode(val);
        let pos = inorder.indexOf(val);
        node.left = _buildTree(l, pos-1);
        node.right = _buildTree(pos+1, r);
        return node;
    }
};
