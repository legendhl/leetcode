/**
You have a list of points in the plane. Return the area of the largest triangle that can be formed by any 3 of the points.

Example:
Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]
Output: 2
Explanation: 
The five points are show in the figure below. The red triangle is the largest.

Notes:

3 <= points.length <= 50.
No points will be duplicated.
 -50 <= points[i][j] <= 50.
Answers within 10^-6 of the true value will be accepted as correct.
 */
/**
 * @param {number[][]} points
 * @return {number}
 * Runtime: 64 ms, faster than 95.65%
 * Memory Usage: 34.6 MB, less than 100.00%
 */
var largestTriangleArea = function (points) {
    let len = points.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                let area = getArea(points[i], points[j], points[k]);
                if (area > max) {
                    max = area;
                }
            }
        }
    }
    return max;

    function getArea(x, y, z) {
        return Math.abs((1 / 2) * (x[0] * y[1] + y[0] * z[1] + z[0] * x[1] - x[0] * z[1] - y[0] * x[1] - z[0] * y[1]));
    }
};