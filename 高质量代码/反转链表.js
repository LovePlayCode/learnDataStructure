class ListNode {
  val = "";
  next = null;
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

function reversalListNode(node) {
  if (node === null || node === undefined) {
    return TypeError("类型错误");
  }
  let currentP = node;
  let preP = null;

  let resP = null;
  while (currentP !== null && currentP !== undefined) {
    const next = currentP.next;
    if (next === null || next === undefined) {
      resP = currentP;
    }
    currentP.next = preP;
    preP = currentP;
    currentP = next;
  }
  return resP;
}

function recursion(head) {
  console.log("head===", head);
  if (
    head === null ||
    head === undefined ||
    head.next === null ||
    head.next === undefined
  ) {
    return head;
  }
  const reversedList = recursion(head.next);
  head.next.next = head;
  head.next = null;
  return reversedList;
}

const listNode = new ListNode(0);
listNode.next = new ListNode(100);
listNode.next.next = new ListNode(300);
listNode.next.next.next = new ListNode(20);
const node = recursion(listNode);
console.log(node);
