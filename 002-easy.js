// Functions

// Easy

console.log("\n------------1------------\n");
// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

const power = ( a, b ) => {
    let pow = 1;
    for(i = 0; i < b; i++){
        pow *= a;
    }
    return pow;
}
console.log(power(2,10))

console.log("\n------------2------------\n");
// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
 
 const areaOfHexagon = a => {
     const area = Math.sqrt(3)*3*a*a/2;
     return area;
 } 

 console.log("Area of your Hexu: ", areaOfHexagon(4));

console.log("\n------------3------------\n");
// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const noOfWords = str => {
    const [...arr] = str.split(' ');
    return arr.length;
}
console.log("This string contains :", noOfWords("We are neoGrammers"), "words.")

console.log("\n------------4------------\n");
// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)

const findMin = (...numbers) => {
    let min;
    min = numbers.reduce((previous, current) => previous < current ? previous : current);
    return min;
}
console.log("Minimum outta all: ", findMin(11,5,9,1));

console.log("\n------------5------------\n");
// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

const findMax = (...numbers) => {
    let max;
    max = numbers.reduce((previous, current) => previous > current ? previous : current);
    return max;
}
console.log("Maximum outta all: ", findMax(11,5,9,1));

console.log("\n------------6------------\n");
// Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle

const typeOfTriangle = ( a, b, c ) => {
    if( a+b+c !== 180 )
        return ("It's not a Triangle :(");
    else if( a === 60 && b === 60 )
        return ("It's an equilateral, as all things should be - Thanos");
    else if( a === b || b === c || c === a)
        return ("It's an isosceles, Socrates");
    return ("It's a scalen, Helen")
}

console.log(typeOfTriangle(60,60,60))