// 定义二叉树节点结构
export class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 *
 * @param {string[]} preArr
 * @param {string[]} midArr
 * @returns {ListNode} root
 */
function buildBinaryTree(preArr, midArr) {
  if (!preArr.length || !midArr.length) {
    return null;
  }

  const firstVal = preArr[0];
  const root = new TreeNode(firstVal);

  const rootIndex = midArr.findIndex((item) => item === firstVal);

  root.left = buildBinaryTree(
    preArr.slice(1, rootIndex + 1),
    midArr.slice(0, rootIndex)
  );
  root.right = buildBinaryTree(
    preArr.slice(rootIndex + 1, preArr.length),
    midArr.slice(rootIndex + 1, midArr.length)
  );
  return root;
}

const preorder = [1, 2, 4, 7, 3, 5, 6, 8];
const inorder = [4, 7, 2, 1, 5, 3, 6, 8];

const root = buildBinaryTree(preorder, inorder);

// 辅助函数，用来输出树的结构
function printTree(node) {
  if (!node) return;
  console.log(node);

  printTree(node.left);
  printTree(node.right);
}

printTree(root);
