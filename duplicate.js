function checkDuplicate(arr) {
  let uniqueElements = [];
  for (const item of arr) {
    if (!uniqueElements.includes(item)) {
      uniqueElements.push(item);
    }
  }
  return uniqueElements;
}

// Example usage:
// const numbers = [1, 2, 3, 4, 5, 2];
const frnd = ["sachin", "sachin", "Rachin", "Sachin", "Gachin", "sachin"];
console.log(checkDuplicate(frnd));
