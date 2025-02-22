function reversePairs(record) {
    // 归并排序
    const len = record.length;
    if (len < 2) {
        return 0;
    }

    const copy = [...record]; // 复制原数组
    const temp = new Array(len); // 临时数组，用于合并时存储
    const counts = reverseCount(copy, 0, len - 1, temp);
    return counts;
}

function reverseCount(arr, left, right, temp) {
    if (left === right) {
        return 0;
    }

    let mid = left + Math.floor((right - left) / 2);
    const leftPairs = reverseCount(arr, left, mid, temp);
    const rightPairs = reverseCount(arr, mid + 1, right, temp);

    // 如果此时是有序的，直接相加即可
    if (arr[mid] <= arr[mid + 1]) {
        return leftPairs + rightPairs;
    }

    const mergePairs = mergeLeftAndRight(arr, left, mid, right, temp);
    return leftPairs + rightPairs + mergePairs;
}

function mergeLeftAndRight(arr, left, mid, right, temp) {
    temp = [...arr]; // 复制数组到临时数组

    let i = left;
    let j = mid + 1;
    let count = 0;
    let k = left;

    while (i <= mid && j <= right) {
        if (temp[i] <= temp[j]) {
            arr[k++] = temp[i++];
        } else {
            arr[k++] = temp[j++];
            count += (mid - i + 1);
        }
    }

    while (i <= mid) {
        arr[k++] = temp[i++];
    }

    while (j <= right) {
        arr[k++] = temp[j++];
    }

    return count;
}
