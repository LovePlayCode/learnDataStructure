class ListNode {
  val = "";
  next = null;
  constructor(val, next) {
    this.val = val;
    this.next = next ? next : null;
  }
}

/**
 * @param {ListNode} head
 * @param {number} num
 */
function findListNodeCountBackwardsNode(head, num) {
  const stack = [];
  while (head !== null && head !== undefined) {
    stack.unshift(head);
    head = head.next;
  }
  return stack[num - 1];
}
const listNode = new ListNode(0);
listNode.next = new ListNode(100);
listNode.next.next = new ListNode(300);
listNode.next.next.next = new ListNode(20);
const node = findListNodeCountBackwardsNode(listNode, 3);
console.log(node);
