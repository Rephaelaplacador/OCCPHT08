console.log("Hello PHT08!");

// // Single line comment

// /* 
//   Multi Line
//   Comment  
// */

// //Ways on declaring variables
// let UPPERCASE = "THIS IS AN UPPERCASE";
// const lowercase = "lowercase";
// var name = "Tristan";

// console.log(UPPERCASE);
// console.log(lowercase);

// UPPERCASE = "Change";

// console.log(UPPERCASE);
// console.log(name);

//Basic Syntax
let name = "Emmanuel";
const age = 21;
let isStudent = true;

console.log("My name is", name);
console.log("Age:" + age);
console.log("Is", name, "a student?", isStudent);

let addA = 5;
let addB = 10;
const sum = addA + addB;
console.log("The sum of", addA, "+", addB, "=", sum);

let diffA = 5;
let diffB = 10;
const difference = diffA - diffB;
console.log("The difference of", diffA, "-", diffB, "=", difference);

let productA = 5;
let productB = 10;
const product = productA * productB;
console.log("The product of", productA, "*", productB, "=", product);

let quotientA = 15;
let quotientB = 3;
const quotient = quotientA / quotientB;
console.log("The quotient of", quotientA, "/", quotientB, "=", quotient);

//Data Types
/*
 Primitive Data Types
  -> Number 5, 3.14, 10, -20 ...
  -> String - "Hello", 'That\'ll'
  -> Boolean - true, false, 0, 1
  -> Undefined - ""
  -> Null - intentional absence of any object value
  -> Symbol - unique identifier that is often used as a property key in objects
*/

let dataNum = -20;
let dataString = "Keyboard";
let dataBool = true;
let dataUndefined;
let car = null;
console.log("Data type of", dataNum, "as:", typeof(dataNum));
console.log("Data type of '" + dataString + "' is:", typeof(dataString))
console.log("Data type of '" + dataBool + "' is:", typeof(dataBool))
console.log("Data type of '" + dataUndefined + "' is:", typeof(dataUndefined))
console.log("Data type of '" + car + "' is:", typeof car)

//JavaScript Operators
/*
    Arithmetic Operators: +, -, *, /, %
    - 11 % 2 = 1 (odd)
    - 20 % 2 = 0 (even)
    Assignment Operator: =, +=, -=, /=, %=
    - sum = addA + addB
    - addA += addB
    - sum += addA
    - diff -= addA
    - product *= addA
    - quotient /= addA
    - let mod = 11, %= 2 (result = 1)
    Comparison Operators: compare value and return (true or false)
    - 5 == 5 (true), 5 != 4(true), >, <, >=, <=,
    - 5> 4, 10<20, 15 >= 15, 1<= 3
    Bitwise Operators: Perform bitwise operations on numeric operands.
    - & (AND), | (OR), ^ (XOR), ~ (NOT)
    Umary Operators: Performs on a single operand 
    - +, -, ++, --, !
    - let a = 1, a++ (2), a-- (1)
    - let databool = true, console.log (!databool)
    Ternary Operator: A conditonal operator that takes three operands and returns a valuie based on a condition.
    - condition ? expression1: expression2
    - let a = 3, b = 5;
        console.log((a > b) ? a + " is greater than " + b : b + " is greater than " + a);
    Typeof operator: returns the data typoe of the an operand as a string
    - typeof(3): number
        console.log (typeof(3));
*/

// == Javascript Expresion ===
// Artithmetc Expression
// String Expressions
// Logical Expressions 
// Assignment Expressions
//Function Call Expression

let sunny = true;
let cold = false;

console.log ("Sunny && Cold", sunny && cold);
console.log ("Sunny && Cold", sunny || cold);
console.log ("!cold", !cold)

let a = 20;
let b = 10;

a += b;
console.log("a:", a);

a-= b;
console.log ("a:", a);

a*= b;
console.log("a:", a)

a /= b;
console.log("a:", a);

function myfunction(num1, num2) {
    console.log(num1 + num2);
}

myfunction(25, 15);

//Control Structures and Loops
// if statement
let power = 24;
if(power >= 18){
    console.log("You are powerful!");
} else {
    console.log ("You are weak!");
}

// if - else if - else statement
let temperature = 19;
if(temperature < 0){
    console.log("It's below freezing point!");
} else if(temperature >= 0 && temperature < 20){
    console.log("It's cool outside...");
} else if(temperature >= 20 && temperatire < 40){
    console.log("It's a warm weather");
} else {
    console.log("It's Super Hot!");
}

//Switch Statement
let day = "Tuesday";

switch (day) {
    case 'Monday':
        console.log("It's the start of the week.");
        break;
    case 'Tuesday':
        console.log("It's the second day of the week.");
        break;
    case 'Wednesday':
        console.log("It's the third day of the week.");
        break;
    case 'Thursday':
        console.log("It's the fourth day of the week.");
        break;
    case 'Friday':
        console.log("Yipee! It's friday!");
        break;
    default:
        console.log("There is no value");
}

// Loops: for loop

for(let i = 0; i < 4; i ++){ // 0, 1, 2, 3, 4, 5, 6
    console.log("Count:", i)
}

// Loop: while loop

let count = 1;

while (count <= 5){
    console.log ("Count:", count);
    count++;
}

// loop: do-while loops
let i = 1;

do {
    console.log("Do-While Count:", i);
    i++;
} while (i <= 5)

//Arrays
let fruits = ['apple', 'bayabas', 'pineapple', 'mango', 'pomelo', 'grapes'];

console.log("first fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);
console.log("Original Array:", fruits);

//Modifying array elements
fruits[1] = 'Star Apple';
fruits.pop();
fruits.push('Strawberry');

console.log("Modified Array:", fruits);

console.log("first fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);

for(let i = 0; i < fruits.length; i++){
    console.log("Fruit " + i + ":", fruits[i]);
}

let colors = ['purle', 'cyan', 'yellow', 'magenda', 'blue', 'fuschia'];

colors.forEach (function(color){
    console.log(color);
})

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//Arrays Methods
console.log("Array Length:", numbers.length);
console.log("Index of fuschia:", numbers.indexOf(8));
console.log("Includes 5:", numbers.includes(9));
console.log("Includes 5:", numbers.includes(5));
console.log("Joined Array", numbers.join(" "));
console.log("Sliced Array:", numbers.slice(5,7))

let removedElements = numbers.splice(1, 4);
console.log("Removed elements:", removedElements);
console.log("Updated Array:", numbers);

//Object Literals

const person = {
    firstName: 'Tristan',
    lastName: 'Pogi',
    age: 21,
    hobbies: ['reading', 'playing', 'jumping'],

    greet: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}. Nice to meet you!`);
    },
};

console.log(person.firstName);
console.log(person.age);

person.greet();

person.nationality = "Filipino";
console.log(person.nationality);

person.introduce = function () {
    console.log(`My hobbies are ${this.hobbies.join(", ")}.`)
}
person.introduce();
const address = {
    street: "123 Street",
    city: "456 city",
    country: "Philippines"
};
person.address = address;
console.log(person.address.country);
console.log(person);