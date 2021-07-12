/**
 *  1. 什么是数据
 *    存储在内存中代表特定信息的，本质上是二进制数据
 *    数据的贴点：可传递、可运算
 *    一切皆数据
 *    内存中所有的操作目标：数据
 *      算数运算、逻辑运算、赋值运算、运行函数
 *  2. 什么是内存
 *    可存储数据的空间（临时的）（内存条通电后产生的）
 *    一块内存的2个数据 
 *      内部存储的数据
 *      地址值
 *    内存的分类
 *      栈：全局变量/记不变量
 *      堆：对象
 *  3. 什么是变量
 *    可变化，由变量名和变量值组成
 *    每个变量对应一块小内存，变量名用该查找对应的内存，变量值是内存中保存的数据
 *  4. 三者关系
 *    内存用来存书数据的空间
 *    变量是内存的标识
 */

/**
 * 2个引用变量指向同一个对象，通过一个变量修改对象内部数据，另一个引用变量看到的是修改后的数据
 * 2个引用变量指向同一个对象，让其中一个引用变量指向另一个对象，另一个引用变量依然指向前一个对象
 */

let obj1 = { name: "TOM" }
let obj2 = obj1
obj1.age = 12
console.log(obj2.age)
function func(obj) {
  obj.name = "juery"
}
func(obj1)
console.log(obj2.name)


let test1 = { age: 12 }
let test2 = test1
test1 = { name: 'test', value: 'test1 value' }
test2.value = "test2 value"
console.log(test1.value, test2.value)

function test(test) {
  test = { name: 'test func' }
}
test(test1)
console.log(test1.name)
