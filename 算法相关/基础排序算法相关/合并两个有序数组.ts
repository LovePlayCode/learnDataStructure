
/**
    Do not return anything, modify nums1 in-place instead.
    https://leetcode.cn/problems/merge-sorted-array/
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = 0
    let j = 0
    const temp: number[] = []
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            temp.push(nums1[i])
            i++
        } else {
            temp.push(nums2[j])
            j++
        }
    }
    while (i < m) {
        temp.push(nums1[i])
        i++
    }
    while (j < n) {
        temp.push(nums2[j])
        j++
    }
    for (let index = 0; index < temp.length; index++) {
        nums1[index] = temp[index]
    }
};
export { }