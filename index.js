function Person(name, age) {
  (this.name = name), (this.age = age), (this.setAge = function () {});
}
Person.prototype.setAge = function () {
  console.log("111");
};
function Student(name, age, price) {
  Person.call(this, name, age);
  this.price = price;
  this.setScore = function () {};
}
Student.prototype = Person.prototype;
Student.prototype.constructor = Student;
Student.prototype.sayHello = function () {};
var s1 = new Student("Tom", 20, 15000);
console.log(s1);

console.log(s1 instanceof Student, s1 instanceof Person); //true true
console.log(s1.constructor); //Person
