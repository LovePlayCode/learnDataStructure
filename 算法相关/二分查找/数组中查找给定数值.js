function bsearch(array, n, value) {
  let low = 0;
  let height = n - 1;
  while (low <= height) {
    // 因为两个整型数据相加可能会发生溢出，所以可以通过这种表达式计算: mid = low +  (height - low) / 2
    let mid = (low + height) / 2;
    if (array[mid] === value) {
      return mid;
    }
    if (array[mid] < value) {
      low = mid + 1;
    } else {
      height = mid - 1;
    }
  }
  return -1;
}

/**
 * 递归版本
 */
function bsearchRecursion(arr, n, val) {
  return bsearchInternally(arr, 0, n - 1, val);
}

function bsearchInternally(arr, left, right, val) {
  if (left >= right) {
    return -1;
  }
  let mid = left + Math.floor((right - left) / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if (arr[mid] < val) {
    return bsearchInternally(arr, mid + 1, right, val);
  } else {
    return bsearchInternally(arr, left, mid - 1, val);
  }
}
