/**
 * 
 * 在二叉树中搜索所有值为 7 的节点，请返回根节点到这些节点的路径，并要求路径中不包含值为 3 的 节点。
 */
function preOrder(root, path, res) {
    // 剪枝
    if (root === null || root.val === 3) {
    return;
    }
    // 尝试 path.push(root);
    if (root.val === 7) {
    // 记录解
            res.push([...path]);
        }
    preOrder(root.left, path, res); preOrder(root.right, path, res); // 回退
    path.pop();
}