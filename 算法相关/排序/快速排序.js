/**
 * 快速排序
 * 如果要排序数组中下标从p到r之间的一组数据，选择从 p 到r之间的任意一个数据作为pivot(区分点)
 * 遍历p到r 之间的数据，将小于pivot的放到左边，大于pivot的放到右边。最后合并。
 * 递推公式：
        quick_sort(p…r) = quick_sort(p…q-1) + quick_sort(q+1… r)

        终止条件：
        p >= r

    1. 原地排序
    2. 不稳定
    3. 时间复杂度：最好时间复杂度: O(nlogn) 最坏时间复杂度: O(n^2)    
 */

function quick_sort(A, n) {
  quick_sort_c(A, 0, n - 1);
}

/**
 * 分区函数
 * 选择最后一个元素作为pivot。
 * 因为我们需要将数组变成左边的所有元素小于分区元素，右边的所有元素大于分区元素。 然后分区元素位于中间的位置。
 * 并且希望原地排序。
 * 利用分区元素在中间这个特点。
 * 初始化i,j 都指向left 如果nums[j] < pivot 说明 这个元素在pivot 的左边，交换i和 j的位置即可。 i++即可。
 * 可以理解为i是不变的，步长相同，j 是变化的。所以需要 i 和j 交换。
 */
function partition(nums, left, right) {
  const pivot = nums[right];
  let i = left;
  let j = left;
  /**  p 是左指针
   * 1. 假定nums[p,i-1] 都是小于pivot 那么 [i,right] 是未处理的数据。  那么只需要跟 pivot进行比较，如果nums[j] < pivot，就交换位置。
   * 2. 最后 i 指针指向的地方，其实就是pivot该在的位置。
   */
  while (j < right) {
    if (nums[j] <= pivot) {
      // [nu] = []
      [nums[i], nums[j]] = [nums[j], nums[i]];
      // nums[i] = nums[j]
      i++;
    }
    j++;
  }
  [nums[i], nums[right]] = [nums[right], nums[i]];
  return i;
}

function quick_sort_c(A, left, right) {
  if (left >= right) {
    return;
  }
  const pivot = partition(A, left, right);

  quick_sort_c(A, left, pivot - 1);
  quick_sort_c(A, pivot + 1, right);
}

const nums = [1, 5, 6, 99, 38, 23233, 2, 3, 4];
quick_sort(nums, nums.length);
console.log(nums);
