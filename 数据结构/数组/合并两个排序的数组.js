/**
 * 有两个排序数组A1和A2，内存在A1的末位有足够多的空闲空间容纳 A2，实现一个函数，把 A2 所有数字插入到 A1 中并且所有数字是排序的
 */

/**
 *
 * @param {number[]} A1
 * @param {number[]} A2
 */
function mergeArr(A1, A2) {
  // 定义两个指针: p1,p2
  let p1 = 0;
  let p2 = A1.length + A2.length - 1;
  let p3 = A2.length - 1;
  for (let i = A1.length - 1; i > 0; i--) {
    if (A1[i] !== null && A1[i] !== undefined) {
      p1++;
    }
  }
  // A1有足够的内存空间，所以 p1 指针移动到 A1 的末尾，p2 移动到整个数组的末位进行循环比对。 然后进行数据的填充
  while (p1 >= 0 && p3 >= 0) {
    if (A1[p1] > A2[p3]) {
      A1[p2] = A1[p1];
      p1--;
    } else {
      A1[p2] = A2[p3];
      p3--;
    }

    p2--;
  }

  while (p3 >= 0) {
    A1[p2] = A2[p3];
    p3--;
    p2--;
  }
  return A1;
}
