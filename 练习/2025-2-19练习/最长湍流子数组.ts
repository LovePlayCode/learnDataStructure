

/**
 * 
 * 最长湍流子数组
 * leetcode: https://leetcode.cn/problems/longest-turbulent-subarray/
 */
function maxTurbulenceSize(arr: number[]): number {
    let prevFlag = false
    let left = 0
    let right = 1
    const len = arr.length
    let maxLength = 1
    while (right < len) {
        const curFlag = arr[right - 1] < arr[right]
        // 如果当前right=1 或者当前的大小关系和上一次的大小关系一致，将 left 重置为 right-1，从[left,right] 开始寻找
        if (right === 1 || curFlag === prevFlag) {
            left = right - 1;
        }
        // 如果前后元素一致，不存在大小关系，直接将 left 赋值为 right
        if (arr[right-1] === arr[right]) {
            left = right
        }
        right++
        maxLength = Math.max(maxLength, right - left)
        prevFlag = curFlag
    }
    return maxLength
};

export { };