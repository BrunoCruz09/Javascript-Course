'use strict';

const temperature = [17, 21, 23]
const temperature2 = [12, 5, -5, 0, 4]

const printForecast = (arr) => {
    let str = ''
    for (let i = 0; i < arr.length; i++){
        str +=`${[arr[i]]}ºC in ${i + 1} days. `
    }
    console.log(str)
}
printForecast(temperature2)