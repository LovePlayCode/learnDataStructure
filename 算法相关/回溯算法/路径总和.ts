// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  const res: number[][] = [];
  function preOrder(root: TreeNode | null, list: number[]) {
    // const list = []
    if (root === null) {
      return null;
    }

    list.push(root.val);
    if (root.left === null && root.right === null) {
      const sum = list.reduce((pre, cur) => {
        return pre + cur;
      }, 0);
      if (sum === targetSum) {
        res.push([...list]);
        // 这里不能写 return，如果写了 return，会让调用栈少调用pop，导致结果不对
        // return;
      }
    }
    preOrder(root.left, list);
    preOrder(root.right, list);
    list.pop();
  }
  preOrder(root, []);
  return res;
}
export {};
