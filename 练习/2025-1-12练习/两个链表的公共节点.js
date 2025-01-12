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
function main(pNode1, pNode2) {
  let pNodeTemp1 = pNode1;
  let pNodeTemp2 = pNode2;
  let len1 = 0;
  let len2 = 0;

  while (pNodeTemp1) {
    len1++;
    pNodeTemp1 = pNodeTemp1.pNext;
  }

  while (pNodeTemp2) {
    len2++;
    pNodeTemp2 = pNodeTemp2.pNext;
  }

  pNodeTemp1 = pNode1;
  pNodeTemp2 = pNode2;
  const stepDifference = Math.abs(len1 - len2);
  if (len1 < len2) {
    for (let i = 0; i < stepDifference; i++) {
      pNodeTemp2 = pNodeTemp2.pNext;
    }
  }
  if (len1 > len2) {
    for (let i = 0; i < stepDifference; i++) {
      pNodeTemp1 = pNodeTemp1.pNext;
    }
  }

  while (pNodeTemp1 !== pNodeTemp2 && pNodeTemp1 && pNodeTemp2) {
    pNodeTemp1 = pNodeTemp1.pNext;
    pNodeTemp2 = pNodeTemp2.pNext;
  }
  return pNodeTemp1 === pNodeTemp2 ? pNodeTemp1 : null;
}

const commonNode = new ComplexListNode(13);
commonNode.pNext = new ComplexListNode(17);
const node1 = new ComplexListNode(10);
node1.pNext = new ComplexListNode(12);
node1.pNext.pNext = commonNode;
const node2 = new ComplexListNode(19);
node2.pNext = new ComplexListNode(18);
node2.pNext.pNext = commonNode;
const res = main(node1, node2);
console.log("res==", res);
