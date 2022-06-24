import BaseAge from '../src/calculator';

describe('BaseAge', () => {

  test('Should return age in Earth years', () => {
    const earthAge = new BaseAge(10);
    earthAge.earth();
    expect(earthAge.age).toEqual(10);
});

  test('Should return age in Mercury Years', () => {
    const mercAge = new BaseAge(10);
    mercAge.mercury();
    expect(mercAge.age).toEqual(2.4);
  });
});