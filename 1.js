let ajax = new XMLHttpRequest();

ajax.send("www.baidu.com");

ajax.onreadystatechange = function (...arg) {
  console.log(arg);
};
