/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map = {'M':1000,'D':500,'C':100,'L':50,'X':10,'V':5,'I':1, undefined:0};
    let num = 0;
    for (let i=0; i<s.length; i++) {
        let left = map[s[i]], right = map[s[i+1]];
        if (left >= right) {
            num += left;
        } else {
            num += right - left;
            i++;
        }
    }
    return num;
};