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
 * @param {binaryTree} pRoot
 * @param {number} expectedSum
 */
function FindPath(pRoot, expectedSum) {
  recursionFindPath(pRoot, expectedSum, [], 0);
}

function recursionFindPath(pRoot, expectedSum, state, currentSum) {
  if (root === null) {
    return root;
  }
  if (currentSum === expectedSum) {
    console.log("值为::", state);
    return;
  }
  if (pRoot.val + currentSum < expectedSum) {
    state.push(pRoot.val);
    recursionFindPath(pRoot.left, expectedSum, state, pRoot.val + currentSum);
    recursionFindPath(pRoot.right, expectedSum, state, pRoot.val + currentSum);
    state.pop();
  }
}

const root = new binaryTree(10);
root.left = new binaryTree(5);
root.right = new binaryTree(12);
root.left.left = new binaryTree(4);
root.left.right = new binaryTree(4);
FindPath(root);
