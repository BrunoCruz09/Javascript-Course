'use strict';
//Functions Logger
const log = (message) => console.log(message);

/**
 * Challenge One

const calcAverage = (scoreOne, scoreTwo, scoreThree) => `${(scoreOne + scoreTwo + scoreThree) / 3}`;

const averageDolphins = calcAverage(1,1,1);
const averagekoalas = calcAverage(1,1,1);

const checkWinner = (avgDolphins, avgkoalas) => {
    avgDolphins >= 2 * avgkoalas ? log(`Dolphins win (${avgDolphins} vs. ${avgkoalas})`) :
        avgkoalas >= 2 * avgDolphins ? log(`koalas win (${avgkoalas} vs. ${avgDolphins})`) :
            log('No team wins...');
}
checkWinner(averageDolphins, averagekoalas)
*/
//-----------------------------------------------------------------------------
/**
 * Challenge Two

const calcTip = (bill) => {
    const tip = bill >= 50 && bill <= 300 ? 15/100 : 20/100
    return bill >= 50 && bill <= 300 ? bill * tip : bill * tip
}
logger(calcTip(100))

const bills = [125, 555, 44]
calcTip(bills[0])
calcTip(bills[1])
calcTip(bills[2])

const tips = []
tips.push(calcTip(bills[0]))
tips.push(calcTip(bills[1]))
tips.push(calcTip(bills[2]))
logger(tips)

const total = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]]
logger(total)
 */
//-----------------------------------------------------------------------------
/**
 * Challenge Three

const markInformation = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function (){
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const johnInformation = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

markInformation.calcBMI()
johnInformation.calcBMI()

if (markInformation.bmi > johnInformation.bmi){
    logger(`${markInformation.fullName} BMI (${markInformation.bmi}) is higher than ${johnInformation.fullName} )${johnInformation.bmi})`)
}else {
    logger(`${johnInformation.fullName} BMI ${johnInformation.bmi} is higher than ${markInformation.fullName} ${markInformation.bmi}`)
}
 */