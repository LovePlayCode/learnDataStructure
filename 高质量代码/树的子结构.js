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
 * @param {binaryTree} pRoot1
 * @param {binaryTree} pRoot2
 * 在第一颗二叉树中判断第二课二叉树是不是第一颗二叉树的子树。
 */
function HasSubtree(pRoot1, pRoot2) {
  let flag = false;
  if (pRoot1 !== null && pRoot2 !== null) {
    if (pRoot1.val === pRoot2.val) {
      flag = DoesTree1HaveTree2(pRoot1, pRoot2);
    }
    if (!flag) {
      flag = HasSubtree(pRoot1.left, pRoot2);
    }
    if (!flag) {
      flag = HasSubtree(pRoot1.right, pRoot2);
    }
  }
  return flag;
}

/**
 *
 * @param {binaryTree} p1
 * @param {binaryTree} p2
 */
function DoesTree1HaveTree2(p1, p2) {
  if (p2 === null) {
    return true;
  }

  // p1遍历完了，说明不符合子树的条件。
  if (p1 === null || p1 === undefined) {
    return false;
  }
  if (p1.val !== p2.val) {
    return false;
  }

  return (
    DoesTree1HaveTree2(p1.left, p2.left) &&
    DoesTree1HaveTree2(p1.right, p2.right)
  );
}

var isSubtree = function (root, subRoot) {
  const same = (p, q) => {
    if (!p || !q) {
      return p === q;
    }
    return p.val === q.val && same(p.left, q.left) && same(p.right, q.right);
  };
  if (!root) {
    return false;
  }
  return (
    same(root, subRoot) ||
    isSubtree(root.left, subRoot) ||
    isSubtree(root.right, subRoot)
  );
};

function isSameTree(nodeA, nodeB) {
  // 如果两个树都为空，则认为相同
  if (!nodeA && !nodeB) return true;

  // 如果只有一个为空，另一个不为空，则不同
  if (!nodeA || !nodeB) return false;

  // 如果当前节点值不相同，则不同
  if (nodeA.value !== nodeB.value) return false;

  // 递归比较左子树和右子树
  return (
    isSameTree(nodeA.left, nodeB.left) && isSameTree(nodeA.right, nodeB.right)
  );
}

// 判断树 B 是否是树 A 的子树
function isSubtree(A, B) {
  // 如果 B 为空，则任何树都包含空树
  if (!B) return true;

  // 如果 A 为空，而 B 不为空，则 B 不可能是 A 的子树
  if (!A) return false;

  // 如果当前节点的值相同，则检查从当前节点开始的子树是否与 B 相同
  if (isSameTree(A, B)) {
    return true;
  }

  // 递归检查 A 的左右子树
  return isSubtree(A.left, B) || isSubtree(A.right, B);
}

const root = new binaryTree(10);
root.left = new binaryTree(20);
root.right = new binaryTree(30);
root.left.left = new binaryTree(100);

root.left.right = new binaryTree(300);

const root2 = new binaryTree(20);
root2.left = new binaryTree(100);
root2.right = new binaryTree(300);
const flag = HasSubtree(root, root2);
const flag2 = isSubtree(root, root2);
console.log("flag===", flag, flag2);
