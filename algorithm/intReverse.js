/**
 * @param {number} x
 * @return {number}
 */ 123
 var reverse = function(x) {
  let rev = 0
  while(x!=0) {
     let digit  = x%10
     x = Math.floor(x/10)
     rev = rev*10 + digit
  }
  return rev
}