// let myName = new String('Matthew');

// console.log('myName :>> ', myName);
// console.log('myName.length :>> ', myName.length);
// console.log('typeof myName :>> ', typeof myName);

// const a = function() {
//   return 'hello';
// }

// console.log('typeof a ==>', typeof a);
// console.log('a ==> ', a.prototype);


// /* const while = 42; */

// const student = {
//   x: 5,
//   y: 6,
//   ad: 'Matthew',
//   'Okul Adı': 'Saint Joseph',
// }

// student.dob = 2014;
// student['Baba Adi'] = 'Daniel'

// delete student.ad;

// console.log('student :>> ', student);
// console.log('okul adı :>> ', student['Okul Adı']);
// console.log('adı :>> ', student.ad);

// console.log(this)


/*---- protosuna ekleme ------ */
/* function Person(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // this.calcAge = function () {
    //     return new Date().getFullYear() - this.birthYear}
};
// Person.prototype = Person
Person.prototype.calcAge = function () {
    return new Date().getFullYear() - this.birthYear
};


const matthew = new Person('Matthew', 1980);
console.log('matthew :>> ', matthew.calcAge());
const mark = new Person("Mark",1979);
console.log('mark :>> ', mark.calcAge());


class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log('Bark bark');
    }
}

const karabas = new Dog('karabaş');
karabas.bark() */

/* ----Ek Örnek */

// Parent class
class Person {
    constructor(firstName, lastName, birthYear, employment = "") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.employment = employment;
    }
    selamla() {
        console.log(`Merhaba ${this.firstName} ${this.lastName}`);
    }
}

// child class
class Student extends Person {
    constructor(firstName, lastName, bY){
        console.log('intializing student object');
        super(firstName, lastName, bY, "Student");
        // this.employment = 'Student';
    }
    dersCalis() {
        console.log("Studying javascript..")
    }
}

// Teacher
class Teacher extends Person {}

let lutfullah = new Student("Lütfullah", "king", 1995);
lutfullah.selamla();
lutfullah.dersCalis();
let hakan = new Student();
hakan.selamla();
hakan.dersCalis();

