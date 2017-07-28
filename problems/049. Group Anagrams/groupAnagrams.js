// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}, arr = [];
    for (let i=0; i<strs.length; i++) {
        let str = strs[i], s = str.split('').sort().join('');
        if (map[s]) {
            map[s].push(str);
        } else {
            map[s] = [str];
        }
    }
    for (let key in map) {
        arr.push(map[key]);
    }
    return arr;
};