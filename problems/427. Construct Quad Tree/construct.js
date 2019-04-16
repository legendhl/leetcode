/**
We want to use quad trees to store an N x N boolean grid. Each cell in the grid can only be true or false. The root node represents the whole grid. For each node, it will be subdivided into four children nodes until the values in the region it represents are all the same.

Each node has another two boolean attributes : isLeaf and val. isLeaf is true if and only if the node is a leaf node. The val attribute for a leaf node contains the value of the region it represents.

Your task is to use a quad tree to represent a given grid. The following example may help you understand the problem better:

Given the 8 x 8 grid below, we want to construct the corresponding quad tree:

It can be divided according to the definition above:

The corresponding quad tree should be as following, where each node is represented as a (isLeaf, val) pair.

For the non-leaf nodes, val can be arbitrary, so it is represented as *.

Note:

N is less than 1000 and guaranteened to be a power of 2.
If you want to know more about the quad tree, you can refer to its wiki.
 */
/**
 * // Definition for a QuadTree node.
 * function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
 *    this.val = val;
 *    this.isLeaf = isLeaf;
 *    this.topLeft = topLeft;
 *    this.topRight = topRight;
 *    this.bottomLeft = bottomLeft;
 *    this.bottomRight = bottomRight;
 * };
 */
/**
 * @param {number[][]} grid
 * @return {Node}
 * Runtime: 112 ms, faster than 6.40%
 * Memory Usage: 42.7 MB, less than 100.00%
 */
var construct = function (grid) {
    let len = grid.length;
    let newGrid = [];
    for (let i = 0; i < len; i++) {
        newGrid[i] = [];
        for (let j = 0; j < len; j++) {
            newGrid[i][j] = new Node(!!grid[i][j], true, null, null, null, null);
        }
    }

    while (newGrid.length > 1) {
        newGrid = combine(newGrid);
    }

    return newGrid[0][0];

    function combine(grid) {
        let newGrid = [];
        let len = grid.length;
        for (let i = 0; i < len; i += 2) {
            newGrid[i / 2] = [];
            for (let j = 0; j < len; j += 2) {
                let node;
                if (grid[i][j].val !== null && grid[i][j].val === grid[i][j + 1].val && grid[i][j].val === grid[i + 1][j].val && grid[i][j].val === grid[i + 1][j + 1].val) {
                    node = new Node(grid[i][j].val, true, null, null, null, null);
                } else {
                    node = new Node(null, false, grid[i][j], grid[i][j + 1], grid[i + 1][j], grid[i + 1][j + 1]);
                }
                newGrid[i / 2][j / 2] = node;
            }
        }
        return newGrid;
    }
};