/**
 *
 * @param {number} i
 * @param {number} j
 * @param {number} dist
 * @param {number} w
 * @param {number} n
 */

let minValue = Number.MIN_VALUE;
function minDistBT(i, j, dist, w, n) {
  if (i === n && j === n) {
    minValue = Math.min(minValue, dist);
  }
  if (i < n) {
    minDistBT(i + 1, j, dist + w[i][j], w, n);
  }
  if (j < n) {
    minDistBT(i, j + 1, dist + w[i][j], w, n);
  }
}
