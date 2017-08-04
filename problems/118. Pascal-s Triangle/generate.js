// Given numRows, generate the first numRows of Pascal's triangle.

// For example, given numRows = 5,
// Return

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

/**
 * @param {number} numRows
 * @return {number[][]}
 * Runtime: 102 ms
 * Beats: 81.21%
 */
var generate = function(numRows) {
    if (numRows <= 0) {
        return [];
    }
    let res = [[1]];
    for (let i=1; i<numRows; i++) {
        let line = [1];
        for (let j=1; j<i; j++) {
            line.push(res[i-1][j-1]+res[i-1][j]);
        }
        line.push(1);
        res.push(line);
    }
    return res;
};
