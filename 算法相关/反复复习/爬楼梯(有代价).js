/**
 * 爬楼梯
 * 给定一个楼梯，你每步可以上 1阶或者 2阶，每一阶楼梯上都贴有一个非负整数，表示你在该台阶所需要付出的代价。给定一个非负整数数组 
 cost，其中cost[i] 表示在第 i个台阶需要付出的代价，
 cost[i]为地面（起始点）。请计算最少需要付出多少代价才能到达顶部？
 */
function main(n,cost){
    const dp = Array(n+1).fill(-1)
    dp[1] = cost[1]
    dp[2] = cost[2]
    for(let i=3;i<=n;i++){
        dp[i] = Math.min(dp[i-1],dp[i-2])+cost[i]
    }
    return dp[n]
}
const res = main(3)
console.log('res==',res)