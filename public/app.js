//interface
import { Basket } from "./classes/basket.js";
import { OnlineShop } from "./classes/online.js";
const person1 = {
    firstName: "Farid",
    lastName: "Farahmand",
    yearOfBirth: 1997,
    information: () => {
        return `he/she is ${person1.firstName} ${person1.lastName}`;
    },
    age: (year) => {
        const thisYear = new Date().getFullYear();
        return (thisYear - year);
    }
};
const person2 = {
    firstName: "Farnoosh",
    lastName: "Farahmand",
    yearOfBirth: 1992,
    information: () => {
        return `he/she is ${person1.firstName} ${person1.lastName}`;
    },
    age: (year) => {
        const thisYear = new Date().getFullYear();
        return (thisYear - year);
    }
};
console.log(person1.firstName + " " + person1.age(person1.yearOfBirth));
console.log(person2.firstName + " " + person2.age(person2.yearOfBirth));
const greetPerson = (person) => {
    console.log("HELLO " + person.firstName + " " + person.lastName);
};
greetPerson(person1);
greetPerson(person2);
const firstGrocery = {
    productName: "Mahdoos Milk",
    priceTag: 15000,
    expired: (date) => {
        return (new Date().getMonth() - date);
    }
};
console.log(firstGrocery.expired(3));
console.log(new Date());
//*************************************
let firstProduct;
let secondProduct;
firstProduct = new Basket("Kale Susage", 40000, 100);
secondProduct = new OnlineShop("Mihan Cream", 16000, 101);
console.log(firstProduct.finalPrice());
console.log(secondProduct.finalPrice());
