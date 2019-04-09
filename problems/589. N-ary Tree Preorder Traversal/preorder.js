/**
Given an n-ary tree, return the preorder traversal of its nodes' values.

For example, given a 3-ary tree:
     1
   / \  \
  3   5  6
 /\ 
2  4
Return its preorder traversal as: [1,3,5,6,2,4].
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 * Runtime: 616 ms, faster than 82.48%
 * Memory Usage: 80.9 MB, less than 52.00%
 */
var preorder = function (root) {
    let result = [];
    traverse(root, result);
    return result;

    function traverse(node, result) {
        if (!node) return;
        result.push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i], result);
        }
    }
};