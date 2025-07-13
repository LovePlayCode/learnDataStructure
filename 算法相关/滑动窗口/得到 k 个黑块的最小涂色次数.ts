function minimumRecolors(blocks: string, k: number): number {
  // 用来记录第一次满足条件时，需要涂多少个黑色块
  let minVal = 0;
  for (let i = 0; i < k; i++) {
    minVal += blocks[i].charCodeAt(0) & 1;
  }
  let count = minVal;
  for (let i = k; i < blocks.length; i++) {
    // 计算当前窗口的黑色块数量
    minVal += blocks[i].charCodeAt(0) & 1; // 新加入的块
    minVal -= blocks[i - k].charCodeAt(0) & 1; // 移除的块
    count = Math.min(minVal, count);
  }
  return count;
}

export {};
