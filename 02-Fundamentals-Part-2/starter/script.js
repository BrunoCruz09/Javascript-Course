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

/**
 * LECTURE Introducing array


const populations = [10, 1441, 100, 305];

populations.length === 4 ? logger(true) : logger(false);

function percentageOfWorld1(population) {
    return (population / 7900) * 100 + '%';
}

const percentages = [percentageOfWorld1([0]),
    percentageOfWorld1([1]),
    percentageOfWorld1([2]),
    percentageOfWorld1([3])];
logger(percentages);
*/
//-----------------------------------------------------------------------------
/**
 * Basic array operations (Methods)

const friends = ['Jonas', 'Peter', 'Steve'];

//Add new element the end of the array and return the new length of the array
const newLength = friends.push('Jay');
logger(friends);
logger(newLength);

//Add new element the beginning of the array and return the new length of the array
const newLength1 = friends.unshift('John');
logger(friends);
logger(newLength1);

//Remove last element of the array and return the element removed
const popped = friends.pop()
logger(friends)
logger(popped)

//Remove first element of the array and return the element removed
const shift = friends.shift();
logger(friends)
logger(shift)

//Return the index, if not found return -1
logger(friends.indexOf('Peter'))
logger(friends.indexOf('Bob'))

//Return true if value is in the array and false if value is not in the array
logger(friends.includes('Peter'))
logger(friends.includes('Bob'))
//we can use includes in conditions
friends.includes('Peter') ? logger(true) : logger(false)

//LECTURE: Basic array operations
const neighbours = ['Spain', 'France', 'Italy']
neighbours.push('Utopia')
logger(neighbours)

neighbours.pop()
logger(neighbours)

!neighbours.includes('Germany') ? logger('Probably not a central Europe country :D') : logger()

neighbours[neighbours.indexOf('France')] = 'Germany'
logger(neighbours)
 */
//-----------------------------------------------------------------------------
/**
 * Introducing Objects

const personInformation = {
    firstName: "Jonas",
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
}

//dot notation
logger(personInformation.lastName)
logger(personInformation['age'])

//brackets notation
const nameKey = 'Name'
logger(personInformation['first' + nameKey])
logger(personInformation['last' + nameKey])

const interestedIn = prompt('What do you want to know about Jonas? Chose between firsName, lastname, age, job and friends');
if (personInformation[interestedIn]){
    logger(personInformation[interestedIn])
} else {
    logger('Wrong request')
}

personInformation.location = 'Portugal'
personInformation['twitter'] = '@jonasschmedtman'
logger(personInformation)

//CHALLENGE
// "Jonas has 3 friends and his best friend is called Michael"

//dot notation
logger(personInformation.firstName +' has '+ personInformation.friends.length
+' friends and his best friend is called '+ personInformation.friends[0] +'.')

//bracket notations
// "Jonas have 46 years old and live in Portugal"
logger(`${personInformation['firstName']} have ${personInformation['age']} years old and live in ${personInformation['location']}.`)


//Lecture: Introducing Objects
const myCountry = {
    county: 'Portugal',
    capital: 'Lisboa',
    language: 'Portugues',
    population: 10,
    neighbours: ['Espanha', 'França', 'Itália']
}
logger(myCountry.county)
logger(myCountry.neighbours)
logger(myCountry.neighbours[1])
logger(myCountry['population'])
logger(myCountry['neighbours'][0])


//Lecture: Dot vs. Bracket Notation
//Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.
logger(`${myCountry.county} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)
logger(myCountry.population = myCountry.population + 2)
logger(myCountry)
 */
//-----------------------------------------------------------------------------
/**
 * Object Methods
 */
/*
const personInformation = {
    firstName: "Jonas",
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends : ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //function inside object
   /!* calcAge: function (birthYear) {
        return 2037 - birthYear
    }*!/
    /!*calcAge: function () {
        // logger(this)
        return 2037 - this.birthYear
    }*!/

    calcAge: function () {
        this.age = this.age = 2037 - this.birthYear
        return this.age
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.age}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
}
logger(personInformation.calcAge())
logger(personInformation.age)
logger(personInformation.age)
logger(personInformation.age)

//CHALLENGE
logger(personInformation.getSummary())*/

/**
 * Lecture Object Method


const myCountry = {
    county: 'Portugal',
    capital: 'Lisboa',
    language: 'Portugues',
    population: 10,
    neighbours: ['Espanha', 'França', 'Itália'],

    //Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.
    describe: function (){
        return `${this.county} has ${this.population} million ${this.language} speaking people ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`
    },

    checkIsland: function (){
        this.isIsland = this.isIsland = this.neighbours.length <= 0
        return this.isIsland
    }
}

logger(myCountry.describe())
logger(myCountry.checkIsland())
 */
//-----------------------------------------------------------------------------