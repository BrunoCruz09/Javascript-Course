/**
 * CHALLENGE ONE
 */
/*const markMass = 68;
const johnMass = 70;
const markHeigh = 1.9;
const johnHeigh = 1.88;

const BMIMark = markMass / markHeigh ** 2;
const BMIJohn = johnMass / (johnHeigh * johnHeigh);
const markHigherMBI = BMIMark > BMIJohn;
console.log(BMIMark, BMIJohn);
console.log(markHigherMBI);*/

/**
 * CHALLENGE TWO
 */
/*if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
  console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}*/

/**
 * CHALLENGE THREE
 */
/*
const averageDolphins = (96+108+89)/3;
const averagekoalas = (88+91+110)/3;
console.log('Dolphins: ' + averageDolphins +" | "+ 'Koalas: ' + averagekoalas)

if (averageDolphins === averagekoalas){
  console.log("Both team have the same average score");
} else if (averageDolphins > averagekoalas) {
  console.log('Dolphins win!');
}else {
  console.log('Koalas win!');
}*/

/*BONUS 1
const averageDolphins = (97+112+101)/3;
const averagekoalas = (109+95+123)/3;
console.log('Dolphins: ' + averageDolphins +" | "+ 'Koalas: ' + averagekoalas)

if (averageDolphins > averagekoalas && averageDolphins >= 100){
  console.log("Dolphins win");
} else if (averageDolphins < averagekoalas && averagekoalas >= 100) {
  console.log('Koalas win!');
}else {
  console.log('Both team have the same average score');
}*/

/*BONUS 2
const averageDolphins = (97+112+101)/3;
const averagekoalas = (109+95+106)/3;
console.log('Dolphins: ' + averageDolphins +" | "+ 'Koalas: ' + averagekoalas)

if (averageDolphins === averagekoalas && averageDolphins >= 100 && averagekoalas >= 100){
  console.log("Both team have the same average score");
}*/

/**
 * CHALLENGE Four

const bill = 301;
const tip = bill >= 50 && bill <= 300 ? 15/100 : 20/100;

console.log(bill >= 50 && bill <= 300 ? `1-The bill was ${bill}, the tip was ${bill*tip}, and the total value ${bill + (bill*tip)}` : `2-The bill was ${bill}, the tip was ${bill*tip}, and the total value ${bill + (bill*tip)}`);
*/