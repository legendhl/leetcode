/**
A sentence str is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from str to Goat Latin. 

Example 1:
Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"

Example 2:
Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"

Notes:

str contains only uppercase, lowercase and spaces. Exactly one space between each word.
1 <= str.length <= 150.
 */
/**
 * @param {string} str
 * @return {string}
 * Runtime: 56 ms, faster than 72.94%
 * Memory Usage: 34 MB, less than 50.00%
 */
var toGoatLatin = function (S) {
    let str = S + ' ';
    let len = str.length;
    let postfix = 'a';
    const A = 'a';
    const vowelCodes = { 97: true, 101: true, 105: true, 111: true, 117: true, 65: true, 69: true, 73: true, 79: true, 85: true };
    let goatLatinStr = '';
    let curWord = '';
    let curPostfix = '';
    for (let i = 0; i < len; i++) {
        if (str[i] === ' ') {
            postfix += A;
            goatLatinStr += curWord + curPostfix + (i === len - 1 ? '' : ' ');
            curWord = '';
            curPostfix = '';
        } else if (curWord || curPostfix) {
            curWord += str[i];
        } else {
            let code = str.charCodeAt(i);
            if (vowelCodes[code]) {
                curWord += str[i];
                curPostfix = 'ma' + postfix;
            } else {
                curPostfix = str[i] + 'ma' + postfix;
            }
        }
    }
    return goatLatinStr;
};