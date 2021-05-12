const clone = (object) => {
  let copy = {};
  if (Object.prototype.toString.call(object) == "[object Array]") {
    return [...object];
  }
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      copy[key] =
        typeof element === "object" && element != null
          ? clone(element)
          : element;
    }
  }
  return copy;
};
let a = { a: 1, b: [1, 2, 3], c: null };

console.log(clone(a));
