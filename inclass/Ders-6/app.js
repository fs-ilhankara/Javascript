// WHİLE

/* 
let i = 0;  //let i = 0, sum = 0;
let sum = 0;

while (i < 6 ) {
    sum += i;
    i++;
    console.log(i);
}   
console.log(`${sum}`); */


// DO WHİLE

/* let i = 6,
    sum = 0;

do {
    sum += i ;
} while (i < 5);
console.log(sum); */


// FOR Loops

/* let i = 4;
for(; i<8;){
    console.log("i: ", i);
    i++;
}

for (let i = 0; i < 8; i++){
    console.log({i});
} */


/* let counter =  0;
for (i = 1; i<=50; i++){
    counter += i;
}
console.log(counter); */


/* let brand = "Clarusway";
for (let i = 0, j = brand.length; i < brand.length; i++, j--) {
    console.log(i, brand[i], j,brand[j-1]);
}

0 "C" 9 "y"
1 "l" 8 "a"
2 "a" 7 "w"
3 "r" 6 "s"
4 "u" 5 "u"
5 "s" 4 "r"
6 "w" 3 "a"
7 "a" 2 "l"
8 "y" 1 "C" */


/* let bests = ["Clarusway", "Google", "Amazon", "Tesla"]

for(let i = 0 ; i < bests.length; i++){
    document.write("<h1>", i+1, " : ", bests[i], "</hr>");
} */


/* let i = 0;
while (i < 10) {    
    if(i % 3 !== 0){
        console.log(i);
}
    i++;
}


1
2
4
5
7
8

 */
/* let i = 0;
while (i < 10) {    
    if(i % 3 !== 0){
        console.log(i);
} if(i ===0) {
    console.log(i);
}
    i++;
}

0
1
2
4
5
7
8 */



/* let i = 0;
for (i = 0; i < 7; i++) {
    if(i===2 || i ===4) {
        continue;
    }
    console.log(i);
} */


/* let a = "Clarusway";
let newText ="";
for( i = 0; i < a.length; i++){
    console.log(a[a.length - (i+1)]);
    newText = newText + a[a.length - (i+1)]
}
console.log(newText); */



//çarpım tablosu

/* let a = 1;

for(i = 1; i < 11 ; i++){
    console.log(a ,"x", i, "=", (a*i));
    document.write(a ,"x", i, "=", (a*i),"<br/>")
}
 */


/* for(let i = 0; i < 11; i++){
    for(let j = 0; j < 11 ; j++)
    document.write(`${i} x ${j} = ${i*j}`,"<br/>")
} */


//liste sayılar toplamı


/* const number = [13, 34, 24, 67, 23, 90]
result  = 0;
for(let i = 0; i < number.length; i++){
    result = result + number[i]
}
console.log(result);
 */

//Faktoriyel

/* let a = 5;
let result = 1;

for(let i = 1; i <=a; i++){
    result = result * i;
}
console.log(result); */

/* 
let c = parseInt(prompt("Bir tam sayı giriniz:"))
let sonuc = 1;
for (let d = 1; d <= c; d++){
    sonuc = sonuc * d;
}
console.log(`Girdiğiniz ${c} sayısının faktöriyel değeri ${sonuc} sayısıdır`);
 */


//FizzBuzz challenge

/* for(let i = 1; i <= 100; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }else if(i % 5 === 0){
        console.log("buzz");
    }else if(i % 3 === 0) {
        console.log("fizz");
    }else{
        console.log(i);
    }
} */


