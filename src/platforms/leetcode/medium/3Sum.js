/**
 * @param {number[]} nums
 * @return {number[][]}
 * Old 2023 Solution - Will be practiced again
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a-b)
    let arr = []

    for (let i = 0; i < nums.length; i++){
        let next = i+1, end = nums.length-1, sum = 0

        while(next < end){
            sum = nums[i] + nums[next] + nums[end]
            if (sum === 0){
                arr.push([nums[i], nums[next], nums[end]])
                  while(nums[next] == nums[next+1]) next++
                while(nums[end] == nums[end+1]) end--
                next++
                end--
            } else if (sum < 0){
                next++
            }else{
                end--
            }
        }
        while(nums[i] === nums[i+1])i++
    }
    
    return arr
};