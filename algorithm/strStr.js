/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle.length === 0) return 0
  let index = 0
  for(let i = 0; i+needle.length < haystack.length; i++) {
      let flag = true;
      while(index<needle.length) {
          if (haystack[index+i] !== needle[index]) {
              flag = false
              break
          } else {
              ++index
          }
      }
      if(flag) {
          return i;
      }
  }
  return -1;
};
console.log(strStr("hello", 'el'))
