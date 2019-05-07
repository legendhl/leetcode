/**
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
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
 * @param {number} sum
 * @return {number}
 * Runtime: 64 ms, faster than 100.00%
 * Memory Usage: 37 MB, less than 73.21%
 */
var pathSum = function (root, sum) {
    if (!root) {
        return 0;
    }
    let count = 0;
    dfs(root, []);
    return count;

    function calcSum(path, sum) {
        let total = 0;
        let count = 0;
        for (let i = path.length - 1; i >= 0; i--) {
            total += path[i];
            if (total === sum) {
                count++;
            }
        }
        return count;
    }
    function dfs(node, path) {
        path.push(node.val);
        count += calcSum(path, sum);
        if (node.left) {
            dfs(node.left, path);
            path.pop();
        }
        if (node.right) {
            dfs(node.right, path);
            path.pop();
        }
    }
};