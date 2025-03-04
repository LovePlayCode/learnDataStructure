function pathSum(root, targetSum) {
    const result = [];

    function dfs(node, currentPath, currentSum) {
        if (!node) return;

        currentPath.push(node.val);
        currentSum += node.val;

        if (!node.left && !node.right && currentSum === targetSum) {
            result.push([...currentPath]);
        } else {
            dfs(node.left, currentPath, currentSum);
            dfs(node.right, currentPath, currentSum);
        }

        currentPath.pop();
    }

    dfs(root, [], 0);
    return result;
}

export { }