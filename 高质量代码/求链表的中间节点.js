class ListNode {
  val = "";
  next = null;
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

/**
 *
 * @param {ListNode} head
 */
function findLinkNodeMiddleNode(head) {
  if (!(head instanceof ListNode)) {
    throw new TypeError("类型错误...");
  }
  let slow = head;
  let fast = head;
  while (
    fast !== null &&
    fast !== undefined &&
    fast.next !== null &&
    fast.next !== undefined
  ) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
const listNode = new ListNode(0);
listNode.next = new ListNode(100);
listNode.next.next = new ListNode(300);
listNode.next.next.next = new ListNode(20);
listNode.next.next.next = new ListNode(209);
const node = findLinkNodeMiddleNode(listNode);
console.log(node);
