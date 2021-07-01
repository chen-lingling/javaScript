
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
  const n = nums.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
      if (nums[right] !== val) {
          nums[left] = nums[right];
          left++;
      }
  }
  return nums.slice(0, left);
}

console.log(removeElement([0,1,2,2,3,0,4,2], 2))