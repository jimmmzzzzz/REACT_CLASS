const scores = [45, 65, 38, 66, 90];
const doubled = scores.map(score => score * 2);
const passed = scores.filter(score => score >= 50);
const total = scores.reduce((sum , score) => sum + score, 0);