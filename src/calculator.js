export default function BaseAge() {
  this.age = 10;
}

BaseAge.prototype.earth = function() {
  this.age=this.age;
};

BaseAge.prototype.mercury=function () {
  this.age *= .24;
};

BaseAge.prototype.venus=function () {
  this.age *= .62;
};

BaseAge.prototype.mars=function () {
  this.age *= 1.88;
};
