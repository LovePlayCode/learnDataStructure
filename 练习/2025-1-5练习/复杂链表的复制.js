class ComplexListNode {
  value = "";
  pNext = null;
  pSibling = null;
  constructor(value, pNext, pSibling) {
    this.value = value;
    this.pNext = pNext ?? null;
    this.pSibling = pSibling ?? null;
  }
}

/**
 *
 * @param {ComplexListNode} pHead
 */
function copyComplexLinkedList(pHead) {
  // 1. 复制链表
  copy(pHead);

  // 2. 连接pSibling节点
  connectPSibling(pHead);

  // 3. 分离链表
  return SeparateLinkedList(pHead);
}

/**
 *
 * @param {ComplexListNode} pHead
 */
function SeparateLinkedList(pHead) {
  const resultHead = pHead.pNext;
  let temp = pHead;
  let tempResultHead = resultHead;
  // 原始节点走快一点，目标节点走慢一点
  if (tempResultHead !== null) {
    temp.pNext = tempResultHead.pNext;
    temp = temp.pNext;
  }
  while (temp) {
    tempResultHead.pNext = temp.pNext;
    tempResultHead = tempResultHead.pNext;
    temp.pNext = tempResultHead.pNext;
    temp = temp.pNext;
  }
  return resultHead;
}

/**
 *
 * @param {ComplexListNode} pHead
 */

function copy(pHead) {
  let temp = pHead;
  while (temp !== null) {
    const next = temp.pNext;
    const tempCopyNode = new ComplexListNode(temp.value, null, null);
    temp.pNext = tempCopyNode;
    tempCopyNode.pNext = next;
    temp = tempCopyNode.pNext;
  }
}

/**
 *
 * @param {ComplexListNode} pHead
 */
function connectPSibling(pHead) {
  let temp = pHead;
  while (temp) {
    if (temp.pSibling !== null) {
      temp.pNext.pSibling = temp.pSibling.pNext;
    }
    temp = temp.pNext.pNext;
  }
}

const C = new ComplexListNode("C");
const E = new ComplexListNode("E");
const rootListNode = new ComplexListNode("A");
rootListNode.pSibling = C;
rootListNode.pNext = new ComplexListNode("B");
rootListNode.pNext.pSibling = E;
rootListNode.pNext.pNext = C;
rootListNode.pNext.pNext.pNext = new ComplexListNode("D");
rootListNode.pNext.pNext.pNext.pNext = E;
const resHead = copyComplexLinkedList(rootListNode);
// console.log(JSON.stringify(rootListNode));
console.log(JSON.stringify(resHead));
