/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length, carry = 0;
    digits[n-1]++;
    for (let i=n-1; i>=0; i--) {
        let t = digits[i] + carry;
        digits[i] = t % 10;
        carry = (t-digits[i])/10;
        if (!carry) break;
    }
    if (carry) {
        digits.unshift(carry);
    }
    return digits;
};