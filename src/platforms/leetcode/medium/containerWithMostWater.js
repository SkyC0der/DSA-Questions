/**
 * @param {number[]} height
 * @return {number}
 * Old 2023 Solution - Will be practiced again
 */
var maxArea = function(height) {
    var right = height.length-1;
    var left = 0;
    var maxA = 0;
    
    while (left < right){
      var curA = (right-left) * Math.min(height[left],height[right]);
        if (curA > maxA){
            maxA = curA
        }
        if (height[left] < height[right]){
         
        left++   
        }else{
        right--
        }
    }
    return maxA  
};