class HashMapChaining {
  #size; // 键值对数量
  #capacity; // 哈希表容量
  #loadThres; // 触发扩容的负载因子阈值
  #extendRatio; // 扩容倍数
  #buckets; // 桶数组
  constructor() {
    this.#size = 0;
    this.#capacity = 4;
    // 当负载因子超过 3/2后，会进行扩容
    this.#loadThres = 2.0 / 3.0;
    // 扩容倍数
    this.#extendRatio = 2;
    // 初始化数组
    this.#buckets = new Array(this.#capacity).fill(null).map((x) => []);
  }
  /**
   * 哈希函数
   * @param key 通过 key 找到对应桶中的索引
   */
  #hashFunc(key) {
    return key % this.#capacity;
  }
  /**
   * 负载因子
   */
  #loadFactor() {
    return this.#size / this.#capacity;
  }
  /**
   * 查询操作
   */
  get(key) {
    const index = this.#hashFunc(key);
    // 访问对应元素
    const bucket = this.#buckets[index];
    for (const val of bucket) {
      if (val.key === key) {
        return val.val;
      }
    }
    return null;
  }
  put(key, val) {
    // 负载因子： 元素数量 / 桶数量
    if (this.#loadFactor() > this.#loadThres) {
      this.#extend();
    }
    const index = this.#hashFunc(key);
    const bucket = this.#buckets[index];
    for (const pair of bucket) {
      // 如果找到一样的 key，更新对应的值
      if (pair.key === key) {
        pair.val = val;
        return;
      }
    }
    const pair = new Pair(key, val);
    bucket.push(pair);
    this.#size++;
  }
  /* 删除操作 */
  remove(key) {
    const index = this.#hashFunc(key);
    let bucket = this.#buckets[index];
    // 遍历桶，从中删除键值对
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i].key === key) {
        bucket.splice(i, 1);
        this.#size--;
        break;
      }
    }
  }
}
