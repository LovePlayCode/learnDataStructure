class ListNode {
  val = "";
  next = null;
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

function mergeSortLinkList(A1, A2) {
  if (A1 === null || A1 === undefined || A2 === null || A2 === undefined) {
    throw new TypeError("类型错误");
  }

  let resP = null;

  let preP = null;
  let A1p = A1;
  let A2p = A2;
  while (
    A1p !== null &&
    A1p !== undefined &&
    A2p !== null &&
    A2p !== undefined
  ) {
    const midNode = A1p.val < A2p.val ? A1p : A2p;

    if (A1p.val < A2p.val) {
      A1p = A1p.next;
    } else {
      A2p = A2p.next;
    }
    if (preP === null) {
      preP = midNode;
      resP = preP;
    }
    preP.next = midNode;
    preP = midNode;
  }

  console.log(preP, A1p, A2p);

  if (A1p !== null && A1p !== undefined) {
    preP.next = A1p;
    preP = preP.next;
  }

  if (A2p !== null && A2p !== undefined) {
    preP.next = A2p;
    preP = preP.next;
  }

  return resP;
}

const listNode1 = new ListNode(0);
listNode1.next = new ListNode(20);
listNode1.next.next = new ListNode(300);

const listNode2 = new ListNode(5);
listNode2.next = new ListNode(10);
listNode2.next.next = new ListNode(200);

let res = mergeSortLinkList(listNode1, listNode2);

while (res !== null && res !== undefined) {
  console.log(res.val);
  res = res.next;
}
