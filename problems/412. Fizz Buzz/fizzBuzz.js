/**
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
 */
/**
 * @param {number} n
 * @return {string[]}
 * Runtime: 80 ms
 * Beats: 9.41%
 */
var fizzBuzz = function (n) {
    let res = [];
    for (let i = 1; i <= n; i++) {
        let multiple3 = i % 3 === 0;
        let multiple5 = i % 5 === 0;
        let s = '';
        if (!multiple3 && !multiple5) {
            s += i;
        } else {
            if (multiple3) {
                s += 'Fizz';
            }
            if (multiple5) {
                s += 'Buzz';
            }
        }
        res.push(s);
    }
    return res;
};