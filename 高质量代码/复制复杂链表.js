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
 * 复制复杂链表
 * @param {ComplexListNode} pHead
 */
function Clone(pHead) {
  CloneNodes(pHead);

  ConnectSiblingNodes(pHead);

  return ReConnectNodes(pHead);
}

/**
 *
 * @param {ComplexListNode} pHead
 */
function CloneNodes(pHead) {
  let pNode = pHead;
  while (pNode !== null) {
    const pClone = new ComplexListNode();
    pClone.value = pNode.value;
    pClone.pNext = pNode.pNext;
    pClone.pSibling = null;
    pNode.pNext = pClone;
    pNode = pClone.pNext;
  }
}

/**
 *
 * @param {ComplexListNode} pHead
 */
function ConnectSiblingNodes(pHead) {
  let pNode = pHead;
  while (pNode !== null) {
    const pClone = pNode.pNext;
    if (pNode.pSibling !== null) {
      // 将复制出来的 pClone 节点的pSibling指向 pNode 节点的 pSibling的pNext。
      pClone.pSibling = pNode.pSibling.pNext;
    }
    pNode = pClone.pNext;
  }
}

/**
 *
 * @param {ComplexListNode} pHead
 */
function ReConnectNodes(pHead) {
  let pNode = pHead;
  let pCloneHead = null;
  let pCloneNode = null;

  // 先处理第一个节点
  if (pNode !== null) {
    pCloneHead = pCloneNode = pNode.pNext;
    pNode.pNext = pCloneNode.pNext;
    pNode = pNode.pNext;
  }

  // 处理后序节点
  while (pNode !== null) {
    pCloneNode.pNext = pNode.pNext;
    pCloneNode = pCloneNode.pNext;

    pNode.pNext = pCloneNode.pNext;
    pNode = pNode.pNext;
  }
  return pCloneHead;
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

const resData = Clone(rootListNode);
console.log(JSON.stringify(resData));
