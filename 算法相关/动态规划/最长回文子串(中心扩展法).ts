function longestPalindrome(s: string): string {
    // 判断长度大小，直接返回即可。
    if(s.length <2){return s}
    let count = 1
    let start = 0
    let maxLength = 1
    function findStartAntdMaxLength(left: number, right: number){
        while (left >=0 && right < s.length && s[left] === s[right]){
            left--
            right++
            // 判断长度是否有maxLength长
            const length = right - left - 1
            // while (){
            if(length > maxLength){
                start = left+1
                maxLength = length
            }
        }
    }
    // let huiwen = []
    // for(let i of s){
    //     for(let j of ){}
    // }
    // let res = s[0]
    for(let i =0;i< s.length; i++){
        // 奇数
        findStartAntdMaxLength(i,i)
        // 偶数
        findStartAntdMaxLength(i,i+1)
    }
    return s.substring(start,start+maxLength)
};
console.log(longestPalindrome("cbbd"));
