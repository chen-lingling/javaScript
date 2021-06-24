/**
 * 深拷贝
 */
function copy(obj) {
  /**
   * 判断obj是数组，则新建一个数组，否则新建一个对象用于保存拷贝的数据
   */
  let item = obj instanceof Array ? [] : {}
  for (const [key, value] of Object.entries(obj)) {
    /**
     * Object.extries(item)生成键-值对数组
     * 如果value是一个object，继续拷贝
     * 否则进行赋值
     */
    item[key] = typeof value === 'object' ? copy(value) : value
  }
  return item
}
let obj = {
  name: '深拷贝-第一层',
  body: {
    name: "深拷贝-第二层",
    value: "随便的值"
  },
  arr: [1,2,3,4]
}
let copyObj = copy(obj)
copyObj.name = "copyObj 我把名字改了"
console.log(obj)
console.log(copyObj)



