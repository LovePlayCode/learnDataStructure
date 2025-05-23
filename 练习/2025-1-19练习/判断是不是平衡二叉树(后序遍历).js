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

function postorderTraversal(root) {
  if (root === null || root === undefined) {
    return 0;
  }
  const leftNums = postorderTraversal(root.left);
  if (leftNums === -1) {
    return -1;
  }
  const rightNums = postorderTraversal(root.right);
  if (rightNums === -1) {
    return -1;
  }
  if (Math.abs(leftNums - rightNums) > 1) {
    return -1;
  }

  return Math.max(leftNums, rightNums) + 1;
}

/**
 * 判断是不是一颗平衡二叉树
 * @param {binaryTree} root
 */
function IsBalancedTree(root) {
  return postorderTraversal(root) === -1 ? false : true;
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
