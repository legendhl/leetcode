/**
We are given two sentences A and B.  (A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

Example 1:
Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]

Example 2:
Input: A = "apple apple", B = "banana"
Output: ["banana"]
 
Note:

0 <= A.length <= 200
0 <= B.length <= 200
A and B both contain only spaces and lowercase letters.
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 * Runtime: 60 ms, faster than 83.45%
 * Memory Usage: 34.1 MB, less than 37.93%
 */
var uncommonFromSentences = function (A, B) {
    let dicts = A.split(' ');
    dicts = dicts.concat(B.split(' '));
    let hash = {};
    for (let i = 0; i < dicts.length; i++) {
        hash[dicts[i]] = (hash[dicts[i]] || 0) + 1;
    }
    let result = [];
    for (let [key, value] of Object.entries(hash)) {
        if (value === 1) {
            result.push(key);
        }
    }
    return result;
};