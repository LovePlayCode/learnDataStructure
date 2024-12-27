class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// 判断从节点 A 开始的子树是否包含 B 子结构
// 递推公式: 判断 A 中是否有 B 作为子结构 注: 子结构不是子树，不相同的东西。
// 1. B不存在 fasle
// 2. 如果 A 不存在，false
// 3. 如果 A 存在,B存在且A.val = B.val, 只是说明根节点相同,判断 A 中的结构是否跟 B 中的结构相同
// 4. 判断 A的左子树中是否有 B 子结构 || 判断 A的右子树中是否有 B 子结构
function isSubStructure(A, B) {
  // 如果树 B 为空，任何树都可以包含空树
  if (!B) return false;

  // 如果树 A 为空，B 不可能是 A 的子结构
  if (!A) return false;

  // 如果 A 当前节点值与 B 根节点相同，则检查从该节点开始的子树是否与 B 相同
  if (A.value === B.value && isSameStructure(A, B)) {
    return true;
  }

  // 递归检查 A 的左右子树
  return isSubStructure(A.left, B) || isSubStructure(A.right, B);
}

// 判断两个树是否结构相同
// 定义一个函数判断B 树是否为 A 树的结构，包括结构和值.
// 1. 如果 B 为空，说明当前结构是对的
// 2. 如果 A 为空，但是B 不为空。 说明不是子结构
// 3. 如果 A.val !== B.val 不是子结构
// 4. 判断左右子树，都满足条件才是子结构。
function isSameStructure(A, B) {
  // 如果 B 为空，说明结构相同
  if (!B) return true;

  // 如果 A 为空，但是B 不为空。 说明不是子结构
  if (!A) return false;

  // 比较当前节点值是否相同，递归比较左右子树
  return (
    A.value === B.value &&
    isSameStructure(A.left, B.left) &&
    isSameStructure(A.right, B.right)
  );
}
