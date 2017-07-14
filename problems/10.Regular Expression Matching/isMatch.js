/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!s && !p) return true;
    if (!p) return false;
    if (p[1] !== '*') {
        if (s[0] === p[0] || (s[0] && '.' === p[0])) return !!isMatch(s.substring(1), p.substring(1));
        return false;
    } else {
        return !!(isMatch(s, p.substring(2)) || ((s[0] === p[0] || (s[0] && '.' === p[0])) && isMatch(s.substring(1), p)));
    }
};