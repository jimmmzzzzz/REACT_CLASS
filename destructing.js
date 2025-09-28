//destructing allows extracting values from arrays or objects into distinct variables
let student = { name: "jimi", age: 18, department: "Software Engineering"};
let { name , department} = student;
console.log(`${name} studies ${department}`);
