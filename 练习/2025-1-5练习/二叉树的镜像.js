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
 * @param {binaryTree} pNode
 */
function BinaryTreeImage(pNode) {
  if (pNode === null || pNode === undefined) {
    throw new TypeError("类型错误~~~");
  }
  /**
   *
   * @param {binaryTree} pNode
   */
  function recursion(pNode) {
    if (pNode === null || pNode === undefined) {
      return null;
    }
    const temp = pNode.left;
    pNode.left = pNode.right;
    pNode.right = temp;
    recursion(pNode.left);
    recursion(pNode.right);
  }
  recursion(pNode);
  console.log(JSON.stringify(pNode));
}
const root = new binaryTree(8);
root.left = new binaryTree(6);
root.left.left = new binaryTree(5);
root.left.right = new binaryTree(7);
root.right = new binaryTree(10);
root.right.left = new binaryTree(9);
root.right.right = new binaryTree(11);
// root.left.left = new binaryTree(100);
BinaryTreeImage(root);
