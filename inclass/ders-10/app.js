//Js DOM

// -----document.getElementBy...---\\

/* const myDom = document.getElementById('dom');  //documnet ile ekrandaki herhangibir şeyi alabiliriz.

console.log(myDom); */

/* const instructor = document.getElementById('info')

console.log(instructor); */
/* 
const ins = document.getElementById('instructor')
console.log(ins); */



// Classname  \\
/* 
const withClassName = document.getElementsByClassName('class-info')
console.log(withClassName[0]); */

// TagName \\
/* 
const cw = document.getElementsByTagName('h3');
console.log(cw); */

//----document.querySelector-----\\
// classları , idleri css de gibi yazabiliyoruz.

/* const inst = document.querySelector('.class-info') // Sayfada ilk bulduğunu yazar
console.log(inst);
 */

/* const inst = document.querySelectorAll('.class-info') // tüm hepsini yazar.
console.log(inst); */

/* console.log(document.querySelector('#instructor'));
console.log(document.querySelectorAll('#instructor'));
 */

// console.log(document.querySelectorAll('h3'));

// console.log(document.querySelector('#info h3'));


////////////////////////////////////////////////////////////////////////////////


//---Manipulation--\\

/* const brands = document.querySelector('#brands');
console.log(brands);

brands.innerHTML += '<li class="brand">NioyaTech</li>';

brands.innerHTML = brands.innerHTML + `<li class="brand">NioyaTech</li>`

const classBrands = document.querySelectorAll('.brand');
console.log(classBrands[3].innerText); */

/* const copyRight = document.querySelector('footer p');
console.log(copyRight);

// copyRight.innerText = '&copy; 2020 clarusway.com';  innerText dediğimiz için &copy; 2020 clarusway.com

// copyRight.innerHTML = '&copy; 2020 clarusway.com'; innerHTML dediğimizde ise kod gibi davranacak.
 */


/* const lessonList = [
    { id: 1, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 1, name: 'JS' },
    { id: 1, name: 'REACT' },
];

const lessonElm = document.getElementById("lessons")
lessonList.forEach(i => {
    lessonElm.innerHTML += `<li class="lessons-item">${i.name}</li>`
});
 */


//////////////////////////////////////////////////

//---setAttribute getAttribute-----\\

/* const mdn = document.querySelector('#mdn');
// console.log(mdn);

const mdnHrefAttr = mdn.getAttribute('href');
console.log(mdnHrefAttr);
mdn.setAttribute('href', 'https://www.w3schools.com/');
mdn.innerHTML = "W3Schools"; */


/* const color = document.querySelectorAll('#instructors li');
console.log(color);
color.forEach((i) => {
    if (i.innerText.includes('FrontEnd')) {
        i.setAttribute('class', 'front-end')
    }else if (i.innerText.includes('BackEnd')) {
        i.setAttribute('class', 'back-end')
    }
}); */


//Manuel ayarlama----\\

/* const jsPrg = document.querySelector('#js-prg');

// console.log(jsPrg);

jsPrg.style.color = 'green';
jsPrg.style.backgroundColor ='red';
jsPrg.style.fontSize = '3rem';
jsPrg.style.margin = '10px'
 */

/* const cwBanner = document.getElementById('cw-banner');
// console.log(cwBanner);
console.log(cwBanner.classList);
cwBanner.classList.add('imp');
cwBanner.classList.remove('banner'); */
/* 
const cwQuote = document.querySelector("#quote-div");
console.log(cwQuote);

cwElm = document.createElement("h2");
// console.log(cwElm);
cwElm.innerText = "Clarusway";
cwQuote.appendChild(cwElm); */





