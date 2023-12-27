// Weding machine

let products = window.prompt(
  "avah zuilsee songono uu ? \n1. cola\n2 sprite\n3 alpinGold\n4 suu\n5 talh\n6 zairmag\n7 bohi\n8 arhi"
);
let money = window.prompt("mungu hiine uu ? \n1. 5000\n2. 10000\n3. 20000");

let moneyNeed = 500;
let hariult;
console.log(products, hariult);

switch (moneyNeed) {
  case "1":
    moneyNeed = 1200;
    break;
  case "2":
    moneyNeed = 1500;
    break;
  case "3":
    moneyNeed = 2000;
    break;
  case "4":
    moneyNeed = 2200;
    break;
  case "5":
    moneyNeed = 1000;
    break;
  case "6":
    moneyNeed = 500;
    break;
  case "7":
    moneyNeed = 150;
    break;
  case "8":
    moneyNeed = 15000;
    break;
}

switch (money) {
  case "1":
    money = 5000;
    break;
  case "2":
    money = 10000;
    break;
  case "3":
    money = 20000;
    break;
  default:
    console.log("buruu devgert bna!!!");
}
console.log(money - moneyNeed);

// function findchange(money, n1, n2, n3, n4, n6, n7) {
//   if (money>=n1) {
//     console.log()
//   }
// }
// if (money >= 10000) {
//   console.log(
//     "10000 devsgert:",
//     ~~(money / 10000),
//     "5000 devsgert:",
//     ~~((money - 10000) / 5000),
//     "1000 devsgert:",
//     ~~((money - 15000) / 1000),
//     "500 devsgert:",
//     ~~((money % 1000) / 500),
//     "100 devsgert:",
//     ~~(((money % 1000) - 500) / 100),
//     "50 devsgert:",
//     ~~(money % 100) / 50
//   );
// } else if (money < 10000) {
//   console.log(
//     "1000 devsgert:",
//     ~~(money / 1000),
//     "500 devsgert:",
//     ~~((money % 1000) / 500),
//     "100 devsgert:",
//     ~~(((money % 1000) - 500) / 100),
//     "50 devsgert:",
//     ~~(money % 100) / 50
//   );
// } else if (money <= 1000) {
//   console.log(
//     "1000 devsgert:",
//     ~~(money / 1000),
//     "500 devsgert:",
//     ~~((money % 1000) / 500),
//     "50 devsgert:",
//     ~~(money % 100) / 50
//   );
// }

let Amynga =  parseInt(money / 10000);
let Tmynga = parseInt((money - 10000) / 5000);
let mynga = parseInt((money - 15000) / 1000);
let Tzuu = parseInt((money % 1000) / 500);
let zuu = parseInt(((money % 1000) - 500) / 100);
let tavi = parseInt((money % 100) / 50);
console.log(Amynga, Tmynga, mynga, Tzuu, zuu, tavi);

function money (Amynga, Tmynga, mynga, Tzuu, zuu, tavi) {
  if (money>=Amynga) {
    console.log(("10000 dev:"+Amynga), ("5000 dev:"+Tmynga), ("1000 dev:"+mynga), ("500 dev:"+Tzuu), ("100 dev:"+zuu), ("50 dev:"+tavi));
  } else if (money<Amynga) {
    console.log(("1000 dev:"+mynga), ("500 dev:"+Tzuu), ("100 dev:"+zuu), ("50 dev:"+tavi));
  } else if (money<=1000) {
    console.log(("1000 dev:"+mynga), ("500 dev:"+Tzuu), ("50 dev:"+tavi));
  }
}
money(Amynga, Tmynga, mynga, Tzuu, zuu, tavi);