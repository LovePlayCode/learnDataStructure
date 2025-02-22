/**
 *
 * @param {number[]} arr
 * 测试用例:
 * 1. 输入的数组是升序排序数组的一个旋转，数组中有重复的数字或者没有重复的数字
 * 2. 输入只有一个元素的数组
 * 3. 输入不是数组类型的数组
 */
function findRotateMinVal(arr) {
  if (arr === null) {
    throw new TypeError("类型错误..");
  }
  if (!Array.isArray(arr)) {
    throw new TypeError("类型错误..");
  }
  const len = arr.length - 1;
  let i = 0;
  let j = len;

  let indexMid = i;
  while (arr[i] >= arr[j]) {
    if (j - i === 1) {
      indexMid = j;
      break;
    }

    indexMid = Math.floor(i + (j - i) / 2);

    if (arr[i] === arr[j] && arr[indexMid] === arr[i]) {
      return MinInOrder(arr, i, j);
    }
    if (arr[indexMid] >= arr[i]) {
      i = indexMid;
    } else if (arr[indexMid] <= arr[j]) {
      j = indexMid;
    }
  }
  return arr[indexMid];
  // 因为有翻转0 数组的存在，相当于没翻转，那最小元素为 0
}

function MinInOrder(numbers, index1, index2) {
  let res = numbers[index1];
  for (let i = index1 + 1; i <= index2; i++) {
    if (res > numbers[i]) {
      res = numbers[i];
    }
  }
  return res;
}
const res = findRotateMinVal([1, 0, 1, 1, 1]);
console.log(res);

const res2 = findRotateMinVal([1]);
console.log(res2);
findRotateMinVal(2);
