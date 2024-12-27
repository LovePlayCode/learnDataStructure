class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function some(A, B) {
  if (B === null && A === null) {
    return true;
  }
  if (B === null || A === null) {
    return false;
  }
  return A.value === B.value && some(A.left, B.left) && some(A.right, B.right);
}
// 判断 A 中是否包含 B 子树
function isSubtree(A, B) {
  if (B === null || B === undefined) {
    return false;
  }
  if (A === null && A === undefined) {
    return false;
  }

  if (A.value === B.value && same(A, B)) {
    return;
  }
  return isSubtree(A.left, B) || isSubtree(A.right, B);
}
