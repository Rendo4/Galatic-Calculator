
import { currentAge, expectancy, Planet, Life } from "./../src/planet.js";

describe('Planet', () => {
  test('should generate current age on all planets', () => {
    let array1 = [];
    let age = 24;
    currentAge(age, array1, Planet);
    expect(array1[2]).toEqual(24);
    })
  test('should generate how long you have left by minusing expectancy from current age', () => {
    let array1 = [];
    let age = 24;
    let planets = [];
    currentAge(age, array1, Planet);
    expectancy(Life, array1);
    expect(planets[2]).toEqual(48);
  })
})
