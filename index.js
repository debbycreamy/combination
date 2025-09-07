
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






