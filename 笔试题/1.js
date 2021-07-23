/*
 * @Descripttion: 笔试题
 * @version: 
 * @Author: chenlingling
 * @Date: 2021-07-14 10:38:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-07-22 14:39:21
 */

var name = 222
var a = {
  name: 111,
  say: function () {
    console.log(this.name)
  }
}
var fun = a.say
fun()
a.say()

var b = {
  name: 333,
  say: function (fun) {
    fun.call(a)
  }
}
b.say(a.say)
b.say = a.say
b.say()

/**
 * 深拷贝
 */
function deepClone(obj) {
  let cloneObj = {}
  if (obj === null) return obj
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj !== 'object') return obj
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      cloneObj[i] = deepClone(obj[i])
    }
  }
  return cloneObj
}

/**
 * 防抖
 */

// function debounce(delay) {
//   let timer = null
//   function debounced(value) {
//     clearTimeout(timer)
//     timer = setTimeout(() => {
//       console.log(value)
//     }, delay);
//   }
//   return debounced
// }

function debounce(delay, callback) {
  let timer = null
  let _that = this
  let result = null
  function debounced() {
    // console.log('aaa', _that)
    timer !==null && clearTimeout(timer)
    timer = setTimeout(() => {
      callback(_that)
    }, delay)
  }
  result = debounced()
  return result
}
// var debounceFunc = debounce(1000)
let input = document.getElementById('input')
input.addEventListener('keyup', (e) => {
  // debounce.call(e.target, 1000, (e) => {
  //   console.log(e.value)
  // })
  debounce.call(e.target, 2000, (e) => {
    console.log(e.value)
  })
})


/**
 * 节流
 */

function throttle(func, delay) {
  let timer = null
  let _that = this
  return function () {
    if (!timer) {
      timer = setTimeout(() => {
        func.apply(_that, arguments)
        timer = null
      }, delay);
    }
  }
}

let button = document.getElementById('button')
button.onclick = throttle((value) => {
  console.log(value)
}, 10000)

console.log('------')
function fn(a, c) {
  console.log(a)
  var a = 123
  console.log(a)
  console.log(c)
  function a() { }
  if (false) {
    var d = 678
  }
  console.log(d)
  console.log(b)
  var b = function () { }
  console.log(b)
  function c() { }
  console.log(c)
}
// function fn(a, c) {
//   var a
//   function a() { }
//   function c() { }
//   console.log(a)
//   a = 123
//   console.log(a)
//   console.log(c)
//   var d = undefined
//   if (false) {
//     d = 678
//   }
//   console.log(d)
//   var b = undefined
//   console.log(b)
//   b = function () { }
//   console.log(b)
//   console.log(c)
// }
fn(1, 2)
/** 
  * 发布订阅模式
*/
var Event = (function () {
  let list = {}
  let listen = function (key, fn) { // 订阅
    if (!list[key]) {
      list[key] = []
    }
    list[key].push(fn)
  }
  let trigger = function () { // 发布
    let key = Array.prototype.shift.call(arguments)

    let fns = list[key]
    if (!fns || fns.length === 0) {
      return
    }
    for (let index = 0; index < fns.length; index++) {
      fns[index](...arguments)
    }
  }
  let remove = function (key, fn) {
    let fns = list[key]
    if (!fns) {
      return
    }
    if (!fn) {
      fn && (fns.length = 0)
    } else {
      for (let index = 0; index < fns.length; index++) {
        const _fn = fns[index]
        if (_fn == fn) {
          fns.slice(index, 1)
        }
      }
    }
  }
  return {
    listen,
    trigger,
    remove,
  }
})()

let shopObj = Event
shopObj.listen('red', (value) => {
  console.log('我就是value: ', value)
})
shopObj.trigger('red', 32)

/**
 * @name: 数组扁平化处理
 * @param {*}
 * @return {*}
 */

let arr = [1, [2, [3, [4, 5]]], 6]
// 1 数组自带处理方法
console.log(arr.flat(Infinity))

// 2 正则表达式
let res = JSON.stringify(arr).replace(/\[|\]/g, '')
console.log(res.split(','))

// 3 正则优化
let res2 = JSON.parse('[' + res + ']')
console.log(res2)

// 4 递归实现
let result = []
const func = (array) => {
  for (let index = 0; index < array.length; index++) {
    if (Array.isArray(array[index])) {
      func(array[index])
    } else {
      result.push(array[index])
    }
  }
}
func(arr)
console.log(result)

// 5 reduce实现
const newArr = (arr) => {
  return arr.reduce((pre, cur) => {
    let temp = Array.isArray(cur) ? newArr(cur) : cur
    return pre.concat(temp)
  }, [])
}
console.log(newArr(arr))

let arr2 = [1, 2, 3, 4, 6, 584, 5, 3, 2, 1, 584, 9]
let asa = arr2.reduce((pre, cur) => {
  return pre.includes(cur) ? pre : pre.concat(cur)
}, [])
console.log(asa)


const person = {
  name: 'lydia'
}
Object.defineProperty(person, 'age', { value: 21 })
console.log(person)
console.log(Object.keys(person))


/**
 ** @name: 原型链继承
 * @param {*}
 * @return {*}
 */
function Parent() {
  this.name = ["Parent name"]
}

Parent.prototype.getName = function () {
  return this.name
}

function Child(params) {
  
}
Child.prototype = new Parent()
// 缺点1、Child原型上的constructor被重写，指向了Parent原型的constructor
// 解决方法，让Child的constructor指向Child自己
// Child.prototype.constructor = Child
Child.prototype.getValue = function() {
  return this.value;
}

const child1 = new Child()
const child2 = new Child()
// 缺点2、多个实例对引用类型的操作会被篡改
child1.name[0] = "child name"
console.log(child1.name)
console.log(child2.name)

/**
 ** @name: 构造函数继承
 * @param {*}
 * @return {*}
 */

function Animal(name) {
  this.name = [name]
}

Animal.prototype.getName = function () {
  return this.name
}

function Cat() {
  Animal.call(this, '我是一只猫')
}

const whiteCat = new Cat()
const blackCat = new Cat()
whiteCat.name[0] = '我变成了一直白色的猫咪'
console.log(whiteCat.name)
console.log(blackCat.name)
// 构造函数继承并不能继承父类原型prototype上的方法以及属性
// console.log(blackCat.getName())

/**
 ** @name: 组合式继承
 * @param {*}
 * @return {*}
 */

// function Func(name) {
//   this.name = [name]
// }

// Func.prototype.getName = function () {
//   return this.name
// }

// function SubFunc () {
//   Func.call(this, 'SubFunc name')
// }

// SubFunc.prototype = new Func()
// SubFunc.prototype.constructor = SubFunc
// const sub1 = new SubFunc()
// const sub2 = new SubFunc()
// sub2.name[0] = 'sub2 name'
// console.log(sub1.name)
// console.log(sub2.name)

/**
 ** @name: 寄生式组合继承
 * @param {*}
 * @return {*}
 */

function Func(name) {
  this.name = [name]
}

Func.prototype.getName = function () {
  return this.name
}

function SubFunc () {
  Func.call(this, 'SubFunc name')
}

SubFunc.prototype = Object.create(Func.prototype)
SubFunc.prototype.constructor = SubFunc
const sub1 = new SubFunc()
const sub2 = new SubFunc()
sub2.name[0] = 'sub2 name'
console.log(sub1.name)
console.log(sub2.name)

const friut = new Map().set('red', ['apple0']).set('yellow', ['banana'])
console.log(friut['red'])
