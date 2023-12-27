
//gurvaljni (a b )  oruulahad S butsaah

// let a = 2;
// let b = 4;

// function talbai(n1,n2) {
//         console.log(a*b);
// }
// talbai(a, b);

// return

// let a = 2;
// let b = 4;

// function talbai(n1, n2) {
//         return n1*n2;
// }
// console.log(talbai(n1*n2));

// x2+5x+6

// let x = 4;
// let bodolt = x** + 5*x +6;
//  function bodlogo(x) {
//         return bodolt;
//  }
// bodlogo(x);



//PAGE-1
//.8107 Gurvaljin

// let a = 2;
// let b = 3;
// let c = 5;
// function bodolt(n1, n2, n3) {
//     return n1+n2+n3;
// }
// let hariu = bodolt(2, 3, 5);
// console.log(hariu);


//.8172 Kub

// kubiin ezelhuun ba guitsed talbain gadarguu ol
// kubiin ezelhuun,  guitsed gadarguun talbai 1 murund zaigtai hevlene
// kub 6tal, 12irmeg, 8 oroi

// let a = 2;
// let v = a**3;
// let S = (a**2)*6;
// function bodolt(v, S) {
//     return v+" "+S;
// }
// let hariu = bodolt (a**3, (a**2)*6);
// console.log(hariu);

//.8173 Tegsh untsugt

// // s, p ol
// let a = 6;
// let b = 4;
// let s = a*b;
// let p = (a+b)*2;
// function bodolt(s, p) {
//     return s+" "+p;
// }
// let hariu = bodolt((a*b), (a+b)*2);
// console.log(hariu);

//.8174 funkts-1

//y=3x-5

// let x = 7;
// let y = 3*x-5;
// function bodolt(y) {
//     return y;
// }
// let hariu = 3*x-5;
// console.log(hariu);

//.8176 funkts-2

// y=4*x**-3*x+5

// let x = -2;
// let y = 4*x**2-(3*x)+5;
// function bodolt(y) {
//     return y;
// }
// let hariu = 4*x**2-(3*x)+5;
// console.log(hariu);

// RGB7007- suuliin tsifr

// let num = 234;
// let lastNum = (num%10);
// function hariu(lastNum){
//     return lastNum;
// }
// console.log(lastNum);

//RGB7008 - aravtiin ornii digits

// let num = 423;
// let aravt = (num%100)/10;
// function bodolt(aravt) {
//     return aravt;
// }
// console.log(aravt);

//RGB7009 - 2orontoi too

// let a = "27";
// let b = a.split("");
// function multiply(num) {
//   return num[0] * num[num.length - 1];
// }
// multiply(b);
// console.log(multiply(b));

//RGB7010 - 3 orontoi too

// let a = "456";
// let b = a.split("");
// function plus(num) {
//   return Number(num[0]) + Number(num[1]) + Number(num[2]);
// }
// plus(b);
// console.log(plus(b));

//RGB7011 - minute second

// let sec = 132;
// let min = ~~(sec/60);
// let sec2 = sec-min*60;
// function transfer(time) {
//     console.log(min+" "+sec2);
// }
// transfer(min+" "+sec2);

//RGB7012 - tsag minute sec

// let sec = 3612;
// let min = ~~(sec/60);
// let tsag = ~~(sec/3600);
// let sec2 = sec%60;
// function minute () {
//     if (min === 60) {
//         console.log(tsag+" "+min+" "+sec2)
//     }
// }
// minute();

//RGB7013 - minute-sec->sec

let a = "3 4";
let min = a[0]*60;
let sec = a[2];
let result = min+sec;
function bodolt(result) {
    console.log(min+sec);
}
bodolt(result);

//RGB7014 - hour, min, sec->sec

// let a = "1 2 3";
// let hour = a[0];
// let min = a[2]*60;
// let sec = a[4];
// let result = hour+min+sec;
// function second(result) {
//     console.log(Number(a[1])+Number(a[2*60])+
// }