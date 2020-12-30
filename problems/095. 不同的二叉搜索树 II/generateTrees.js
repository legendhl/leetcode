/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 * 执行用时： 124 ms , 在所有 JavaScript 提交中击败了 19.05% 的用户
 * 内存消耗： 44.8 MB , 在所有 JavaScript 提交中击败了 17.27% 的用户
 */
var generateTrees = function(n) {
  if (n === 0) {
    return [];
  }
  let allTrees = _generateTrees(1, n);
  return allTrees;

  function _generateTrees(start, end) {
    let allTrees = [];
    if (start > end) {
      allTrees.push(null);
      return allTrees;
    }
    for (let i = start; i <= end; i++) {
      let leftTrees = _generateTrees(start, i - 1);
      let rightTrees = _generateTrees(i + 1, end);

      for (let leftTree of leftTrees) {
        for (let rightTree of rightTrees) {
          let root = new TreeNode(i);
          root.left = leftTree;
          root.right = rightTree;
          allTrees.push(root);
        }
      }
    }
    return allTrees;
  }
};
