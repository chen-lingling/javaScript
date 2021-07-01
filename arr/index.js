/**
 * 数组截取
 * 
 * arr.slice(strat, end)
 * *从下角标start开始，截取第end位置
 * *end默认到最后一位
 * *不改变arr的值
 * 
 * arr.splice(start, length)
 * *从下角标start开始，截取长度为length
 * *若为负数，则从0开始
 * *end默认到最后一位
 * *改变arr的值
 * 
 */

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let test = arr.slice(3, 6)
// console.log(test, arr)

// let test1 = arr.splice(3, 6)
// console.log(test1, arr)

/**
 * 从下角标3开始，删除六位元素，并替换为'我是替换的元素'
 */
// let test2 = arr.splice(3, 6, '我是替换的元素')
// console.table(test2)
// console.log(arr)

/**
 * 不删除元素，向下角标3的增加元素'我是替换的元素'
 */
// let test3 = arr.splice(3, 0, '我是替换的元素')
// console.table(test3)
// console.log(arr)

/**
 * sort 排序原理
 */
// let arr1 = [1,3,7,2,8,0,2,1,6,4]
// function sort(array, callback) {
//   for (const n in array) {
//     for (const m in array) {
//       if (callback(array[n], array[m]) < 0) {
//         const temp = array[n]
//         array[n] = array[m]
//         array[m] = temp
//       }
//     }
//   }
//   return array
// }
// let test = sort(arr1, function(a, b) {
//   return a - b
// })
// console.log(test)


/**
 * filter数组过滤原理
 */
// let lessons = [
//   { name: 'java', type: 'back' },
//   { name: 'js', type: 'pre' },
//   { name: 'css', type: 'pre' },
// ]
// function filter(array, callback) {
//   let newArr = []
//   for (let i = 0; i < array.length; i++) {
//     callback(array[i], i, array) && newArr.push(array[i])
//   }
//   return newArr
// }

// let mylesson = filter(lessons, (item) => {
//   return item.type === 'pre'
// })
// console.table(mylesson)
