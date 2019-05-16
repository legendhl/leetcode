/**
A boomerang is a set of 3 points that are all distinct and not in a straight line.

Given a list of three points in the plane, return whether these points are a boomerang.

Example 1:
Input: [[1,1],[2,3],[3,2]]
Output: true

Example 2:
Input: [[1,1],[2,2],[3,3]]
Output: false

Note:

points.length == 3
points[i].length == 2
0 <= points[i][j] <= 100
 */
/**
 * @param {number[][]} points
 * @return {boolean}
 * Runtime: 56 ms, faster than 89.52%
 * Memory Usage: 33.9 MB, less than 100.00%
 */
var isBoomerang = function (points) {
    let x1 = points[0][0];
    let y1 = points[0][1];
    let x2 = points[1][0];
    let y2 = points[1][1];
    let x3 = points[2][0];
    let y3 = points[2][1];
    return (y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1);
};