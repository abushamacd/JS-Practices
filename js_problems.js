// Calculate the cash out charge for a given amount
function cashOut(amount) {
  if (typeof amount === "number" && amount > 0) {
    const charge = amount * 0.0175;
    return Number(charge.toFixed(2));
  } else {
    return "Invalid";
  }
}

// console.log(cashOut("2051"));

// Contact Validator
function validateContact(contact) {
  if (
    typeof contact === "string" &&
    contact.length === 11 &&
    contact.startsWith("01") &&
    !contact.includes(" ")
  ) {
    return "Valid";
  } else {
    return "Invalid";
  }
}

// console.log(validateContact("01834567890"));

// Problem-03 : Admission Success Calculator
function willSuccess(marks) {
  if (Array.isArray(marks) && marks.length > 0) {
    let passedSubjects = 0;
    let faildSubjects = 0;
    for (let mark of marks) {
      if (mark >= 50) {
        passedSubjects++;
      } else {
        faildSubjects++;
      }
    }
    if (passedSubjects > faildSubjects) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}

// console.log(willSuccess([65, 23, 56, 87, 34, 45, 78, 23]));

// Problem-04: Valid Proposal

function validProposal(person1, person2) {
  if (typeof person1 === "object" && typeof person2 === "object") {
    const genderValid =
      person1.gender.toLowerCase() !== person2.gender.toLowerCase();

    const ageDiff = Math.abs(person1.age - person2.age);

    console.log(ageDiff);
    const ageValid = ageDiff <= 7;

    return genderValid && ageValid;
  } else {
    return "Invalid";
  }
}

const Rahul = { name: "Rahul", gender: "male", age: 28 };
const Joya = { name: "Joya", gender: "female", age: 19 };

console.log(validProposal(Rahul, Joya));
