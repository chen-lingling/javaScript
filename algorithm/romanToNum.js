var romanToInt = function(s) {
  const originNum = s
  let result = 0
  let preNum = switchNum(originNum[0])
  for (let i = 1; i <= originNum.length; i++) {
      let nextNum = switchNum(originNum[i])
      if (preNum < switchNum(originNum[i])) {
          result -= preNum
      } else {
          result += preNum
      }
      preNum = nextNum
  }
  return result
};
var switchNum = function(num) {
  switch(num) {
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
  }
}
console.log(romanToInt('IVI'))