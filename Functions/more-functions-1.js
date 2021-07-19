// 1. Write a function in JavaScript that converts weights to grams. The function should take two arguments. The first argument will be a number, the second will be an abbreviation for a unit of weight, either "lbs", "oz", "kg", "g", or "mg". Based on the second argument, convert the number to grams and return it.

const convertToGrams = (weight, units) => {
    let grams
    switch(units) {
        case 'lbs':
           grams = weight * 454
            break
        case 'oz':
            grams = weight * 454 / 16
            break
        case 'kg':
            grams = weight * 1000
            break
        case 'g':
            grams = weight
        case 'mg':
            grams = weight / 1000
        default:
            grams = 'please enter units of "lbs", "oz", "kg", "g", or "mg"'
    }
    return grams
}
 const coffeeWeight = convertToGrams(1, 'lbs')
console.log(coffeeWeight)
const smallBagOfCoffeeWeight = convertToGrams(1, 'Nt')
console.log(smallBagOfCoffeeWeight)
const waterInCup = convertToGrams(12, 'oz')
console.log(waterInCup)

// 2.Write a function in JavaScript that takes a number and finds the sum of all unique positive factors of a number. (The factors of a number are all numbers that divide evenly into it. For example, the unique positive factors of 12 are 1, 2, 3, 4, 6, and 12, and the sum would thus be 28.)

const factor = function (number) {
    let sum = 0
    for (let i = 1; i <= number; i++){
        if (number % i === 0) {
          sum = sum + i
        }
    }

    return sum
}
console.log(factor(13))
// const fatArrowFactor = number => {}) -- does same thing as above used to declare function.


