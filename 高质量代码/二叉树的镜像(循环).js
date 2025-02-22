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
function MirrorIteration(pNode) {
  if (pNode === null) {
    throw new TypeError("类型错误,不是树类型");
  }
  let queue = [pNode]; // 初始化队列，加入根节点
  while (queue.length > 0) {
    const root = queue.shift();
    const temp = root.left;
    root.left = root.right;
    root.right = temp;
    if (root.left) {
      queue.push(root.left);
    }
    if (root.right) {
      queue.push(root.right);
    }
  }
  return pNode;
}

const root = new binaryTree(10);
root.left = new binaryTree(20);
root.right = new binaryTree(30);
root.left.left = new binaryTree(100);

const res = MirrorIteration(root);
console.log(res);
