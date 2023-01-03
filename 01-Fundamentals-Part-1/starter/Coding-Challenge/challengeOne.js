const markMass = 68;
const johnMass = 70;
const markHeigh = 1.9;
const johnHeigh = 1.88;

const BMIMark = markMass / markHeigh ** 2;
const BMIJohn = johnMass / (johnHeigh * johnHeigh);
const markHigherMBI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
console.log(markHigherMBI);
