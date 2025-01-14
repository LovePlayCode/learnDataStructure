const obj = {
  data: 1,
  left: {
    data: 2,
    left: {
      data: 4,
      left: null,
      right: null,
    },
    right: {
      data: 5,
      left: null,
      right: null,
    },
  },
  right: {
    data: 3,
    left: {
      data: 6,
      left: null,
      right: null,
    },
    right: {
      data: 7,
      left: null,
      right: null,
    },
  },
};

function main(root) {
  if (root === null || root === undefined) {
    return [];
  }
  const queue = [root];
  const res = [];
  while (queue.length > 0) {
    const cur = queue.shift();

    res.push(cur.data);
    if (cur.left) {
      queue.push(cur.left);
    }
    if (cur.right) {
      queue.push(cur.right);
    }
  }
  return res;
}
const res = main(obj);
console.log(res);
