/**
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:
Input: 2
Output: [0,1,1]

Example 2:
Input: 5
Output: [0,1,1,2,1,2]

Follow up:
It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.
 */
/**
 * @param {number} num
 * @return {number[]}
 * Runtime: 92 ms, faster than 89.78%
 * Memory Usage: 39.5 MB, less than 81.94%
 */
var countBits = function (num) {
    if (num < 0) {
        return [];
    } else if (num === 0) {
        return [0];
    } else if (num === 1) {
        return [0, 1];
    }
    let res = Array(num);
    res[0] = 0;
    res[1] = 1;
    for (let i = 2; i <= num;) {
        let begin = i / 2;
        for (let j = begin; j < begin * 2 && i <= num; i++ , j++) {
            res[i] = res[j];
        }
        for (let j = begin; j < begin * 2 && i <= num; i++ , j++) {
            res[i] = res[j] + 1;
        }
    }
    return res;
};