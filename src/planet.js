const Planet = {
  mercury: 88,
  venus: 225,
  earth: 365,
  mars: 687,
  jupiter: 4333
};


let array1 = [];

export function currentAge(age, array1, Planet) {
  for (const property in Planet) {
    array1.push((age * 365) / Planet[property]);
  }
  return array1;
}

export function showAge(array1) {
  $(".mercury").html(array1[0]);
  $(".venus").html(array1[1]);
  $(".earth").html(array1[2]);
  $(".mars").html(array1[3]);
  $(".jupiter").html(array1[4]);
}