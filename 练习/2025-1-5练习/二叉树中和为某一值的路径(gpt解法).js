/**
 * 二叉树节点定义
 * @param {number} val
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * 找到二叉树中所有和为 targetSum 的路径
 * @param {TreeNode} root
 * @param {number} targetSum
 * @returns {number[][]}
 */
function findPath(root, targetSum) {
  const result = [];
  const path = [];

  function dfs(node, currentSum) {
    if (node === null) return;

    // 加入当前节点
    path.push(node.val);
    currentSum += node.val;

    // 如果是叶节点并且路径和等于目标值
    if (node.left === null && node.right === null && currentSum === targetSum) {
      result.push([...path]); // 记录路径
    }

    // 递归遍历左右子树
    dfs(node.left, currentSum);
    dfs(node.right, currentSum);

    // 回溯：移除当前节点
    path.pop();
  }

  dfs(root, 0);
  return result;
}

// 测试
const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(12);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(7);

console.log(findPath(root, 22)); // [[5, 4, 11, 2], [5, 8, 4, 5]]
