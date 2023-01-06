'use strict';

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const dogsJuliaCorrect = dogsJulia.splice(1, 2);
const dogsJuliaCorrect2 = dogsJulia2.splice(1, 2);

const checkDogs = function (arr) {
  arr.forEach(function (value, i) {
    3 < value
      ? console.log(`Dog number ${i + 1} is an adult and is ${value} years old`)
      : console.log(
          `Dog number ${i + 1} is a pupperino and is ${value} years old`
        );
  });
};

console.log(`=============== TEST 1 ===============`);

checkDogs(dogsKate);
console.log(`===============`);
checkDogs(dogsJuliaCorrect);

console.log(`=============== TEST 2 ===============`);

checkDogs(dogsKate2);
console.log(`===============`);
checkDogs(dogsJuliaCorrect2);

console.log(`=============== DIFFFFFFFFFFFFFF ===============`);

const humanAge = [];
const dogAges1 = [5, 2, 4, 1, 15, 8, 3];
const dogAges2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = function (ages) {
  ages.forEach(age => {
    if (age <= 2) {
      humanAge.push(age * 2);
    } else if (age > 2) {
      humanAge.push(age * 4 + 16);
    }
  });
};

calcAverageHumanAge(dogAges1);

const ageFilter =
  humanAge
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, val, i, arr) => acc + val) / arr.length;

console.log(ageFilter);

const ageAve =
  ageFilter.reduce((acc, val) => {
    return acc + val;
  }) / ageFilter.length;

console.log(ageAve);
