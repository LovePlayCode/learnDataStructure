function majorityElement(nums) {
  let count = 0;
  let resNum = "";
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      resNum = nums[i];
    } else if (nums[i] === resNum) {
      count++;
    } else {
      count--;
    }
  }
  return resNum;
}

// 测试
const arr = [1, 2, 3, 2, 2, 2, 5, 4, 2];
console.log(majorityElement(arr)); // 输出 2
const arr2 = [7];
console.log(majorityElement(arr2)); // 输出: 7
const arr3 = [3, 3, 3, 3, 3];
console.log(majorityElement(arr3)); // 输出: 3
