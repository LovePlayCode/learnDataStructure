/**
 *
 * 计数排序
 * 1. 找到数组中的最大值 max
 * 2. 根据 max 划分为 n 个桶
 * 3. 每个桶里存放的是属于这个值的数字的个数。
 * 4. 将每个桶从前到后依次累加。  如果将这些桶比作数组C 那么 C[index] = 小于等于当前分数的人。
 * 5. 将待排序数组从后到前扫描， 扫描的值就是数组 C的索引，C 索引的值就是当前数据在新数组的下标。 填充之后减 1 即可。
 * 6. 整个数组扫描完成之后也完成了排序
 */

/**
 *
 * @param {number[]} nums
 * @param {number} n
 */
function countingSort(nums, n) {
  let i = 0;
  let max = 0

  // 找到最大值
  do {
    max = Math.max(max,nums[i])
    i++;
  } while (i < n);

  // 划分 n 个桶
  const barrelArr = new Array(max+1).fill(0)

  // 填充桶的数据
  for(let i=0; i < n; i++){
    barrelArr[nums[i]] = barrelArr[nums[i]]+1
  }

  // 将每个桶从前到后依次累加
  for(let i=1; i< barrelArr.length;i++){
    barrelArr[i] = barrelArr[i-1] + barrelArr[i]
  }
  const newArr = new Array(n).fill(0)


  for(let index =0; index < n; index++){
    const numIndex = barrelArr[nums[index]] - 1 
    barrelArr[nums[index]]--
    newArr[numIndex] = nums[index]
  }

}

const arr = [2,5,3,0,2,3,0,3]
countingSort(arr,arr.length)