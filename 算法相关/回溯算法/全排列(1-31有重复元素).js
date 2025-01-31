/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  return permuteUnique2(nums);
};

function permuteUnique2(nums) {
  let result = [];
  let current = [];
  let visited = new Array(nums.length).fill(false);

  // 排序，确保相同的数字相邻
  nums.sort((a, b) => a - b);

  // 回溯函数
  function backtrack() {
    // 如果当前排列长度等于nums的长度，说明已经生成了一个排列
    if (current.length === nums.length) {
      result.push([...current]); // 将当前排列加入结果
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      // 如果当前数字已经被访问过，跳过
      if (visited[i]) continue;

      // 防止重复：如果当前数字和前一个数字相同，且前一个数字没有被访问过，则跳过
      if (i > 0 && nums[i] === nums[i - 1] && !visited[i - 1]) continue;

      // 选择当前数字
      visited[i] = true;
      current.push(nums[i]);

      // 递归
      backtrack();

      // 回溯，撤销选择
      visited[i] = false;
      current.pop();
    }
  }

  // 开始回溯
  backtrack();

  return result;
}

console.log(permuteUnique([1, 1, 2])); // 输出 [[1, 1, 2], [1, 2, 1], [2, 1, 1]]
console.log(permuteUnique([1, 2, 3])); // 输出 [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
