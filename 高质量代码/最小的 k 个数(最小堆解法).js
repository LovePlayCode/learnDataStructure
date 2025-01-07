class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // 获取父节点的索引
  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  // 获取左子节点的索引
  left(i) {
    return 2 * i + 1;
  }

  // 获取右子节点的索引
  right(i) {
    return 2 * i + 2;
  }

  // 交换堆中两个元素
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }

  // 堆化过程，从索引 i 开始，调整堆的结构
  heapify(i) {
    let largest = i;
    const left = this.left(i);
    const right = this.right(i);

    // 如果左子节点大于当前节点
    if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
      largest = left;
    }

    // 如果右子节点大于当前节点
    if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
      largest = right;
    }

    // 如果有变化，交换并继续堆化
    if (largest !== i) {
      this.swap(i, largest);
      this.heapify(largest);
    }
  }

  // 插入一个元素到堆中
  insert(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;

    // 向上调整堆
    while (i > 0 && this.heap[this.parent(i)] < this.heap[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  // 删除堆顶元素，并重新调整堆
  remove() {
    if (this.heap.length === 0) return null;
    const root = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapify(0);
    return root;
  }

  // 返回堆顶元素
  peek() {
    return this.heap[0];
  }

  // 返回堆的大小
  size() {
    return this.heap.length;
  }
}

function findKSmallest(nums, k) {
  const maxHeap = new MaxHeap();

  for (let num of nums) {
    if (maxHeap.size() < k) {
      maxHeap.insert(num);
    } else if (num < maxHeap.peek()) {
      maxHeap.remove(); // 删除堆顶（即最大值）
      maxHeap.insert(num); // 插入新的数
    }
  }

  // 返回堆中的 k 个最小数字
  return maxHeap.heap;
}

// 测试用例
const nums = [4, 5, 1, 6, 2, 7, 3, 8];
const k = 4;
console.log(findKSmallest(nums, k)); // 输出：[2, 3, 1, 4] 或类似结果，取决于堆排序的实现细节
