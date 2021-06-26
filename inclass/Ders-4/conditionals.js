// var a = "5";
// var b = "3"

// console.log(a + b); ---> 53

// var a = "12";
// var b = "3";
// console.log(a - b); ----> 9 type number

// let a = 100 + 50 * 3 ;
// console.log(a); ----> 250

// let y = false || 0 ;
// console.log(y);


// Example
// //.lenght stringin uzunluğu
// let password = "pass"

// console.log(password.length >= 5); //---> (4) false

//Nullish operator

// var b;

// let a = b ?? 3;             //null ve undefined ise herzaman 2. değeri 
//                             //eğer ilk değer null veya undefineddeğilse herzamn ilk değer
// console.log(a, typeof(b));


//------- IF - ELSE   YAPILARI --------

// let score = 50;

// if (score >=50) {
//     console.log("Congratulation");
// }

// if (score >80) {
//     console.log("Congrat");
// }else {20
//     console.log("Increase Works");
// }

//Ternary
// score > 80 ? console.log("Congrat") : console.log("Up Works");

// let score = 80;

/* let score = prompt("How much did you get in exam") //Notu kullanıcıdan al

if (score > 80) {
    console.log("Congrat");
}else if (score >= 50){
    console.log("Not Bad");
}else {
    console.log("Increase Work");
} */

/* let userName = prompt("Enter username")

userName ? console.log(`Hello ${userName}`) : console.log("Please Login"); */


// if    else     if     Ternary
/* score >= 80 ? console.log("Congrats...") : score >30 ? console.log("try harder") : console.log("try again"); */ 


// ------ Switch Statement --------

// var text ;
// var fruits = "orange"

// switch (fruits.toLowerCase()){
//     case "banana":
//         text = "Banana is good";
//         break;
//     case "orange" :
//         text = "I am not a fan of orange";
//         break;
//     case "apple":
//         text = "How you like them apples?";
//         break;
//     default:
//         text = "I have never heard of fruit....";
// }

// console.log(text);


// example

/* var day = prompt("Gün giriniz.")
var text;
day = day.toLowerCase()

switch (day) {
    case "pazartesi":
        text = "In class";
        break;
    case "perşembe":
        text = "In class";
        break;
    case "çarşamba":
        text = "In class";
        break;
    case "cumartesi":
        text = "In class";
        break;
    case "salı":
        text = "Workshop";
        break;
    case "cuma":
        text = "Teamwork";
        break;
    case "pazar":
        text = "Tatil"
    default :
        text = "Uygun girdi yapınız";
}
console.log(text);
 */
