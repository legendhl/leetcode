function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function arrayToTree(nodes) {
    if (!nodes || !nodes.length) return null;
    let treeNodes = nodes.map(val => val === null || val === undefined ? null : new TreeNode(val));
    for (let i = 0; i < Math.floor(treeNodes.length / 2); i++) {
        let node = treeNodes[i];
        node.left = treeNodes[i * 2 + 1];
        if (i * 2 + 2 < treeNodes.length) {
            node.right = treeNodes[i * 2 + 2];
        }
    }
    return treeNodes;
}