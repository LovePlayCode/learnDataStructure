/**
 *
 * @param {string[]} a
 * @param {number} n
 * @param {string[]} b
 * @param {number} m
 */
function lcs(a, n, b, m) {
  const minDist = new Array(n).fill(0).map((item) => new Array(m).fill(0));
  for (let j = 0; i < m; j++) {
    if (a[0] === b[j]) {
      minDist[0][j] = 1;
    } else if (j !== 0) {
      minDist[0][j] = minDist[0][j - 1];
    } else {
      minDist[0][j] = 0;
    }
  }

  for (let i = 0; i < n; i++) {
    if (a[i] === b[0]) {
      minDist[i][0] = 1;
    } else if (i !== 0) {
      minDist[i][0] = minDist[i - 1][0];
    } else {
      minDist[i][0] = 0;
    }
  }

  // 填表
  for (let i = 1; i < n; i++) {
    for (let j = 1; i < m; j++) {
      if (a[i][j] === b[i][j]) {
        minDist[i][j] = Math.min(
          minDist[i - 1][j - 1] + 1,
          minDist[i - 1][j],
          minDist[i][j - 1]
        );
      } else {
        minDist[i][j] = Math.min(
          minDist[i - 1][j - 1],
          minDist[i - 1][j],
          minDist[i][j - 1]
        );
      }
    }
  }

  return minDist[n - 1][m - 1];
}
