"use strict";
//for creating tsconfig.json , write this code in cmd : tsc --init 
var a = 10;
var b = 20;
var firstName = "Farid";
//and at this time whenever you write "tsc" it's run the type script on src folder 
//function 
var greet = function () {
    console.log("i am function");
};
greet();
var sum;
sum = function (a, b, c) {
    console.log("sum = " + (a + b) + " / and " + c);
};
sum(10, 20, "i am c");
// return something 
var mul = function (a, b) {
    return a * b;
};
console.log(mul(20, 30));
//object as parameter 
var getName;
getName = function (person1) {
    console.log(person1.name);
};
getName({ name: "farid", age: 24 });
