export default function BaseAge(age) {
  this.age = age;
}

BaseAge.prototype.earthAge = function() {
  return this.age;
};