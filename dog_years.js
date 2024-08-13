// Variable for human age
let myAge = 37;

// Early years in dog age
let earlyYears = 2;
earlyYears *= 10.5;

// Later years in dog age
let laterYears = myAge - earlyYears;
laterYears *= 4;

// Otuput early and later dog years
console.log(`Early years: ${earlyYears}`);
console.log(`Later years: ${laterYears}`);

// Dog years
let myAgeInDogYears = earlyYears + laterYears;

let myName = "Leslie";
myName = myName.toLowerCase();

console.log(
  `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`
);
