function TreeDepth(pRoot) {
  if (pRoot === null) {
    return 0;
  }

  const left = TreeDepth(pRoot.left);
  const right = TreeDepth(pRoot.right);
  return left > right ? left + 1 : right + 1;
}
