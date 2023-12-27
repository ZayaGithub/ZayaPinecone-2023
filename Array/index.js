// const person = {
//     firstname: "naraa";
//     lastname: "erdene"
//     printFillname: function () {
//         // console.log(this.firstname+" "+this.lastname)
//         console.log(this)
//     }
// }
// person.printFillname();

// let person1 = {
//     firstname: "Naranbayar"
// }
// let person2 = person1;
// person2.firstname = "Erdene";
// console.log(person1.firstname);
// console.log(person2.firstname);

// person2 = {...person1}
// person2.firstname = "erdene"

// let students = [
//   {
//     name: "sambuu",
//     bOy: 1990,
//     hobby: "horse",
//     single: true,
//   },
//   {
//     name: "zaya",
//     bOy: 2005,
//     hobby: "tennis",
//     single: false,
//   },
//   {
//     name: "tuya",
//     bOy: 2009,
//     hobby: "dance",
//     single: true,
//   },
//   {
//     name: "solongo",
//     bOy: 1970,
//     hobby: "food",
//     single: true,
//   },
//   {
//     name: "bayar",
//     bOy: 1989,
//     hobby: "animals";
//     single: false,
//   },
// ];
// //20-s doosh nasnihnig butsaah
// function oldStudents(student) {
//   for (i=0; i<students.length; i++) {
//     if (students[i].bOy>=2004) {
//     console.log("20-s doosh"+students[i].bOy)
//     }
//   }
// }

// let old = students.every((students) => students.name);
// console.log(old);

// const animals = [
//   { type: "dog", sound: "woof" },
//   { type: "cow", sound: "moo" },
//   { type: "cat", sound: "meow" },
//  ];
//  function animalsound(animal) {
//   for (i = 0; i < animals.length; i++) {
//   if (animals[i].type === animal) {
//   console.log("The " + animal + " goes " + animals[i].sound);
//   }
//   }
//  }
//  let ask = prompt("Pick an animal, dog, cat, cow");
//  animalsound(ask);

//12.12
// const fruits1 = ["banana", "apple", "orange", "mango"];
// console.log(fruits1.includes("banana")); //boolen

// const fruits2 = ["banana", "apple", "orange", "mango"];
// console.log(fruits2.toString()); // banana,apple,orange,mango

// const fruits3 = ["banana", "apple", "orange", "mango"];
// console.log(fruits3.join(" and ")); //banana and apple and orange and mango

// const fruits4 = ["banana", "apple", "orange", "mango"];
// console.log(fruits4.indexOf("mango")); //3 dah index deer bgag zaana

// const fruits5 = ["banana", "apple", "orange", "mango"];
// const findIndex = (fruit) => {
// for (i = 0; i<fruits5.length; i++) {
//   if(fruits5[i]==fruit) {
//     console.log(i);
//   }
// }
//   let i = 0;
//   while (i < fruits5.length) {
//     if (fruits5[i] == fruit) {
//       console.log(i);
//     }
//     if (fruits5[i] == fruit) {
//       console.log(i);
//     }
//   }
// };
// x;
// findIndex("apple");

// const fruits6 = ["banana", "apple", "orange", "mango"];
// function ToJoin(joiner, array) {
//   str = array[0];
//   for (i = 1; i < fruits6.length; i++) {
//     str += joiner + array[i];
//   }
//   return str;
// }
// console.log(ToJoin(" and ", fruits6));

// let sum = "";
// let and = " and ";
// const Tojoin = (a, b) => {
//   for (i = 0; i < a.length - 1; i++) {
//     sum += a[i] + b;
//   }
//   sum1 = sum + a[a.length - 1];
//   return sum1;
// };
// let result = Tojoin(fruits6, and);
// console.log(result);

// const arr = [1, 2, 3, 4];   //[1, 2, 3, 4, num] garaas ugsun num
// let num = 5;
// let arr2 = [];
// function plus(num) {
//   for (i = 0; i < arr.length; i++) {
//     arr2[i] = arr[i+(num)];
//   }
//   return arr2;
// }
// plus(num);
// console.log(arr2);

//[1, 2, 3,] suulin orong arilgah

// const remove = (arr) => {
//   for (i = 0; i < arr.length-1; i++) {
//     str = arr[i];
//   }
//   return str;
// }
// console.log(arr);

// const arr = [2, 3, 5, 8, 9];
// const target = 9;

// // for (let i = 0; i < arr.length; i++)
// // for (let j = arr.length-1; j >= 0; i--) {

// // }
// let arr2 = [];

// // Example Object (Values ashiglahgui)
// const numbersObject = { a: 5, b: 10, c: 3 }; //niilber 18
// // Write a function to calculate the sum of all values in the object.
// // const keys = Object.values(numbersObject);
// // console.log(keys);

// const keys = Object.keys(numbersObject);
// console.log(keys);
// let sum = 0;

// for (let i = 0; i<keys.length; i++) {
//     sum += numbersObject[keys[i]];
// }
// console.log(sum);

// Example Object
// const stringObject = { name: 'john', age: 25, city: 'example' };
// // Problem
// // Write a function to capitalize the first letter of each property value.
// const capitalizLetter = (text) => {
//     return text.slice(0, 1).toUpperCase() + text.slice(1);
//     };

//     const capitalizLetterInObject = (obj) => {
//     const keys = Object.keys(obj);

//     for (let i = 0; i < keys.length; i++) {
//     if (typeof obj[keys[i]] === "string") {
//     obj[keys[i]] = capitalizLetter(obj[keys[i]]);
//      }
//      }
//     return obj;
//     };
//     console.log(capitalizLetterInObject(stringObject));

// valuegiin utgiig daraginhar soli

const mockObject = {
  key1: "value1",
  key2: 42,
  key3: ["item1", "item2"],
  key4: { nestedKey: "nestedValue" },
  key5: true,
  key6: null,
};

// function newKeys(Obj) {
//   const value = Object.values(mockObject);
//   //   let value = [key1, key2.key3, key4, key5, key6];
//   console.log(value);
//   let a = value[0];
//   for (let i = 0; i < value.length; i++) {
//     value[i] = value[i + 1];
//     if (value.length - 1 == i) {
//       value[value.length - 1] = a;
//     }
//   }
//   return value;
// }
// console.log(newKeys(mockObject));

// const newKeys = ()=>{
//     const value = Object.values(mockObject);

//   console.log(value);
//   let a = value[0];
//   for (let i = 0; i < value.length; i++) {
//     value[i] = value[i + 1];
//     if (value.length - 1 == i) {
//       value[value.length - 1] = a;
//     }
//   }
//   return value;
// }
// console.log(newKeys(mockObject));

