let module = (function () {
  const moduleList = {}
  function define(name, modules, action) {
    modules.map((m, i) => {
      modules[i] = moduleList[m]
    })
    moduleList[name] = action(...modules)
  }
  return { define }
})();
module.define('cal', [], function () {
  return {
    max(arr, key) {
      return arr.sort((a, b) => b[key] -a[key])[0]
    }
  }
})
module.define('lessons', ['cal'], function (cal) {
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
  console.log(cal.max(lessons, 'click'))
})