
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