function majorityElement(nums) {
  let candidate = null;
  let count = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }
  // 2. 验证候选人是否为众数
  count = 0; // 重置计数
  for (let num of nums) {
    if (num === candidate) {
      count++;
    }
  }
  return count > Math.floor(nums.length / 2) ? candidate : null;
}

// 测试
const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(majorityElement(arr)); // 输出 2
const arr2 = [7];
console.log(majorityElement(arr2)); // 输出: 7
const arr3 = [3, 3, 3, 3, 3];
console.log(majorityElement(arr3)); // 输出: 3
