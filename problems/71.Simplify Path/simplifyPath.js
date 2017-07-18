// Given an absolute path for a file (Unix-style), simplify it.
//
// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"
//
// Corner Cases:
// Did you consider the case where path = "/../"?
// In this case, you should return "/".
// Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
// In this case, you should ignore redundant slashes and return "/home/foo".

/**
 * @param {string} path
 * @return {string}
 * Runtime: 139 ms
 * Beats: 45.92%
 */
var simplifyPath = function(path) {
    let arr = [], dir = '';
    for (let i=0; i<path.length; i++) {
        if (path[i] === '/') {
            if (dir) arr.push(dir);
            dir = '';
        } else if (!dir && path[i] === '.') {
            if (i+1 >= path.length || path[i+1] === '/') {
                i++; // current dir, do nothing
            } else if (path[i+1] === '.' && (i+2 >= path.length || path[i+2] === '/')) {
                i += 2;
                if (arr.length) {
                    arr.pop();
                }
            } else {
                dir += path[i];
            }
        } else {
            dir += path[i];
        }
    }
    if (dir) arr.push(dir);
    return '/' + arr.join('/');
};
