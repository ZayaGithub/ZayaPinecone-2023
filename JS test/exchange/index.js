let value = window.prompt("end toon utga oruulna uu ?");
let currencyFrom = window.prompt(
  "end temdegt oruulna uu ? \n1. USD\n2 MNT\n3 CNY\n4 RUB"
);
let currencyTo = window.prompt("solih temdegt oruulna uu ?"); // rub

console.log(value, currencyTo);
 
// My

let currency1 = "usd" || "USD";
let currency2 = "mnt" || "MNT";
let currency3 = "cny" || "CNY";
let currency4 = "rub" || "RUB";

let usd = 3450;
let mnt = 1;
let cny = 380;
let rub = 38;

let usdMnt = value * usd * mnt;
let usdCny = value * usd * cny;
let usdRub = value * usd * rub;
let cnyMnt = value * cny * mnt;
let cnyRub = value * cny * rub;
let rubMnt = value * rub * mnt;
//
if (currencyFrom === "usd" && currencyTo === "mnt") {
  console.log(usdMnt * usd + "USD");
} else if (currencyFrom === "mnt" && currencyTo === "usd") {
  console.log(usdMnt * cny + "USD");
} else if (currencyFrom === "usd" && currencyTo === "cny") {
  console.log(usdCny * cny + "CNY");
} else if (currencyFrom === "cny" && currencyTo === "usd") {
  console.log(usdCny * usd + "USD");
} else if (currencyFrom === "usd" && currencyTo === "rub") {
  console.log(cnyRub * usd + "RUB");
} else if (currencyFrom === "rub" && currencyTo === "usd") {
  console.log(cnyRub * usd + "USD");
} else if (currencyFrom === "cny" && currencyTo === "mnt") {
  console.log(cnyMnt * cny + "CNY");
} else if (currencyFrom === "mnt" && currencyTo === "cny") {
  console.log(cnyMnt * mnt + "MNT");
} else if (currencyFrom === "cny" && currencyTo === "rub") {
  console.log(cnyRub * rub + "RUB");
} else if (currencyFrom === "rub" && currencyTo === "cny") {
  console.log(cnyRub * cny + "CNY");
} else if (currencyFrom === "rub" && currencyTo === "mnt") {
  console.log(rubMnt * rub + "MNT");
} else if (currencyFrom === "mnt" && currencyTo === "rub") {
  console.log(rubMnt * rub + "RUB");
}

// teahcer

switch (currencyFrom) {
    case "1":
        currencyFrom = 3450;
        break;
    case "2":
        currencyFrom = 1;
        break;
    case "3":
        currencyFrom = 480;
        break;
    case "4":
        currencyFrom = 38;
        break;
    default:
        console.log("Buruu orolt");
}
switch (currencyTo) {
    case "1":
        currencyTo = 3450;
        break;
    case "2":
        currencyTo = 1;
        break;
    case "3":
        currencyTo = 480;
        break;
    case "4":
        currencyTo = 38;
        break;
    default:
        console.log("Buruu orolt");
}
window.alert((currencyFrom*value)/currencyTo);