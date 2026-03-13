// leep year
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true; // Divisible by 400, it's a leap year
      } else {
        return false; // Divisible by 100 but not by 400, not a leap year
      }
    } else {
      return true; // Divisible by 4 but not by 100, it's a leap year
    }
  } else {
    return false; // Not divisible by 4, not a leap year
  }
}

// Example usage:
console.log(isLeapYear(2052));
