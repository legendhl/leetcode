/**
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

Example 1:
Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

Example 2:
Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]

Note:

1 <= arr.length <= 10000
0 <= arr[i] <= 9
 */
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 * Runtime: 72 ms, faster than 58.82%
 * Memory Usage: 34.9 MB, less than 100.00%
 */
var duplicateZeros = function (arr) {
    let len = arr.length;
    let i = 0;
    let j = 0;
    for (; j < len; i++ , j++) {
        if (arr[i] === 0) {
            j++;
        }
    }
    for (i = i - 1; i >= 0; i--) {
        if (--j < len) {
            arr[j] = arr[i];
        }
        if (arr[i] === 0 && --j < len) {
            arr[j] = 0;
        }
    }
};