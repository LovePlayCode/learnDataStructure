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
 * 为了程序的健壮性，主要有3 个问题需要解决：
 * 1. 头节点为null
 * 2. k 为 0
 * 3. k大于节点数量。
 */
function FindKthToTail(head, k) {
  if (head === null && head === undefined) {
    throw new TypeError("类型错误");
  }

  // 判断 k 是否为 0
  if (head === null || k === 0) {
    return null;
  }
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

  // 说明 k的值比链表本身的节点大。
  if (count < k) {
    return null;
  }
  return p1Node;
}

const listNode = new ListNode(0);
listNode.next = new ListNode(100);
listNode.next.next = new ListNode(300);
listNode.next.next.next = new ListNode(20);
const node = FindKthToTail(listNode, 3);
console.log(node);
