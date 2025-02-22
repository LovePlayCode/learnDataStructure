// 定义二叉树节点结构
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function recursionBinaryDeep(root) {
  if (root === null) {
    return 0;
  }
  let left = recursionBinaryDeep(root.left);
  let right = recursionBinaryDeep(root.right);
  return Math.max(left, right) + 1;
}

// 构建一个二叉树
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

// 计算树的深度
console.log(recursionBinaryDeep(root)); // 输出：3
