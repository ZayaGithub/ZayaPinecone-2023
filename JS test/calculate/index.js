// 1. prompt -> ner avah teriih console.log hevleh
// 2. Number1, number2 hoorondoo (toonii mashin -> urjih nemeh hasah huvaah)

// function myFirstFunction () {
//     console.log("Hello my first")
// }
// myFirstFunction();
// function greet (zaya) {
//     console.log("Hello"+zaya+":)");
// }
// let input = prompt("Enter a name:");
// greet(input);

const n1 = window.prompt("first number");
const n2 = window.prompt("second number");
const result = window.prompt("\n1. +\n2. -\n3. *\n4. /");

// neriin avaad hevleh
function calculator(n1, n2) {
    if (result === "1") {
        console.log(Number(n1)+Number(n2));
    } else if(result === "2") {
        console.log(n1-n2);
    } else if(result === "3") {
        console.log(Number(n1)*Number(n2));
    } else if(result === "4") {
        console.log(n1/n2);
    }
}
calculator(n1, n2);

// function presentName() {
//     console.log("hi", name);
// }
// presentName("hi", name);

// hello -> olleh
