/* VALUE AND VARIABLES
let js = "amazing";
console.log(40 + 8 + 23 - 10);

//Value -> Pass literal value
console.log("Jonas");

//Variable -> Pass variable
let firstName = "jonas";
console.log(firstName);
*/

//Lecture Value and Variables
// const country = "Portugal";
// const continent = "Europa";
// let portugalPopulation = 1100000;
// console.log(country);
// console.log(continent);
// console.log(portugalPopulation);

//------------------------------------------------------
/**
 * DATA TYPES
 *
 * 1-Number -> use for decimal and integers
 * 2-String -> used for text
 * 3-Boolean -> used for taking decisions
 * 4-Undifined ->Value taken by a variable that is not yet defined
 * 5-Null -> Also means 'empty value'
 * 6-Symbol (ES2015) -> larger integers than the Number type can hold
 * 7-BigInt (ES202) -> Large integers tha the Number type can hold


let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "jonas");

javascriptIsFun = "YES";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/

//Lecture Data types
// let isIsland = false;
// let language;
// console.log(isIsland);

/**
 * let, const, var

let age = 30;
age = 41;

const bithYear = 1997;
// bithYear = 1991
// const job;

job = "teacher";
var job = "Programmer";
 */

//Lecture let, const, var
// language = "Portuguese";
// console.log(language);

//------------------------------------------------------
/**
 * BASIC OPERATOR

// Math Operator
const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(ageJonas, ageSara);

// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firtName = "Jonas";
const lastname = "Ros";
console.log(firtName + " " + lastname);

// Assigment Operator
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSara);
console.log(ageSara >= 18);

const isFullAge = ageSara >= 18;
console.log(now - 1991 > now - 2018);

// Lecture Basic Operator

// Lecture 1
console.log(portugalPopulation / 2);
// Lecture 2
portugalPopulation++;
console.log(portugalPopulation);
// Lecture 3
const filandPopulation = 6000000;
console.log(portugalPopulation > filandPopulation);
// Lecture 4
const populationCountry = 33300000;
console.log(portugalPopulation < populationCountry);
// Lecture 5
const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";
*/

//------------------------------------------------------
/**
 * Operator Procedure

const now = 2037;
const ageJonas = now - 1991;
const ageSara = now - 2018;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSara) / 2;
console.log(ageJonas, ageSara, averageAge);
*/

//------------------------------------------------------
/**
 * String and templates literals


const firstName = "jonas";
const job = "Developer";
const birthYear = 1991;
const year = 2037;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(jonas);

//ES6 template strings
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);

//Lecture 1
const description = `Portugal is in Europe, and its 11 million people speak portuguese`;
console.log(description);
*/

//------------------------------------------------------
/**
 * Taking decisions: if / else statements


const age = 15;

if (age >= 18) {
  console.log("Sara can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sara is to young. Wait another ${yearsLeft} years 😀`);
}

const birthYear = 2001;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//Lecture 1
const portugalPopulation = 11000000;
if (portugalPopulation > 33000000) {
  console.log(`Portugal's population is above average`);
} else {
  console.log(`Portugal's population is 22000000 below average`);
}
*/

//------------------------------------------------------
/**
 * Type convertion and Coercion
 */

/**
 * Type convertion
 */
//Convert string to number
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

//Convert number to string
console.log(String(12), 23);

/**
 * Type Coercion
 */
console.log("I am " + 23 + " years old.");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; //output = 11
n = n - 1; //output 11 = 11 - 1 = 10
console.log(n);

//lecture 1
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143
