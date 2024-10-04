/**
 * 暴力枚举，通过枚举所有可能来获得结果
 * @param number 
 * @param target 
 * @returns 
 */
function twoSumBruteForce(number: number[],target: number){
    for(let i=0;i<number.length;i++){
        for(let j=i+1;j< number.length;j++){
            if(number[i] + number[j] === target){
                return [i,j]
            }
        }
    }
    return []
}


function twoSumHashTable(nums: number[],target: number){
    const map = new Map()
    nums.forEach((item,index)=>{
        if(map.has(target - item)){
            return [index,map.get(target - item)]
        }else{
            map.set(item,index)
        }
    })
    return []
}

console.log(twoSumHashTable([1, 2, 3, 4], 5));