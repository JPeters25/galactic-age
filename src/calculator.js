export default class BaseAge  {
  constructor() {
    this.age = 80;
    this.lifeExp=100;
    this.yearLeft=("");
  }

  earth() {
    this.age=this.age;
    this.lifeExp = this.lifeExp;
    this.yearLeft = this.lifeExp-this.age;
  }

  mercury() {
    this.age = Math.round(this.age/.24);
    this.lifeExp = Math.round(this.lifeExp/.24);
    this.yearLeft = Math.round(this.lifeExp-this.age);
  }

  venus() {
    this.age = Math.round(this.age /.62);
    this.lifeExp = Math.round(this.lifeExp/.62);
    this.yearLeft = Math.round(this.lifeExp-this.age);
  }

  mars() {
    this.age = Math.round(this.age /1.88);
    this.lifeExp = Math.round(this.lifeExp/1.88);
    this.yearLeft = Math.round(this.lifeExp-this.age);
  }

  jupiter() {
    this.age = Math.round(this.age /11.86);
    this.lifeExp = Math.round(this.lifeExp/11.86);
  }

}