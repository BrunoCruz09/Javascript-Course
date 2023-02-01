'use strict';
function logger(message) {
    console.log(message);
}
/**
let hasDriversLicense = false;
const pass = true;

if(pass) hasDriversLicense = true;

if(hasDriversLicense) console.log('I can drive');

let interface = 'Audio';
const private = 435;
 */
//-----------------------------------------------------------------------------
/**
 * FUNCTIONS

function logger(message) {
    console.log(message);
}
//calling / running / invoking function

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}
logger(fruitProcessor(5, 0));

logger(fruitProcessor(2, 4));
*/

/**
 * LECTURE: Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and its capital city is ${capitalCity}`
}

logger(describeCountry('Finland', '6 million', 'helsinki'));
logger(describeCountry('Portugal', '11 million', 'Lisboa'));
logger(describeCountry('Spain', '46 million', 'Madrid'));
 */
//-----------------------------------------------------------------------------
/**
 * Function Declarations vs Expressions


//Function declaration
function calcAge1(birthYear) {
    return 2023 - birthYear;
}
logger(calcAge1(1986));

//Function expression
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
logger(calcAge2(1982))
*/

/**
 * LECTURE: Function Declarations vs Expressions


//Function declaration
function percentageOfWorld1(population) {
    return (population / 7900) * 100 + '%';
}
logger(percentageOfWorld1(7900));
logger(percentageOfWorld1(3950));

//Function expression
const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100 + '%';
}
logger(percentageOfWorld2(7900));
logger(percentageOfWorld2(3950));
*/
//-----------------------------------------------------------------------------
/**
 * Arrow Function

const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}
const calcAge3 = birthYear => 2029 - birthYear

logger(calcAge3(1990));

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}

logger(yearsUntilRetirement(1990, 'Jonas'));
*/

/**
 * LECTURE Arrow Functions

// Function expression
// const percentageOfWorld2 = function (population) {
//     return (population / 7900) * 100 + '%';
// }

const percentageOfWorld2 = population => (population / 7900) * 100 + '%'
logger(percentageOfWorld2(3950));
*/
//-----------------------------------------------------------------------------
/**
 * Functions calling other Functions


function cutFruitPieces(fruit) {
    return fruit * 4;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
logger(fruitProcessor(2,4));
*/

/**
 * LECTURE Functions calling other Functions


function percentageOfWorld1(population) {
    return (population / 7900) * 100 + '%';
}
const population = (country, population) => {
    const percentageWorld = percentageOfWorld1(population)
    return `${country} has ${population} million people, which is about ${percentageWorld} of the world`
}
logger(population('China', 1441));
*/
//-----------------------------------------------------------------------------
/**
 * Reviewing function


//Function declaration
function convertCelsiusToFahrenheit(celsius) {
    return `${celsius} Celsius is ${(celsius * 1.8) + 32} Fahrenheit`;
}
logger(convertCelsiusToFahrenheit(20))

//Functions expressions
const convertCelsiusToFahrenheit1 = function (celsius) {
    return `${celsius} Celsius is ${(celsius * 1.8) + 32} Fahrenheit`;
}
logger(convertCelsiusToFahrenheit1(30))

//Arrow Functions
const convertCelsiusToFahrenheit2 = (celsius) => `${celsius} Celsius is ${(celsius * 1.8) + 32} Fahrenheit`;
logger(convertCelsiusToFahrenheit2(40));
*/
//-----------------------------------------------------------------------------
/**
 * Introducing arrays
 */
const friends = ['Jonas', 'Peter', 'Steve'];

const y = new Array(1991,1992,1993,1994);
logger(y)

logger(friends);
logger(friends[0])//log the specific position
logger(friends.length);//array length
logger(friends[friends.length - 1]);

//change specific element in array
friends[2] = 'Jay';
logger(friends)

const jonas = ['Jonas', 'Schmedtmann', 2037 - 1991, 'teacher', friends];
//log all array
logger(jonas);
//log the array friends in position 1 inside jonas array
logger(jonas[4][1]);


//Exercise
const calcage = (birthYear) => 2023 - birthYear;
const years = [1990,1991,1992,1993,1994]
const age1 = calcage(years[0])
const age2 = calcage(years[1])
const age3 = calcage(years[2])
const age4 = calcage(years[3])
const age5 = calcage(years[years.length - 1])
console.log(age1, age2, age3, age4, age5)

const ages = [calcage(years[0]), calcage(years[1]), calcage(years[2]), calcage(years[3]),
    calcage(years[years.length - 1])];
logger(ages);

