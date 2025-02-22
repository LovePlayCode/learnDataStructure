/**
 *
 * @param {number[]} numbers
 * @param {number} length
 */
function MoreThanHalfNum(numbers, length) {
  const mid = length >> 1;
  const map = new Map();
  for (let i = 0; i < numbers; i++) {
    if (map.has(numbers[i])) {
      const val = map.get(numbers[i]);
      if (val > mid) {
        return val;
      }
      const newVal = val + 1;
      map.set(numbers[i], newVal);
    } else {
      map.set(numbers[i], 1);
    }
    const val = map.get(numbers[i]);
    if (val > mid) {
      return val;
    }
  }
}
