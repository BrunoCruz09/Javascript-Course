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

//------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------
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

//------------------------------------------------------------------------------
/**
 * Type convertion and Coercion
 */

/**
 * Type convertion

//Convert string to number
const inputYear = "1991";
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

//Convert number to string
console.log(String(12), 23);
*/

/**
 * Type Coercion

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
*/
//------------------------------------------------------------------------------
/**
 * Truthy and Falsy Values
 * 5 falsy values: 0, '', undefined, null, NaN


console.log(Boolean(0));
console.log(Boolean("Jonas"));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean({}));

const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 123;
if (height) {
  console.log("Defined");
} else {
  console.log("height is Undifined");
}
*/
//------------------------------------------------------------------------------
/**
 * Equality Operator == vs. ===

const age = "18";

if (age === 18) console.log("1-You just became an adult");
if (age == 18) console.log("2-You just became an adult");

const favoriteNumber = Number(prompt("Favorite number:"));
console.log(favoriteNumber);
console.log(typeof favoriteNumber);

if (favoriteNumber === 9) {
  // 9 === 9
  console.log("Cool number");
} else if (favoriteNumber === 7) {
  console.log("It's cool number");
} else {
  console.log("Number is not 9 or 7");
}

if (favoriteNumber !== 9) {
  console.log("Why not 9");
}
*/

/**
 * LECTURE

const numNeighbours = Number(prompt(
  "How many neighbour countries does your country have?"
));

if (numNeighbours === 1) {
    console.log('Only 1 border!')
} else if (numNeighbours > 1){
    console.log("More than 1 border' in case")
} else {
    console.log("No borders")
}
 */
//------------------------------------------------------------------------------
/**
 * Logic Operator


const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense && hasGoodVision);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Able to drive");
// } else {
//   console.log("Someone else should drive");
// }

const isTired = true;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Able to drive");
} else {
  console.log("Someone else should drive");
}
*/

/**
 * LECTURE

const myCountrySpeakEnglish = false;
const moreThenFiftyMillionPeople = false;
const isIsland = false;

if (myCountrySpeakEnglish && moreThenFiftyMillionPeople && isIsland) {
    console.log('You should live in Portugal :)')
} else {
    console.log('Portugal does not meet your criteria :(')
}
 */
//-----------------------------------------------------------------------------
/**
 * Switch Statement


const day = 'sunday';

switch (day) {
    case "monday":// day === 'monday'
        console.log('Plan my course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend');
        break;
    default:
        console.log('Not a valid day');
}
//if version
if (day === 'monday') {
    console.log('Plan my course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend');
} else {
    console.log('Not a valid day');
}
 */
//-----------------------------------------------------------------------------
/**
 * Statements and Expressions


//Statements
if(23 > 10) {
    const str = '23 is bigger';
}

//Expression
console.log(`I'm ${2037 - 1991} years old.`)
 */