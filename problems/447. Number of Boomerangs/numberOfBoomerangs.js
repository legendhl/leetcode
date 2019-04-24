/**
Given n points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points (i, j, k) such that the distance between i and j equals the distance between i and k (the order of the tuple matters).

Find the number of boomerangs. You may assume that n will be at most 500 and coordinates of points are all in the range [-10000, 10000] (inclusive).

Example:
Input:
[[0,0],[1,0],[2,0]]

Output:
2

Explanation:
The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]]
 */
/**
 * @param {number[][]} points
 * @return {number}
 * Runtime: 2848 ms, faster than 21.78%
 * Memory Usage: 143.3 MB, less than 8.33%
 */
var numberOfBoomerangs = function (points) {
    let distances = {};
    let len = points.length;
    let count = 0;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let a = points[i][0] - points[j][0];
            let b = points[i][1] - points[j][1];
            let distance = a * a + b * b;
            for (let k of [i, j]) {
                let key = distance + ',' + k;
                if (distances[key]) {
                    distances[key]++;
                } else {
                    distances[key] = 1;
                }
            }
        }
    }
    for (let value of Object.values(distances)) {
        count += value * (value - 1);
    }
    return count;
};