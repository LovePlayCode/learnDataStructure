function minDist(i, j, matrix, mem) {
  if (i === 0 && j === 0) {
    return matrix[0][0];
  }

  if (mem[i][j] > 0) {
    return mem[i][j];
  }

  let minLeft = Number.MAX_VALUE;
  if (j - 1 >= 0) {
    minLeft = minDist(i, j - 1);
  }

  let minUp = Number.MAX_VALUE;
  if (i - 1 >= 0) {
    minUp = minDist(i - 1, j);
  }

  const currMinDist = matrix[i][j] + Math.min(minLeft, minUp);
  mem[i][j] = currMinDist;
  return currMinDist;
}
