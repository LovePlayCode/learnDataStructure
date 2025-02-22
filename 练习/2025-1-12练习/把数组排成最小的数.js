function Permutations(nums) {
  /**
   *
   * @param {number[]} path
   * @param {number[]} remaining
   * @returns
   */
  let minVal = Number.MAX_SAFE_INTEGER;
  function backtrack(path, remaining) {
    if (remaining.length === 0) {
      console.log(path);
      const num = parseInt(path.join(""));
      minVal = Math.min(num, minVal);
      return;
    }
    for (let i = 0; i < remaining.length; i++) {
      path.push(remaining[i]);
      backtrack(path, remaining.slice(0, i).concat(remaining.slice(i + 1)));
      path.pop();
    }
  }
  backtrack([], nums);
  console.log(minVal);
  return minVal;
}

Permutations([3, 32, 321]);
