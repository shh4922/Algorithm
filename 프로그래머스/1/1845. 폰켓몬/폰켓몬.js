function solution(nums) {
    const max = nums.length/2
    
    const set = new Set(nums)
    return max <= set.size ? max : set.size
}