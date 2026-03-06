let salary = 60000;
let hasCar = false;
let isBCS = false;

if ((salary > 50000 && hasCar) || isBCS) {
  console.log("You are rich");
} else {
  console.log("You are not rich");
}

// Multiple conditions
let age = 25;

if (age < 18) {
  console.log("You are a minor");
} else if (age >= 18 && age < 65) {
  console.log("You are an adult");
} else {
  console.log("You are a senior");
}

// Nested if-else
let age2 = 30;
if (age2 < 18) {
  console.log("You are a minor");
} else {
  if (age2 >= 18 && age2 < 65) {
    console.log("You are an adult");
  } else {
    console.log("You are a senior");
  }
}

// Ternary operator
let age3 = 40;
let category = age3 < 18 ? "minor" : age3 < 65 ? "adult" : "senior";
console.log(`You are a ${category}`);
