function canPartition(nums: number[]): boolean {
    const sum = nums.reduce((acc, cur) => acc + cur, 0);
    // 判断奇数还是偶数  如果是奇数 不可能组成 直接返回即可
    if((sum & 1) === 1){

        return false
    }
    const mid =(sum / 2)+1
    // @ts-ignore
    const dp = new Array<boolean>(nums.length).fill(false).map(()=>{
        // @ts-ignore
        return new Array(mid).fill(false)
    });
    // console.log('dp==',dp)
    dp[0][0] = true
    if(nums[0] <=mid){
        dp[0][nums[0]] = true
    }
    // 行表示商品： 1，5，11，5
    for(let row=1;row < nums.length; row++){
        for(let col=0;col<mid; col++){
            if (nums[row] <= col){
                // 两种情况，直接用上一行的值或者 用当前值，往上取
                dp[row][col] = dp[row-1][col]||dp[row-1][col-nums[row]]
            }
            else if (row > 0){
                dp[row][col] = dp[row-1][col]
            }

        }
    }
    return dp[nums.length-1][mid-1]
};
// console.log()
console.log(canPartition([2,2,1,1]));
// 1. 要整一张架构图
// 2. 要看项目中不足的地方，优化的点。
// 3. useMemo和 useCallback 以及 memo 的使用场景