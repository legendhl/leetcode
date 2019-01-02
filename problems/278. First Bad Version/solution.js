/**
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 
 */
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 * Runtime: 52 ms
 * Beats: 46.15%
 */
var solution = function (isBadVersion) {
    function pivot(begin, end) {
        if (begin >= end) return begin;
        let mid = Math.ceil((begin + end) / 2);
        if (isBadVersion(mid)) {
            end = mid - 1;
        } else {
            begin = mid + 1;
        }
        return pivot(begin, end);
    }
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        if (n <= 8) {
            for (let i = 1; i <= n; i++) {
                if (isBadVersion(i)) return i;
            }
        } else {
            let num = pivot(1, n);
            return isBadVersion(num) ? num : num + 1;
        }
    };
};