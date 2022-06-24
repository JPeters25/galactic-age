export default function BaseAge(age) {
  this.age = 10;
}

BaseAge.prototype.earth = function() {
  return this.age;
};

BaseAge.prototype.mercury=function () {
  this.age *= .24;
};