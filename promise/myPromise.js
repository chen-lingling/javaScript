class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(excutor) {
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)

    this.status = MyPromise.PENDING
    this.value = null
    this.callbacks = []

    try {
      excutor(this.resolve, this.reject)
    } catch(error) {
      this.reject(error)
    }
  }
  resolve(value) {
    if(this.status === MyPromise.PENDING) {
      this.status = MyPromise.FULFILLED
      this.value = value
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onFulfilled(this.value)
        })
      });
    }
  }
  reject(reason) {
    if (this.status === MyPromise.PENDING) {
      this.status = MyPromise.REJECTED
      this.value = reason
      setTimeout(() => {
        this.callbacks.map((callback) => {
          callback.onRejected(this.value)
        })
      });
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function'
                  ? onFulfilled 
                  : () => this.value
    onRejected = typeof onRejected === 'function'
                  ? onRejected 
                  : () => this.value

    let newMyPromise = new MyPromise((resolve, reject) => {
      if(this.status === MyPromise.FULFILLED) {
        setTimeout(() => {
          this.parmse(newMyPromise, onFulfilled(this.value), resolve, reject)
        });
      }
      if(this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          this.parmse(newMyPromise, onRejected(this.value), resolve, reject)
        });
      }
      if(this.status === MyPromise.PENDING) {
        this.callbacks.push({
          onFulfilled: (value) => {
            this.parmse(newMyPromise, onFulfilled(value), resolve, reject)
          },
          onRejected: (reason) => {
            this.parmse(newMyPromise, onRejected(reason), resolve, reject)
          },
        })
      }
    })
    return newMyPromise
  }
  parmse(newMyPromise, result, resolve, reject) {
    if (newMyPromise == result ) {
      return reject(new TypeError('Chaining cycle detected for promise'))
    }
    try {
      if(result instanceof MyPromise) {
        result.then(resolve, reject)
      } else {
        resolve(result)
      }
    } catch (error) {
      reject(error)
    }
  }
}