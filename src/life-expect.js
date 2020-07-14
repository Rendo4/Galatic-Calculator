import { array1 } from "./planet.js";

const Life = {
  mercury: 298.6363636363636,
  venus: 116.8,
  earth: 72,
  mars: 38.2532751091703,
  jupiter: 6.065081929379183
};

export function expectancy(Life, array1) {
  let planet1 = this.mercury - array1[0];
  let planet2 = this.venus - array1[1];
  let planet3 = this.earth - array1[2];
  let planet4 = this.mars - array1[3];
  let planet5 = this.jupiter - array1[4];
  return planet1, planet2, planet3, planet4, planet5;
} 