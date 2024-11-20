class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 *
 * @param {any} data
 * @param {Node} root
 */
function find(data, root) {
  const temp = root;
  while (temp !== null) {
    if (temp.value === data) {
      return temp;
    }
    if (temp.value < data) {
      temp = temp.right;
    } else {
      temp = temp.left;
    }
  }
  return null;
}

/**
 * 插入操作
 */
function insert(data, root) {
  if (root === null) {
    const node = new Node(data);
    root = node;
  }

  const temp = root;
  while (temp !== null) {
    if (data > temp.value) {
      if (temp.right === null) {
        temp.right = new Node(data);
        return;
      } else {
        temp = temp.right;
      }
    } else {
      if (temp.left === null) {
        temp.left = new Node(data);
        return;
      }
      temp.left = left;
    }
  }
}

/**
 * 删除操作
 * 1. 找到要删除的节点和要删除节点的父亲节点
 * 2. 如果要删除节点有左右子节点，找到右子树最小节点。
 * 3. 将最小右子树的节点值赋值给 p,然后更新 p 和 pp 的引用
 * 4. 删除最小节点。 因为最小右子树的节点可能存在右节点，所以需要统一处理。
 * 5. 先找到 child  然后将父元素的左子节点和右子节点挂载 child 这样没有指向最小节点的引用，自然而然就会删除了。
 * @param {any} data
 * @param {Node} root
 */
function deleteNode(data, root) {
  const p = root;
  let pp = null;
  while (p !== null && p.value !== data) {
    pp = p;
    if (p.value < data) {
      p = p.right;
    } else {
      p = p.left;
    }
  }
  if (p === null) {
    return;
  }

  if (p.left && p.right) {
    const minp = p;
    const minpp = pp;
    while (minp.left !== null) {
      minpp = minp;
      minp = minp.left;
    }
    p.value = minp.value;
    p = minp;
    pp = minpp;
  }

  let child = null;

  if (p.left) {
    child = p.left;
  } else {
    child = p.right;
  }

  if (pp === null) {
    root = child;
  } else if (pp.left === p) {
    pp.left = child;
  } else {
    pp.right = right;
  }
}
