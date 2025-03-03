function permute(nums: number[]): number[][] {
    const res: number[][] = []
    const select = new Array(nums.length).fill(false)
    const backbreak = (state: number[])=>{
        if(state.length === nums.length){
            res.push([...state])
            return
        }
        for(let i = 0; i < nums.length; i++){
            if(select[i]){
              continue
            }
            state.push(nums[i])
            select[i] = true
            backbreak(state)
            state.pop()
            select[i] = false
        }
    }
    backbreak([])
    return res
}
export {}