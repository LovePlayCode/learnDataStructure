function recursion(index, arr) {
  if (index === 0) {
    return;
  }
  const parent = Math.floor(index / 2);
  if (arr[parent] < arr[index] && Math.floor(index / 2)) {
    const temp = arr[parent];
    arr[parent] = arr[index];
    arr[index] = temp;
    recursion(parent, arr);
  }
}

class Heap {
  /**
   * 数组，从下标 1 开始存储数据
   */
  arr = [];
  /**
   * 堆中存储的最大数据个数
   */
  n;
  /**
   * 堆中已经存储的数据个数
   */
  count;

  constructor(capacity) {
    let newArr = new Array(capacity + 1).fill(-1);
    this.n = capacity;
    this.count = 0;
    this.arr = newArr;
  }

  insert(data) {
    if (this.count >= this.n) {
      return;
    }
    // 因为第一个元素充当哨兵节点，所以数组索引需要从第一个元素开始
    ++this.count;
    this.arr[this.count] = data;
    let i = this.count;
    while (Math.floor(i / 2) > 0 && this.arr[i] > this.arr[Math.floor(i / 2)]) {
      const temp = this.arr[i];
      this.arr[i] = this.arr[Math.floor(i / 2)];
      this.arr[Math.floor(i / 2)] = temp;
      // a[]
      i = Math.floor(i / 2);
    }
  }

  /**
   * 用递归的方式插入
   */
  insertRecursion(data) {
    if (this.count >= this.n) {
      return;
    }
    this.count++;
    this.arr[this.count] = data;
    const parentIndex = Math.floor(this.count / 2);
    if (parentIndex > 0 && this.arr[this.count] <= this.arr[parentIndex]) {
      return;
    } else {
      recursion(this.count, this.arr);
    }
  }

  /**
   * 删除堆顶元素
   */
  removeMax() {
    if (this.count === 0) {
      return -1;
    }
    this.arr[1] = this.arr[this.count];
    --this.count;
    this.heapify(1);
  }
  heapify(i) {
    // 需要一个循环去找对应的元素
    // 1. 判断左边是否比当前值大 如果大，maxInde = i*2
    // 判断右边 i*2+1
    // 判断 maxPos 是否等于 i 如果等于 i break
    // i = maxPos
    let maxIndex = i;
    while (true) {
      if (i * 2 <= this.count && this.arr[i] < this.arr[i * 2]) {
        maxIndex = i * 2;
      }
      if (i * 2 + 1 <= this.count && this.arr[maxIndex] < this.arr[i * 2 + 1]) {
        maxIndex = i * 2 + 1;
      }
      if (maxIndex === i) {
        break;
      }
      const temp = this.arr[i];
      this.arr[i] = this.arr[maxIndex];
      this.arr[maxIndex] = temp;
      i = maxIndex;
    }
  }

  /**
   * 构建堆
   * 1. 只需要堆化非叶子节点即可。 从i/2开始从上往下堆化。
   * @param {number[]} a
   * @param {number} n
   */
  buildHeap() {
    const n = this.n;
    for (let i = n / 2; i >= 1; --i) {
      this.heapify(i);
    }
  }

  /**
   * 堆排序
   * 1. 先将下标为 n的数据放到堆顶
   * 2. 将剩下的元素继续构成
   */
  sort() {
    this.buildHeap();
    let k = this.n;
    while (k > 1) {
      const temp = this.arr[k];
      this.arr[k] = this.arr[1];
      this.arr[1] = temp;
      k--;
      this.heapify(k);
    }
  }
}

const heap = new Heap(10);
heap.insertRecursion(10);
heap.insertRecursion(11);
heap.insertRecursion(1);
heap.insertRecursion(100);
heap.insertRecursion(99);
heap.removeMax();
console.log(heap.arr);
