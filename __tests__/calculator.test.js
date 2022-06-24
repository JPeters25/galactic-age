import BaseAge from '../src/calculator';

describe('BaseAge', () => {

  test('Should return age in Earth years', () => {
    const earthAge = new BaseAge();
    earthAge.earth();
    expect(earthAge.age).toEqual(100);
  });

  test('Should return age in Mercury Years', () => {
    const mercAge = new BaseAge();
    mercAge.mercury();
    expect(mercAge.age).toEqual(417);
  });

  test('Should return age in Venus Years', ()=> {
    const venAge = new BaseAge();
    venAge.venus();
    expect(venAge.age).toEqual(161);
  });

  test('Should return age in Mars Years', ()=> {
    const marAge = new BaseAge();
    marAge.mars();
    expect(marAge.age).toEqual(53);
  });

  test('Should return age in Jupiter Years', ()=> {
    const jupAge = new BaseAge();
    jupAge.jupiter();
    expect(jupAge.age).toEqual(8);
  });

  test('Should return life expectancy if on earth', ()=> {
    const earthExp = new BaseAge();
    earthExp.earth();
    expect(earthExp.lifeExp).toEqual(0);
  });

  test('Should return life expectancy remaining on mercury', ()=> {
    const mercExp = new BaseAge();
    mercExp.mercury();
    expect(mercExp.lifeExp).toEqual(-317);
  });
});