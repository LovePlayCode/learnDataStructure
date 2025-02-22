function TreeDepth(pRoot) {
  if (pRoot === null) {
    return 0;
  }

  const left = TreeDepth(pRoot.left);
  const right = TreeDepth(pRoot.right);
  return left > right ? left + 1 : right + 1;
}

function IsBalanced(pRoot) {
  if (pRoot === null) {
    return true;
  }
  const left = TreeDepth(pRoot.left);
  const right = TreeDepth(pRoot.right);
  const diff = Math.abs(left - right);
  if (diff > 1) {
    return false;
  }
  return IsBalanced(pRoot.left) && IsBalanced(pRoot.right);
}
