/**
 * 有两个排序数组A1和A2，内存在A1的末位有足够多的空闲空间容纳 A2，实现一个函数，把 A2 所有数字插入到 A1 中并且所有数字是排序的
 */

/**
 *
 * @param {number[]} A1
 * @param {number[]} A2
 */
function mergeArr(A1, m, A2, n) {
  let n1Right = m - 1;
  let n2Right = n - 1;
  let currentIndex = m + n - 1;
  while (n1Right >= 0 && n2Right >= 0) {
    if (A1[n1Right] < A2[n2Right]) {
      A1[currentIndex--] = A2[n2Right--];
    } else {
      A1[currentIndex--] = A1[n1Right--];
    }
  }

  // 退出循环之后，还有一种情况是 A2 还有剩余，直接添加即可
  while (n2Right >= 0) {
    A1[currentIndex--] = A2[n2Right--];
  }
}
// const A1 = [1];
// const A2 = [0];

const A1 = [0];
const A2 = [1, 100];
const arr1 = new Array(A1.length + A2.length).fill(0);
for (let i = 0; i < A1.length; i++) {
  arr1[i] = A1[i];
}

mergeArr(arr1, A1.length, A2, A2.length);
console.log(arr1);
