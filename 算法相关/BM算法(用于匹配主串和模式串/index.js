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
 *
 * @param {string[]} b  表示模式串
 * @param {number} m 表示长度
 * @param {*} suffix 后缀数组
 * @param {*} prefix 前缀数组
 * 1. 初始化suffix和prefix数组
 * 2. 遍历子串长度，在遍历内部从后往前迭代，填充suffix, 判断条件为当前的b[j]的字符 == b[m-1-k]的字符
 * 3. 如果 j == -1 说明公共后缀子串也是模式串的前缀子串
 */
function generateGS(b, m) {
  const suffix = new Array(m).fill(-1);
  const prefix = new Array(m).fill(false);

  for (let i = 0; i < m - 1; i++) {
    let j = i;
    let k = 0;
    while (j >= 0 && b[j] === b[m - 1 - k]) {
      --j;
      ++k;
      suffix[k] = j + 1;
    }
    if (j === -1) {
      prefix[k] = true;
    }
  }
  return [suffix, prefix];
}

function moveByGS(j, m, suffix, prefix) {
  const k = m - 1 - j;
  if (suffix[k] !== -1) {
    return j - suffix[k] + 1;
  }
  for (let r = j + 2; r <= m - 1; r++) {
    if (prefix[m - r] === true) {
      return r;
    }
  }
  return m;
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
  const [suffix, prefix] = generateGS(b, m);

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

    // a[i + j]： 找到的是在主串中坏字符是什么  然后通过哈希表找到在模式串中的位置。
    const x = j - bc[a[i + j]];
    let y = 0;

    // 利用好后缀规则匹配
    if (j < 0) {
      y = moveByGS(j, m, suffix, prefix);
    }
    i = i + Math.max(x, y);
  }
}
