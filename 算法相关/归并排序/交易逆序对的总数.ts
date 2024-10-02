let countDAD = 0
console.log(reversePairs([5, 2, 6, 1]));

function reversePairs(record: number[]): number {
    // 归并排序
    // 三个指针，  一个指向 原数组第一个， 一个指向第二个数组 第三个指向 新数组
    // 如果 B 数组[j]元素小于 A 数组[i]的元素，那么证明 A 所有数组和 B 构成了逆序对、
    // 按照这个思维即可完成排序、
    const startTime = Date.now()
    const len = record.length
    if(len<2){
        return 0
    }
    // copy 原数组
    const copy = [...record]
    const temp = new Array(len)
    const counts = reverseCount(copy, 0, len - 1,temp)
    const endTime = Date.now()

    return counts
};
function reverseCount(arr: number[], left, right,temp) {


    if (left === right) {
        return 0
    }

    let mid = left + Math.floor((right - left) / 2)
    const leftPairs = reverseCount(arr, left, mid,temp)
    const rightPairs = reverseCount(arr, mid + 1, right,temp)

    // 如果此时是有序的，直接相加即可。
    if(arr[mid]<=arr[mid+1]){
        return leftPairs+rightPairs
    }

    // 利用mid划分数组
    const startTime = Date.now()
    const mergePairs = mergeLeftAndRight(arr, left,mid, right,temp);
    const endTime = Date.now()
    // console.l
    // if(endTime - startTime > 0.5){
    //     console.log('耗时为2323::',endTime - startTime)
    //     countDAD++
    // }
    // console.timeEnd('结束耗时')
    return leftPairs + rightPairs + mergePairs;
}
function mergeLeftAndRight(arr: number[], left,mid:number, right,temp: number[]):number {
    // const startTime = Date.now()
    // 需要先保留元数组，不然排序过程中会改变原数组元素，发生混乱

    // const temp = [...arr]
    const start = process.hrtime();
    temp = [...arr]
    let i = left
    let j = mid + 1
    let count = 0
    let k = left
    const startTime = Date.now()
    while (i <= mid && j <= right) {
        if (temp[i] <= temp[j]) {
            arr[k++] = temp[i++];
        } else {
            arr[k++] = temp[j++];
            count += (mid - i + 1);
        }
    }
    while (i === mid+1 && k <= right) {
        arr[k++] = temp[j++];
    }
    while (j === right+1 && k <= right) {
        arr[k++] = temp[i++];
    }

    // for (let p = left; p <= right; p++) {
    //     arr[p] = temp[p];
    // }
    // for(let k =left;k<=right;k++){
    //     // 边界条件的处理
    //     if(i === mid+1){
    //         arr[k] = temp[j]
    //         j++
    //         continue
    //     }
    //     if(j === right +1 ){
    //         arr[k] = temp[i]
    //         i++
    //         continue
    //     }
    //     if(temp[i] <= temp[j]){
    //         arr[k] = temp[i]
    //         i++
    //     }else{
    //         // 获取符合条件的数量
    //         arr[k] = temp[j]
    //         count+= (mid - i)+1
    //         j++
    //     }
    // }
    // const endTime = Date.now()
    // if(endTime - startTime > 1){
    //     console.log('耗时==2323',endTime-startTime)
    // }

    const endTime = Date.now()
    // console.l
    if(endTime - startTime > 3){
        console.log('耗时2为2323::',endTime - startTime)
    }
    const end = process.hrtime(start);
    // if(){}
    console.log(`Execution time: ${end}`);
    return count
}















// function reversePairs(record: number[]): number {
//     // 归并排序
//     // 三个指针，  一个指向 原数组第一个， 一个指向第二个数组 第三个指向 新数组
//     // 如果 B 数组[j]元素小于 A 数组[i]的元素，那么证明 A 所有数组和 B 构成了逆序对、
//     // 按照这个思维即可完成排序、
//     const startTime = Date.now()
//     const len = record.length
//     if(len<2){
//         return 0
//     }
//     // copy 原数组
//     const copy = [...record]
//     const temp = new Array(len)
//     const counts = reverseCount(copy, 0, len - 1,temp)
//     const endTime = Date.now()
//
//     return counts
// }
// function reverseCount(arr: number[], left, right,temp) {
//
//
//     if (left === right) {
//         return 0
//     }
//
//     let mid = left + Math.floor((right - left) / 2)
//     const leftPairs = reverseCount(arr, left, mid,temp)
//     const rightPairs = reverseCount(arr, mid + 1, right,temp)
//
//     // 如果此时是有序的，直接相加即可。
//     if(arr[mid]<=arr[mid+1]){
//         return leftPairs+rightPairs
//     }
//     // 利用mid划分数组
//     const startTime = Date.now()
//     const mergePairs = mergeLeftAndRight(arr, left,mid, right,temp);
//     const endTime = Date.now()
//     // console.l
//     if(endTime - startTime > 0.5){
//         console.log('耗时为2323::',endTime - startTime)
//         countDAD++
//     }
//     // console.timeEnd('结束耗时')
//     return leftPairs + rightPairs + mergePairs;
// }
// function mergeLeftAndRight(arr: number[], left,mid:number, right,temp: number[]):number {
//
//     // const startTime = Date.now()
//     // 需要先保留元数组，不然排序过程中会改变原数组元素，发生混乱
//
//     // const temp = [...arr]
//
//     temp = [...arr]
//     let i = left
//     let j = mid + 1
//     let count = 0
//     let k = left
//     const startTime = Date.now()
//     while (i <= mid && j <= right) {
//         if (temp[i] <= temp[j]) {
//             arr[k++] = temp[i++];
//         } else {
//             arr[k++] = temp[j++];
//             count += (mid - i + 1);
//         }
//     }
//     while (i === mid+1 && k <= right) {
//         arr[k++] = temp[j++];
//     }
//     while (j === right+1 && k <= right) {
//         arr[k++] = temp[i++];
//     }
//
//     // for (let p = left; p <= right; p++) {
//     //     arr[p] = temp[p];
//     // }
//     // for(let k =left;k<=right;k++){
//     //     // 边界条件的处理
//     //     if(i === mid+1){
//     //         arr[k] = temp[j]
//     //         j++
//     //         continue
//     //     }
//     //     if(j === right +1 ){
//     //         arr[k] = temp[i]
//     //         i++
//     //         continue
//     //     }
//     //     if(temp[i] <= temp[j]){
//     //         arr[k] = temp[i]
//     //         i++
//     //     }else{
//     //         // 获取符合条件的数量
//     //         arr[k] = temp[j]
//     //         count+= (mid - i)+1
//     //         j++
//     //     }
//     // }
//     // const endTime = Date.now()
//     // if(endTime - startTime > 1){
//     //     console.log('耗时==2323',endTime-startTime)
//     // }
//
//     const endTime = Date.now()
//     // console.l
//     if(endTime - startTime > 3){
//         console.log('耗时2为2323::',endTime - startTime)
//     }
//     return count
// }
console.log(countDAD)
