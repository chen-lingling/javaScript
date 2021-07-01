
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
      return ""
  }
  let min = strs[0]
  for(let i = 1; i < strs.length; i++ ) {
      if (min.length > strs[i].length) {
          min = strs[i]
      }
  }
  while(min.length){
    if (strs.every((str) => str.substr(0, min.length) === min)) {
      return min
    } else {
      min = min.substr(0, min.length-1)
    }
  }
};

console.log('2', longestCommonPrefix(["","flow","floight"]))