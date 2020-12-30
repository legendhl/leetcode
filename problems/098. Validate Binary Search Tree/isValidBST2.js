/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 执行用时： 68 ms , 在所有 JavaScript 提交中击败了 100.00% 的用户
 * 内存消耗： 41.9 MB , 在所有 JavaScript 提交中击败了 74.80% 的用户
 */
var isValidBST = function(root) {
  if (!root) {
    return true;
  }
  return (
    _isValidBST(root.left, -Infinity, root.val) &&
    _isValidBST(root.right, root.val, +Infinity)
  );

  function _isValidBST(root, left, right) {
    if (!root) {
      return true;
    }
    return (
      root.val > left &&
      root.val < right &&
      _isValidBST(root.left, left, root.val) &&
      _isValidBST(root.right, root.val, right)
    );
  }
};
