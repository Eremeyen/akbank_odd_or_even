const oddEven = num => {
    let str = String(num)
    let nums = []
    sum = 0
    for (let i = 0; i < str.length; i++){
        nums.push(Number(str[i]))
    }
    for (j in nums){
        sum += nums[j]
    }
    if(sum%2 == 0){
        return "even"
    }
    return "odd"
}
console.log(oddEven("4433"))