function quickSort(nums, left, right, k) {
  if (left >= right) {
    return;
  }
  const privIndex = partition(nums, left, right);
  if (privIndex < k - 1) {
    quickSort(nums, privIndex + 1, right, k);
  }
  if (privIndex > k - 1) {
    quickSort(nums, left, privIndex - 1, k);
  }
  if (privIndex === k - 1) {
    for (let i = 0; i <= privIndex; i++) {
      console.log(nums[i]);
    }
  }
}

/**
 *
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 */
function partition(nums, left, right) {
  const referenceValue = nums[right];
  let i = left;
  let j = left;
  while (j < right) {
    if (nums[j] <= referenceValue) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
  [nums[i], nums[right]] = [nums[right], nums[i]];
  return i;
}

function sort(nums, k) {
  const len = nums.length;
  quickSort(nums, 0, len - 1, k);
  //   console.log(nums);
}

const nums = [4, 5, 1, 6, 2, 7, 3, 8];
sort(nums, 6);
