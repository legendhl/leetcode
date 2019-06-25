/**
You have N gardens, labelled 1 to N.  In each garden, you want to plant one of 4 types of flowers.

paths[i] = [x, y] describes the existence of a bidirectional path from garden x to garden y.

Also, there is no garden that has more than 3 paths coming into or leaving it.

Your task is to choose a flower type for each garden such that, for any two gardens connected by a path, they have different types of flowers.

Return any such a choice as an array answer, where answer[i] is the type of flower planted in the (i+1)-th garden.  The flower types are denoted 1, 2, 3, or 4.  It is guaranteed an answer exists.

Example 1:
Input: N = 3, paths = [[1,2],[2,3],[3,1]]
Output: [1,2,3]

Example 2:
Input: N = 4, paths = [[1,2],[3,4]]
Output: [1,2,1,2]

Example 3:
Input: N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
Output: [1,2,3,4]

Note:

1 <= N <= 10000
0 <= paths.size <= 20000
No garden has 4 or more paths coming into or leaving it.
It is guaranteed an answer exists.
 */
/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 * Runtime: 144 ms, faster than 61.97%
 * Memory Usage: 47.5 MB, less than 100.00%
 */
var gardenNoAdj = function (N, paths) {
    let connections = {};
    for (let path of paths) {
        let i = path[0];
        let j = path[1];
        if (!connections[i]) {
            connections[i] = new Set();
        }
        if (!connections[j]) {
            connections[j] = new Set();
        }
        connections[i].add(j);
        connections[j].add(i);
    }
    let res = Array(N);
    let colors = Array(5);
    for (let n = 1; n <= N; n++) {
        colors.fill(false);
        let adj = connections[n];
        if (adj) {
            for (let val of adj.values()) {
                let color = res[val - 1];
                if (color) {
                    colors[color] = true;
                }
            }
        }
        for (let i = 1; i <= 4; i++) {
            if (!colors[i]) {
                res[n - 1] = i;
                break;
            }
        }
    }
    return res;
};