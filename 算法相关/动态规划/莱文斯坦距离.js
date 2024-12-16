let minValue = Number.MAX_SAFE_INTEGER;
/**
 *
 * @param {number} i
 * @param {number} j
 * @param {number} edist
 */
function lwstBT(i, j, n, m, edist) {
  // 说明有一个遍历完了，需要判断另一个字符串里有没有多余的字符
  if (i === n || j === m) {
    if (i < n) {
      edist += n - i;
    }
    if (j < m) {
      edist += m - j;
    }
    minValue = Math.min(edist, minValue);
  }
  if (a[i] === b[j]) {
    lwstBT(i + 1, j + 1, n, m, edist);
  } else {
    lwstBT(i + 1, j, n, m, edist + 1);
    lwstBT(i, j + 1, n, m, edist + 1);
    lwstBT(i + 1, j + 1, n, m, edist + 1);
  }
}
