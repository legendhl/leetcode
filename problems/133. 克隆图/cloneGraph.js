/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 * 执行用时： 88 ms , 在所有 JavaScript 提交中击败了 66.58% 的用户
 * 内存消耗： 39.1 MB , 在所有 JavaScript 提交中击败了 41.05% 的用户
 */
var cloneGraph = function(node) {
  if (!node) {
    return null;
  }
  let map = new Map();
  let root = createNode(node);

  function createNode(node) {
    let val = node.val;
    if (!map.has(val)) {
      let newNode = new Node(val);
      map.set(val, newNode);
      newNode.neighbors = node.neighbors.map(source => createNode(source));
    }
    return map.get(val);
  }
  return root;
};
