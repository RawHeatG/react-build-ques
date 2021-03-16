//Operators, Branching, Loops

//Easy

console.log("\n------------1------------\n");

//Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

let arr5 = [5,13,7,21,48];
const sum = (a,b) => (a+b);
const ans1 = arr5.reduce(sum);
console.log("Sum of the array is: ",ans1);

console.log("\n------------2------------\n");

//Write a program to take a number input from user and determine whether the number is odd or even.

const num = prompt("Hey there, can you give me a number?");
if(num % 2)
    console.log("That's odd...");
else console.log("That's even, as all things should be");

console.log("\n------------3------------\n");

//Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const num1=129, num2=251;
const minMax = (a,b) => {
    console.log("Max is", a+b);
    if(b>a)
        console.log("Minimum is", a-b);
    else console.log("Minimum is", b-a);
    }
minMax(num1,num2);

console.log("\n------------4------------\n");

//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const findMax = (a,b,c) => {
    let max = a;
    if(max < b) max = b;
    if(max < c) max = c;
    console.log("Maximum is: ", max);
}
const num4_1=8,num4_2=23,num4_3=17;
findMax( num4_1, num4_2, num4_3);


console.log("\n------------5------------\n");

//Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const findMin = (a,b,c) => {
    let min = a;
    if(min > b) min = b;
    if(min > c) min = c;
    console.log("Minimum is: ", min);
}
const num5_1=35,num5_2=29,num5_3=46;
findMin(num5_1,num5_2,num5_3);

console.log("\n------------6------------\n");

//Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const month = propmt("Please enter the first 3 letters of the month");
const checkDays = month =>{
    if( month === "jan" || month === "mar" || month === "may" || month === "jul" || month === "aug" || month === "oct" || month === "dec"){
        return true;
    }
    return false;
}
if(checkDays(month))
    console.log("Yes, "+ month + " have 31 days");
else
    console.log("No, "+ month + " doesn't have 31 days");