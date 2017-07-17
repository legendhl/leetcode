// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.
//
// Note:
//
// The length of both num1 and num2 is < 110.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * Time: O(m+n)
 * Space: O(m+n)
 * Runtime: 149 ms
 * beats: 66.67%
 */
var multiply = function(num1, num2) {
    if (!num1 || !num2) return '0';
    let n1 = num1.length, n2 = num2.length, arr = new Array(n1+n2-1).fill(0), carry = 0, zeroIdx = 0;
    arr = new Array(n1+n2).fill(0);
    for (let i=n1-1; i>=0; i--) {
        let n = +num1[i];
        for (let j=0; j<n2; j++) {
            arr[i+j+1] += n*(+num2[j]);
        }
    }
    for (let i=arr.length-1; i>=0; i--) {
        arr[i] += carry;
        carry = Math.floor(arr[i]/10);
        arr[i] %= 10;
    }
    for (; zeroIdx<arr.length-1 && arr[zeroIdx] === 0; zeroIdx++) {}
    return arr.slice(zeroIdx).join('');
};
