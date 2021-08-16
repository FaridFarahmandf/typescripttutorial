"use strict";
//class 
var Person = /** @class */ (function () {
    function Person(fn, ln, age) {
        var _this = this;
        this.information = function () {
            return "this person is " + _this.firstName + " " + _this.lastName + " , he/she is " + _this.age + " years old ";
        };
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }
    return Person;
}());
var person1 = new Person("Farid", "Farahmand", 24);
var person2 = new Person("Rouzbeh", "Latifi", 24);
var listOfPerson = [];
listOfPerson.push(person1, person2);
console.log(listOfPerson);
console.log('hi');
var showPerson = function () {
    console.log(person1.information());
};
showPerson();
