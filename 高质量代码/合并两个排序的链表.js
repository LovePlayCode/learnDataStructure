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

// 递归解法
// 设想一下这个函数可以将A1链表和 A2 链表合并
// 思考: 想想当前两个节点怎么合并
// 1. 如果A1.val < A2.val 那么相当于A1.next = fx(A1.next,A2) 反之 return A1 或者 A2  按照前面的条件返回
//
// 2. 如果A1 === null return A2 反之
//
function recursion(A1p, A2p) {
  if (A1p === null || A1p === undefined) {
    console.log(A2p);
    return A2p;
  }
  if (A2p === null || A2p === undefined) {
    console.log(A1p, A2p);
    return A1p;
  }
  if (A1p.val < A2p.val) {
    A1p.next = recursion(A1p.next, A2p);
    return A1p;
  } else {
    A2p.next = recursion(A1p, A2p.next);
    return A2p;
  }
}

var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

const listNode1 = new ListNode(0);
listNode1.next = new ListNode(20);
listNode1.next.next = new ListNode(300);

const listNode2 = new ListNode(5);
listNode2.next = new ListNode(10);
listNode2.next.next = new ListNode(200);

let res = recursion(listNode1, listNode2);
let r = JSON.stringify(res);
console.log(r);
while (res !== null && res !== undefined) {
  console.log(res.val);
  res = res.next;
}
