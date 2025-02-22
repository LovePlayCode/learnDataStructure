/**
 *
 * @param {number[]} sequence
 * @param {number} length
 */
function VerifySquenceOfBST(sequence, length) {
  if (sequence === null || length <= 0) {
    return false;
  }
  const root = sequence[sequence.length - 1];

  // 找左子树
  let leftIndex = 0;
  while (sequence[leftIndex] < root) {
    leftIndex++;
  }
  // 找右子树
  let rightIndex = leftIndex;
  while (rightIndex < length - 1) {
    if (sequence[rightIndex] < root) {
      return false;
    }
    rightIndex++;
  }

  let leftFlag =
    leftIndex > 0
      ? VerifySquenceOfBST(sequence.slice(0, leftIndex), leftIndex)
      : true;
  let rightFlag =
    leftIndex < length - 1
      ? VerifySquenceOfBST(
          sequence.slice(leftIndex, length - 1),
          length - 1 - leftIndex
        )
      : true;
  return leftFlag && rightFlag;
}

const number = [5, 7, 6, 9, 11, 10, 8];
const number2 = [7, 4, 6, 5];
const flag = VerifySquenceOfBST(number2, number2.length);
console.log(flag);
