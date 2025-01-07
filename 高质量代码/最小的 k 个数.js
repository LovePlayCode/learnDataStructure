/**
 *
 * @param {number[]} numbers
 * @param {number} k
 */
function GetLeastNumbers(numbers, k, n) {
  if (!Array.isArray(numbers) || k > n || n <= 0 || k <= 0) {
    return;
  }
  const start = 0;
  let end = n - 1;
  let index = Partition(numbers, start, end);
  while (index !== k - 1) {
    if (index < k - 1) {
      index = Partition(numbers, index + 1, end);
    } else {
      index = Partition(numbers, start, index - 1);
    }
  }
  for (let i = 0; i < k; i++) {
    console.log(numbers[i]);
  }
}

function Partition(nums, left, right) {
  const basisVal = nums[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (nums[j] <= basisVal) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
  }
  [nums[i], nums[right]] = [nums[right], nums[i]];
  return i;
}

GetLeastNumbers([4, 5, 1, 6, 2, 7, 3, 8], 4, 8);
