/**
 * 字符串截取
 * 
 * 1、string.slice(strat, end)
 * *从start开始，截取到end位置
 * *end默认到最后一位
 * 
 * 2、string.substring(start, end)
 * *从start开始，截取到end位置
 * *若为负数，则从0开始
 * *end默认到最后一位
 * 
 * 3、string.substr(start, length)
 * *从start开始，截取length长度的字符串
 * *length不传，则截取到最后一位
 * 
 */
let str = 'substrslicesubstring'
console.log(str.slice(2, 9))
console.log(str.substring(2, 9))
console.log(str.substr(2, 9))


console.log(str.slice(-11, -9))
console.log(str.substring(-11, 9))
console.log(str.substr(-11, 9))

