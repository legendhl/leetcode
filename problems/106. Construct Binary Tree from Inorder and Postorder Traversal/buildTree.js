// Given inorder and postorder traversal of a tree, construct the binary tree.

// Note:
// You may assume that duplicates do not exist in the tree.
// post: 4 2 5 6 3 1
// in: 4 2 1 5 3 6

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * Runtime: 139 ms
 * Beats: 97.50%
 */
var buildTree = function(inorder, postorder) {
    let len = inorder.length, idx = len-1;
    return _buildTree(0, len-1);
    
    function _buildTree(l, r) {
        if (idx < 0 || l > r) {
            return null;
        }
        let val = postorder[idx--];
        let node = new TreeNode(val);
        let pos = inorder.indexOf(val);
        node.right = _buildTree(pos+1, r);
        node.left = _buildTree(l, pos-1);
        return node;
    }
};
