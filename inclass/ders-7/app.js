/* function hello() {
    console.log("Hello World");
}
hello() */
/* 
function sum(a,b) {
    console.log(a+b);
}

sum(1,2) */


/* function sum(a,b) {
    return (a+b);
}
let toplam = sum(12,3)
console.log("Result: ",toplam);
console.log(sum(12,4));
console.log(sum(13,50)+5); */

/* function addTwo(number) {
    return +number + 2; //+ ile gelen stringi number yapıyoruz.

}
console.log(addTwo("2")); */

/* 
isim("mahmut")

function isim(text = "New User") {
    console.log(`Hello  ${text}`);
}

isim("ali")
isim() //boş gönderilirse default değeri alıyor.  */


/* function sayHi(name) {
    console.log(`Hello ${name}`);
    name = "Ed"
    console.log(`Hello ${name}`);
}
let myName = "Mark";
sayHi(myName)
console.log("Outside function", myName);
 */


/* let student = {};
student.name = "Mark" */

// console.log(student);

/* function sayHi2(student) {
    console.log(`Hello ${student.name} entry point`);
    // console.log(student);
    
    student.name = "John";
    // student.name = "Johnny";
    console.log(`Hello ${student.name} first point`);
    
    // console.log(student);
    student = {name : "Leon"};
    console.log(`Hello ${student.name} inside function`);
    
    
    // console.log(student);
}
sayHi2(student)
console.log(`Hello ${student.name} outside function`);
// console.log(student); */


/* function div(num1, num2) {
    // console.log(num1/num2);
    if (num2 === 0) {
        console.log("Zero Division Error");
    }else{
        console.log(num1/num2);
    }
}
div(10,5) */

/* function div(num1, num2) {
    // console.log(num1/num2);
    if (num2 === 0) console.log("Zero Division Error");
    else console.log(num1/num2);
}
div(10,5) */

/* function div2(num1,num2) {
    return num2 === 0 ? "Zero Division Error" : num1 / num2
}
console.log(div2(18,3)); */


/* function sum(a,b,c, ...argA)  {
    // console.log(arguments);
    // console.log(arg);
    
    let total = 0;
    for (let i = 0; i < argA.length; i++) {
    total += argA[i];
        
    }

    {
    // console.log(arguments);
    // console.log(arg);
    
    let total = 0;
    for (let i = 0; i < arguments.length; i++) { // bu arguments ifadesi tüm değerleri kapsıyor.
    total += arguments[i];
        
    }
    return(total)

}
console.log(sum(1,2,3,4,5)); */


// ----Function Expression-------//

/* console.log(sayHi1());   // bunu yukarda çağırsakta yazar
function sayHi1() {
    return "Hello from sayHi1"
}
// console.log(sayHi1()); */



/* console.log(sayHi2());   // bunu yukarıda çağırsak yazmaz
var sayHi2 = function greet() {
    return "Hello from sayHi2"
}
// console.log(sayHi2());
// console.log(greet());  //isimle gelmez */



//recursive yapı örnek

/* const pascalNumber = function total (n) {
    // return(n*(n+1)/2)
    if(n===1) return 1;
    // if(n===0) return 0;// kendi eklediğim block n 0 olduğunda hata vermesin
    return n + total(n-1)
}
console.log(pascalNumber(4)); */



//------Immediaetly invoked function expression---//

/* let result =(function triangle(num){
    if(num === 1) return 1;
    return num + triangle(num-1);
    })(4);
console.log(result); */


/* let x = (function (n) {
    var sum = 0;
    while (n >=0) {
        sum +=n;
        n--;
    }
    console.log("result: ", sum);
})(4); */


//-----Arrow Function-----\\
/* 
function add100(a) {
    return a+ 100;
}

console.log(add100(1)); */

/* 
const arrow = (a) => {
    return a + 100 ;
}
console.log(arrow(2));
 */

/* 
const arrow = (a) => a + 100 ;

console.log(arrow(2)); */



/* const arrow = a => a + 100; 
console.log(arrow(2)); */

/* const user = "Mark"
const sayHi = (userFirstName = "New User") => `Welcome ${userFirstName}`
console.log(sayHi(user)); */


// Zero division Error\\

/* const div = (num1,num2) => num1 / num2;
console.log(div(18,0)); */

/* const div = (num1, num2) => {
    if (num2 === 0) {
        return "Zero Division"
    }
    return num1 / num2;
}
console.log(div(18,0)); */


/* const div = (num1, num2) => num2 === 0 ? "Zero Division Error!" : num1 / num2
console.log(div(18,0)); */

/* 
const calcArea = radius => 3.14 * radius**2;

console.log(calcArea(5)); */

// ---Thismethodu----\\
/* 
const cat = {
    name: "Muezza",
    age: 8,
    whatName() {
        return this.name
    }
};
console.log(cat.whatName()); */

// object return ederken \\
/* 
const car = () => {make :"Bmw"} // undefined

const car = () => ({make :"Bmw"})

console.log(car()); */

// Arrow function iief kullanımı\\
/* 
const iief = (num => num +5)(10);
console.log(iief); */

