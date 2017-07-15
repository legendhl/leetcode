/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.length < needle.length) return -1;

    for (let i=0; i<haystack.length-needle.length+1; i++) {
        let j = i, k = 0;
        for (; j<haystack.length && k<needle.length; j++,k++) {
            if (haystack[j] === needle[k]) continue;
            break;
        }
        if (k === needle.length) return i;
    }
    return -1;
};