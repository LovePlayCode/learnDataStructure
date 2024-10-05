/**
 * 
 * @param {number[]} A 
 * @param {number[]} B 
 * @param {number[]} C 
 */
function solveHanota(A,B,C){
    const n = A.length
    
    const dfs = (n,src,buf,tar)=>{
        // 代表当前圆盘为 1，直接移动即可。
        // dfs(n-1)
        if(n === 1){
            move(src,tar)
            return
        }
        // 先从 A -> B 借助 C
        dfs(n-1,src,tar,buf)
        // 剩下一个从 A -> C
        move(src,tar)
        dfs(n-1,buf,src,tar)
    }
    
    dfs(n,A,B,C)
}
/**
 * 
 * @param {number[]} src 
 * @param {number[]} tar 
 */
function move(src,tar){
    const pan = src.pop()
    tar.push(pan)
}