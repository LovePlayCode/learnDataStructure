
/**
 * 
 * @param {number[]} nums 
 */
function bubblingSort(nums){
    if(nums.length < 1){
        return 
    }
    const n = nums.length
    for(let i=0;i<n;i++){
        for(let j=0;j<n-i-1;j++){
            if(nums[j] > nums[j+1]){
                // console.log(nums[j],nums[j+1]);
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
                console.log(nums[j],nums[j+1])
            }
        }
    }
    console.log(nums);
    
}

bubblingSort([3,5,4,1,2,6])