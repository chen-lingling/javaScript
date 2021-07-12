/**
 * @param {number[]} numbs
 * @return {number}
 */
 var maxSubArray = function(numbs) {
  let ans = numbs[0];
  let sum = 0;
  for(const num of numbs) {
      if(sum > 0) {
          sum += num;
      } else {
          sum = num;
      }
      ans = Math.max(ans, sum);
  }
  return ans;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
