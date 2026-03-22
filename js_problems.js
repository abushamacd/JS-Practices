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
