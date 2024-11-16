/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const indexToFind = nums.length - k;

  // 写出递归公式: findElement(k) = /
  return quick_sort_c(nums, 0, nums.length - 1, indexToFind);
};

function quick_sort_c(A, left, right, k) {
  if (left >= right) {
    return left;
  }
  const pivot = partition(A, left, right);
  if (k === pivot) {
    return A[pivot];
  }
  if (pivot < k) {
    return quick_sort_c(A, pivot + 1, right, k);
  } else {
    return quick_sort_c(A, left, pivot - 1, k);
  }
}

function partition(nums, left, right) {
  const pivot = nums[right];
  let i = left;
  let j = left;
  while (j <= right) {
    if (nums[j] < pivot) {
      // [nu] = []
      [nums[i], nums[j]] = [nums[j], nums[i]];
      // nums[i] = nums[j]
      i++;
    }
    j++;
  }
  [nums[i], nums[right]] = [nums[right], nums[i]];
  return i;
}

const res = findKthLargest([3, 2, 1, 5, 6, 4], 2);
console.log("res==", res);
