function IsBalanced(pRoot) {
  function checkDepth(node) {
    if (node === null) {
      return 0;
    }

    // 递归计算左右子树的深度
    const leftDepth = checkDepth(node.left);
    const rightDepth = checkDepth(node.right);

    if (
      leftDepth === -1 ||
      rightDepth === -1 ||
      Math.abs(leftDepth - rightDepth) > -1
    ) {
      return -1;
    }
    return Math.max(leftDepth, rightDepth) + 1;
  }

  return checkDepth(pRoot) !== -1;
}
