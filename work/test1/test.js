let a = 5;
let b = 10; 

let res = a + b;

console.log('The sum of two numbers is:'+ res);

console.log('=========================Basics ===================')

/*
lets explore the variables 
there are three variables type declaration let, const ,var
*/


const myvar = 'TAMAL'; 
console.log(myvar); 
//myvar = 24; Not allowed as const can not be changed 

console.debug(typeof myvar);
let year; 
console.debug(year);
console.debug(typeof year);

year = 1995;
console.debug(year);
console.debug(typeof year);

var oldVar = 15; // var is equivalent to let but not being used anymore
console.debug(oldVar); 
oldVar = 'Hello'; 
console.debug(oldVar); 

console.log('=========================Operators ===================')
//operators 

let num = 7; 
console.log(num); 

num++; 
console.log(num); 


let x = 5;
let y = 6; 

console.log('is x is greater than y ? '+x > y); 
console.log('x to the power of y is :'+x**y);
console.log('is x*y is equal to y*x?', x*y == y*x ); // this exmple shows the comparison operator has lower precedence than multiplication

// template leterals 
console.log('======================Templates Leterals  ===================')

let myName = 'Tamal';
const currYear = 2022; 
let birthYear = 1985;
let job = 'engineer'; 

let describeMe = `Hello , I am ${myName} of age ${currYear - birthYear} and I am an ${job}`;

console.log(describeMe);

// control statement 
console.log('====================Control statements ===================')

const legalAgeOfDriving = 18; 
let yourAge = 14; 

console.log('Are you allowed to Drive?'); 

if (yourAge >= legalAgeOfDriving) {
    console.log('Yes ! I am allowed to drive'); 
} else {
    console.log(`No, however I will be allowed in ${legalAgeOfDriving - yourAge} years `);
}

// Type conversion and type coercion 

console.log('====================type conversion ======================')

//string to number 
let aNumber = "25"; 
console.log(typeof aNumber, aNumber); 
console.log(typeof Number(aNumber), Number(aNumber)); 


console.log('====================type coercion ======================')
console.log("1"+5);  // result is 15
let n = "1"+ 5 ; 
console.log(n - 1); //result is 14
console.log("11"+"32"- 45);

console.log("34"-"9");  //  res - 25 (implicit conversion to number)
console.log("34"+"9"); // res - 349  (implecit conversion to string)
// Java script performs the conversion based on the operaton is being used. it converts the other operand into suitable type 

// FALSY values 
console.log('===============FALSY values============================');
// FALSY values 
// JS retuns false for 5 values (0, NaN, '', undefined, null) 
// for other values JS always retuns true 
let age= 0 ; 
if(age) {
    console.log('More than a year old'); 
}else {
    console.log('Still a baby');
}

let ageNew ; 

if(ageNew) {
    console.log('More than a year old'); 
}else {
    console.log('Still a baby');
}

console.log("===========comparison operators i.e '==' and '===' in java script==================")
// comparison operator . there are two types of comparison operator in JS 
// normal comparison i.e == and strict comparison i.e ===

 age = "37" // age is string 
//example 1
if (age == 37) console.log('You are 37 years old');

//same example with different result 
if (age === 37) {
    console.log('You are 37 years old');
} else console.log('You are not 37 years old'); 
//The result is different because strict comparison returns false when type mismatches even both the values are same

// correct comparison should be 
if (Number(age) === 37) {
    console.log('You are 37 years old');
} else console.log('You are not 37 years old'); 

//conclusion :- we always should use === for comparison 
//function - understanding of function 

function printHelloWorld() {
    console.log('Hello World'); 
}

printHelloWorld();

//function which is returning value

function getSum(num1, num2) {
    return num1 + num2;
}

let sum = getSum(10, 15); 
console.log('Result of 10 + 15 is '+ sum); 

sum = getSum(25, 26); 
console.log('Result of 25 + 26 is '+sum);
