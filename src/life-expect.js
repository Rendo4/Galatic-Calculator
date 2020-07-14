   import { currentAge } from "./planet.js";

let age = 24
let array1 = []
function currentAge(age) {
  for (const property in Planet) {
     array1.push(`${(age * 365) / Planet[property]}`);
  }
  return array1
}

const Life = {
  mercury: 298.6363636363636,
  venus: 116.8,
  earth: 72,
  mars: 38.2532751091703,
  jupiter: 6.065081929379183
}

function expectancy(Life, array1) {
  planet1 = Life.mercury - array1[0];
  planet2 = Life.venus - array1[1];
  planet3 = Life.earth - array1[2];
  planet4 = Life.mars - array1[3];
  planet5 = Life.jupiter - array1[4];
} 