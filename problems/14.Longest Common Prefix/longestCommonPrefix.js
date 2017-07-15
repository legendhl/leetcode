/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) return '';
    if (strs.length === 1) return strs[0];
    let common = strs[0];
    for (let i=1; i<strs.length; i++) {
        let s = strs[i];
        for (let j=0; j<common.length || j<s.length; j++) {
            if (common[j] !== s[j]) {
                common = common.substr(0, j);
                if (!common) return common;
                break;
            }
        }
    }
    return common;
};