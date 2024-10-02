function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // 确保 nums1 的长度小于等于 nums2
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let n = nums1.length;
    let m = nums2.length;
    let totalLeft = Math.floor((n + m + 1) / 2);
    let left = 0, right = n;

    while (left < right) {
        let i = left + Math.floor((right - left + 1) / 2);
        let j = totalLeft - i;

        if (nums1[i - 1] > nums2[j]) {
            right = i - 1;
        } else {
            left = i;
        }
    }

    let i = left;
    let j = totalLeft - i;

    let nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
    let nums1RightMin = i === n ? Infinity : nums1[i];
    let nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
    let nums2RightMin = j === m ? Infinity : nums2[j];

    if ((n + m) % 2 === 0) {
        return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
    } else {
        return Math.max(nums1LeftMax, nums2LeftMax);
    }
}

console.log(findMedianSortedArrays([1, 2], [3, 4]));  // 输出
