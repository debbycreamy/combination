
// let age = 50;
// let country = "nigeria";
// country = "ghana";

// age >= 30;
// if (age > 18) {
//   console.log("You are allowed to vote.");
// }  if (age < 18) {
//   console.log("You are not allowed to vote.");
// } else {
//   console.log("You are not allowed to vote.");
// }

// let score = 75
// if (score >= 70) {
//   console.log("A");
// } else if (score >= 60) {
//   console.log("B");
// } else if (score >= 50) {
//   console.log("C");
// } else if (score >= 40) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// switch (true){
//     case score >= 70:
//         console.log("A");
//         break;
//     case score >= 60:
//         console.log("B");
//         break;
//     case score >= 50:
//         console.log("C");
//         break;
//     case score >= 40:
//         console.log("D");
//         break;
//     default:
//         console.log("F");
// }

// // functiin expression
// const add = function (a, b) {
//   return a + b;
// };

// // arrow function
// const multiply = (a, b) => {
//     return a * b
// }

// // globe scope
// let x = "Hello, world!";

// function greet() {
//   // local scope
//   let y = "Hello, function!";
//   console.log(x); // Accessible
//   console.log(y); // Accessible
// }
// // array
// // const subject = ["maths", "english", "bio"];
// const subject =["a","b","c","d","e"]
// subject[0] = "agric";
// // changes the value of maths to agric cos its javascript
// console.log(subject);
// subject.push("econs")
// subject.pop()
// subject.shift()
// subject.unshift("commerce")

// console.log(subject)

// // slice
// let calling = subject.splice(1,2);
// console.log(calling)
// console.log(subject)

// // iterating through an array
// const nums = [1,2,3,4,5];

// // for (let i=0; i < nums.length; i++){
// //     console.log (nums(i));
// // }

// nums.forEach ((n) => {
//     console.log(n*3);
// });

// // const double = nums.map((n) => n * 3)
// // console.log(double)

// const evenNumber = nums.filter((n) => n % 2 === 0)
// console.log(evenNumber); 2,4

// // objects{}
// const student ={

//     name: "ada",
//     age: 30,
//     score:{
//         maths: 90,
//         english: 58,
//     }
// }
// student.country = "Nigeria";
// student.age =31
// delete student.score.english;

// console.log(Object.values(student));






// new class
const car = new Set(["1", "2", "3", "4", "5"]);
car.add("6");
car.add("1"); 
console.log(car); 
  
const nums = [1,2,3,4,5];
const squares = nums.map(n => n * n);
console.log(squares);

// const digits =[10, 20,30,40,50];


const evenSquares = squares.filter(n => n % 2 === 0);
console.log(evenSquares);

let person = {
    name: "john",
    lastName: "peter",
    age: 25,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

let book ={
  tittle: "to kill a cat",
  author: "deborah",
  year: 1990, 
}

nums.push("hobby")
person.age=40
delete person.lastName;
console.log(person);
console.log(nums);

console.log(book.tittle);
console.log(book.year);

// classwork 2
// number 7
const fruits = ["mango", "orange", "banana"];
console.log(fruits);
fruits.push("watermelon")
console.log(fruits);
fruits.pop()
fruits.unshift("apple");
console.log(fruits);
fruits.shift()
console.log(fruits);

// number 8
let student = {
  name: "john",
  age: 30,
  grade: 90,
};
console.log(student.name);

// number 6

// global variable 
let x = 10;

function testScope() {
  // Local variable
  let x = 20;
  console.log("Inside the function, x =", x);
}

testScope();
// without calling the function it will log the global variable alone REMEMBER
console.log("Outside the function, x =", x);

// number 5 
function addNumbers(a, b) {
  return a + b;
}
// document.getElementById("calculateSumBtn").addEventListener("click", () => {
//   const firstNumber = parseFloat(document.getElementById("firstNumber").value);
//   const secondNumber = parseFloat(document.getElementById("secondNumber").value);
//   const resultMessage = document.getElementById("resultMessage");

//   if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     resultMessage.textContent = "Please enter valid numbers.";
//     return;
//   }

//   const sum = firstNumber + secondNumber;
//   resultMessage.textContent = `The sum of ${firstNumber} and ${secondNumber} is ${sum}.`;
// });





let sum = addNumbers(10, 10);
console.log("Sum:", sum);

const num1 = parseInt(prompt("Enter first number:"));
const num2 = parseInt(prompt("Enter second number:"));
const result = addNumbers(num1, num2);
alert("the sum of the two numbers is:" + result);

// number 4
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Ada"));

const greetArrow = (name) => {
  return "Hello, " + name ;
};
console.log(greetArrow("debbie"));

const greetExpr = function(name) {
  return "Hello, " + name ;
};
console.log(greetExpr("creamy"));

// number 3
for (let p = 1; p <=10; p++){
  console.log(p);
}
for (let p = 1; p <= 10; p++){
  if (p % 2 === 0) 
    console.log(p);
  }

  // number 1
  
  

 // Ask the user for their first name and last name
const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

// (a) Using Concatenation

const fullNameConcat = "Your full name is: " + firstName + " " + lastName;
console.log(fullNameConcat);

// (b) Using Template Literals
const fullNameTemplate = `Your full name is: ${firstName} ${lastName}`;
console.log(fullNameTemplate);
  

