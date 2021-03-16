//Operators, Branching, Loops

//Intermidiate

console.log("\n------------1------------\n");
// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....
const fizzBuzz = arr => {
    if(arr%15 === 0)
        return("FizzBuzz");
    else if(arr%3 === 0)
        return("Fizz");
    else if(arr%5 === 0)
        return("Buzz");
    return arr;
}
for(i = 1; i<101; i++){
    console.log(fizzBuzz(i));
}


console.log("\n------------2------------\n");
// Print the following star pattern :-
// *
// * *
// * * *
// * * * *
// * * * * *

for(i=0; i<5; i++){
    let star = "";
    for(j=0; j<i; j++){
        star += "*"
    }
    console.log(star)
}

console.log("\n------------3------------\n");
// Write a program to take a number input from user and print multiplication table 12 times for that number.

const table = prompt("Enter the number whose table you still can't lear :p");

const tableOf = table => {
    for(i = 1; i<13; i++){
        console.log(`${table} * ${i} zaa ${table*i}`)
    }
}
tableOf(table)

console.log("\n------------4------------\n");
// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const a = 0, b = 1
let counter = 0;
const fib = ( previous, current, count ) => {
    if(counter === count)
        return current;
    counter++;
    fib(current, previous + current, count)
    console.log(current);
}

console.log(fib(a,b,8))

console.log("\n------------5------------\n");
// Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

console.log("\n------------6------------\n");
// Write a Program to take a number input from user and find if the number is Prime or not.

console.log("\n------------7------------\n");
// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.