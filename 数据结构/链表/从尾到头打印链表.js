function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function printEndToHead(root) {
  const stack = [];
  const temp = root;
  while (temp !== null) {
    stack.push(temp);
    temp = temp.next;
  }

  while (stack.length > 0) {
    const node = stack.pop();
    console.log(node);
  }
}

function recursionPrint(root) {
  if (root !== null && root.next === null) {
    console.log(node.val);
    return;
  }
  recursionPrint(root.next);
  console.log(root.val);
}
