class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 *
 * @param {binaryTree} pNode
 */
function Convert(pNode) {
  let head = null;
  let prev = null;
  function recursion(pNode) {
    if (pNode === null) {
      return;
    }
    recursion(pNode.left);
    if (prev === null) {
      head = pNode;
    } else {
      prev.right = pNode;
      pNode.left = prev;
    }
    prev = pNode;
    recursion(pNode.right);
  }
  recursion(pNode);
  return head;
}
// 测试
const root = new TreeNode(10);
root.left = new TreeNode(6);
root.right = new TreeNode(14);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(8);
root.right.left = new TreeNode(12);
root.right.right = new TreeNode(16);
const head = Convert(root);

// 打印双向链表
let node = head;
while (node) {
  console.log(node.val);
  node = node.right;
}
console.log(JSON.stringify(head));
