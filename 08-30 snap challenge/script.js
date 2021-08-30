// 1. In pseudocode, write a function that takes an array of numbers, and returns another array that counts the number of times each number appears in the array.
//
//    2. In pseudocode, write a function that takes two integers. For each integer in between those two numbers (inclusive), output 'fizz' if the number is even, 'buzz' if the number is divisible by 3, and 'baz' without 'fizz' or 'buzz' if the number is divisible by both. Otherwise, output the number.

// Pseudocode
// - Write a function that accepts an array an item to find in that array.
// Create avarible for a counter.
// flatten the array and loop through the array.
// everytime the item is found in the array increment the counter.
// Return the counter.
const myArray = [3,7,2,3,3,2,1,7,3]
// loop through the array
function countMatchingArrayElements (arrayofNumbers) {
    let anotherArray = []
    arrayofNumbers.forEach(element=>{
        anotherArray[element]  = anotherArray[element] ? anotherArray[element]+1 : 1
    })

    return anotherArray
}
console.log(countMatchingArrayElements(myArray))

// 2. Create a function using for loop
// use else if for the conditions
// if even diplay FIZZ
// else if display buzz if divided by 3
// else if display baz if divided by both 3 and 5

let i;
for (i=30; i<=70; i++) {
    if (i%2 == 0)
        console.log("fizz");
            else if (i%3 == 0)
        console.log("buzz");
            else if(i%6==0)
                console.log("baz");
    else // print the number
        console.log(i);
}
//another way
function fizzBuzzBaz(number1, number2) {
    const smallerNumber = number1 < number2 ? number1 : number2
    const largeNumber = number1 < number2 ? number2 : number1
    for (let counter = smallerNumber; counter <= largeNumber; counter++)
    if(!(counter%6)) {
        console.log('baz')
    } else if (!(counter%3)) {
        console.log('buzz')
    } else if (counter%2==0) {
        console.log('fizz')
    }else{
        console.log(counter)
    }
}
fizzBuzzBaz('27', '3');