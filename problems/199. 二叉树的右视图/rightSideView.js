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
 */
var rightSideView = function(root) {
  let results = [];
  if (!root) {
    return results;
  }
  let queue = [root];
  while (queue.length) {
    let rightNode = queue[queue.length - 1];
    results.push(rightNode.val);
    let newLevel = [];
    while (queue.length) {
      let node = queue.shift();
      if (node.left) {
        newLevel.push(node.left);
      }
      if (node.right) {
        newLevel.push(node.right);
      }
    }
    queue = newLevel;
  }
  return results;
};
