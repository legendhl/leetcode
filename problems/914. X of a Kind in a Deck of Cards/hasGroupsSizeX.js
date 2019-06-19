/**
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.

Example 1:
Input: [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4]

Example 2:
Input: [1,1,1,2,2,2,3,3]
Output: false
Explanation: No possible partition.

Example 3:
Input: [1]
Output: false
Explanation: No possible partition.

Example 4:
Input: [1,1]
Output: true
Explanation: Possible partition [1,1]

Example 5:
Input: [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2]

Note:

1 <= deck.length <= 10000
0 <= deck[i] < 10000
 */
/**
 * @param {number[]} deck
 * @return {boolean}
 * Runtime: 52 ms, faster than 99.53%
 * Memory Usage: 36.5 MB, less than 49.06%
 */
var hasGroupsSizeX = function (deck) {
    let stat = {};
    for (let n of deck) {
        stat[n] = stat[n] ? stat[n] + 1 : 1;
    }
    let counts = Object.values(stat);
    if (counts.length === 0) {
        return false;
    } else if (counts.length === 1) {
        return counts[0] >= 2;
    } else {
        let div = gcd(counts[0], counts[1]);
        for (let i = 2; i < counts.length; i++) {
            div = gcd(div, counts[i]);
            if (div < 2) {
                return false;
            }
        }
        return true;
    }

    function gcd(a, b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }
};