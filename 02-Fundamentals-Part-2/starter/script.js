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