/**
 * 1. 传入模式串b和模式串的长度
 * 2. 将模式串转换为 ascii 并使用ascii为数组下标，值为字符在模式串中的下标构造数组,如果有重复的，只会记录最后一个出现的位置。
 * 3. 返回构造出来的数组。
 * @param {string[]} b
 * @param {*} m
 * @param {*} bc
 */
function generateBC(b, m) {
  const bc = new Array(256).fill(-1);
  for (let i = 0; i < m; i++) {
    const ascii = b[i].charCodeAt(0);
    bc[ascii] = i;
  }
  return bc;
}

/**
 * BM算法，用于匹配模式串在主串中出现的位置
 * @param {string[]} a 主串
 * @param {*} n 主串长度
 * @param {*} b 模式串
 * @param {*} m 模式串长度
 */
function bm(a, n, b, m) {
  /**
   * 1. 先根据模式串构造出散列表，这里的散列表是一个数组
   * 2. 将n-m作为条件进行循环
   * 3. 内部有一个循环，从后往后循环模式串，找到坏字符对应模式串的下标
   * 4. 如果下标<=0 说明匹配成功
   * 5. 否则进行移动，这里用 主串进行移动
   */
  const bc = generateBC(b, m);
  let i = 0;
  while (i <= n - m) {
    for (let j = m - 1; j >= 0; j--) {
      if (a[i + j] !== b[j]) {
        break;
      }
    }
    if (j < 0) {
      return i;
    }
    i = i + (j - bc[a[i + j]]);
  }
}
