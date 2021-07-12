/**
 * @param {number[]} nums
 * @return {number}
 */ 
//  var removeDuplicates = function(nums) {
//   let result = []
//   for (let i = 0; i< nums.length; i++) {
//       if(!result.includes(nums[i])) {
//           result.push(nums[i])
//       }
//    }
//    return result
// };
// console.log(removeDuplicates([1,1,2]))

/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  if(nums.length === 0) return []
  let slow = 1;
  let fast = 1
  while(fast < nums.length) {
      if (nums[fast] !== nums[slow -1]){
        nums[slow] = nums[fast]
          ++slow
      }
      ++ fast
   }
   console.log(slow)
  return nums.slice(0, slow)
};

console.log(removeDuplicates([1, 1, 2]))
