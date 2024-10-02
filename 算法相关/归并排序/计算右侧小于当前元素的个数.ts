function countSmaller(nums) {
    const len = nums.length;
    // @ts-ignore
    const counts = new Array(len).fill(0); // 用于存放结果
    const indices = nums.map((_, i) => i); // 索引数组

    // 归并排序并统计
    function mergeSort(left, right) {
        if (left >= right) return;

        const mid = Math.floor((left + right) / 2);
        mergeSort(left, mid);
        mergeSort(mid + 1, right);
        merge(left, mid, right);
    }

    function merge(left, mid, right) {
        const temp = [];
        let i = left, j = mid + 1;

        while (i <= mid && j <= right) {
            console.log('两个数字为:',nums[indices[i]],nums[indices[j]])
            if (nums[indices[i]] <= nums[indices[j]]) {
                temp.push(indices[i]);
                for(let kkkkk=mid+1;kkkkk<=j-1;kkkkk++){
                    console.log('小于元素为::',nums[indices[i]],nums[indices[kkkkk]])
                }
                // counts[indices[i]] += (j - mid - 1); // 计算比 nums[i] 小的元素数量
                console.log('数据为::',(j - mid - 1))
                i++;
            } else {
                for(let kkkkk=0;kkkkk<=left-1;kkkkk++){
                    console.log('大于元素为::',nums[indices[j]],nums[indices[kkkkk]],left-1)
                }
                counts[indices[j]] += (left - 1 <0 ? 0 : left - 1 );
                temp.push(indices[j]);
                j++;
            }
        }

        while (i <= mid) {
            temp.push(indices[i]);
            // counts[indices[i]] += (j - mid - 1); // 剩余的元素数量
            i++;
        }

        while (j <= right) {
            counts[indices[j]] += (left - 1); // 剩余的元素数量
            temp.push(indices[j]);
            j++;
        }

        for (let k = left; k <= right; k++) {
            indices[k] = temp[k - left];
        }
    }

    mergeSort(0, len - 1);
    return counts;
}

// 示例测试
const nums = [2, 5, 6, 1];
const result = countSmaller(nums);
console.log(result); // 输出 [2, 1, 1, 0]