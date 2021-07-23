/**
 * 1、如何产生闭包
 *  当一个嵌套的内部（子）函数引用了嵌套的外部（父）函数的变量（函数）时，就产生了闭包
 * 2、闭包是什么
 *  理解一：闭包是嵌套的内部函数
 *  理解二：包含被引用变量（函数）的对象
 *  注意：闭包存在于嵌套的内部函数中
 * 3、闭包产生的条件
 *  函数嵌套
 *  内部函数引用了外部函数变量
 * 4、闭包的作用
 *  使函数内部的变量在函数执行完成后，仍然存活在内存中（延长局部变量生命周期）
 *  让函数的外部可以操作（读写）函数内部的数据（变量/函数）
 */
function fn1() {
  var a = 2
  function fn2() {
    a++
    console.log(a)
  }
  return fn2
}
let f = fn1()
f()
f()
var name = "the window"
var object = {
  name: 'the object',
  getName: function () {
    return function () {
      return this.name
    }
  }
}
console.log(object.getName()())

function fun(n, o) {
  console.log(o)
  return {
    fun: function (m) {
      return fun(m, n)
    }
  }
}
var a = fun(0)
a.fun(1)
a.fun(2)   
a.fun(3)
var b = fun(0).fun(1).fun(2).fun(3)
var c = fun(0).fun(1)
c.fun(2)
c.fun(3)

// function closure() {
//   let n = 1;
//   return function sum() {
//     let m = 1;
//     return function sum2() {
//       console.log('m:', ++m)
//       console.log('n:', ++n)
//     }
//     sum2()
//   }
// }
// let a = closure()()
// a();
// a();

/**
 * 构造函数
 */
// function closure() {
//   let n = 1;
//   this.sum = function() {
//     console.log('n:', ++n)
//   }
// }
// let a = new closure()
// a.sum()

/**
 * 块级作用域
 * 
 * var 没有块级作用域的概念，块内声明也是全局的作用域
 * 
 * let、const 块级作用域变量生命，块内声明为块内作用域
 * 
 */
// {
//   var a = 1;
// }
// {
//   let b = 2;
// }
// console.log(a, )

// for (let index = 1; index <= 3; index++) {
//   console.log(index)
// }
// console.log(index)
// for (let index = 1; index <= 3; index++) {
//   (function(i){
//     setTimeout(() => {
//       console.log(i)
//     }, 1000);
//   })(index)
// }

// let arr = [1, 2,3,4,5,6,7,8,9,12,23,34,45,56,67]
// function between(a, b) {
//   return function(v) {
//     return v >= a && v <= b 
//   }
// }
// console.log(arr.filter(between(5, 20)))
// let gj = arr.filter((item) => {
//   return item >=2 && item <= 9
// })
// console.log(gj)
// let gj2 = arr.filter((item) => {
//   return item >=8 && item <= 20
// })
// console.log(gj2)

let lessons = [
  {
    title: '媒体查询',
    click: 25,
    price: 59.9
  },
  {
    title: 'GRID栈格',
    click: 12,
    price: 29.9
  },
  {
    title: 'FLEX布局',
    click: 20,
    price: 89.9
  },
  {
    title: '盒子模型',
    click: 10,
    price: 69.9
  },
]

// let a = lessons.sort((a, b) => {
//   return a.price > b.price ? 1 : -1
// })
// console.table(a)
// let b = lessons.sort((a, b) => {
//   return a.click > b.click ? 1 : -1
// })
// console.table(b)

// function order(field, type = 'asc') {
//   return (a, b) => {
//     if (type === 'asc') {
//       return a[field] > b[field] ? 1 : -1
//     }
//     return a[field] > b[field] ? -1 : 1
//   }
// }

// let a = lessons.sort(order('click', 'desc'))
// console.table(a)
