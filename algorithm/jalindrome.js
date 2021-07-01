/**
 * 回文数
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  if (x < 0) return false
  let temp = reverse(x)
  return temp === x
};
var reverse = function(num) {
  let rev = 0
  while(num!=0){
      let digit = num%10
      rev = rev*10 + digit
      num = Math.floor(num/10)
  }
  return rev
}