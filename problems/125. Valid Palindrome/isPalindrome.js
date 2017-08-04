// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// For example,
// "A man, a plan, a canal: Panama" is a palindrome.
// "race a car" is not a palindrome.

// Note:
// Have you consider that the string might be empty? This is a good question to ask during an interview.

// For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 * Runtime: 129 ms
 * Beats: 88.07%
 */
var isPalindrome = function(s) {
    if (!s) {
        return true;
    }
    let i = 0, j = s.length - 1;
    s = s.toLowerCase();
    while (i < j) {
        while(i < s.length-1 && !isAlphanumeric(s[i])) {
            i++;
        }
        while(j >= 0 && !isAlphanumeric(s[j])) {
            j--;
        }
        if (i >= j) {
            return true;
        }
        if (s[i] !== s[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;

    function isAlphanumeric(c) {
        let code = c.charCodeAt(0);
        return !!(code >= 48 && code <= 57 || code >= 97 && code <= 122 || code >= 65 && code <= 90);
    }
};
