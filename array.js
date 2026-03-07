const friends = ["Michael", "Steven", "Peter", "Bob", "Jay", "Mohon", "John"];

// console.log(friends[0]);

// console.log(`Length of array ${friends.length} `);

// console.log(`Index of 'Steven': ${friends.indexOf("Steven")} `);

// friends[0] = "Jay";
// console.log(friends);

// friends.push("Mohon"); // add element at the end of array
// console.log(friends);

// friends.unshift("John"); // add element at the beginning of array
// console.log(friends);

// friends.pop(); // remove element at the end of array
// console.log(friends);

// friends.shift(); // remove element at the beginning of array
// console.log(friends);

// console.log(friends.includes("Steven")); // check if element is present in array or not
// console.log(friends.includes("Bob"));

// console.log(Array.isArray(friends)); // check if variable is array or not

let num = [34, 423, 234, 234234, 234];

// console.log(friends.join("-"));
// console.log(friends.concat(num));
// console.log(friends.slice(2, 4)); // slice(startIndex, endIndex) - returns a new array containing the elements from startIndex to endIndex (exclusive)
// console.log(friends.splice(5, 4)); // splice(startIndex, deleteCount) - removes elements from the array and returns the removed elements
// console.log(friends);
// console.log(friends.reverse()); // reverse the order of elements in the array
// console.log(friends.sort()); // sort the elements in the array in ascending order
console.log(num.sort((a, b) => a - b)); // sort numbers in ascending order
console.log(num.sort((a, b) => b - a)); // sort numbers in descending order
