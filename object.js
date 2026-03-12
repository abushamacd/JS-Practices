// Object
var obj = {
  name: "John",
  age: 30,
  city: "New York",
};

// Accessing object properties
console.log(obj.name);
console.log(obj["age"]);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

delete obj.age;

console.log(obj);
