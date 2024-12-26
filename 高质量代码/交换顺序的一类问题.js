/**
 * 双指针方法移动数组中奇数和偶数，使得奇数位于数组最前面，偶数位于数组最后面
 * @param {number[]} arr
 * @param {string} len
 */
function ReorderOddEven(arr, len, func) {
  if (!Array.isArray(arr)) {
    throw new TypeError("数据错误...");
  }
  // 考虑数组中只有两个元素
  let l1 = 0;
  let l2 = len - 1;
  while (l1 < l2) {
    if (func(arr[l2])) {
      l2--;
      continue;
    }
    if (func(arr[l1]) && !func(arr[l2])) {
      [arr[l1], arr[l2]] = [arr[l2], arr[l1]];
      l2--;
    }
    l1++;
  }
}

function isEven(n) {
  return (n & 1) === 0;
}

function isOdd(n) {
  return (n & 1) === 1;
}

const arr = [2, 1, 9, 8];
ReorderOddEven(arr, arr.length, isEven);
console.log(arr);
