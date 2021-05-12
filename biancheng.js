/* 
防抖debounce
*/
export const debounce = (fn, delay) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

/* 
throttle
*/
export const throttle = (fn, ms) => {
  let timer = null;
  let flag = false;
  return (...args) => {
    if (flag) {
      return;
    }
    setTimeout(() => {
      flag = false;
      fn.apply(this, args);
    }, ms);
  };
};
