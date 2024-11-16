/**
 * 桶排序
 * 1. 创建桶
  a. 根据最大最小值以及预先设计的桶的大小计算得出桶的大小
  b. 遍历待排序的数组，计算出元素应该放到哪个桶里。
2. 排序
  a. 依次对每个桶内的数据进行排序(可使用插入或快排)
  b. 将桶依次添加入新数组中，返回新数组。
 */

/**
 *
 * @param {number[]} nums
 * @param {number} bucketSize
 */
function bucketSort(nums, bucketSize = 5) {
  if (nums.length < 2) {
    return nums;
  }
  // 创建桶
  const bucketArr = createBuckets(nums, bucketSize);

  // 给桶排序,函数会返回一个数组，数组中就是排序好的数据
  const resArr = sortBuckets(bucketArr, nums);
  return resArr;
}

function sortBuckets(bucketArr, nums) {
  const n = bucketArr.length;
  const resArr = [];
  for (let i = 0; i < n; i++) {
    console.log(bucketArr[i]);
    insertionSort(bucketArr[i]);
    resArr.push(...bucketArr[i]);
  }
  return resArr;
}

/**
 *
 * @param {number[]} nums
 * @param {number} bucketSize
 */
function createBuckets(nums, bucketSize) {
  // 先找到最大最小值
  let i = 0;
  const n = nums.length;
  let max = 0;
  let min = 0;
  while (i < n) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[i]);
    i++;
  }
  // 怕有除不尽的情况，所以需要+1
  const bucketLength = Math.floor((max - min) / bucketSize) + 1;
  // 分桶
  const bucketArr = Array.from({ length: bucketLength }).map((item) => []);

  // 遍历数组，将元素放入桶中
  for (let i = 0; i < n; i++) {
    const index = Math.floor((nums[i] - min) / bucketSize);
    bucketArr[index].push(nums[i]);
  }

  return bucketArr;
}

// 插入排序
function insertionSort(array) {
  const { length } = array;
  if (length <= 1) return;

  for (let i = 1; i < length; i++) {
    let value = array[i];
    let j = i - 1;

    while (j >= 0) {
      if (array[j] > value) {
        array[j + 1] = array[j]; // 移动
        j--;
      } else {
        break;
      }
    }
    array[j + 1] = value; // 插入数据
  }
}

const sortArr = bucketSort([1, 5, 6, 2, 3, 4, 7], 5);
console.log("sortArr==", sortArr);
