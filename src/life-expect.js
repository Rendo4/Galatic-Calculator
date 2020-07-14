import { currentAge } from "./../src/planet.js";
const Planet = {
  mercury: 88,
  venus: 225,
  earth: 365,
  mars: 687,
  jupiter: 4333
}

let age = 24
let array1 = []
function currentAge(age) {
  for (const property in Planet) {
     array1.push(`${property}: ${(age * 365) / Planet[property]}`);
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

function expectancy (Life, array1) {
  let die = []
  for (const property in Life) {
    Life[property]) - parseInt(array1[0])
 }
} 
