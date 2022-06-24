export default function BaseAge() {
  this.age = 10;
}

BaseAge.prototype.earth = function() {
  return this.age;
};

BaseAge.prototype.mercury=function () {
  this.age *= .24;
};

BaseAge.prototype.venus=function () {
  this.age *= .62;
};


