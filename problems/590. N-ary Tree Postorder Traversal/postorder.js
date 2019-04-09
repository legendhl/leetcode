/**
Given an n-ary tree, return the postorder traversal of its nodes' values.

For example, given a 3-ary tree:
     1
   / \  \
  3   2  4
 /\ 
5  6
Return its postorder traversal as: [5,6,3,2,4,1].

Note:

Recursive solution is trivial, could you do it iteratively?
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
 * Runtime: 768 ms, faster than 8.37%
 * Memory Usage: 77.3 MB, less than 88.24%
 */
var postorder = function (root) {
    let result = [];
    traverse(root, result);
    return result;

    function traverse(node, result) {
        if (!node) return;
        for (let i = 0; i < node.children.length; i++) {
            traverse(node.children[i], result);
        }
        result.push(node.val);
    }
};