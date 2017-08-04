
// Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

// For example, given the following triangle
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

// Note:
// Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

/**
 * @param {number[][]} triangle
 * @return {number}
 * Runtime: 105 ms
 * Beats: 69.23%
 */
var minimumTotal = function(triangle) {
    let n = triangle.length, m = triangle[0];
    for (let i=1; i<n; i++) {
        let line = Array.from(triangle[i]);
        line[0] += m[0];
        for (let j=1; j<i; j++) {
            line[j] += Math.min(m[j-1], m[j]);
        }
        line[i] += m[i-1];
        m = line;
    }
    return Math.min.apply(Math, m);
};
