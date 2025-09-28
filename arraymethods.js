//array methods creats a new array by applying a function to each element of an existing array
let scores = [45, 65, 38, 66, 90];
let doubled = scores.map(score => score * 2);
let passed = scores.filter(score => score >= 50);
let total = scores.reduce((sum , score) => sum + score, 0);
