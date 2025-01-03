class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

/**
 * 将二叉搜索树转换为双向链表
 * @param {TreeNode} root - 二叉搜索树的根节点
 * @returns {TreeNode} 返回双向链表的头节点
 */
function convertBSTToSortedDoublyLinkedList(root) {
  let head = null; // 链表的头节点
  let prev = null; // 中序遍历过程中的前一个节点

  // 中序遍历的递归函数
  function inOrderTraversal(node) {
    if (!node) return;

    // 递归遍历左子树
    inOrderTraversal(node.left);

    // 当前节点
    if (prev === null) {
      // 如果是最左边的节点，那么它就是链表的头节点
      head = node;
    } else {
      // 调整前一个节点的右指针和当前节点的左指针
      prev.right = node;
      node.left = prev;
    }

    // 更新前一个节点
    prev = node;

    // 递归遍历右子树
    inOrderTraversal(node.right);
  }

  // 进行中序遍历
  inOrderTraversal(root);

  return head;
}

// 测试
const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

const head = convertBSTToSortedDoublyLinkedList(root);

// 输出双向链表的值
let current = head;
console.log(JSON.stringify(current));
while (current) {
  console.log(current.val);
  current = current.right;
}
