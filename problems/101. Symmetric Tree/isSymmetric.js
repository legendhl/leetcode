// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
// 1
// / \
// 2   2
// / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
// 1
// / \
// 2   2
// \   \
// 3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * Runtime: 135 ms
 * Beats: 38.66%
 */
var isSymmetric = function(root) {
    if (!root) return true;
    return _isSymmtric(root.left, root.right);

    function _isSymmtric(left, right) {
        if (left === null && right === null) {
            return true;
        }
        if (left === null || right === null) {
            return false;
        }
        if (left.val !== right.val) {
            return false;
        }
        return _isSymmtric(left.left, right.right) && _isSymmtric(left.right, right.left);
    }
};
