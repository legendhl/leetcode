/*
              1
             / \
            2   3
           / \ / \
          4  5 6  7
         / \
        8   9
*/
function preOrder(root) {
  let ans = [];
  if (!root) {
    return ans;
  }
  let stack = [root];
  while (stack.length) {
    let node = stack.pop();
    ans.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }
  return ans;
}
// 8 4 9 2 5 1 6 3 7
function inOrder(root) {
  let ans = [];
  if (!root) {
    return ans;
  }
  let stack = [];
  let p = root;
  while (p || stack.length) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    if (stack.length) {
      p = stack.pop();
      ans.push(p.val);
      p = p.right;
    }
  }
  return ans;
}
// 8 9 4 5 2 6 7 3 1
function postOrder(root) {
  let ans = [];
  if (!root) {
    return ans;
  }
  let stack = [root];
  let prev = null;
  while (stack.length) {
    let cur = stack[stack.length - 1];
    if (
      (!cur.left && !cur.right) ||
      (prev !== null && (prev === cur.left || prev === cur.right))
    ) {
      ans.push(cur.val);
      prev = stack.pop();
    } else {
      if (cur.right) {
        stack.push(cur.right);
      }
      if (cur.left) {
        stack.push(cur.left);
      }
    }
  }
  return ans;
}
