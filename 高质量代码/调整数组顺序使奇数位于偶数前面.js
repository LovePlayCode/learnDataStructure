/**
 * 输入: 整数数组
 * 输出: 奇数放到最前面，偶数放到最后面。
 * @param {number[]} arr
 */
function handleOddAndEven(arr) {
  const len = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    // 判断是否是奇数还是偶数
    if (arr[i] % 2 === 0) {
      const evenNum = arr[i];
      if (moveArray(i, arr)) {
        arr[len] = evenNum;
      }
    }
  }
}

/**
 *
 * @param {number[]} index
 * @param {number[]} arr
 */
function moveArray(index, arr) {
  if (!(index in arr)) {
    return false;
  }

  arr.splice(index, 1);
  return true;
}

// const arr = [1, 2, 1, 8, 9, 10];
const arr = [2, 1];
handleOddAndEven(arr);
console.log(arr);
