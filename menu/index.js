class Promise {
  constructor(executor) {
    this.state = "pending";
    this.value = undefined;
    this.reason = undefined;
    // 存储onFulfilled的数组
    this.onResolvedCallbacks = [];
    // 存储onRejected的数组
    this.onRejectedCallbacks = [];
    const resolve = (value) => {
      if (this.state === "pending") {
        // resolve调用后，state转化为fulfilled
        this.state = "fulfilled";
        // 存储value
        this.value = value;
        this.onResolvedCallbacks.forEach((fn) => fn());
      }
    };
    const reject = (reason) => {
      if (this.state === "pending") {
        // resolve调用后，state转化为rejected
        this.state = "rejected";
        // 存储reason
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn());
      }
    };
    // 如果executor执行报错，直接执行reject()
    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    // 返回一个新的Promise实例
    const newPromise = new Promise((resolve, reject) => {
      if (this.state === "fulfilled") {
        const x = onFulfilled(this.value);

        // 对返回值进行处理
        resolvePromise(newPromise, x, resolve, reject);
      }

      if (this.state === "rejected") {
        const x = onRejected(this.reason);

        // 对返回值进行处理
        resolvePromise(x, resolve, reject);
      }

      if (this.state === "pending") {
        this.onResolvedCallbacks.push(() => {
          const x = onFulfilled(this.value);

          // 对返回值进行处理
          resolvePromise(newPromise, x, resolve, reject);
        });
        this.onRejectedCallbacks.push(() => {
          const x = onRejected(this.reason);

          // 对返回值进行处理
          resolvePromise(newPromise, x, resolve, reject);
        });
      }
    });

    return newPromise;
  }
}
