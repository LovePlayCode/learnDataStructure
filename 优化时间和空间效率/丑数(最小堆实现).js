class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 插入新元素
  insert(value) {
    this.heap.push(value);
    this._bubbleUp(this.heap.length - 1);
  }

  // 弹出堆顶元素（最小值）
  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._sinkDown(0);
    return min;
  }

  // 返回堆顶元素
  peek() {
    return this.heap[0];
  }

  // 堆大小
  size() {
    return this.heap.length;
  }

  _bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  _sinkDown(index) {
    const length = this.heap.length;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }
}

function nthUglyNumberHeap(n) {
  const heap = new MinHeap();
  const seen = new Set();
  const primes = [2, 3, 5];

  heap.insert(1);
  seen.add(1);
  let ug = 1;
  for (let i = 0; i < n; i++) {
    ug = heap.extractMin();
    for (let factor of primes) {
      const newVal = factor * ug;
      if (!seen.has(newVal)) {
        heap.insert(newVal);
        seen.add(newVal);
      }
    }
  }

  return ug;
}

// 测试
console.log(nthUglyNumberHeap(10)); // 输出 12
console.log(nthUglyNumberHeap(1500)); // 输出 859963392
