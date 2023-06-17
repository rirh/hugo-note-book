// Promise 构造函数
function MyPromise(executor) {
  // 保存 Promise 状态
  this.status = 'pending'
  // 保存 Promise 的结果值
  this.value = undefined
  // 保存所有的成功回调函数
  this.onResolvedCallbacks = []
  // 保存所有的失败回调函数
  this.onRejectedCallbacks = []

  // 定义 resolve 方法
  const resolve = (value) => {
    // 状态只能从 pending 变为 fulfilled
    if (this.status === 'pending') {
      this.status = 'fulfilled'
      this.value = value
      // 执行所有的成功回调函数
      this.onResolvedCallbacks.forEach((callback) => callback(this.value))
    }
  }

  // 定义 reject 方法
  const reject = (reason) => {
    // 状态只能从 pending 变为 rejected
    if (this.status === 'pending') {
      this.status = 'rejected'
      this.value = reason
      // 执行所有的失败回调函数
      this.onRejectedCallbacks.forEach((callback) => callback(this.value))
    }
  }

  // 执行 executor 函数
  try {
    executor(resolve, reject)
  } catch (error) {
    // 如果执行过程中捕获到异常，则将 Promise 状态变为 rejected
    reject(error)
  }
}

// 定义 then 方法
MyPromise.prototype.then = function (onFulfilled, onRejected) {
  // 处理 onFulfilled 的默认值
  onFulfilled =
    typeof onFulfilled === 'function' ? onFulfilled : (value) => value
  // 处理 onRejected 的默认值
  onRejected =
    typeof onRejected === 'function'
      ? onRejected
      : (reason) => {
          throw reason
        }

  // 创建一个新的 Promise 对象
  const promise2 = new MyPromise((resolve, reject) => {
    // 根据当前 Promise 的状态执行相应的回调函数
    if (this.status === 'fulfilled') {
      // 使用 setTimeout 将回调函数放入下一个事件循环中执行
      setTimeout(() => {
        try {
          const x = onFulfilled(this.value)
          // 处理回调函数的返回值并决定 promise2 的状态和值
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      }, 0)
    } else if (this.status === 'rejected') {
      setTimeout(() => {
        try {
          const x = onRejected(this.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch (error) {
          reject(error)
        }
      }, 0)
    } else if (this.status === 'pending') {
      // 如果 Promise 的状态还是 pending，将回调函数保存起来，待状态变更时执行
      this.onResolvedCallbacks.push((value) => {
        setTimeout(() => {
          try {
            const x = onFulfilled(value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      })
      this.onRejectedCallbacks.push((reason) => {
        setTimeout(() => {
          try {
            const x = onRejected(reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
        }, 0)
      })
    }
  })

  // 返回新的 Promise 对象
  return promise2
}

// 处理回调函数的返回值并决定 promise2 的状态和值
function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    // 如果返回的值与 promise2 相同，会导致循环引用，抛出错误
    reject(new TypeError('Chaining cycle detected for promise'))
  }

  if ((x && typeof x === 'object') || typeof x === 'function') {
    // 如果返回值是一个对象或函数，可能是一个 Promise
    let called = false // 避免多次调用

    try {
      const then = x.then // 获取 then 方法

      if (typeof then === 'function') {
        // 如果返回值有 then 方法，则调用 then 方法
        then.call(
          x,
          (y) => {
            if (called) return // 避免多次调用
            called = true
            // 递归调用 resolvePromise 处理返回值
            resolvePromise(promise2, y, resolve, reject)
          },
          (r) => {
            if (called) return
            called = true
            reject(r)
          }
        )
      } else {
        // 返回值是一个普通对象，直接将其作为 promise2 的值
        resolve(x)
      }
    } catch (error) {
      if (called) return
      called = true
      reject(error)
    }
  } else {
    // 如果返回值是一个普通值，直接将其作为 promise2 的值
    resolve(x)
  }
}

// 定义 catch 方法
MyPromise.prototype.catch = function (onRejected) {
  return this.then(null, onRejected)
}

// 定义 finally 方法
MyPromise.prototype.finally = function (callback) {
  return this.then(
    (value) => MyPromise.resolve(callback()).then(() => value),
    (reason) =>
      MyPromise.resolve(callback()).then(() => {
        throw reason
      })
  )
}

// 定义静态方法 resolve
MyPromise.resolve = function (value) {
  return new MyPromise((resolve) => resolve(value))
}

// 定义静态方法 reject
MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => reject(reason))
}

// 定义静态方法 all
MyPromise.all = function (promises) {
  return new MyPromise((resolve, reject) => {
    const values = []
    let count = 0

    function processValue(index, value) {
      values[index] = value
      count++

      if (count === promises.length) {
        resolve(values)
      }
    }

    for (let i = 0; i < promises.length; i++) {
      promises[i].then((value) => processValue(i, value), reject)
    }
  })
}

// 定义静态方法 race
MyPromise.race = function (promises) {
  return new MyPromise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}

const p = new MyPromise((reslove, reject) => {
  setTimeout(() => {
    reslove(1)
  }, 1000)
})

p.then((data) => {
  console.log('ok1', data)
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(data * 2)
    }, 1000)
  })
}).then((data) => {
  console.log('ok2', data)
})
