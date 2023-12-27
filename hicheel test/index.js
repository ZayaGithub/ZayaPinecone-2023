//1/25

const arr = [1, 2, 3, 4, 5, 6];
//ellementudig 2-t urjuulj shine array uusgeh
let arr2 = [];
function newArray() {
  for (i = 0; i < arr.length; i++) {
    arr2[i] = arr[i] * 2;
  }
  return arr2;
}
newArray();
console.log(newArray());

// const multifyArray = () => {
//     let newArey = [];
//     for (let i)
// }
//elementuudiih 2-t huvaagdahig tailbarl

const filterArray = (arr) => {
  let arr3 = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr3.push(arr[i]);
    }
  }
  return arr3;
};
// const filteredArray = filterArray(arr);
// console.log(filteredArray);

// console.log(arr.map((el,i)=>{return el*2}));
// const filteredArray = arr.map((el,i) => {
//     if (el%2 === 0) {
//         return el*2;
//     }
//     return el;
// });
// console.log(filterArray);

//tuhain nuhtsuld taarch bgaa array butsaadag
const filteredArray = arr.filter((el) => el % 2 === 0);
console.log(filteredArray);

const stringArray = ["bataa", "saraa", "dorj", "huygaa"];
console.log(
  stringArray.map((el) => el.slice(0, 1).toUpperCase() + el.slice(1))
);

//bodlogo

// Filter Even Numbers:
// input = [1, 2, 3, 4, 5];
// Output: [1, 3, 5];
// const even = input.filter((el) => el % 2 !== 0);
// console.log(even);

// // Square and Filter:
// input = [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]
// const square = input.map((el) => el ** 2);
// console.log(square);

// Uppercase Strings:
// input =  ['apple', 'banana', 'cherry']
// Output: ['APPLE', 'BANANA', 'CHERRY']
// const upper = input.map((el) => el.slice(0).toUpperCase());
// console.log(upper);

// Filter by Length:
// input = ['cat', 'dog', 'elephant', 'lion']
// Output: ['elephant', 'lion']
// console.log(input.filter((el) => el.length>=4));

// Extract Names:
// input = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];
// Output: ["Alice", "Bob", "Charlie"];
// console.log(input.map((el) => el.name));

// Filter by Type:
input = [1, "apple", true, 42, "banana"];
Output: ["apple", "banana"];
console.log(input.filter((el) => typeof el == "string"));