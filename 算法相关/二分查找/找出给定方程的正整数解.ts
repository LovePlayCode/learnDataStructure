/**
 * 找出给定方程的正整数解
 */

class CustomFunction {
  f(x: number, y: number): number {
    return 0;
  }
}
function findSolution(customfunction: CustomFunction, z: number): number[][] {
  const res: number[][] = [];
  for (let x = 1; x <= 1000; x++) {
    let yleft = 1,
      yright = 1000;
    while (yleft <= yright) {
      const mid = (yleft + yright) >> 1;
      if (customfunction.f(x, mid) === z) {
        res.push([x, mid]);
        break;
      } else if (customfunction.f(x, mid) > z) {
        yright = mid - 1;
      } else {
        yleft = mid + 1;
      }
    }
  }
  return res;
}
console.log("123");
export {};
