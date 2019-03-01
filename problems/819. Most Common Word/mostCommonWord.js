/**
Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.

Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.

Example:

Input: 
paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."
banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
 
Note:

1 <= paragraph.length <= 1000.
1 <= banned.length <= 100.
1 <= banned[i].length <= 10.
The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
There are no hyphens or hyphenated words.
Words only consist of letters, never apostrophes or other punctuation symbols.
 */
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 * Runtime: 64 ms, faster than 71.93%
 * Memory Usage: 36 MB, less than 81.82%
 */
var mostCommonWord = function (paragraph, banned) {
    let bannedTable = {};
    for (let bannedWord of Object.values(banned)) {
        bannedTable[bannedWord] = true;
    }
    let curWord = '';
    let occurTable = {};
    let mostFrequent = 0;
    let mostFrequentWord = '';
    let para = paragraph + ' ';
    for (let ch of para) {
        let code = ch.charCodeAt(0);
        if (code >= 65 && code <= 90) {
            curWord += ch.toLowerCase();
        } else if (code >= 97 && code <= 122) {
            curWord += ch;
        } else if (curWord) {
            if (!bannedTable[curWord]) {
                let times = (occurTable[curWord] || 0) + 1;
                occurTable[curWord] = times;
                if (times > mostFrequent) {
                    mostFrequent = times;
                    mostFrequentWord = curWord;
                }
            }
            curWord = '';
        }
    }
    return mostFrequentWord;
};