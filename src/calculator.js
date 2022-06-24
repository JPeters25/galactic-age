export default function BaseAge() {
  this.age = 100;
}

BaseAge.prototype.earth = function() {
  this.age=this.age;
};

BaseAge.prototype.mercury=function () {
  this.age = Math.round(this.age/.24);
};

BaseAge.prototype.venus=function () {
  this.age = Math.round(this.age /.62);
};

BaseAge.prototype.mars=function () {
  this.age = Math.round(this.age /1.88);
};
