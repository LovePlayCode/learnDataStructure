/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyTreeOrder = function (postorder) {
  return VerifySquenceOfBST(postorder, postorder.length);
};

/**
 *
 * @param {number[]} sequence
 * @param {number} length
 */
function VerifySquenceOfBST(sequence, length) {
  if (sequence === null && length < 0) {
    return false;
  }

  // 找到他的根节点
  const root = sequence[length - 1];

  let i = 0;
  for (; i < length - 1; i++) {
    if (sequence[i] > root) {
      break;
    }
  }
  for (let j = i; j < length - 1; j++) {
    if (sequence[j] < root) {
      return false;
    }
  }

  let left = true;
  if (i > 0) {
    left = VerifySquenceOfBST(sequence, i);
  }
  let right = true;
  if (i < length - 1) {
    right = VerifySquenceOfBST(sequence.slice(i), length - i - 1);
  }
  return left && right;
}
