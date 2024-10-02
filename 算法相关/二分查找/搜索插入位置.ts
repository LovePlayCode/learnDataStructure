class MountainArray {
    // array = [1,2,3,4,5,6,3,1]
    array = [1,2,3,4,5,3,1]

    get(index: number): number {

        return this.array[index]
    }
    length(): number {
        return this.array.length
    }
}

const mou = new MountainArray()
function findArrayMaxIndex(len: number,mountainArr){
    let left = 0,right = len-1
    while(left < right){
        let mid = left + Math.floor((right - left) /2)
        const midNums = mountainArr.get(mid)
        const midNumsAfter = mountainArr.get(mid+1)
        const midNumsbefore = mountainArr.get(mid-1)
        if(midNums<midNumsAfter){
            left = mid+1
        }
        if(midNums>midNumsAfter){
            // 判断当前元素是否为山顶元素
            if(midNums > midNumsbefore){
                return mid
            }
            right = mid-1
        }

    }
    return left
}
function searchLeft(right: number, mountainArr: MountainArray,target: number){
    let left = 0
    let currentRight = right
    while (left < currentRight){
        const mid = left + Math.floor((currentRight - left) /2)
        // if(){}
        const midNum = mountainArr.get(mid)
        if(midNum === target){
            return mid
        }
        if(midNum < target){
            left = mid + 1
        }else{
            currentRight = mid -1
        }
    }
    return mountainArr.get(left) === target ? left : -1
}

function searchRight(left: number, mountainArr: MountainArray,target: number){
    // let left = 0
    let currentLeft = left
    let  len = mountainArr.length()
    while (currentLeft < len && currentLeft){
        const mid = currentLeft + Math.floor((len - currentLeft) /2)
        // if(){}
        const midNum = mountainArr.get(mid)
        if(midNum === target){
            return mid
        }
        if(midNum < target){
            len = mid -1
        }else{
            currentLeft = mid + 1
        }

    }
    return mountainArr.get(currentLeft) === target ? currentLeft : -1
}



function findInMountainArray(target: number, mountainArr: MountainArray) {
    // 保存长度
    const len = mountainArr.length()
    const findIndex = findArrayMaxIndex(len,mountainArr)
    const findCurrentTarget = mountainArr.get(findIndex)
    if(findCurrentTarget === target){
        return findIndex
    }
    // if(target < findCurrentTarget){
    //
    // }
    const findBefore = mountainArr.get(findIndex - 1)
    const findAfter = mountainArr.get(findIndex + 1)
    // if(findBefore === target){
    //     return findIndex-1
    // }
    // if(findAfter === target){
    //     return findIndex+1
    // }
    const leftRes = searchLeft(findIndex,mountainArr,target)
    return leftRes===-1 ? searchRight(findIndex,mountainArr,target) : leftRes
    // 首先找左边
    // searchLeft()
    // 其次找右边
    // 
    // 找到峰顶元素
};
console.log(findInMountainArray(2, mou));

