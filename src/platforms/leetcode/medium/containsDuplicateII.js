/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()

    if (nums.length === null || nums.length < 1 ){
        return false
    }

    for (let index = 0; index < nums.length; index++){
      
        if (index - map.get(nums[index]) <= k){
            return true
        }
        map.set(nums[index], index)
    }

    return false
};