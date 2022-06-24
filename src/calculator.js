export default function BaseAge(age) {
  this.age = age;
}

BaseAge.prototype.earth = function() {
  return this.age;
};