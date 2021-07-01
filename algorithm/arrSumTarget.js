/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  let result = []
  let tempArr = nums
  for(let i = 0; i<nums.length; i++) {
      let diff = target - nums[i]
      let a = tempArr.indexOf(diff)
      if(a!==-1) {
          result = [a, i]
      }
  }
  return result
};
let nums = [2,7,11,15]
let target = 9
console.log(twoSum(nums, target))