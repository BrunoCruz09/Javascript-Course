// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const arrayOne = [17, 21, 23]
const arrayTwo = [12, 5, -5, 0, 4]
const printForecast = (arr) => {
    for (let i = 0; i < arr.length; i++){
        console.log(`${arr[i]}ºC in ${[i + 1]} days`)
    }
}

printForecast(arrayTwo)
console.log('-------------')
const temperature = [14,33,6,34,1,27,41];
const temp = (temp) =>{
    let maxValue = temp[0];
    let minValue = temp[0];
    /*return max value
    return Math.max.apply(null, temp)*/

    /*return min value
    return Math.min(...temp)*/
    for(let i = 0; i < temp.length; i++){
        const curTemp = temp[i]

        if(curTemp > maxValue) maxValue = curTemp
        if(curTemp < minValue) minValue = curTemp
    }
    return [maxValue, minValue]
}

console.log(temp(temperature))