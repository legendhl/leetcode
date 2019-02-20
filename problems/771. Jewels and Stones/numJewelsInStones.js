/**
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0
Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
 */
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 * Runtime: 76 ms, faster than 38.64%
 * Memory Usage: 33.9 MB, less than 65.59%
 */
var numJewelsInStones = function (J, S) {
    let map = {};
    for (let ch of J) {
        map[ch] = true;
    }
    let count = 0;
    for (let ch of S) {
        if (map[ch]) {
            count++;
        }
    }
    return count;
};