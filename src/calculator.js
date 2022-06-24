export default function BaseAge(age) {
  this.age = age;
}

BaseAge.prototype.earth = function() {
  return this.age;
};

BaseAge.prototype.mercury=function () {
  this.age *= .24;
};