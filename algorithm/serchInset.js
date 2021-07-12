/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1
  let result = right
  while(nums[left]<=nums[right]) {
      let mid = Math.ceil((left + right) / 2)
      if(nums[mid] >= target) { 2 <= 3
          right = mid - 1
          result = mid
      } else {
          left = mid + 1
      }
  }
  return result
};

console.log(searchInsert([1,2,4,5,7], 6))
