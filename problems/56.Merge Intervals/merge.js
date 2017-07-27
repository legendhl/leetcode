// Given a collection of intervals, merge all overlapping intervals.
//
// For example,
// Given [1,3],[2,6],[8,10],[15,18],
// return [1,6],[8,10],[15,18].

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 * Runtime: 145 ms
 * Beats: 95.69%
 */
var merge = function(intervals) {
    let res = [], last;
    if (!intervals || !intervals.length) return res;
    intervals.sort((a, b) => {
        return a.start - b.start;
    });
    last = intervals[0];
    for (let i=1; i<intervals.length; i++) {
        let cur = intervals[i];
        if (last.end >= cur.start) {
            last.end = Math.max(last.end, cur.end);
        } else {
            res.push(last);
            last = cur;
        }
    }
    res.push(last);
    return res;
};
