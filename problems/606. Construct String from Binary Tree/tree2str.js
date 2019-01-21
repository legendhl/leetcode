/**
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

Example 1:
Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /    
  4     

Output: "1(2(4))(3)"

Explanation: Originallay it needs to be "1(2(4)())(3()())", 
but you need to omit all the unnecessary empty parenthesis pairs. 
And it will be "1(2(4))(3)".
Example 2:
Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \  
      4 

Output: "1(2()(4))(3)"

Explanation: Almost the same as the first example, 
except we can't omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.
 */
/**
 * @param {TreeNode} t
 * @return {string}
 * Runtime: 88 ms
 * Beats: 56.25%
 */
var tree2str = function (t) {
    let str = traverse(t);
    return str;

    function traverse(root) {
        let str = '';
        if (root) {
            str += root.val;
            if (root.left) {
                str += `(${traverse(root.left)})`
            } else if (root.right) {
                str += '()';
            }
            if (root.right) {
                str += `(${traverse(root.right)})`
            }
            return str;
        } else {
            return '';
        }
    }
};