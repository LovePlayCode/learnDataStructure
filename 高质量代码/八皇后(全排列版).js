/**
 * 解决 8 皇后问题
 */
function solveEightQueens() {
  const results = [];
  const columns = [0, 1, 2, 3, 4, 5, 6, 7]; // 初始列号
  // Test
  /**
   * 判断是否有对角线冲突
   * @param {number[]} arr 当前排列
   * @returns {boolean} 是否无冲突
   */
  function isValid(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (Math.abs(i - j) === Math.abs(arr[i] - arr[j])) {
          return false; // 有对角线冲突
        }
      }
    }
    return true; // 无冲突
  }

  /**
   * 全排列递归
   * @param {number[]} arr 当前数组
   * @param {number} start 起始索引
   */
  function permute(arr, start) {
    if (start === arr.length) {
      if (isValid(arr)) {
        results.push([...arr]); // 保存无冲突的排列
      }
      return;
    }

    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]]; // 交换
      permute(arr, start + 1); // 递归
      [arr[start], arr[i]] = [arr[i], arr[start]]; // 回溯
    }
  }

  permute(columns, 0); // 开始全排列
  return results;
}

// 测试
const solutions = solveEightQueens();
console.log(`共有 ${solutions.length} 种解法：`);
