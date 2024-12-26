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
 * @param {number} k
 */
function FindKthToTail(head, k) {
  if (head === null && head === undefined) {
    throw new TypeError("类型错误");
  }

  // 判断 k 是否为 0
  const step = k - 1;
  let p1Node = head;
  let p2Node = head;
  let count = 0;
  while (
    p2Node !== null &&
    p2Node !== undefined &&
    p2Node.next !== null &&
    p2Node.next !== undefined
  ) {
    if (count < step) {
      count++;
    } else {
      p1Node = p1Node.next;
    }
    p2Node = p2Node.next;
  }
  return p1Node;
}

const listNode = new ListNode(0);
listNode.next = new ListNode(100);
listNode.next.next = new ListNode(300);
listNode.next.next.next = new ListNode(20);
const node = FindKthToTail(listNode, 3);
console.log(node);
