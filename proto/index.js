/**
 * 对应名称
 * prototype : 原型
 * __proto__: 原型链（连接点）
 * 
 * 从属关系
 * prototype -> 函数的一个属性: 对象{}
 * __proto__ -> 对象Object的一个属性： 对象{}
 * 对象的__proto__保存该对象的构造函数的prototype
 * 
 */

function Test() {
  this.a = 1
}
Test.prototype.b = 2


console.log(Test.prototype)

const test = new Test()
console.log(test.__proto__)

console.log(test.__proto__ === Test.prototype)

console.log(Test.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__)
Object.prototype.c = 3

console.log(test)

/**
 * test {
 *  a: 1,
 *  __proto__: Test.prototype = {
 *    b: 2,
 *    __proto__： Object.prototype = {
 *      c: 3
 *      no __proto__
 *    }
 *  }
 * }
 */

console.log(test.a, test.b, test.c)

// Function Object既是函数也是对象
console.log(Test.__proto__ === Function.prototype)

// const new Function()
console.log(Function.__proto__)
console.log(Function.prototype)
console.log(Function.__proto__ === Function.__proto__)

// const obj = {}
// const obj = new Object() // Object is a function
console.log(typeof Object)
console.log(Object.__proto__ === Function.prototype)

console.log(Object.__proto__ === Function.__proto__)

// test.constructor ->指向实例化test对象的构造函数
console.log(test.constructor === Test)

function Test1() {
  this.a = 1111
}

test.constructor = Test1
console.log(test)
