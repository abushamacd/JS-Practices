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
