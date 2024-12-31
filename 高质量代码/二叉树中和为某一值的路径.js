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
  if (pRoot === null) {
    return pRoot;
  }
  state.push(pRoot.val);
  currentSum += pRoot.val;

  if (
    currentSum === expectedSum &&
    pRoot.left === null &&
    pRoot.right === null
  ) {
    console.log("当前路径==", state);
  }

  recursionFindPath(pRoot.left, expectedSum, state, currentSum);
  recursionFindPath(pRoot.right, expectedSum, state, currentSum);
  state.pop();
}

const root = new binaryTree(10);
root.left = new binaryTree(5);
root.right = new binaryTree(12);
root.left.left = new binaryTree(4);
root.left.right = new binaryTree(7);
FindPath(root, 22);
