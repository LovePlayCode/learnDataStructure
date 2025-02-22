/**
 *
 * @param {string[]} a
 * @param {number} n
 * @param {string[]} b
 * @param {number} m
 * min_edist 表示处理到 a[i]和 b[j]，已经执行的最少编辑次数。
 */
function lwstDP(a, n, b, m) {
  const minDist = new Array(n).fill(0).map((item) => new Array(m).fill(0));
  // 填充行
  for (let j = 0; j < m; j++) {
    if (a[0] === b[j]) {
      minDist[0][j] = j;
    } else if (j !== 0) {
      minDist[0][j] = minDist[0][j - 1] + 1;
    } else {
      minDist[0][j] = 1;
    }
  }

  for (let i = 0; i < n; i++) {
    if (a[i] === b[0]) {
      minDist[i][0] = i;
    } else if (i !== 0) {
      minDist[i][0] = minDist[i - 1][0] + 1;
    } else {
      minDist[i][0] = 1;
    }
  }

  // 填表
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (a[i][j] !== b[i][j]) {
        minDist[i][j] = Math.min(
          minDist[i - 1][j] + 1,
          minDist[i][j - 1] + 1,
          minDist[i - 1][j - 1] + 1
        );
      } else {
        minDist[i][j] = Math.min(
          minDist[i - 1][j] + 1,
          minDist[i][j - 1] + 1,
          minDist[i - 1][j - 1]
        );
      }
    }
  }

  return minDist[i - 1][m - 1];
}
