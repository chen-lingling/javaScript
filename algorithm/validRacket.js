var isValid = function(s) {
  if (s.length%2 !== 0) {
      return false
  }
  let left = [s[0]]
  for(let i = 1; i < s.length; i++) {
      if (match(s[i]) === left[left.length - 1] && left.length > 0) {
          left.pop()
      } else {
         left.push(s[i]) 
      }
  }
  return left.length === 0
};
var match = function(value) {
  switch(value) {
      case ')' : return '(';
      case ']' : return '[';
      case '}' : return '{';
  }
}
console.log('2', isValid('{(){[]}}'))