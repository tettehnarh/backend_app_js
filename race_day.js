let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = false;
// console.log(!isEarly)
let runnerAge = 40;

if (runnerAge > 18 && isEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && isEarly) {
  console.log(`Racer ${raceNumber} will race at 9.30 am`);
} else if (runnerAge > 18 && !isEarly) {
  console.log("Late adults run at 11:00 am");
} else if (runnerAge < 18) {
  console.log("Youth registrants run at 12:30 pm");
} else {
  console.log("Go to the registration desk");
}
