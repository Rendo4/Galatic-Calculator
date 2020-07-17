import { currentAge, expectancy, Planet, Life, array1, planets } from "./../src/planet.js";

describe('Planet', () => {
  test('should generate current age on all planets', () => {
    let age = 24;
    currentAge(Planet, array1, age);
    expect(array1).toequal([99.54545454545455, 38.93333333333333, 24, 12.751091703056769, 2.0216939764597277]);
    })
  test('should generate how long you have left by minusing expectancy from current age', () => {
    let age = 24;
    currentAge(Planet, array1, age);
    expectancy(Life, array1);
    expect(planets).toequal([199.09090909090907, 77.86666666666667, 48, 25.502183406113534,4.0433879529194545])
  })
})