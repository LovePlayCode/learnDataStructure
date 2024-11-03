// 返回所有组合

// [1,2,3]

/**
 *
 * @param {number[]} arr
 */
function backtrack(state, arr, resArr, length, selected) {
    if (state.length === length) {
      resArr.push([...state]);
      return;
    }
    const set = new Set()
    arr.forEach((num, index) => {
      if (!selected[index] && !set.has(num)) {
        state.push(num);
        set.add(num)
        selected[index] = true
        backtrack(state, arr, resArr, length,selected);
        state.pop();
        selected[index] = false
      }
    });
  }
  
  function main() {
    const arr = [1, 1, 2];
    const resArr = [];
    const state = [];
  
    // 用于记录是否选择
    const selected = Array.from({ length: arr.length }).fill(false);
    backtrack(state, arr, resArr, arr.length, selected);
    console.log("res==", resArr);
  }
  main();
  