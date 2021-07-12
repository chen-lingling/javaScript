// let str = new String('hello')
// console.log(str)

/**
 *
 * 定义函数的几种方式
 *
 */
// let GJ = new Function('title', 'console.log(title)')
// GJ('title')

// function GJ() {
//   console.log('ssss')
// }
// GJ()

// let func = function(title) {
//   console.log(title)
// };
// func('My name is func')

// let user = {
//   name: null,
//   setUserName(name) {
//     this.name = name;
//   },
//   getUserName() {
//     return this.name
//   }
// }
// user.setUserName('new name')
// console.log(user.getUserName())

/**
 *
 * 全局函数
 * 定义的全局函数，会向 window 压入一个函数
 * 若命名与window的函数相同，会覆盖掉window的函数
 * * 使用匿名函数赋值给var 变量，也会得到一个全局函数，并向 window 压入
 * * 使用匿名函数赋值给let 变量，是非全局函数，不会向window压入
 *
 */
// function screenX() {
//   console.log('全局函数screenX')
// }
// console.log(window.screenX)

// function LC() {
//   console.log("GJ")
// }
// window.LC()
// console.log(window)

// 使用匿名函数赋值给变量
// var func = function() {
//   console.log('var function')
// }
// let func = function() {
//   console.log('var function')
// }
// window.func()

/**
 * 匿名函数与具名函数
 *
 * 1、匿名函数不能提升，先定义后使用
 * 2、具名函数可以提升，在函数声明前可以使用
 *
 */
// func();
// function func() {
//   console.log('我是具名函数')
// }
// var func = function() {
//   console.log('我是匿名函数')
// }
// func();

/**
 *
 * 立即执行函数
 *
 */

// let arr = [1, 2, 3, 4, 5, 3].filter(value => value > 2);
// console.log(arr)

// async function async1() {
//   console.log('1')
//   await async2()
//   console.log('2')
// }
// async function async2() {
//   console.log('3')
// }

// console.log('4')

// setTimeout(() => {
//   console.log('5')
// }, 0)

// async1()

/**
 * 
 * apply call bind
 * 是构造函数的this指向使用的对象
 * 
 * 1、call: Fun.call(object, param1, param2, ...)
 * 2、apply: Fun.apply(object, [param1, param2, ...])
 * 3、bind: Fun.bind(object, param1, param2, ...)()
 * * call、apply会立即执行函数
 * * bind要手动执行才会调用函数
 * 
 */

// let lisi = {
//   name: '李四'
// }
// let wangwu = {
//   name: "王五"
// }
// let zhangsan = {
//   name: "张三"
// }

// function User(age, sex) {
//   console.log(this.name, age, sex)
// }
// User.call(lisi, 20, '男')
// User.apply(wangwu, [22, '女'])

// function show() {
//   console.log('show Function: ', this.name)
// }
// show.bind({ name: 'bind' })()

// let a = function () { }
// // bind相当于复制一个函数
// let b = a.bind()
// console.log(b === a)

// function func(a, b) {
//   return this.f + a + b
// }
// let obj = {
//   f: 1,
// }
// let test = func.bind(obj)
// console.log(test(2, 3))

/**
 * 箭头函数、普通函数
 * *箭头函数 为匿名函数
 * *1、箭头函数this指向父级所在的this
 * *2、箭头函数不能作为构造函数
 * *3、箭头函数没有arguments对象
 * 
 */


let obj = {
  name: "my name is obj.name",
  show: function () {
    console.log(this)
    let showObj = {
      name: "my name is showObj.name",
      show: () => {
        console.log(this)
      },
      showNormal: function () {
        console.log('showNormal', this)
      }
    }
    showObj.show()
    showObj.showNormal()
  }
}
obj.show()
