"use strict";
//class 
var Person = /** @class */ (function () {
    // firstName : string ; 
    // lastName : string ;
    // age : number ;
    function Person(fn, ln, age) {
        var _this = this;
        this.fn = fn;
        this.ln = ln;
        this.age = age;
        this.information = function () {
            return "this person is " + _this.fn + " " + _this.ln + " , he/she is " + _this.age + " years old ";
        };
    }
    return Person;
}());
var person1 = new Person("Farid", "Farahmand", 24);
var person2 = new Person("Rouzbeh", "Latifi", 24);
// const listOfPerson : Person[] = [] ;
// listOfPerson.push(person1,person2) ;
// console.log(listOfPerson);
// console.log('hi');
// const showPerson = () => {
//     console.log(person1.information()) ;
// }
// showPerson(); 
var showPersonInformation = function () {
    console.log(person1.ln + " is " + person1.age + " years old");
    // return person1.information()
};
console.log(showPersonInformation());
