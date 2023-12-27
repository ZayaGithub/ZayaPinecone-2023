console.log("Hi developers!")

let age = 30;
const name = "zaya";
let car = "car";

console.log(age);
console.log(name);
console.log(car);

age = "25";

console.log(age);

let number = 643;
number = 600;

let one = number/100;
let two = number/150;
let three = number/200;
console.log(one+two+three)

let number = 312;
if (number % 2 === 0) {
    console.log("tegsh");
} else {
    console.log("sondgoi");
}

let number = 11;

if (number % 2 !== 0 && number<10) {
    console.log("sondgoi 10aas baga");
}
if (number % 2 ===0 && number<10) {
    console.log("tegsh 10aas baga");
}
if (number % 2 ===0 && number>10) {
    console.log("tegsh 10aas ih");
}
if (number % 2 !== 0 && number>10) {
    console.log("sondgoi 10aas ih")
}

if (number % 2 !== 0 && number<10) {
    console.log("sondgoi 10aas baga");
} else if (number % 2 ===0 && number<10) {
    console.log("tegsh 10aas baga");
} else if (number % 2 ===0 && number>10) {
    console.log("tegsh 10aas ih");
} else if (number % 2 !== 0 && number>10) {
    console.log("sondgoi 10aas ih");
}



let day = 7;

if (day > 0 && day < 2) {
  console.log("davaa");
} else if (day > 1 && day < 3) {
  console.log("myagmar");
} else if (day > 2 && day < 4) {
  console.log("lhgvga");
} else if (day > 3 && day < 5) {
  console.log("purev");
} else if (day > 4 && day < 6) {
  console.log("baasan");
} else if (day > 5 && day < 7) {
  console.log("bymba");
} else if (day > 6 && day < 8) {
  console.log("nyam");
}

// 1. ugugdsyn toonii eyreg surgiig ol ?
let too = 1;
if (too > 0) {
  console.log("eyreg");
} else if (too < 0) {
  console.log("surug");
}

// 2. largest of three
let n1 = 23;
let n2 = 44;
let n3 = 12;

if (n1 < n2 && n3 < n1) {
  console.log("n3");
} else if (n1 < n3 < n2 && n3 < n1 < n2) {
  console.log("n2");
} else if (n3 < n2 < n1 && n2 < n3 < n1) {
  console.log("n1");
}

// 3. n1,n2,n3 gesen 3 hevisagchdad too onoono

// 4. tuhain 3 toonii hamgiin ihiig hrel

let weight = 58;
let height = 1.67;
let index = weight/height**2

if (index <= 18.5 ){
  console.log("jingiin dutagdaltai");
} else if (24.9 >= index && index >= 18.5) {
  console.log("eruul");
} else if (24.9 <= index && index <= 30) {
  console.log("iluudel jintei");
} else if (30 <= index) {
  console.log("het targalalttai");
}

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";

let person1 = "dondog"
let person2 = "naraa"
let person3 = "baldan"
let person4 = "galt"
let person5 = "goldon"
let person = "zaya"
let irsen;

switch (person) {
    case "dondog":
        irsen = "irsen";
        break;
    case "naraa":
        irsen = "irsen";
        break;
    case "baldan":
        irsen = "irsen";
        break;
    case "galt":
        irsen = "irsen";
        break;
    case "goldon":
        irsen = "irsen";
        break;
    default:
        irsen = "mani hun bish"
}
console.log(irsen);

let age = 18;
let message = age >= 18 ? "ta nasand hursen bna" : "ta huuhdeeree bna";
console.log(message);

bodlogo-2
let a = 8;
let b = 16;
let c = 3;
let d = 80;

if (a<b && a<c && a<d) {
    console.log(a)
} else if (b<a && b<c && b<d) {
    console.log(b)
} else if (c<a && c<b && c<d) {
    console.log(c)
} else if (d<a && d<b && d<c) {
    console.log(d)
}

bodlogo-1

let year = 1990;
let highYear;

switch (year) {
    case "1900"
}

bodlogo-3

let aTeam = (96+108+89)/3;
let bTeam = (88+1+2)/3;

if (aTeam > bTeam) {
    console.log("aTeam win");
} else if (bTeam > aTeam) {
    console.log("bTeam win");
} else if (aTeam < 100 && bTeam < 100) {
    console.log("yalagchgui");
}

