export default class BaseAge  {
  constructor() {
    this.age = 80;
    this.lifeExp=100;
  }

  earth() {
    this.age=this.age;
    this.lifeExp = this.lifeExp;
  }

  mercury() {
    this.age = Math.round(this.age/.24);
    this.lifeExp = Math.round(this.lifeExp/.24);
  }

  venus() {
    this.age = Math.round(this.age /.62);
    this.lifeExp = Math.round(this.lifeExp/.62);
  }

  mars() {
    this.age = Math.round(this.age /1.88);
    this.lifeExp = Math.round(this.lifeExp/1.88);
  }

  jupiter() {
    this.age = Math.round(this.age /11.86);
    this.lifeExp = Math.round(this.lifeExp/11.86);
  }

}