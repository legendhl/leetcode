/**
We define the Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

Now, given an integer n, write a function that returns true when it is a perfect number and false when it is not.
Example:
Input: 28
Output: True
Explanation: 28 = 1 + 2 + 4 + 7 + 14
Note: The input number n will not exceed 100,000,000. (1e8)
 */
/**
 * @param {number} num
 * @return {boolean}
 * Runtime: 52 ms, faster than 99.48%
 * Memory Usage: 34.3 MB, less than 78.90%
 */
var checkPerfectNumber = function (num) {
    let sum = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sum += i + num / i;
        }
        if (sum > num) {
            return false;
        }
    }
    return num !== 1 && sum === num;
};