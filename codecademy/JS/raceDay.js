let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

let age = 19

if (age >= 18 && registeredEarly){
  raceNumber+=1000;
}

if (age>18 && registeredEarly) {
  console.log(`Runner:${raceNumber}: Your race starts at 9:30`);
} else if (age>18 && !registeredEarly) {
  console.log(`Runner:${raceNumber}: Late adults run at 11:00 am`);
} else if (age < 18) {
  console.log(`Runner:${raceNumber}: Youth registrants run at 12:30 pm (regardless of registration)`)
}
