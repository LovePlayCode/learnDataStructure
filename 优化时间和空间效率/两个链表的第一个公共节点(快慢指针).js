class ComplexListNode {
  value = "";
  pNext = null;
  constructor(value, pNext, pSibling) {
    this.value = value;
    this.pNext = pNext ?? null;
  }
}

/**
 *
 * @param {ComplexListNode} pNode1
 * @param {ComplexListNode} pNode2
 */
function FindFirstCommonNode(pNode1, pNode2) {
  // 定义两个变量用于保存两个链表的长度
  let node1Length = 0;
  let node2Length = 0;
  let p1NodeTemp = pNode1;
  let p2NodeTemp = pNode2;
  while (p1NodeTemp) {
    node1Length++;
    p1NodeTemp = p1NodeTemp.pNext;
  }

  while (p2NodeTemp) {
    node2Length++;
    p2NodeTemp = p2NodeTemp.pNext;
  }

  // 找到步差之后，重新复制，继续进行寻找
  p1NodeTemp = pNode1;
  p2NodeTemp = pNode2;
  const stepDifference = Math.abs(node1Length - node2Length);
  if (node1Length < node2Length) {
    for (let i = 0; i < stepDifference; i++) {
      p2NodeTemp = p2NodeTemp.pNext;
    }
  } else {
    for (let i = 0; i < stepDifference; i++) {
      p1NodeTemp = p1NodeTemp.pNext;
    }
  }

  while (p1NodeTemp !== p2NodeTemp && p1NodeTemp && p2NodeTemp) {
    p1NodeTemp = p1NodeTemp.pNext;
    p2NodeTemp = p2NodeTemp.pNext;
  }
  return p1NodeTemp === p2NodeTemp ? p1NodeTemp : null;
}

const commonNode = new ComplexListNode(13);
commonNode.pNext = new ComplexListNode(17);
const node1 = new ComplexListNode(10);
node1.pNext = new ComplexListNode(12);
node1.pNext.pNext = commonNode;
const node2 = new ComplexListNode(19);
node2.pNext = new ComplexListNode(18);
node2.pNext.pNext = new ComplexListNode(9999);
node2.pNext.pNext.pNext = commonNode;
const res = FindFirstCommonNode(node1, node2);
console.log("res==", res);
