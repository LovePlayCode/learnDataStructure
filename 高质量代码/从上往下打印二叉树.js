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
 *  从上到下按层打印二叉树
 * BFS
 * @param {binaryTree} root
 */
function PrintFromTopToButtom(root) {
  if (root === null) {
    console.log("树为空");
  }

  if (!(root instanceof binaryTree)) {
    throw new TypeError("类型错误");
  }

  const queue = [root];
  while (queue.length > 0) {
    const pNode = queue.shift();
    console.log(pNode.val);
    if (pNode.left) {
      queue.push(pNode.left);
    }
    if (pNode.right) {
      queue.push(pNode.right);
    }
  }
}

const root = new binaryTree(10);
root.left = new binaryTree(20);
root.right = new binaryTree(30);
root.left.left = new binaryTree(100);
root.left.right = new binaryTree(300);
PrintFromTopToButtom(root);
