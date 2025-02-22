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
 *
 * @param {binaryTree} pNode
 * @param {number} target
 */
function FindPath(pNode, target) {
  let sum = 0;
  const res = [];
  function recursion(pNode, state, sum) {
    if (pNode === null) {
      return null;
    }
    if (pNode.val < target) {
      state.push(pNode.val);
      sum += pNode.val;
      // 叶子节点且 sum === target
      if (pNode.left === null && pNode.right === null) {
        if (sum === target) {
          res.push([...state]);
        }

        return;
      }
      recursion(pNode.left, state, sum);
      state.pop();
      //   sum -= pNode.val;
      recursion(pNode.right, state, sum);
      state.pop();
      //   sum -= pNode.val;
    }
  }
  recursion(pNode, [], sum);
  return res;
}

const root = new binaryTree(10);
root.left = new binaryTree(5);
root.right = new binaryTree(12);
root.left.left = new binaryTree(4);
root.left.right = new binaryTree(7);
const res = FindPath(root, 22);
console.log(res);
