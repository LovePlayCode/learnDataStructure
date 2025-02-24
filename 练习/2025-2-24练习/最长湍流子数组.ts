function maxTurbulenceSize(arr: number[]): number {
  const len = arr.length;
  if (len < 2) {
    return 1;
  }
  let left = 0;
  let right = 1;
  let res = 0;
  // 表示当前
  let flag = false;
  while (right < len) {
    const curFlag = arr[right - 1] < arr[right];
    if (right === 1 || curFlag === flag) {
      left = right - 1;
    }
    if (arr[right] === arr[right - 1]) {
      left = right;
    }
    right++;
    res = Math.max(res, right - left);
    flag = curFlag;
  }
  return res;
}
export {};
