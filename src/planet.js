const Planet = {
  mercury: 88,
  venus: 225,
  earth: 365,
  mars: 687,
  jupiter: 4333
}


let age = 24

export function currentAge(age) {
  for (const property in Planet) {
     array1.push(`${(age * 365) / Planet[property]}`);
  }
  return array1
}