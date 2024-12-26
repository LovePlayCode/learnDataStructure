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
function isLinkListRing(head) {
  let slow = head;
  let fast = head;
  while (
    fast !== null &&
    fast !== undefined &&
    fast.next !== null &&
    fast.next !== undefined
  ) {
    fast = fast.next.next;
    slow = slow;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}
const Bnode = new ListNode(100);
const listNode = new ListNode(0);
listNode.next = Bnode;
Bnode.next = listNode;
const flag = isLinkListRing(listNode);
console.log(flag);
