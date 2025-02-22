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

// 这个函数用于反转链表
// 思考: 他该怎么样反转, 将问题分解为子问题, 考虑当前如何反转，只有一个子问题的情况下。
// 如果 A 要反转，那么先反转 A 后面的链表。然后 A.next.next = A  A.next = null
// 思考结束条件: head === null || head.next === null,因为要找头节点，所以要判断next === null 返回即可。 第二个作用是为了避免next.next时报错
// return toujiedian OK

function recursion(head) {
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
