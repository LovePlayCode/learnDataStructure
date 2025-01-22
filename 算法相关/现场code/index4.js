/**
 * 
 * 给一个字符串，找到字符串没有重复字符的最长的子串的长度。
 * abca abc bca 
 * abcac abc 
 * 1. 存储字符和索引 map
 * 2. 定义一个最大长度的变量
 * 3. 遍历这个字符串， 去更新这个 map以及对 maxLenght 进行比较
 */
/**
 * 
 * @param {string} str 
 */
function main(str){
    let map = new Map()
    let maxLenght = 0
    let left = 0
    for(let right =0;right<str.length;right++){
        if(map.has(str[right])){
            left = Math.max(map.get(str[right])+1,left)
        }
        map.set(str[right],right)
        maxLenght = Math.max(maxLenght,right - left + 1)
    }
    return maxLenght
}
const res = main('abcac')
console.log('res===',res)