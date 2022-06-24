export default class BaseAge  {
  constructor(){
    this.age = 100;
    this.lifeExp=100;
}

  earth() {
    this.age=this.age;
    this.lifeExp = this.age-this.lifeExp;
  }

  mercury() {
    this.age = Math.round(this.age/.24);
  }

  venus() {
    this.age = Math.round(this.age /.62);
  }

  mars() {
    this.age = Math.round(this.age /1.88);
  }

  jupiter() {
    this.age = Math.round(this.age /11.86);
  }

}