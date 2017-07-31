// Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.
//
// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.
//
// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
//
// For the last line of text, it should be left justified and no extra space is inserted between words.
//
// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.
//
// Return the formatted lines as:
// [
//     "This    is    an",
//     "example  of text",
//     "justification.  "
// ]
// Note: Each word is guaranteed not to exceed L in length.

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 * Runtime: 98 ms
 * Beats: 82.86%
 */
var fullJustify = function(words, maxWidth) {
    let lines = [], line = [], curLen = 0;
    for (let i=0; i<words.length; i++) {
        if (!curLen) {
            line.push(words[i]);
            curLen = words[i].length;
        } else {
            let len = curLen + words[i].length + line.length;
            if (len > maxWidth) {
                _joint(lines, line, curLen);
                line = [words[i]];
                curLen = words[i].length;
            } else {
                line.push(words[i]);
                curLen += words[i].length;
            }
        }
    }
    if (line.length) {
        let str = line.join(' ');
        lines.push(str+' '.repeat(maxWidth>str.length ? maxWidth-str.length : 0));
    }
    return lines;

    function _joint(lines, line, curLen) {
        let gap = Math.floor((maxWidth-curLen)/((line.length-1) || 1));
        if (line.length === 1) {
            line[0] += ' '.repeat(maxWidth-curLen>0 ? maxWidth-curLen : 0);
        } else {
            for (let j=0; j<line.length-1; j++) {
                line[j] += ' '.repeat(gap);
                let total = curLen + gap * ((line.length - 1) || 1);
                if (maxWidth > total) {
                    line[j] += ' ';
                    curLen += 1;
                }
            }
        }
        lines.push(line.join(''));
    }
};
