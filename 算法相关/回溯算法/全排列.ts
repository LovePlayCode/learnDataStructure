function permute(nums: number[]): number[][] {
    const res: number[][] = []
    function Fn(start) {
        if (start === nums.length) {
            res.push([...nums])
            return
        }
        for (let i = start; i < nums.length; i++) {
            // 这里必须要加分号，否则可能会报错 呜呜呜
            [nums[start], nums[i]] = [nums[i], nums[start]];
            Fn(start+1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    Fn(0)
    return res
};


export { }