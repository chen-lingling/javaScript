class HD {
  static PENDING = "PENDING";
  static FUFILLED = "FUFILLED";
  static REJECTED = "REJETED"
  constructor(excutor) {
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)

    this.status = HD.PENDING
    this.value = null
    this.callbacks = []

    try {
      excutor(this.resolve, this.reject)
    } catch {
      this.reject('eror')
    }
  }

  resolve(value) {
    if(this.status === HD.PENDING) {
      this.status = HD.FUFILLED
      this.value = value
      /**
       * 让同步代码避免等待异步代码执行完毕
       * { 
       *    resolve('resolve')
       *    console.log('test')
       * }
       * 使用settimeout, console.log无需等待resolve执行结束
       */
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(this.value)
        })
      });
    }
  }

  reject(reason) {
    if(this.status === HD.PENDING) {
      this.status = HD.REJECTED
      this.value = reason
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onRejected(this.value)
        })
      });
    }
  }

  then(onFulfilled, onRejected) {
    /**
     * onFulfilled， onRejected方法可以不传
     * 添加判断，没有传递自己封装一个函数
     * 封装的函数return this.value 实现then的透传，既then().then(resolve,reject)
     */
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : () => this.value
    onRejected = typeof onRejected === 'function' ? onRejected : () => this.value

    /**
     * 实现链式调用，then返回的要是一个promise
     * 
     * 1、只有状态改变才会执行then方法
     *  第一层自己手动调用resolve、reject方法，return promise里面要函数自己调用resolve、reject方法
     * 
     */
    let promise = new HD((resolve, reject) => {
      /**
     * 异步改变状态时，onFulfilled、onRejected暂存到队列
     */
      if(this.status === HD.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            this.parse(onFulfilled(value), resolve, reject)
            // try { // onFulfilled方法本身存在错误（使用未定义变量等），异常处理
            //   let result = onFulfilled(value)
            //   /** 
            //    * 如果result是一个promise，下一个then()接收到的是一个promise对象，
            //    * 而不是resolve(value)的value值
            //    * 判断result
            //    * 如果只是一个普通值，直接执行resolve
            //    * 如果是一个promise, 执行then(),resolve
            //    */
            //   if(result instanceof HD) {
            //     result.then(resolve, reject)
            //   } else {
            //     resolve(result)
            //   }
            // } catch (error) {
            //   reject(error)
            // }
          },
          onRejected: (reson) => {
            this.parse(promise, onRejected(reson), resolve, reject)
            // try { // onRejected方法本身存在错误（使用未定义变量等），异常处理
            //   let result = onRejected(reson)
            //   if(result instanceof HD) {
            //     result.then(resolve, reject)
            //   } else {
            //     resolve(result)
            //   }
            // } catch (error) {
            //   reject(error)
            // }
          },
        })
      }
      if(this.status === HD.FUFILLED) {
        setTimeout(() => {
          this.parse(promise, onFulfilled(this.value), resolve, reject)
          // try {
          //   let result = onFulfilled(this.value)
          //   if(result instanceof HD) {
          //     result.then(resolve, reject)
          //   } else {
          //     resolve(result)
          //   }
          // } catch (error) {
          //   reject(error)
          // }
        })
      }
      if(this.status === HD.REJECTED) {
        setTimeout(() => {
          this.parse(promise, onRejected(this.value), resolve, reject)
          // try {
          //   let result = onRejected(this.value)
          //   if(result instanceof HD) {
          //     result.then(resolve, reject)
          //   } else {
          //     resolve(result)
          //   }
          // } catch (error) {
          //   reject(error)
          // }
        })
      }
    })
    return promise
  }
  parse(promise, result, resolve, reject) {
    if (promise == result) {
      throw new TypeError("Chaining cycle detected")
    }
    try { // onFulfilled方法本身存在错误（使用未定义变量等），异常处理
      // let result = onFulfilled(value)
      /** 
       * 如果result是一个promise，下一个then()接收到的是一个promise对象，
       * 而不是resolve(value)的value值
       * 判断result
       * 如果只是一个普通值，直接执行resolve
       * 如果是一个promise, 执行then(),resolve
       */
      let a = '333'
      function bet() {} 
      if(result instanceof HD) {
        result.then(resolve, reject)
      } else {
        resolve(result)
      }
    } catch (error) {
      reject(error)
    }
  } 
  static resolve(value) {
    return new HD((resolve, reject) => {
      if(value instanceof HD) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
    })
  }
  static reject(value) {
    return new HD((resolve, reject) => {
      if(value instanceof HD) {
        value.then(resolve, reject)
      } else {
        reject(value)
      }
    })
  }
  static all(promises) {
    return new HD((resolve, reject) => {
      const values = []
      let count = ''
      promises.forEach((promise, index) => {
        setTimeout(() => {
          HD.resolve(promise).then((value) => {
            values[index] = value
            count++
            if(count === promises.length) {
              resolve(values)
            }
          }, (reason) => {
            reject(reason)
          })
        });
        
      })
    })
  }
  static race(promises) {
    return new HD((resolve, reject) => {
      promises.map((promise, index) => {
        promise.then((value) => {
          // console.log('4444')
          console.log('4444')
          resolve(value)
        }, (reason) => {
          reject(reason)
        })
      })
    })
  }
}



