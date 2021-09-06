// 1.In pseudocode, write a function that takes a string and returns it with all vowels (not including y) removed.
//   2.  In pseudocode, write a function that takes an array of numbers and returns the greatest number in the array.
//    3. In pseudocode, write a function that computes the first 100 numbers in the Fibonacci sequence. The Fibonacci sequence is created by adding the two previous numbers in the sequence together, and starts 0, 1, 1, 2, 3, 5, 8, ...

let str = "write a function that takes a string and returns it with all vowels (not including y) removed";
function removeVowelFromString(str)
{
    let vowel = [ 'a', 'e', 'i', 'o', 'u'];
    let result = "";

    for(let i = 0; i < str.length; i++)
    {
// if our current array is not in string include it.
        if (!vowel.includes(str[i]))
        {
            result += str[i];
        }
    }
    return result;
}
console.log(removeVowelFromString(str));

// 2
let array = [1, 141, 23, 10, 9, 92];
function greatestNumber(array){
    let result = 0;
    for (let i = 0; i < array.length; i++){
        if (array[i] >= result){
            result = array[i];
        }
    }
    return result;
}
console.log(greatestNumber(array));


//.3

function fibonacci(n=0, m=1, length=100, sequence=[0,1]) {
    // console.log(n,m,length,sequence)
    sequence.push(n+m)
    if (sequence.length < length) {
        fibonacci(sequence[sequence.length-2], sequence[sequence.length-1], length,sequence)
    }
    return sequence
}

//function call
console.log(fibonacci());

