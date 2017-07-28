/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || numRows >= s.length) return s;
    let len = s.length, loop = Math.ceil((len+numRows-2)/(2*numRows-2)), str = '';
    for (let i=0; i<loop; i++) {
        let idx = 2*i*(numRows-1);
        if (idx < len && idx >= 0) {
            str += s[idx];
        }
    }
    for (let row=1; row<numRows-1; row++) {
        for (let i=0; i<loop; i++) {
            let idx = 2*i*(numRows-1) - row;
            if (idx < len && idx >= 0) {
                str += s[idx];
            }
            idx = 2*i*(numRows-1) + row;
            if (idx < len && idx >= 0) {
                str += s[idx];
            }
        }
    }
    for (let i=0; i<loop; i++) {
        let idx = (2*i+1)*(numRows-1);
        if (idx < len && idx >= 0) {
            str += s[idx];
        }
    }
    return str;
};