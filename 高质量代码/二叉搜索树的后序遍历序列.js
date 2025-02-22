function verifyPostorder(postorder) {
  // 辅助函数判断是否是后序遍历
  function helper(start, end) {
    if (start >= end) return true; // 子数组长度为 0 或 1 时，合法

    const root = postorder[end]; // 当前子树的根节点
    let mid = start;

    // 找到左子树的结束位置（第一个大于 root 的元素位置）
    while (postorder[mid] < root) {
      mid++;
    }

    // 检查右子树部分是否所有元素都大于 root
    for (let i = mid; i < end; i++) {
      if (postorder[i] < root) return false;
    }

    // 递归检查左子树和右子树
    return helper(start, mid - 1) && helper(mid, end - 1);
  }

  return helper(0, postorder.length - 1);
}
const number = [5, 7, 6, 9, 11, 10, 8];
const number2 = [7, 4, 6, 5];
// 测试
console.log(verifyPostorder(number)); // true
console.log(verifyPostorder(number2)); // false
