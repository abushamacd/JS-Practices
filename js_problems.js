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


