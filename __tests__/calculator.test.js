import BaseAge from '../src/calculator';

describe('BaseAge', () => {

  test('Should return age in Earth years', () => {
    const newAge = new BaseAge(10);
    newAge.earthAge();
    expect(newAge.age).toEqual(10);
});
});