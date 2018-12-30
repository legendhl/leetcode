/**
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

Example 1:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
Example 2:

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
 
Note:

All of the nodes' values will be unique.
p and q are different and both values will exist in the BST.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * Runtime: 92 ms
 * Beats: 18.39%
 */
var lowestCommonAncestor = function (root, p, q) {
    let heightP;
    let heightQ;
    let height = 0;
    let nodes = [root];
    while (nodes.length) {
        let newLevelNodes = [];
        for (let i = 0; i < nodes.length; i++) {
            let node = nodes[i];
            if (node === p) heightP = height;
            if (node === q) heightQ = height;
            if (node.left) {
                node.left.parent = node;
                newLevelNodes.push(node.left);
            }
            if (node.right) {
                node.right.parent = node;
                newLevelNodes.push(node.right);
            }
        }
        nodes = newLevelNodes;
        height++;
    }
    while (heightP > heightQ) {
        p = p.parent;
        heightP--;
    }
    while (heightQ > heightP) {
        q = q.parent;
        heightQ--;
    }
    if (p === q) return p;
    while (p.parent !== q.parent) {
        p = p.parent;
        q = q.parent;
    }
    return p.parent;
};