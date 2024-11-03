
/**
 * 
 * @param {number[]} arr 
 */
function main(arr,target){
    // !!arr.length !Boolean(arr.length)
    // for(){}
    if(!!!arr.length){
        return -1
    }
    
    let i = 0
    let j = arr.length - 1 
    while(i<=j){
        const mid = i + Math.floor((j-i)/2)
        if(arr[mid] === target){
            return mid
        }
        if(arr[mid] < target){}
    }
}