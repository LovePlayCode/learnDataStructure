/**
 * 输入: intervals = [[1,3],[2,6],[8,10],[15,18]]
   输出: [[1,6],[8,10],[15,18]]
   @param {number[][]} arr 
 */
function main(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("类型错误.");
  }
  // 先排序
  arr.sort((a, b) => {
    return a[0] - b[0];
  });
  const len = arr.length;
  // 定义一个 start,end
  let start = arr[0][0];
  let end = arr[0][1];
  let res = [arr[0]];
  for (let i = 1; i < len; i++) {
    if (arr[i][0] < end) {
      if (arr[i][1] > end) {
        end = arr[i][1];
        res[res.length - 1][1] = end;
      }
    } else {
      res.push(arr[i]);
      if (arr[i][1] > end) {
        start = arr[i][0];
        end = arr[i][1];
        res[res.length - 1][1] = end;
      }
    }
  }
  return res;
}
console.log(
  main([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
