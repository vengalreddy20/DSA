let nums=[4, 1, 2, 1, 2]
function findSingleNumber(nums){
    let xor=0
    for(let i=0;i<nums.length;i++){
        xor=xor ^ nums[i]
    }
    return xor
}
console.log(findSingleNumber(nums))