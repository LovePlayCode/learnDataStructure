class binaryTree {
  left = null;
  right = null;
  val = "";
  constructor(val, left, right) {
    this.left = left || null;
    this.right = right || null;
    this.val = val;
  }
}

/**
 *
 * “：输入一棵二叉树的根结点，求该树的深度。
 * 从根结点到叶结点依次经过的结点（含根、叶结点）形成树的一条路径，
 * 最长路径的长度为树的深度。”
 * @param {binaryTree} root
 */
function TreeDepth(root) {
  return recursionFindPath(root);
}
function recursionFindPath(root) {
  if (root === null || root == undefined) {
    return 0;
  }
  const leftNum = recursionFindPath(root.left);
  const rightNum = recursionFindPath(root.right);
  return 1 + (leftNum > rightNum ? leftNum : rightNum);
}

const root = new binaryTree(10);
root.left = new binaryTree(20);
root.right = new binaryTree(30);
root.left.left = new binaryTree(100);
root.left.right = new binaryTree(300);
root.left.right.right = new binaryTree(500);

const len = TreeDepth(root);
console.log(len);
