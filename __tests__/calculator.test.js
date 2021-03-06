import BaseAge from '../js/calculator';

describe('BaseAge', () => {

  test('Should return age in Earth years', () => {
    const earthAge = new BaseAge();
    earthAge.earth();
    expect(earthAge.age).toEqual(80);
  });

  test('Should return age in Mercury Years', () => {
    const mercAge = new BaseAge();
    mercAge.mercury();
    expect(mercAge.age).toEqual(333);
  });

  test('Should return age in Venus Years', ()=> {
    const venAge = new BaseAge();
    venAge.venus();
    expect(venAge.age).toEqual(129);
  });

  test('Should return age in Mars Years', ()=> {
    const marAge = new BaseAge();
    marAge.mars();
    expect(marAge.age).toEqual(43);
  });

  test('Should return age in Jupiter Years', ()=> {
    const jupAge = new BaseAge();
    jupAge.jupiter();
    expect(jupAge.age).toEqual(7);
  });

  test('Should return life expectancy if on earth', ()=> {
    const earthExp = new BaseAge();
    earthExp.earth();
    expect(earthExp.lifeExp).toEqual(100);
  });

  test('Should return life expectancy on mercury', ()=> {
    const mercExp = new BaseAge();
    mercExp.mercury();
    expect(mercExp.lifeExp).toEqual(417);
  });

  test('Should return life expectancy on venus', ()=> {
    const venExp = new BaseAge();
    venExp.venus();
    expect(venExp.lifeExp).toEqual(161);
  });

  test('Should return life expectancy on mars', ()=> {
    const marExp = new BaseAge();
    marExp.mars();
    expect(marExp.lifeExp).toEqual(53);
  });

  test('Should return life expectancy on Jupiter', ()=> {
    const jupExp = new BaseAge();
    jupExp.jupiter();
    expect(jupExp.lifeExp).toEqual(8);
  });

  test('Should return life remaining on Earth', ()=> {
    const earLife = new BaseAge();
    earLife.earth();
    expect(earLife.yearLeft).toEqual(20);
  });

  test('Should return life remaining on Mercury', ()=> {
    const mercLife = new BaseAge();
    mercLife.mercury();
    expect(mercLife.yearLeft).toEqual(84);
  });

  test('Should return life remaining on Venus', ()=> {
    const venLife = new BaseAge();
    venLife.venus();
    expect(venLife.yearLeft).toEqual(32);
  });

  test('Should return life remaining on Mars',()=> {
    const marLife = new BaseAge();
    marLife.mars();
    expect(marLife.yearLeft).toEqual(10);
  });

  test('Should return life remaining on Jupiter',()=>{
    const jupLife = new BaseAge();
    jupLife.jupiter();
    expect(jupLife.yearLeft).toEqual(1);
  })
  
});