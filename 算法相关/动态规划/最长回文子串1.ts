function longestPalindrome(s: string): string {
    let count = 1
    let huiwen = []
    // for(let i of s){
    //     for(let j of ){}
    // }
    let res = s[0]
    for(let i =0;i< s.length; i++){
        huiwen = []
        huiwen.push(s[i])
        // if(){}
        // res = s[i]
        for(let j=i+1; j< s.length;j++){
            huiwen.push(s[j])
            if(huiwen.join('') === huiwen.join('').split('').reverse().join('')){
                if(count < huiwen.length){
                    res = huiwen.join('')
                }
                count = Math.max(count,huiwen.length)
            }
        }
    }
    return res
};
console.log(longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"));
