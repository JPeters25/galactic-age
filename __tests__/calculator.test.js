import BaseAge from '../src/calculator';

describe('BaseAge', () => {

  test('Should return age in Earth years', () => {
    const earthAge = new BaseAge();
    earthAge.earth();
    expect(earthAge.age).toEqual(10);
});

  test('Should return age in Mercury Years', () => {
    const mercAge = new BaseAge();
    mercAge.mercury();
    expect(mercAge.age).toEqual(2.4);
  });

  test('Should return age in Venus Years', ()=> {
    const venAge = new BaseAge();
    venAge.venus();
    expect(venAge.age).toEqual(6.2);
  });
});