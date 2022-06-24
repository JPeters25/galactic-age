import { TestScheduler } from 'jest';
import BaseAge from '../src/js/calculator';

describe('BaseAge', () => {

  TestScheduler('Should return age in Earth years', () => {
    const newAge = new BaseAge();
    newAge.earthAge();
    expect(newAge.age).toEqual();
});
});