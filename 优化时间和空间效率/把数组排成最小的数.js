/**
 *
 * @param {number[]} numbers
 * @param {number} len
 */
function PrintMinNumber(numbers, len) {
  let minVal = Number.MAX_SAFE_INTEGER;
  function permute(nums) {
    const result = [];

    function backtrack(path, remaining) {
      if (remaining.length === 0) {
        // 先转成字符串。然后在判断大小
        const num = path.join("");
        minVal = Math.min(minVal, parseInt(num));
        return;
      }

      for (let i = 0; i < remaining.length; i++) {
        // 选择当前元素
        path.push(remaining[i]);
        // 剩余元素去掉当前选中的
        backtrack(path, remaining.slice(0, i).concat(remaining.slice(i + 1)));
        // 撤销选择，回溯
        path.pop();
      }
    }

    backtrack([], nums);
    return result;
  }

  permute(numbers);
  return minVal;
}

const res = PrintMinNumber([3, 32, 321]);
console.log(res);
