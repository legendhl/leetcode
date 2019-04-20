/**
Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. Such a word is said to complete the given string licensePlate

Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.

It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.

Example 1:
Input: licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
Output: "steps"
Explanation: The smallest length word that contains the letters "S", "P", "S", and "T".
Note that the answer is not "step", because the letter "s" must occur in the word twice.
Also note that we ignored case for the purposes of comparing whether a letter exists in the word.

Example 2:
Input: licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
Output: "pest"
Explanation: There are 3 smallest length words that contains the letters "s".
We return the one that occurred first.

Note:
licensePlate will be a string with length in range [1, 7].
licensePlate will contain digits, spaces, or letters (uppercase or lowercase).
words will have a length in the range [10, 1000].
Every words[i] will consist of lowercase letters, and have length in range [1, 15]
 */
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 * Runtime: 96 ms, faster than 53.98%
 * Memory Usage: 37.8 MB, less than 100.00%
 */
var shortestCompletingWord = function (licensePlate, words) {
    const MAXLENGTH = 15;
    let res = new Array(MAXLENGTH + 1);
    let licenseLetters = licensePlate.toLowerCase().split('')
        .filter(char => { let code = char.charCodeAt(0); return code >= 97 && code <= 122; })
        .sort();
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let hasSmaller = false;
        for (let j = licenseLetters.length; j <= word.length; j++) {
            if (res[j]) {
                hasSmaller = true;
                break;
            }
        }
        if (!hasSmaller && contains(word, licenseLetters)) {
            res[word.length] = word;
        }
    }
    for (let i = licenseLetters.length; i <= MAXLENGTH; i++) {
        if (res[i]) {
            return res[i];
        }
    }

    function contains(word, letters) {
        if (word.length < letters.length) {
            return false;
        }
        let wordLetters = word.split('').sort();
        let i = 0;
        let j = 0;
        while (i < wordLetters.length && j < letters.length) {
            if (wordLetters[i] > letters[j]) {
                return false;
            } else if (wordLetters[i] === letters[j]) {
                i++;
                j++;
            } else {
                i++;
            }
        }
        return j >= letters.length;
    }
};