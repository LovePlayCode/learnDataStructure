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
 * 镜像一颗树
 * @param {BinaryTree} pNode
 */
function MirrorRecursively(pNode) {
  if (pNode === null || (pNode.left === null && pNode.right === null)) {
    return pNode;
  }
  const temp = pNode.left;
  pNode.left = pNode.right;
  pNode.right = temp;
  // 交换左右子树
  if (pNode.left !== null || pNode.right !== null) {
    MirrorRecursively(pNode.left);
    MirrorRecursively(pNode.right);
  }
  return pNode;
}

const root = new binaryTree(10);
root.left = new binaryTree(20);
root.right = new binaryTree(30);
root.left.left = new binaryTree(100);

const res = MirrorRecursively(root);
console.log(res);
