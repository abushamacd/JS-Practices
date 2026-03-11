// array of
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  //   console.log(number);
}

// while
let i = 0;

while (i <= 10) {
  //   console.log(i);
  i += 2;
}

// for loop
for (let i = 1; i <= 10; i++) {
  //   console.log(i);
}

// switch statement
const day = "Friday";

switch (day) {
  case "Sunday":
    console.log(`Today is ${day}`);
    break;
  case "Monday":
    console.log(`Today is ${day}`);
    break;
  default:
  // console.log("It's not Sunday or Monday");
}

// continue and break

for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue; // skip the rest of the loop when i is 5
  }
  if (i === 8) {
    break; // exit the loop when i is 8
  }
  //   console.log(i);
}

// do while loop
let j = 1;

do {
  console.log(j);
  j++;
} while (j <= 10);
