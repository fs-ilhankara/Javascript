/* const movements = [100, 300, -200, 500, -400, 225, 1000, -700];
// 1
// You deposited $xx
// You withdrew $xxx 

//  arrDeposits =
//  arrWithdraws =
// for each
//


var arrDeposits = []
var arrWithdraws = [];

for ( let i = 0; i< movements.length; i++) {
    if (movements[i] > 0) { 
        arrDeposits.push(movements[i])
        console.log(`you deposit $${movements[i]}`)
    }
    else {
        arrWithdraws.push(Math.abs(movements[i]))
        console.log(`you withdraw $${Math.abs(movements[i])}`)
    }
}

console.log("Deposits=> ", arrDeposits)
console.log("WithDraws=> ", arrWithdraws) */



// /******** */

// map initials
// const str = 'Clarusway Online Career IT Training School';

// const newstr = str.split(" ").map((n) => n[0]).join("")
// console.log(newstr)



// /***** */
// // map

/* const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'


var ans = str.split('').map(function(c){
  return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
}).join('')

console.log(ans) */


/* const str = 'The Quick Brown Fox'; // tHe YeLLoW fOx 
// Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
console.log(
    str
        .split('')
        .map((letter) =>
            UPPER.indexOf(letter) !== -1
                ? letter.toLowerCase()
                : letter.toUpperCase()
        )
        .join('')
); */





// // filter words longer than 6 letters
// const words = [
//   'spray',
//   'limit',
//   'elite',
//   'exuberant',
//   'destruction',
//   'present',
//   'Clarusway',
//   'Future',
// ];

// const new2 = words.filter(a => a.length > 6)
// console.log(new2);






// ----------------------------------------------
/* 
const cart = [
    {
      item: "🍫",
      price: 5,
      vat: 8,
    },
    {
      item: "🍌",
      price: 5,
      vat: 8,
    },
    {
      item: "🥐",
      price: 7,
      vat: 18,
    },
    {
      item: "🍰",
      price: 15,
      vat: 18,
    },
    {
      item: "🎂",
      price: 25,
      vat: 1,
    },
    {
      item: "🥧",
      price: 20,
      vat: 1,
    },
  ];
  // 1
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const element = cart[i];
    sum += element.price;
  }
  console.log(sum);
  // 2
  sum = 0;
  for (const el of cart) {
    sum += el.price;
  }
  console.log(sum);
  // 3
  sum = 0;
  cart.forEach((element) => {
    sum += element.price;
  });
  // 4
  const result = cart.map((item) => item.price).reduce((acc, curr) => acc + curr);
  console.log("result :>> ", result);
  
  // 5
  const re = cart.reduce((sum, curItem) => {
    return sum + curItem.price;
  }, 0);
  console.log("re :>> ", re);
  
  const vat = cart.reduce((sum, curItem) => {
    return sum + (curItem.price * curItem.vat) / 100;
  }, {});
  console.log("vat :>> ", vat); */