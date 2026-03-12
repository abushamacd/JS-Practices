const book = "Math";
const book2 = "math";

console.log(book === book2);
console.log(book.toLowerCase() === book2.toLowerCase());
console.log(book.toUpperCase() === book2.toUpperCase());

const name = "   John Doe  ";
console.log(name.trim());
console.log(name.trimStart());
console.log(name.trimEnd());

const message = "Hello, World!";
console.log(message.includes("World"));
console.log(message.startsWith("Hello"));
console.log(message.endsWith("!"));

const csv = "John,Doe,30,Engineer";
const values = csv.split(",");
console.log(values);

const fullName = "John Doe";
const [firstName, lastName] = fullName.split(" ");
console.log(firstName);
console.log(lastName);

const repeated = "abc".repeat(3);
console.log(repeated);

const paddedStart = "5".padStart(3, "0");
console.log(paddedStart);

const paddedEnd = "5".padEnd(3, "0");
console.log(paddedEnd);

// split and join
const sentence = "This is a test.";
const words = sentence.split(" ");
console.log(words);

const joined = words.join("-");
console.log(joined);

// concatenate strings
const greeting = "Hello";
const name2 = "Alice";
const message2 = greeting + ", " + name2 + "!";
console.log(message2);

const message3 = `${greeting}, ${name2}!`;
console.log(message3);

console.log(greeting.concat(", ").concat(name2));
