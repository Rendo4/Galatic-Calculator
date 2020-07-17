import { array1 } from "./planet.js";

const Life = {
  mercury: 298.6363636363636,
  venus: 116.8,
  earth: 72,
  mars: 38.2532751091703,
  jupiter: 6.065081929379183
};


//I cleared  the error with Life being undeclared by switching this.[planet] back to Life.[planet]. Give it a try now when you get a chance and let me know! 
//gonna crash tonight, I'll talk to you tomorrow afternoon. I'll be up late tomorrow too if you want to keep working on stuff.
export function expectancy(Life, array1) {
  let planet1 = Life["mercury"] - array1[0];
  let planet2 = Life["venus"] - array1[1];
  let planet3 = Life["earth"] - array1[2];
  let planet4 = Life["mars"] - array1[3];
  let planet5 = Life["jupiter"] - array1[4];
  return planet1, planet2, planet3, planet4, planet5;
} 