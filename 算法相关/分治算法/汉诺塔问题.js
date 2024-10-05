/**
 *
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * 
 * 1. 圆盘只能从一根柱子顶部拿出，从另一根柱子顶部放入
 * 2. 每次只能移动一个圆盘(所以需要借助三根柱子进行移动)
 * 3. 小圆盘必须时刻位于大圆盘之上。
 */
function solveHanota(A, B, C) {
  const n = A.length;

  const dfs = (n, src, buf, tar) => {
    // 代表当前圆盘为 1，直接移动即可。
    // dfs(n-1)
    if (n === 1) {
      move(src, tar);
      return;
    }
    // 先从 A -> B 借助 C
    dfs(n - 1, src, tar, buf);
    // 剩下一个从 A -> C
    move(src, tar);
    // 从 B -> C 借助 A
    dfs(n - 1, buf, src, tar);
  };

  dfs(n, A, B, C);
}
/**
 *
 * @param {number[]} src
 * @param {number[]} tar
 */
function move(src, tar) {
  const pan = src.pop();
  tar.push(pan);
}

function hanoi(n, source, auxiliary, target) {
  if (n === 1) {
    console.log(`Move disk 1 from ${source} to ${target}`);
  } else {
    hanoi(n - 1, source, target, auxiliary); // Step 1: 将 n-1 个盘子从 source 移动到 auxiliary
    console.log(`Move disk ${n} from ${source} to ${target}`); // Step 2: 将第 n 个盘子移动到 target
    hanoi(n - 1, auxiliary, source, target); // Step 3: 将 n-1 个盘子从 auxiliary 移动到 target
  }
}

// 测试用例
const n = 132; // 圆盘数
hanoi(n, "A", "B", "C");
