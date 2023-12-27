//split =>

// const str = 'Arvan tavan targan tarvaga';
// const words = str.split(' '); //zai avbal ugeer zaigui bol usgeer 'array' hiine
// console.log(words);

// ['Arvan', 'tavan', 'targan', 'tarvaga']

//replace & replaceAll =>

// const = str.replaceAll("a", "e");
// usgiig uurchluh (jijig tom useg hamaatai)

//trim =>

//str.trim(text);
// stringiin ard, urd tald zai uusgene.
// trimStart - zuvhun urd
// trimStart - zuvhun ard

//concat =>

// let text1 = "hello";
// let text2 = "world";
// tfjvjkj
// songoson stringtei uur stringiig 1 string bolgon zalgah
// (uuni orond "+" asiglaval amar)

//toLowerCase & toUpperCase =>

// tom->jijig jijig->tom useg bolgono

//slice =>

// haanas-->haa hurtel tasdaj avhiig zaaj ugnu
// indexStart-->indexEnd iig tasdaj avahdaa indexEndiin utga orohgui
// "yuruul" --> const dada = str.slice(0, 3); --> "yur"
//             const dada = str.slice(3, length);---> "uul"

//bodlogo \/

// const fullName = "baldan dorj"; //"B.dorj" bolgo
// const firstName = fullName.split(" ")[0];
// const lastName = fullName.split(" ")[1];

// const firstLetterToUpperCase = (str) => {
//     return str.slice(0, 1).toUpperCase();
// };
// const firstNameToUpperCase = (str) => {
//     const firstStr = firstLetterToUpperCase(str);
//     const lastStr = str.slice(1, str.length);
//     return firstStr + lastStr;
// }
// const firstNameStr = firstLetterToUpperCase(firstName);
// console.log(
//   firstNameStr + "." + " " + firstNameToUpperCase(lastName)
// );
