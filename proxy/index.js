/**
 * new Proxy(object, {
      set(obj, property, value)
      get(obj, property)
    })
  * obj = object
 * @param {object} param - 被代理的对象
 * @param {set(obj, property, value)} function - 设置被代理对象属性值
 * @param {get(obj, property)} function - 获取被代理对象属性值
 * 
*/
let myObj = {
  name: "我是一个需要被代理的对象"
}

let proxy = new Proxy(myObj, {
  set(obj, property, value) {
    obj[property] = value
    return true
  },
  get(obj, property) {
    return obj[property]
  },
})

console.log(proxy.name)
proxy.name = "我是一个需要被代理的对象, 但是我改名字了"
console.log(proxy.name)


/**
 * 代理函数
 */

function factorial(num) {
  return num === 1 ? 1 : num * factorial(num - 1);
}

let proxyFunc = new Proxy(factorial, {
  /**
   * func - 代理的函数
   * obj - 代理函数的上下文
   * args - 代理函数传递的参数 
   */
  apply(func, obj, args) {
    console.time('run')
    func.apply(obj, args)
    console.timeEnd('run')
  }
});
proxyFunc.apply({}, [5000])


/**
 * 数组代理
 */
const lessons = [
  {
    title: "媒体查询响应式布局",
    category: "css",
  },
  {
    title: "FLEX 弹性盒模型",
    category: "css",
  },
  {
    title: "MYSQL多表查询操作",
    category: "mysql",
  },
]

let proxyArr = new Proxy(lessons, {
  get(array, key) {
    const { title } = array[key]
    console.log(title)
    const len = 5
    array[key].title = title.length > len ? title.substr(0, len) + '.'.repeat(3) : title
    return array[key]
  },
  set(array, key, value) {
    array[key] = value
    return true
  }
})
console.log(proxyArr[0])
proxyArr[0] = {
  title: "媒体查询响应式布局",
  category: "css2",
}
console.log(proxyArr[0])


var romanToInt = function(s) {
  const originNum = s
  let result = switchNum(originNum[originNum.length-1])
  let preNum = switchNum(originNum[0])
  for (let i = 1; i < originNum.length; i++) {
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
console.log(romanToInt('LVIII'))

